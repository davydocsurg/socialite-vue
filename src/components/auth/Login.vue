<script>
  import Form from "vform";
  import { Button, HasError, AlertError } from "vform/src/components/tailwind";

  export default {
    components: {
      Button,
      HasError,
      AlertError,
    },

    data: () => ({
      form: new Form({
        login: "",
        password: "",
      }),
    }),

    methods: {
      async login() {
        const response = await this.form.post("/api/login");
        // ...
        console.log("signin");
      },
    },
  };
</script>

<template>
  <div class="mt-10">
    <h4 class="w-full text-4xl font-medium text-center text-white">Log In</h4>
    <div
      class="flex flex-col items-center justify-between w-full px-10 pt-10 pb-20 lg:pt-10 lg:flex-col"
    >
      <div class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
        <div
          class="relative z-10 flex flex-col items-start justify-start p-10 bg-gray-200 shadow-2xl rounded-xl"
        >
          <form
            method="POST"
            @submit.prevent="login"
            @keydown="form.onKeydown($event)"
            class="relative w-full mt-6 space-y-8"
          >
            <AlertError :form="form" />
            <!-- <AlertErrors :form="form" /> -->
            <!-- <AlertSuccess :form="form" message="Your changes have beend saved!" /> -->

            <div class="relative">
              <label
                class="absolute px-2 ml-2 -mt-3 font-medium text-gray-700 bg-gray-200"
              >
                Email or Handle
              </label>

              <input
                id="login"
                v-model="form.login"
                type="text"
                name="login"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />

              <HasError :form="form" field="login" />
            </div>

            <div class="relative">
              <label
                for="password"
                class="absolute px-2 ml-2 -mt-3 font-medium text-gray-700 bg-gray-200"
                >Password
              </label>
              <input
                id="password"
                v-model="form.password"
                type="text"
                name="password"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />
              <HasError :form="form" field="password" />
            </div>

            <!-- <div class="relative">
              <a href="#" class="text-gray-800"> Forgot password? </a>
            </div> -->

            <Button
              :form="form"
              class="px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Log In
            </Button>

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
