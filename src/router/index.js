import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('@/pages/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
