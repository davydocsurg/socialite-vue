<script>
  import Sidebar from "../components/Sidebar/Left.vue";
  import Trends from "../components/Trends/Index.vue";
  // import SearchBar from "@/components/SearchBar";
  import BaseIcon from "../components/BaseIcon/Index.vue";
  import BackIcon from "../components/BaseIcon/icons/back.vue";
  // import TweetPopup from "@/components/TweetPopup";
  // import Lightbox from "@/components/Lightbox";
  // import { mapGetters } from 'vuex'

  export default {
    // name: "Layout",
    components: {
      Sidebar,
      // TweetPopup,
      BaseIcon,
      BackIcon,
      Trends,
      // SearchBar,
      // Lightbox,
    },
    // computed: {
    //   ...mapGetters([
    //     'getMe',
    //     'getTweetPopupState',
    //     'getProfileTweetCount',
    //     'getLightboxState',
    //     'getMobileMenuState'
    //   ])
    // }
  };
</script>

<template>
  <div class="layout">
    <div class="layout-sidebar">
      <div class="layout-sidebar-fixed-container">
        <!-- :class="{active: getMobileMenuState}" -->
        <sidebar />
      </div>
    </div>
    <div class="layout-flow">
      <div class="page-header">
        <div
          v-if="$route.path != '/'"
          class="back-button"
          @click="$router.push('/')"
        >
          <BackIcon />
        </div>
        <template v-if="$route.name == 'Profile'">
          <div class="profile-info">
            <h2>
              <!-- {{ getMe.profile.name }} -->
            </h2>
            <!-- <span>{{ getProfileTweetCount }} tweets</span> -->
          </div>
        </template>
        <template v-else>
          <h2>{{ $route.name }}</h2>
        </template>
      </div>
      <slot />
    </div>
    <!-- <SearchBar /> -->
    <div class="layout-for-you">
      <div class="layout-for-you-fixed">
        <Trends />
      </div>
    </div>
    <!-- <tweet-popup v-if="getTweetPopupState" /> -->
    <!-- <Lightbox
      v-if="getLightboxState.state"
      :images="getLightboxState.images"
    /> -->
    <div class="mobile-menu-toggler">
      <!-- @click="$store.commit('setMobileMenuState', !getMobileMenuState)" -->
      <BaseIcon icon="hamburger" />
    </div>
  </div>
</template>

<style>
  /* // @import '@/assets/theme/colors.scss'; */
  /* // @import '@/assets/variables.scss'; */
</style>
