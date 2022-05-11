<script setup>
  import { onMounted, onBeforeMount } from "vue";
  import { useAuthStore } from "./store/auth/index";
  import { useRoute } from "vue-router";
  import { computed } from "vue";

  const route = useRoute();

  let currentPath = computed(() => route.path.name);

  const auth = useAuthStore();
  //  return { auth };

  onMounted(() => {
    console.log(currentPath);
    // this.getAuthToken();
  });
</script>

<script>
  import Layout from "./views/Layout.vue";
  import { mapActions, mapState } from "pinia";
  // import Loading from "./components/Loading.vue";
  // import Notification from "./components/Notification.vue";

  // const Layout = require("./views/Layout.vue");

  export default {
    components: {
      Layout,
      // Loading,
      // Notification,
    },

    computed: {
      ...mapState(useAuthStore, ["authenticated"]),
    },

    methods: {
      ...mapActions(useAuthStore, ["getAuthToken", "getAuthUserDetails"]),

      fetchAuthTweep() {
        if (this.authenticated) {
          this.getAuthUserDetails();
        }
      },
      // checkRoutes() {
      //   if (this.$) {
      //   }
      // },
    },

    beforeMount() {
      this.getAuthToken();
    },

    mounted() {
      this.fetchAuthTweep();
      // console.log(this.$route);
    },
  };
</script>

<template>
  <!-- <router-view v-slot="{ Component, route }"> -->
  <!-- <router-view>
    <transition :name="this.$route.meta.transitionName" mode="out-in">
      <component :is="this.authenticated ? 'Layout' : 'div'">
        <component :is="Component" />
      </component>
    </transition>
  </router-view> -->

  <div class="" v-if="this.authenticated">
    <Layout />
  </div>
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
