<script>
  import SidebarItem from "../Sidebar/Item.vue";
  import { ROUTES } from "../Sidebar/constants.js";
  import BaseIcon from "../BaseIcon/Index.vue";
  import TwitterIcon from "../BaseIcon/icons/twitter.vue";
  import HomeIcon from "../BaseIcon/icons/home.vue";
  import ProfileIcon from "../BaseIcon/icons/profile.vue";
  import NotificationsIcon from "../BaseIcon/icons/notifications.vue";
  import ExploreIcon from "../BaseIcon/icons/explore.vue";
  import ProfilePopup from "../Sidebar/ProfilePopUp.vue";
  import MoreMenu from "../Sidebar/MoreMenu.vue";

  export default {
    name: "Sidebar",
    components: {
      SidebarItem,
      BaseIcon,
      TwitterIcon,
      HomeIcon,
      ProfileIcon,
      ExploreIcon,
      NotificationsIcon,
      MoreMenu,
      ProfilePopup,
    },

    data: () => {
      return {
        ROUTES,
        isMenuOpened: false,
      };
    },

    methods: {
      toggleMenu: function () {
        this.isMenuOpened = !this.isMenuOpened;
      },
    },
  };
</script>

<template>
  <aside>
    <div class="sidebar-nav">
      <div class="sidebar-logo">
        <router-link to="/">
          <!-- <BaseIcon icon="twitter" /> -->
          <TwitterIcon />
        </router-link>
      </div>
      <!-- <div class="" v-for="(route, i) in ROUTES" :key="i"> -->
      <div class="sidebar-item">
        <div class="sidebar-item-logo">
          <HomeIcon />
        </div>
        <div class="sidebar-item-content">Home</div>
      </div>
      <br />
      <br />
      <div class="sidebar-item">
        <div class="sidebar-item-logo">
          <ExploreIcon />
        </div>
        <div class="sidebar-item-content">Explore</div>
      </div>
      <br />
      <br />

      <div class="sidebar-item">
        <div class="sidebar-item-logo">
          <NotificationsIcon />
        </div>
        <div class="sidebar-item-content">Notification</div>
      </div>
      <br />
      <br />

      <div class="sidebar-item">
        <div class="sidebar-item-logo">
          <ProfileIcon />
        </div>
        <div class="sidebar-item-content">Profile</div>
      </div>
      <!-- </div> -->

      <!-- icon="twitter" -->
      <!-- <SidebarItem
        v-for="(route, i) in ROUTES"
        :key="i"
        :icon="route.name.toLowerCase()"
        :to="route.path"
        :required="route.req"
      >
        {{ route.name }}
      </SidebarItem>
      <SidebarItem icon="profile" required> Profile </SidebarItem>
      <SidebarItem icon="more" @click="toggleMenu">
        More
        <MoreMenu v-if="isMenuOpened" />
      </SidebarItem> -->
      <div class="sidebar-tweet-button">
        <!-- @click="$store.commit('toggleTweetButton')" -->
        <!-- :to="`/${me.username}`" -->
        Tweet
      </div>
    </div>
    <ProfilePopup />
    <div class="mobile-close-menu-button">
      <!-- @click="$store.commit('setMobileMenuState', false)" -->
      <div class="icon">
        <!-- <BaseIcon icon="left" /> -->
      </div>
      <span>Close</span>
    </div>
  </aside>
</template>

<style lang="scss">
  // @import "@/assets/theme/colors.scss";
  // @import "@/assets/variables.scss";

  // aside {
  //   position: relative;
  //   width: 100%;
  //   min-height: 100vh;
  //   display: flex;
  //   flex-direction: column;
  //   justify-content: space-between;
  //   .sidebar {
  //     &-nav {
  //       position: relative;
  //     }
  //     height: 100%;
  //     &-logo {
  //       width: 50px;
  //       height: 50px;
  //       padding: 10px;
  //       border-radius: 999px;
  //       transition: 200ms ease-in-out;
  //       svg {
  //         display: block;
  //         width: 100%;
  //         fill: #fff;
  //       }
  //       &:hover {
  //         background-color: rgba($color: $color-blue, $alpha: 0.2);
  //         svg {
  //           fill: #fff;
  //         }
  //       }
  //     }
  //     &-tweet-button {
  //       width: 80%;
  //       text-align: center;
  //       padding: 1rem 0;
  //       cursor: pointer;
  //       background-color: $color-blue;
  //       color: #fff;
  //       font-weight: bold;
  //       font-size: 1.2rem;
  //       border-radius: 999px;
  //       margin-top: 20px;
  //     }
  //   }
  //   .mobile-close-menu-button {
  //     display: none;
  //   }
  // }

  // @media screen and (max-width: $phone) {
  //   aside {
  //     .mobile-close-menu-button {
  //       position: absolute;
  //       right: 10px;
  //       top: 10px;
  //       display: flex;
  //       align-items: center;
  //       padding: 6px;
  //       border-radius: 999px;
  //       background-color: $color-blue;
  //       .icon {
  //         width: 1.2rem;
  //         height: 1.2rem;
  //         svg {
  //           fill: #fff;
  //           width: 100%;
  //           height: 100%;
  //         }
  //       }
  //       span {
  //         color: #fff;
  //         font-weight: bold;
  //         margin-left: 8px;
  //       }
  //     }
  //   }
  // }
</style>
