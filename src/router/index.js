import { createRouter, createWebHistory } from "vue-router";
import RegistrationView from "../views/RegistrationView.vue";
import Policy1 from "../views/PolicyAgreement.vue";

const routes = [
  {
    path: "/registration",
    name: "registration",
    component: RegistrationView,
  },
  {
    name: "policy1",
    path: "/policy1",
    component: Policy1,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
