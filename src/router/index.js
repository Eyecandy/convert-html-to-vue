import { createRouter, createWebHistory } from "vue-router";
import RegistrationView from "../views/RegistrationView.vue";
import Policy1 from "../views/PolicyAgreement.vue";
import LoginView from "../views/LoginView.vue";
import HomeView from "../views/HomeView.vue";
import profilepage from "../views/ProfilePage.vue";
import CarBrandSelector from "../views/CarBrandSelectorView.vue";
import BuyerMyRequests from "../views/buyer/MyRequestView.vue";
import ResetPassword from "../views/ResetPassword.vue";
import RetailerRegistration from "../views/RetailerRegistration.vue";
import HomeSeller from "../views/seller/HomeView.vue";
import GiveOffer from "../views/seller/GiveOffer.vue";
import GiveOffer2 from "../views/seller/GiveOfferPart2.vue";

import MyOffers from "../views/seller/MyOffers.vue";
import SellerRequests from "../views/seller/MyRequests.vue"
import { auth } from "@/store/auth.module";





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
  { name: "carBrandSelector", path: "/buyer/configure-carbrand", component: CarBrandSelector },

  { name: "myrequests", path: "/buyer/myrequests", component: BuyerMyRequests },

  { name: "resetpassword", path: "/resetpassword", component: ResetPassword },

  { name: "register-retailer", path: "/register-retailer", component: RetailerRegistration },

  { name: "seller-myoffers", path: "/seller/my-offers", component: MyOffers },

  { name: "seller-home", path: "/seller/home", component: HomeSeller },

  { name: "seller-requests", path: "/seller/requests", component: SellerRequests },

  {
    name: "seller-giveoffer", path: "/seller/giveoffer/:priceRequestOrderId/:encodedPriceRequest", component: GiveOffer, props: true

  },

  {
    name: "seller-giveoffer-part2", path: "/seller/giveoffer-part2/:priceRequestOrderId/:encodedPriceRequest", component: GiveOffer2, props: true

  },








];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


router.beforeEach((to, from, next) => {

  const publicPages = ['/login', '/register', '/', '/resetpassword', '/register-retailer'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if (authRequired && !loggedIn) {
    next('/login');
  }

  else {
    next();
  }

});

export default router;
