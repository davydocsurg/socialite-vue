import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "./assets/css/index.css";

// createApp(App).mount("#app").use(createPinia());
const app = createApp(App);

app.use(router);
app.use(createPinia());
// app.use(store)
app.mount("#app");
