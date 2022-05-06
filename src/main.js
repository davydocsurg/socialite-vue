import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

// createApp(App).mount("#app").use(createPinia());
const app = createApp(App);

app.use(router);
app.use(createPinia());
// app.use(store)
app.mount("#app");
