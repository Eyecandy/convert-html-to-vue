import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import moment from 'moment'


import "./assets/bootstrap/css/bootstrap.min.css";
import "./assets/bootstrap/css/bootstrap-reboot.min.css"
import "./assets/mobirise/css/mbr-additional.css";
import "./assets/theme/css/style.css";
import "./assets/dropdown/css/style.css";
import "./assets/mobirise/css/mbr-additional.css";




const app = createApp(App);
app.use(router);
app.use(store);
app.use(moment);
app.mount("#app");


