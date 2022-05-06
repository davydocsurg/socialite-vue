import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/auth/Login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/slogin",
      // component: () => import("@/views/Login.vue"),
      component: Login,
      name: "login",
    },
  ],
});

export default router;
