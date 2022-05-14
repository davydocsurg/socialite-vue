import { createApp } from "vue";
import moment from "moment";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/css/index.css";
import VueToast from "vue-toast-notification";
// Import one of the available themes
import "vue-toast-notification/dist/theme-default.css";
import Loading from "./components/loaders/Loading.vue";
import Spinner from "./components/loaders/Spinner.vue";
// import "vue-toast-notification/dist/theme-sugar.css";

// createApp(App).mount("#app").use(createPinia());
const app = createApp(App);

app.use(router);
app.use(moment);
app.component("Loading", Loading).component("Spinner", Spinner);
app.use(VueToast, {
  position: "top-right",
});
app.use(createPinia());
// app.use(store)
app.mount("#app");
