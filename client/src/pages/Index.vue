<template>
  <q-page class="row items-center justify-evenly">
    <auth-login
      @success="handleLoginSuccess"
      @failure="handleLoginFailure"
      @error="handleLoginError"
    ></auth-login>
    <current-state></current-state>
    <auth-logout
      @success="handleLogoutSuccess"
      @error="handleLogoutError"
    ></auth-logout>
    <update-password></update-password>
  </q-page>
</template>

<script lang="ts">
import { CombinedError } from '@urql/core';
import AuthLogin from 'components/auth/Login.vue';
import AuthLogout from 'components/auth/Logout.vue';
import CurrentState from 'components/auth/CurrentState.vue';
import UpdatePassword from 'components/user/UpdatePassword.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    AuthLogin,
    AuthLogout,
    CurrentState,
    UpdatePassword,
  },
  setup() {
    function handleLoginSuccess() {
      console.log('login was successful');
    }
    function handleLoginFailure() {
      console.log('login failure');
    }
    function handleLoginError(error: CombinedError | undefined) {
      console.log('login error', error);
    }
    function handleLogoutSuccess() {
      console.log('logout was successful');
    }
    function handleLogoutError(error: CombinedError | undefined) {
      console.log('login error', error);
    }
    return {
      handleLoginSuccess,
      handleLoginFailure,
      handleLoginError,
      handleLogoutSuccess,
      handleLogoutError,
    };
  },
});
</script>
