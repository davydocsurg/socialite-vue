<script>
  import Sidebar from "../components/Sidebar/Left.vue";
  import Trends from "../components/Trends/Index.vue";
  // import SearchBar from "@/components/SearchBar";
  import BaseIcon from "../components/BaseIcon/Index.vue";
  import BackIcon from "../components/BaseIcon/icons/back.vue";
  // import TweetPopup from "../components/tweets/TweetPopup";
  import ImageViewer from "../components/tweets/ImageViewer.vue";
  import { mapState, mapActions } from "pinia";
  import { useTweetsStore } from "../store/tweets/index";

  export default {
    // name: "Layout",
    components: {
      Sidebar,
      // TweetPopup,
      BaseIcon,
      BackIcon,
      Trends,
      // SearchBar,
      ImageViewer,
    },
    computed: {
      ...mapState(useTweetsStore, ["openImg"]),
    },

    methods: {
      ...mapActions(useTweetsStore, ["openImgViewer"]),

      hello() {
        console.log("hello");
      },
    },
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
    <div class="" v-if="this.openImg">
      <ImageViewer @zoomTweetImg="hello" />
    </div>
    <!-- <tweet-popup v-if="getTweetPopupState" /> -->
    <!-- v-if="getLightboxState.state"
      :images="getLightboxState.images" -->
    <div class="mobile-menu-toggler">
      <!-- @click="$store.commit('setMobileMenuState', !getMobileMenuState)" -->
      <BaseIcon icon="hamburger" />
    </div>
  </div>
</template>
