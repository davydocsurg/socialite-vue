<script>
  import FormError from "../../utils/FormError.vue";
  import { SignUpService } from "../../services/AuthService";

  export default {
    data: () => ({
      form: {
        first_name: "",
        last_name: "",
        email: "",
        handle: "",
        password: "",
        confirm_password: "",
      },

      errors: {},
    }),

    components: {
      FormError,
    },

    methods: {
      async register() {
        // const response = await this.form.post("localhost:8000/api/signup");
        // ...
        console.log("signin");

        try {
          const res = await SignUpService();

          if (res.data.status == 400 && res.data.success === false) {
            console.log(res.data);
            this.errors = res.data.message;
          } else if (res.data.status == 200 && res.data.success === true) {
            setTimeout(() => {
              // this.$route.
              router.push("/login");
            }, 1800);
          }
        } catch (error) {}
      },

      clearError() {
        this.errors = {};
      },
    },
  };
</script>

<template>
  <div class="mt-10">
    <h4 class="w-full text-4xl font-medium text-center text-white">Register</h4>
    <div
      class="flex flex-col items-center justify-between w-full px-10 pt-3 pb-20 lg:pt-2 lg:flex-col"
    >
      <div class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
        <div
          class="relative z-10 flex flex-col items-start justify-start p-10 bg-gray-200 shadow-2xl rounded-xl"
        >
          <!-- @keydown="form.onKeydown($event)" -->
          <form
            method="POST"
            @submit.prevent="register"
            class="relative w-full mt-6 space-y-8"
          >
            <!-- <AlertError :form="form" /> -->
            <!-- <AlertErrors :form="form" /> -->
            <!-- <AlertSuccess :form="form" message="Your changes have beend saved!" /> -->

            <div class="relative">
              <label
                class="absolute px-2 ml-2 -mt-3 font-medium text-dark bg-gray-200"
              >
                First Name
              </label>

              <input
                id="first_name"
                v-model="form.first_name"
                @keydown="clearError"
                type="text"
                name="first_name"
                class="block w-full text-dark px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />
              <!-- :class="this.errors.first_name[0] && 'border-red-600'" -->

              <span v-if="this.errors.first_name">
                <FormError :errorMsg="this.errors.first_name[0]" />
              </span>
            </div>

            <div class="relative">
              <label
                class="absolute px-2 ml-2 -mt-3 font-medium text-dark bg-gray-200"
              >
                Last Name
              </label>

              <input
                id="last_name"
                v-model="form.last_name"
                @keydown="clearError"
                type="text"
                name="last_name"
                class="block w-full text-dark px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />
              <!-- :class="this.errors.last_name[0] && 'border-red-600'" -->

              <span v-if="this.errors.last_name">
                <FormError :errorMsg="this.errors.last_name[0]" />
              </span>
            </div>

            <div class="relative">
              <label
                class="absolute px-2 ml-2 -mt-3 font-medium text-dark bg-gray-200"
              >
                Email
              </label>

              <input
                id="email"
                v-model="form.email"
                @keydown="clearError"
                type="email"
                name="email"
                class="block w-full text-dark px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />
              <!-- :class="this.errors.email[0] && 'border-red-600'" -->

              <span v-if="this.errors.email">
                <FormError :errorMsg="this.errors.email[0]" />
              </span>
            </div>

            <div class="relative">
              <label
                class="absolute px-2 ml-2 -mt-3 font-medium text-dark bg-gray-200"
              >
                Handle
              </label>

              <input
                id="handle"
                v-model="form.handle"
                @keydown="clearError"
                type="handle"
                name="handle"
                class="block w-full text-dark px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />
              <!-- :class="this.errors.handle[0] && 'border-red-600'" -->

              <span v-if="this.errors.handle">
                <FormError :errorMsg="this.errors.handle[0]" />
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
                @keydown="clearError"
                type="password"
                name="password"
                class="block w-full text-dark px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />
              <!-- :class="this.errors.password[0] && 'border-red-600'" -->
              <span v-if="this.errors.password">
                <FormError :errorMsg="this.errors.password[0]" />
              </span>
            </div>

            <div class="relative">
              <label
                for="password"
                class="absolute px-2 ml-2 -mt-3 font-medium text-dark bg-gray-200"
              >
                Confirm Password
              </label>
              <input
                id="confirm_password"
                v-model="form.confirm_password"
                @keydown="clearError"
                type="password"
                name="confirm_password"
                class="block w-full text-dark px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />
              <FormError :errorMsg="this.errors.confirm_password" />
            </div>

            <!-- <div class="relative">
              <a href="#" class="text-gray-800"> Forgot password? </a>
            </div> -->

            <button
              type="submit"
              class="px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>

            <div class="relative text-gray-800">
              Already have an account?
              <router-link
                to="/login"
                class="text-indigo-700 hover:text-indigo-800 font-medium"
              >
                Login
              </router-link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
