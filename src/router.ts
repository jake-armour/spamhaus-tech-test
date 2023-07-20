import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  // RouteLocationNormalizedLoaded,
} from "vue-router";

import Users from "@/pages/users/Index.vue";
import CreateUser from "@/pages/users/create/Index.vue";
import EditUser from "@/pages/users/edit/Index.vue";
import Countries from "@/pages/countries/Index.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/users" },
  { path: "/users", component: Users },
  { path: "/users/create", component: CreateUser },
  {
    path: "/users/:user",
    component: EditUser,
    props: (route: { params: { user: string } }) => ({
      user: route.params.user,
    }),
  },
  { path: "/countries", component: Countries },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
