import { defineStore } from "pinia";

export const useUIStore = defineStore("UIStore", {
  state: () => {
    return {
      authRoutes: false,
    };
  },

  actions: {
    defAuthRoute() {
      console.log("here");
      this.authRoutes = true;
    },
    unDefAuthRoute() {
      console.log("there");
      this.authRoutes = false;
    },
  },
});
