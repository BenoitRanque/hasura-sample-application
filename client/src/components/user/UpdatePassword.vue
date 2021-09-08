<template>
  <q-form @submit="submit" @reset="reset">
    <q-input
      v-model="passwordA"
      outlined
      dense
      type="password"
      :rules="[
        (value) =>
          value.length > 3 || 'Passwords must be longer than 3 characters',
      ]"
    ></q-input>
    <q-input
      v-model="passwordB"
      outlined
      dense
      type="password"
      :rules="[(value) => value === passwordA || 'Passwords must be equal']"
    ></q-input>
    <q-btn type="submit" color="primary" :disable="!isAuthenticated">
      update password
    </q-btn>
    <q-btn type="reset" flat> reset </q-btn>
  </q-form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useUpdateUserPasswordMutation } from './operations.generated';
import {
  auth,
  restrictOperationByRole,
  Role,
  isAuthenticated,
} from '../auth/state';
export default defineComponent({
  setup() {
    const { fetching, executeMutation } = useUpdateUserPasswordMutation();
    const passwordA = ref('');
    const passwordB = ref('');

    async function submit() {
      if (!auth.value)
        throw new Error('Cannot update user password without a valid session');
      await executeMutation(
        {
          user_id: auth.value?.user_id,
          session_id: auth.value?.user_id,
          password: passwordA.value,
        },
        restrictOperationByRole(Role.authenticated)
      );
    }
    function reset() {
      passwordA.value = '';
      passwordB.value = '';
    }

    return {
      isAuthenticated,
      passwordA,
      passwordB,
      fetching,
      submit,
      reset,
    };
  },
});
</script>
