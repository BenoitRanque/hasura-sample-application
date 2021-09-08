<template>
  <q-form class="q-pa-md" @submit="login()" autofocus>
    <div class="q-gutter-md">
      <q-input dense outlined label="Usuario" v-model="username"></q-input>
      <q-input
        dense
        outlined
        label="Contraseña"
        type="password"
        v-model="password"
      ></q-input>
      <div class="text-center">
        <q-btn
          color="primary"
          type="submit"
          :disable="isAuthenticated"
          :loading="fetching"
          label="Login"
          icon-right="login"
        />
      </div>
    </div>
  </q-form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { isAuthenticated, useLogin } from './state';

export default defineComponent({
  name: 'Login',
  emits: ['success', 'error', 'failure'],
  setup(props, { emit }) {
    const { username, password, login, fetching } = useLogin({
      onSuccess: () => emit('success'),
      onFailure: () => emit('failure'),
      onError: (error) => emit('error', error),
    });

    return { username, password, login, fetching, isAuthenticated };
  },
});
</script>
