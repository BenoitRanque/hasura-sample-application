import * as Types from '../../../src-graphql/graphql.d';

import gql from 'graphql-tag';
import * as Urql from '@urql/vue';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const UpdateUserByIdDocument = gql`
    mutation UpdateUserById($id: Int!, $update: user_set_input!) {
  update: update_user_by_pk(pk_columns: {id: $id}, _set: $update) {
    id
    username
    display_name
  }
}
    `;

export function useUpdateUserByIdMutation() {
  return Urql.useMutation<Types.UpdateUserByIdMutation, Types.UpdateUserByIdMutationVariables>(UpdateUserByIdDocument);
};
export const UpdateUserPasswordDocument = gql`
    mutation UpdateUserPassword($user_id: Int!, $session_id: Int!, $password: String!) {
  update: update_user_by_pk(
    pk_columns: {id: $user_id}
    _set: {password: $password}
  ) {
    id
    username
    display_name
  }
  delete_session(where: {user_id: {_eq: $user_id}, id: {_neq: $session_id}}) {
    affected_rows
  }
}
    `;

export function useUpdateUserPasswordMutation() {
  return Urql.useMutation<Types.UpdateUserPasswordMutation, Types.UpdateUserPasswordMutationVariables>(UpdateUserPasswordDocument);
};