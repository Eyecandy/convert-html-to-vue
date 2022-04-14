import { createRouter, createWebHistory } from "vue-router";
import RegistrationView from "../views/RegistrationView.vue";
import Policy1 from "../views/PolicyAgreement.vue";
import LoginView from "../views/LoginView.vue"

const routes = [
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
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
