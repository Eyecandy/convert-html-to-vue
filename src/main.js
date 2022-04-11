import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import styles from "./assets/styles/main.css";

const app = createApp(App);
app.use(router);
app.mount("#app");
app.use(styles);

