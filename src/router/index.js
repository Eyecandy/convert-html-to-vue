import { createRouter, createWebHistory } from "vue-router";
import RegistrationView from "../views/RegistrationView.vue";
import Policy1 from "../views/PolicyAgreement.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import profilepage from "../views/ProfilePage.vue";
import CarBrandSelector from "../views/CarBrandSelectorView.vue";
import BuyerMyRequests from "../views/MyRequestView.vue";



const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },

  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "registration",
    component: RegistrationView,
  },
  {
    name: "policy1",
    path: "/policy1",
    component: Policy1,
  },

  { name: "profilepage", path: "/profilepage", component: profilepage },
  { name: "carBrandSelector", path: "/configure-carbrand", component: CarBrandSelector },

  { name: "myrequests", path: "/buyer/myrequests", component: BuyerMyRequests }



];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/', '/configure/carbrand'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
