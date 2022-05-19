<script>
  import { mapState } from "pinia";
  import More from "../BaseIcon/icons/more.vue";
  import Tick from "../BaseIcon/icons/tick.vue";
  import { useAuthStore } from "../../store/auth/index";

  export default {
    name: "ProfilePopup",
    components: {
      Tick,
      More,
    },
    data: function () {
      return {
        isMenuOpened: false,
      };
    },
    computed: {
      ...mapState(useAuthStore, ["authTweep", "profilePicsUrl", "logOut"]),
    },
    methods: {
      toggleMenu: function () {
        this.isMenuOpened = !this.isMenuOpened;
      },
      handleLogOut() {
        this.logOut();
        // this.$router.push("/login");
      },
    },
  };
</script>

<template>
  <div class="sidebar-profile-wrapper">
    <div
      class="sidebar-profile"
      @click="toggleMenu"
      v-if="this.authTweep !== null"
    >
      <div class="sidebar-profile-pic">
        <img :src="this.profilePicsUrl + this.authTweep.profile_picture" />
      </div>
      <div class="sidebar-profile-items">
        <div class="profile-info">
          <p>
            {{ this.authTweep.first_name + " " + this.authTweep.last_name }}
          </p>
          <p class="nickname">
            {{ this.authTweep.handle }}
          </p>
        </div>
        <div class="more">
          <More />
        </div>
      </div>
    </div>
    <div v-if="isMenuOpened" class="sidebar-profile-popup">
      <div class="popup-header">
        <div class="sidebar-profile-pic">
          <img :src="this.profilePicsUrl + this.authTweep.profile_picture" />
        </div>
        <div class="sidebar-profile-items">
          <div class="profile-info">
            <p>
              {{ this.authTweep.first_name + " " + this.authTweep.last_name }}
            </p>
            <p class="nickname">
              {{ this.authTweep.handle }}
            </p>
          </div>
          <div class="more">
            <Tick />
          </div>
        </div>
      </div>
      <hr class="popup-spacing" />
      <div class="popup-body">
        <div class="popup-body-item">
          <p>Add an existing account</p>
        </div>
        <hr class="popup-spacing" />
        <div class="popup-body-item" @click="handleLogOut">
          <p>
            Logout from <span>@{{ this.authTweep.handle }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
