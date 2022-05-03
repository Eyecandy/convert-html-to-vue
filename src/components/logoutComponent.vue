<template>
  <li class="nav-item">
    <a class="nav-link link text-white display-4" href @Click="logOut"
      >Logg ut</a
    >
  </li>
</template>

<script>
import RedirectService from "../services/redirect-service.js";
export default {
  methods: {
    logOut() {
      this.$store.dispatch("auth/logout").then(
        () => {
          this.$router.push(RedirectService.getRedirectUrl());
        },
        (error) => {
          console.log("error");
          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  },
};
</script>
