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
import Comment from "./components/BaseIcon/icons/comment.vue";
import Retweet from "./components/BaseIcon/icons/retweet.vue";
import Like from "./components/BaseIcon/icons/like.vue";
import Share from "./components/BaseIcon/icons/share.vue";
import Image from "./components/BaseIcon/icons/image.vue";
import Gif from "./components/BaseIcon/icons/gif.vue";
import Graph from "./components/BaseIcon/icons/graph.vue";
import Schedule from "./components/BaseIcon/icons/schedule.vue";
import Close from "./components/BaseIcon/icons/close.vue";
// import "vue-toast-notification/dist/theme-sugar.css";

// createApp(App).mount("#app").use(createPinia());
const app = createApp(App);

app.use(router);
app.use(moment);
app
  .component("Loading", Loading)
  .component("Spinner", Spinner)
  .component("Comment", Comment)
  .component("Retweet", Retweet)
  .component("Like", Like)
  .component("Share", Share)
  .component("Image", Image)
  .component("Gif", Gif)
  .component("Graph", Graph)
  .component("Close", Close)
  .component("Schedule", Schedule);

app.use(VueToast, {
  position: "top-right",
});
app.use(createPinia());
// app.use(store)
app.mount("#app");
