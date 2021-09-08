import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'account', component: () => import('pages/Account.vue') },
      { path: 'table', component: () => import('pages/Table.vue') },
    ],
  },
  {
    path: '/',
    component: () => import('layouts/UnauthenticatedLayout.vue'),
    children: [{ path: 'login', component: () => import('pages/Login.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue'),
  },
];

export default routes;
