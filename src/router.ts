import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  // RouteLocationNormalizedLoaded,
} from "vue-router";

import Users from "@/pages/users/Index.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/users" },
  { path: "/users", component: Users },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
