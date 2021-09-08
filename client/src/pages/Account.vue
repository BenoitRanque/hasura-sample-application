<template>
  <q-page class="row items-center justify-evenly">
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
  </q-page>
</template>

<script lang="ts">
import { isAuthenticated, useLogin } from 'components/auth/state';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
export default defineComponent({
  name: 'PageIndex',
  setup() {
    const quasar = useQuasar();
    const router = useRouter();
    const { username, password, login, fetching } = useLogin({
      onSuccess: async () => {
        quasar.notify({
          type: 'positive',
          message: 'Login successful',
        });
        await router.push('/');
      },
      onFailure: () =>
        quasar.notify({
          type: 'warning',
          message: 'Login failure. Try again',
        }),
      onError: (error) =>
        quasar.notify({
          type: 'negative',
          message: `Login error: ${error.toString()}`,
        }),
    });

    return { username, password, login, fetching, isAuthenticated };
  },
});
</script>
