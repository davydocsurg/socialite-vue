import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import Home from "../components/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: { name: "login" },
    },

    {
      path: "/login",
      // component: () => import("@/views/Login.vue"),
      component: Login,
      name: "login",
      meta: { transitionName: "slide", hideSidebars: true, guestOnly: true },
    },

    {
      path: "/register",
      component: Register,
      name: "register",
      meta: { transitionName: "slide", hideSidebars: true, guestOnly: true },
    },
    // protected routes

    {
      path: "/home",
      component: Home,
      name: "home",
      meta: { transitionName: "fade", authUsersOnly: true },
    },
  ],
});

const isAuthenticated = () => {
  return localStorage.getItem("user-token");
};

router.beforeEach((to, from, next) => {
  if (
    // make sure the user is authenticated
    !isAuthenticated() &&
    // ❗️ Avoid an infinite redirect
    to.name !== "login"
  ) {
    console.log("auth.......");
    // redirect the user to the login page
    next({ name: "login" });
  }

  // document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  next();
});

export default router;
