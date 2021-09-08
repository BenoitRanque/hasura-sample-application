import { boot } from 'quasar/wrappers';
import urql, {
  ClientOptions,
  debugExchange,
  dedupExchange,
  fetchExchange,
  errorExchange,
  makeOperation,
} from '@urql/vue';
import { authExchange } from '@urql/exchange-auth';
import { cacheExchange } from '@urql/exchange-graphcache';
import schema from '../../src-graphql/urql-introspected-schema';
import { auth, Auth, unsetAuth } from 'src/components/auth/state';
import { Ref, DeepReadonly } from 'vue';

export default boot(({ app }) => {
  const urqlOptions: ClientOptions = {
    url: 'http://localhost:8080/v1/graphql',
    exchanges: [
      debugExchange,
      dedupExchange,
      cacheExchange({
        schema,
        keys: {
          Auth: () => null,
          // user_role: () => null,
        },
      }),
      errorExchange({
        onError: (error) => {
          // should identify auth errors
          console.error('Logging error from urql error exchange: ', error);
        },
      }),
      // auth excchange handles session behavior. documentation:
      // https://formidable.com/open-source/urql/docs/advanced/authentication/
      authExchange<DeepReadonly<Ref<Auth | null>>>({
        getAuth: async ({ authState }) => {
          if (!authState) {
            return auth;
          }

          await unsetAuth();

          return authState;
        },
        addAuthToOperation: ({ operation, authState }) => {
          if (!authState || !authState.value) {
            return operation;
          }

          const fetchOptions =
            typeof operation.context.fetchOptions === 'function'
              ? operation.context.fetchOptions()
              : operation.context.fetchOptions || {};

          return makeOperation(operation.kind, operation, {
            ...operation.context,
            fetchOptions: {
              ...fetchOptions,
              headers: {
                ...fetchOptions.headers,
                Authorization: `Bearer ${authState.value.token}`,
              },
            },
          });
        },
        didAuthError: ({ error }) => {
          return error.graphQLErrors.some(
            (e) => e.extensions?.code === 'access-denied'
          );
        },
        // this is mostly useless for now
        // the main purpose of this function is to trigger a token refresh process
        // we don't have that now.
        // willAuthError: ({ authState, operation }) => {
        //   if (!authState || !authState.value) {
        //     const fetchOptions =
        //       typeof operation.context.fetchOptions === 'function'
        //         ? operation.context.fetchOptions()
        //         : operation.context.fetchOptions || {};

        //     if (fetchOptions.headers) {
        //       const headers = Object.entries(fetchOptions.headers) as [
        //         string,
        //         string
        //       ][];

        //       const roleHeader = headers.find(
        //         ([key]) => key === 'x-hasura-role'
        //       );

        //       const role = roleHeader ? roleHeader[1] : null;

        //       if (role && role !== Role.anonymous) {
        //         // any role besides anonymous will error if there is no session
        //         return true;
        //       }
        //     }
        //   }
        //   return false;
        // },
      }),
      fetchExchange,
    ],
    requestPolicy: 'cache-and-network',
    maskTypename: true,
  };

  app.use(urql, urqlOptions);
});
