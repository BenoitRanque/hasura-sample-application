<template>
  <q-btn
    color="primary"
    :disable="!isAuthenticated"
    :loading="fetching"
    label="Logout"
    icon-right="logout"
    @click="logout"
  ></q-btn>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { isAuthenticated, useLogout } from './state';

export default defineComponent({
  emits: ['success', 'error'],
  setup(props, { emit }) {
    const { logout, fetching } = useLogout({
      onSuccess: () => emit('success'),
      onError: (error) => emit('error', error),
    });
    return {
      isAuthenticated,
      logout,
      fetching,
    };
  },
});
</script>
