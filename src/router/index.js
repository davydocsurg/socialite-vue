import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      // component: () => import("@/views/Login.vue"),
      component: Login,
      name: "login",
    },

    {
      path: "/register",
      // component: () => import("@/views/Login.vue"),
      component: Register,
      name: "register",
    },
  ],
});

export default router;
