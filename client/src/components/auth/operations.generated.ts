import * as Types from '../../../src-graphql/graphql.d';

import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const AuthLoginDocument = gql`
    mutation AuthLogin($username: String!, $password: String!) {
  auth: auth_login(username: $username, password: $password) {
    token
    session_id
    user_id
    username
    display_name
    roles
  }
}
    `;

export function useAuthLoginMutation() {
  return Urql.useMutation<Types.AuthLoginMutation, Types.AuthLoginMutationVariables>(AuthLoginDocument);
};
export const AuthLogoutDocument = gql`
    mutation AuthLogout {
  auth: auth_logout {
    user_id
    username
    display_name
    roles
  }
}
    `;

export function useAuthLogoutMutation() {
  return Urql.useMutation<Types.AuthLogoutMutation, Types.AuthLogoutMutationVariables>(AuthLogoutDocument);
};
export const AuthStateDocument = gql`
    query AuthState {
  auth {
    session_id
    display_name
    roles
  }
}
    `;

export function useAuthStateQuery(options: Omit<Urql.UseQueryArgs<never, Types.AuthStateQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<Types.AuthStateQuery>({ query: AuthStateDocument, ...options });
};