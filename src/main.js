import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/css/index.css";
import VueToast from "vue-toast-notification";
// Import one of the available themes
import "vue-toast-notification/dist/theme-default.css";
// import "vue-toast-notification/dist/theme-sugar.css";

// createApp(App).mount("#app").use(createPinia());
const app = createApp(App);

app.use(router);
app.use(VueToast, {
  position: "top-right",
});
app.use(createPinia());
// app.use(store)
app.mount("#app");
