import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/bootstrap/css/bootstrap.min.css";

import "./assets/mobirise/css/mbr-additional.css";
import "./assets/theme/css/style.css";
const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");

