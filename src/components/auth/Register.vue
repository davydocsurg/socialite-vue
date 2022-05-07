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
      async register() {
        const response = await this.form.post("/api/login");
        // ...
        console.log("signin");
      },
    },
  };
</script>

<template>
  <div class="mt-10">
    <h4 class="w-full text-4xl font-medium text-center text-white">Register</h4>
    <div
      class="flex flex-col items-center justify-between w-full px-10 pt-10 pb-20 lg:pt-10 lg:flex-col"
    >
      <div class="relative z-10 w-full max-w-2xl mt-20 lg:mt-0 lg:w-5/12">
        <div
          class="relative z-10 flex flex-col items-start justify-start p-10 bg-gray-200 shadow-2xl rounded-xl"
        >
          <form
            method="POST"
            @submit.prevent="register"
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
                First Name
              </label>

              <input
                id="first_name"
                v-model="form.first_name"
                type="text"
                name="first_name"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />

              <HasError :form="form" field="first_name" />
            </div>

            <div class="relative">
              <label
                class="absolute px-2 ml-2 -mt-3 font-medium text-gray-700 bg-gray-200"
              >
                Last Name
              </label>

              <input
                id="last_name"
                v-model="form.last_name"
                type="text"
                name="last_name"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />

              <HasError :form="form" field="last_name" />
            </div>

            <div class="relative">
              <label
                class="absolute px-2 ml-2 -mt-3 font-medium text-gray-700 bg-gray-200"
              >
                Email
              </label>

              <input
                id="email"
                v-model="form.email"
                type="email"
                name="email"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />

              <HasError :form="form" field="email" />
            </div>

            <div class="relative">
              <label
                class="absolute px-2 ml-2 -mt-3 font-medium text-gray-700 bg-gray-200"
              >
                Handle
              </label>

              <input
                id="handle"
                v-model="form.handle"
                type="handle"
                name="handle"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />

              <HasError :form="form" field="handle" />
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

            <div class="relative">
              <label
                for="password"
                class="absolute px-2 ml-2 -mt-3 font-medium text-gray-700 bg-gray-200"
              >
                Confirm Password
              </label>
              <input
                id="confirm_password"
                v-model="form.confirm_password"
                type="text"
                name="confirm_password"
                class="block w-full px-4 py-4 mt-2 text-base placeholder-gray-400 bg-gray-200 border border-gray-500 rounded-md focus:outline-none focus:border-indigo-700"
              />
              <HasError :form="form" field="confirm_password" />
            </div>

            <!-- <div class="relative">
              <a href="#" class="text-gray-800"> Forgot password? </a>
            </div> -->

            <Button
              :form="form"
              class="px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </Button>

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
