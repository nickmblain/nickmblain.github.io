import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import('@/pages/index.vue'),
  },
  {
    path: "/index-two",
    name: "indexTwo",
    component: () => import('@/pages/index-two.vue'),
  },
  {
    path: "/index-three",
    name: "indexThree",
    component: () => import('@/pages/index-three.vue'),
  },
  {
    path: "/index-rtl",
    name: "indexrtl",
    component: () => import('@/pages/index-rtl.vue'),
  },
  {
    path: "/index-dark",
    name: "indexdark",
    component: () => import('@/pages/index-dark.vue'),
  },
 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;