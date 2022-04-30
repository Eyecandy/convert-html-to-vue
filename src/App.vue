<template>
  <div>
    <div v-if="currentUser && currentUser.roles[0] == 'buyer'">
      <BuyerNavBar></BuyerNavBar>
    </div>

    <router-view />
  </div>
</template>
<script>
import BuyerNavBar from "./components/buyer/BuyerNavBar.vue";

export default {
  components: { BuyerNavBar },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
    currentUser() {
      return this.$store.state.auth.user;
    },
  },
};
</script>