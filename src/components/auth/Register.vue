<script setup>
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
        username: "",
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
  <div>
    <form
      method="POST"
      @submit.prevent="login"
      @keydown="form.onKeydown($event)"
    >
      <AlertError :form="form" />
      <!-- <AlertErrors :form="form" /> -->
      <!-- <AlertSuccess :form="form" message="Your changes have beend saved!" /> -->

      <div class="mb-3">
        <label for="username" class="block text-sm font-medium text-gray-700"
          >Username</label
        >
        <div class="mt-1">
          <input
            id="username"
            v-model="form.username"
            type="text"
            name="username"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <HasError :form="form" field="username" />
      </div>

      <div class="mb-3">
        <label for="password" class="block text-sm font-medium text-gray-700"
          >Password</label
        >
        <div class="mt-1">
          <input
            id="password"
            v-model="form.password"
            type="text"
            name="password"
            class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <HasError :form="form" field="password" />
      </div>

      <Button
        :form="form"
        class="px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Log In
      </Button>
    </form>
  </div>
</template>
