import { createRouter, createWebHistory } from "vue-router";
import Login from "../components/auth/Login.vue";
import Register from "../components/auth/Register.vue";
import Home from "../views/Home.vue";
import { useAuthStore } from "../store/auth/index";

const authGuard = (to, from, next) => {
  if (isLo) {
    next(from);
  } else {
    next();
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: { name: "Login" },
    },

    {
      path: "/login",
      // component: () => import("@/views/Login.vue"),
      component: Login,
      name: "Login",
      meta: { transitionName: "slide", hideSidebars: true, guestOnly: true },
      // beforeEnter: authGuard,
    },

    {
      path: "/register",
      component: Register,
      name: "Register",
      meta: { transitionName: "slide", hideSidebars: true, guestOnly: true },
      // beforeEnter: authGuard,
    },

    // protected routes
    {
      path: "/home",
      component: Home,
      name: "Home",
      meta: { transitionName: "fade", authUsersOnly: true },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const isLo = localStorage.getItem("user-token");
  const publicRoutes = ["/login", "/register"];
  const authRequired = publicRoutes.includes(to.path);
  const auth = useAuthStore();

  if (
    // make sure the user is authenticated
    auth.authenticated &&
    // ❗️ Avoid an infinite redirect
    authRequired
  ) {
    // redirect the user to the login page
    next({ name: "Home" });
  } else if (!auth.authenticated && !authRequired) {
    next({ name: "Login" });
  } else {
    next();
    // console.log(auth.authenticated);
  }

  // console.log(from.path, to.path);
  // if (authRequired) {
  //   console.log(from.path, to.path, "!auth");
  // }

  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
});

export default router;
