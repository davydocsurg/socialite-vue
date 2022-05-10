<script>
  import Layout from "./views/Layout.vue";
  // import Loading from "./components/Loading.vue";
  // import Notification from "./components/Notification.vue";

  // const Layout = require("./views/Layout.vue");

  export default {
    data: () => {
      return {
        getAuthStatus: true,
      };
    },

    components: {
      Layout,
      // Loading,
      // Notification,
    },

    mounted() {
      console.log(this.$router);
    },
  };
</script>

<template>
  <!-- <router-view v-slot="{ Component, route }"> -->
  <!-- <component :is="getAuthStatus ? 'Layout' : 'div'">
    <router-view>
      <transition :name="$router.meta.transitionName" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </component> -->

  <!-- <Layout v-if="$route" />-->
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transitionName" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
  /* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
