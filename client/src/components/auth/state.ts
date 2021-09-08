// share session across windows. maybe store in rust?
// storing in rust memory would be better
// localstorage would mean only one session across multiple application instances
// js memory would mean multiple windows in the same instance would all need to login = bad

import { ref, Ref, computed, ComputedRef, readonly } from 'vue';
import { CombinedError, OperationContext } from '@urql/vue';
import { invoke } from '@tauri-apps/api/tauri';
import { listen } from '@tauri-apps/api/event';
import {
  useAuthLoginMutation,
  useAuthLogoutMutation,
} from './operations.generated';

export interface Auth {
  token: string;
  user_id: number;
  session_id: number;
  username: string;
  display_name: string;
  roles: string[];
}
/**
 * A list of valid roles. Used to restrict access to functionality or data
 * Not all roles are user-asignable
 */
export const enum Role {
  /** default role for unauthenticated requests, can also be used in authenticated requests */
  anonymous = 'anonymous',
  /** default role for authenticated requests */
  authenticated = 'authenticated',
  /** admin role grants all permissions without any restrictions. Should not be used except for testing and development */
  admin = 'admin',
}

/** Internal auth state. Not exported to prevent unintended alteration */
const internalAuth: Ref<Auth | null> = ref(null);
export async function setup(): Promise<Auth | null> {
  await listen('auth_state_set', (event) => {
    internalAuth.value = event.payload as Auth;
  });
  await listen('auth_state_unset', () => {
    internalAuth.value = null;
  });

  internalAuth.value = await invoke('get_auth_state');

  return internalAuth.value;
}
/** Readonly reference to the auth state */
export const auth = readonly(internalAuth);
/** Auth should only be set using this function */
export async function setAuth(auth: Auth) {
  await invoke('set_auth_state', { auth });
  internalAuth.value = auth;
}
/** Auth should only be unset using this function */
export async function unsetAuth() {
  await invoke('unset_auth_state');
  internalAuth.value = null;
}
/** Wether the user is currently authenticated */
export const isAuthenticated: ComputedRef<boolean> = computed(
  () => !!auth.value
);
/**
 * List of roles the user is currently authorized for
 * Defaults to `anonymous` role, add `authenticated` role if user authenticated, plus any roles the user was assigned
 */
const authorizedRoles: ComputedRef<Role[]> = computed(() => {
  const authorizedRoles = [Role.anonymous];

  if (auth.value) {
    authorizedRoles.push(Role.authenticated);
    authorizedRoles.push(...(auth.value.roles as Role[]));
  }

  return authorizedRoles;
});
/**
 * Utility to determine if the user is authorized for any of the roles passed
 * If reactivity is needed, consider using useIsAuthorized which returns a computed ref to the result of this function
 * @param roles string or array of string role values
 * @returns true if the user is authorized for any of the roles
 */
export function isAuthorized(role: Role | Role[]): boolean {
  return Array.isArray(role)
    ? authorizedRoles.value.some((authorizedRole) =>
        role.includes(authorizedRole)
      )
    : authorizedRoles.value.includes(role);
}
/**
 * Utility function to determine if the user is authorized for any of the roles passed
 * Returns a computed ref to the result of isAuthorized
 * @param role string or array of string role values
 * @returns the inner value is true if the user is authorized for any of the roles passed
 */
export function useIsAuthorized(role: Role | Role[]): ComputedRef<boolean> {
  return computed(() => isAuthorized(role));
}
/**
 * Utility to add `x-hasura-role` header to urql requests
 * This is necessary to use roles other than the default roles
 * This function will error if the user is not authorized for any of the roles requested.
 * Use the `isAuthorized` utilty to prevent the user from taking unauthorized action
 * @param role string or array of string role values
 * @returns a valid urql context which can be passed to useQuery and useMutation functions
 */
export function restrictOperationByRole(
  role: Role | Role[] = Role.authenticated
): Partial<OperationContext> {
  return {
    fetchOptions: () => {
      const authorizedRole = Array.isArray(role)
        ? authorizedRoles.value.find((authorizedRole) =>
            role.includes(authorizedRole)
          )
        : authorizedRoles.value.includes(role) && role;

      if (!authorizedRole) {
        throw new Error(
          `UNAUTHORIZED: user does not have any of these roles: ${
            Array.isArray(role) ? role.join(', ') : role
          }. To prevent this, restrict user functionality with isAuthorized.`
        );
      }
      return {
        headers: {
          'x-hasura-role': authorizedRole,
        },
      };
    },
  };
}

/**
 * determine if the error was an authentication failure
 * this means the user supplied invalid credentials, or has been disabled/deleted.
 * this contrasts with errors that may be due to network failure
 */
function isAuthFailure(error: CombinedError | undefined): boolean {
  return (
    error?.graphQLErrors.some(
      (e) => e.extensions?.code === 'INVALID_CREDENTIALS'
    ) || false
  );
}

/**
 * Login action. used to authenticate, and, if succcessful, set the app auth state
 * provides username and password refs that can be used as models for input elements
 * the login should not be executed if the user is already authenticated
 * @param username string ref to username
 * @param password string ref to password
 * @param onSuccess runs if the login mutation was successful, after setting the app auth state
 * @param onFailure runs if authentication failed. causes may include invalid credentials, or the used being disabled or deleted
 * @param onError runs on all other errors, such as network errors. Receives the error as first parameter
 * @returns login function, username ref, password ref, and useMutation payload (minus `executeMutation`)
 */
export function useLogin({
  username = ref(''),
  password = ref(''),
  onSuccess = () => undefined,
  onFailure = () => undefined,
  onError = console.error,
}: {
  username?: Ref<string>;
  password?: Ref<string>;
  onSuccess?: (auth: Auth) => void;
  onFailure?: () => void;
  onError?: (error: CombinedError) => void;
} = {}) {
  const { executeMutation, ...rest } = useAuthLoginMutation();

  async function login() {
    const { data, error } = await executeMutation(
      {
        username: username.value,
        password: password.value,
      },
      restrictOperationByRole(Role.anonymous)
    );

    if (data?.auth) {
      await setAuth(data.auth);
      onSuccess(data.auth);
    } else if (isAuthFailure(error)) {
      onFailure();
    } else if (error) {
      onError(error);
    } else {
      throw new Error(
        'UNEXPECTED: login mutation should error or return a valid auth payload'
      );
    }
  }

  return {
    login,
    username,
    password,
    ...rest,
  };
}
/**
 * Logout Action. Used to unset the app auth state
 * the logout function should not be executed if the user is not authenticated.
 * @param onSuccess runs if the logout mutation was successful, after unsetting the app auth state
 * @param onError runs if the mutation encountered an error. Receives the error as first parameter
 * @returns logout function, and useMutation payload (minus `executeMutation`)
 */
export function useLogout({
  onSuccess = () => undefined,
  onError = console.error,
}: {
  onSuccess?: () => void;
  onError?: (error: CombinedError) => void;
} = {}) {
  const { executeMutation, ...rest } = useAuthLogoutMutation();

  async function logout() {
    const { error } = await executeMutation(
      {},
      restrictOperationByRole(Role.authenticated)
    );

    if (!error) {
      await unsetAuth();
      onSuccess();
    } else {
      onError(error);
    }
  }

  return { logout, ...rest };
}
