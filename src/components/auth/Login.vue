<script>
  import FormError from "../../utils/FormError.vue";
  import { SignInService } from "../../services/AuthService";
  import { mapActions, mapState } from "pinia";
  import { useAuthStore } from "../../store/auth/index";

  export default {
    data: () => ({
      form: {
        login: "",
        password: "",
      },
      errors: {},
    }),

    computed: {
      ...mapState(useAuthStore, ["authenticated"]),
    },

    components: {
      FormError,
    },

    methods: {
      ...mapActions(useAuthStore, ["getAuthToken", "getAuthUserDetails"]),
      async login() {
        const res = await SignInService(this.form);

        try {
          if (res.data.status == 400 && res.data.success === false) {
            console.log(res.data);
            this.errors = res.data.message;
            this.$toast.error("Oops! Something went wrong");
          } else if (res.data.status == 200 && res.data.success === true) {
            // console.log(res.data);
            this.setAuthToken(res.data.access_token);
            this.$toast.success("Logged in successfully!");
            this.getAuthToken();
            console.log(this.authenticated);
            setTimeout(() => {
              this.$router.push("/home");
            }, 1800);
          }
        } catch (error) {
          console.error(error);
        }
      },

      setAuthToken(token) {
        const authToken = `Bearer ${token}`;
        localStorage.setItem("user-token", authToken);
        // axios.defaults.headers.common["Authorization"] = authToken;
      },

      clearError() {
        this.errors = {};
      },
    },
  };
</script>

<template>
  <div class="mt-10">
    <h4 class="w-full text-4xl font-medium text-center text-white">Log In</h4>
    <div
      class="flex flex-col items-center justify-between w-full px-10 pt-2 pb-20 lg:pt-2 lg:flex-col"
    >
      <div class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
        <div
          class="relative z-10 flex flex-col items-start justify-start p-10 bg-gray-200 shadow-2xl rounded-xl"
        >
          <!-- @keydown="form.onKeydown($event)" -->
          <form
            method="POST"
            @submit.prevent="login"
            class="relative w-full mt-6 space-y-8"
          >
            <div class="relative">
              <label
                class="absolute px-2 ml-2 -mt-3 font-medium text-dark bg-gray-200"
              >
                Email or Handle
              </label>

              <input
                id="login"
                v-model="form.login"
                type="text"
                @keydown="clearError"
                name="login"
                class="block w-full text-dark px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />

              <span v-if="this.errors.login">
                <FormError :errorMsg="this.errors.login[0]" />
              </span>
            </div>

            <div class="relative">
              <label
                for="password"
                class="absolute px-2 ml-2 -mt-3 font-medium text-dark bg-gray-200"
                >Password
              </label>
              <input
                id="password"
                v-model="form.password"
                type="password"
                @keydown="clearError"
                name="password"
                class="block w-full text-dark px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />

              <span v-if="this.errors.password">
                <FormError :errorMsg="this.errors.password[0]" />
              </span>
            </div>

            <!-- <div class="relative">
              <a href="#" class="text-gray-800"> Forgot password? </a>
            </div> -->

            <button
              type="submit"
              class="px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </button>

            <div class="relative text-gray-800">
              Don't have an account?
              <router-link
                to="/register"
                class="text-indigo-700 hover:text-indigo-800 font-medium"
              >
                Register
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
