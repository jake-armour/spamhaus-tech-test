import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  // RouteLocationNormalizedLoaded,
} from "vue-router";

import Users from "@/pages/users/Index.vue";
import Countries from "@/pages/countries/Index.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/users" },
  { path: "/users", component: Users },
  { path: "/countries", component: Countries },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
