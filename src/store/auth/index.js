import { defineStore } from "pinia";
import { AuthDetailsService } from "../../services/AuthService";

export const useAuthStore = defineStore("authStore", {
  state: () => {
    return {
      authTweep: null,
      profilePicsUrl: "http://localhost:8000/profile/photos/",
      authenticated: false,
      loading: false,
      // tweets: [],
      // tweets: [],
      // tweetDetails: [],
      errors: {},
    };
  },

  // beforeMount() {

  // },

  getters: {
    authStatus(state) {
      return state.authenticated;
    },
  },

  actions: {
    getAuthToken() {
      const token = localStorage.getItem("user-token");
      if (token) {
        this.authenticated = true;
        console.log(this.authenticated);
      }
    },

    async getAuthUserDetails() {
      const res = await AuthDetailsService();

      try {
        if (res.data.status == 400 && res.data.success === false) {
          this.errors = res.data.message;
          console.warn(this.errors);
          // this.$toast.error("Oops! Something went wrong");
        } else if (res.data.status == 200 && res.data.success === true) {
          this.authTweep = res.data.credentials;
          // commit("authTweep", res.data);
          console.log(this.authTweep);
          console.log(res.data);
          // this.$toast.success("Registration was successful!");
          // setTimeout(() => {
          //   this.$router.push("/login");
          // }, 1800);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
});
