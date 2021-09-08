<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>
        <q-btn
          round
          dense
          flat
          icon="account_circle"
          :disable="!isAuthenticated"
        >
          <q-menu>
            <q-list dense>
              <q-item clickable to="">
                <q-item-section side>
                  <q-icon name="account_box"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Cuenta</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator></q-separator>
              <q-item clickable :disable="fetching" @click="logout">
                <q-item-section side>
                  <q-icon name="logout"></q-icon>
                </q-item-section>
                <q-item-section>
                  <q-item-label>Cerrar Session</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
        <q-btn
          :disable="!isAuthenticated || fetching"
          round
          dense
          flat
          icon="logout"
          @click="logout"
        ></q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Main Menu</q-item-label>
        <q-item to="/login">
          <q-item-section> Login </q-item-section>
        </q-item>
        <q-item to="/account">
          <q-item-section> Account </q-item-section>
        </q-item>
        <q-item to="/table">
          <q-item-section> Table </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useLogout, isAuthenticated } from 'components/auth/state';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar';
export default defineComponent({
  name: 'MainLayout',
  components: {},
  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    const quasar = useQuasar();
    const { fetching, logout } = useLogout({
      onSuccess: async () => {
        quasar.notify({ type: 'positive', message: 'logout sucessful' });
        await router.push('/login');
      },
    });

    return {
      fetching,
      logout,
      leftDrawerOpen,
      isAuthenticated,
      toggleLeftDrawer: () => (leftDrawerOpen.value = !leftDrawerOpen.value),
    };
  },
});
</script>
