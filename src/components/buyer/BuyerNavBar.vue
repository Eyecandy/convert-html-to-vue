<template>
  <section
    data-bs-version="5.1"
    class="menu2 personam4_menu2 cid-t2H2v6HJrF"
    once="menu"
    id="menu02-c"
  >
    <nav
      class="
        navbar navbar-expand
        beta-menu
        navbar-dropdown
        align-items-center
        navbar-toggleable-sm
      "
    >
      <button class="navbar-toggler navbar-toggler-right">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      <div class="menu-logo">
        <div class="navbar-brand">
          <span class="navbar-logo">
            <a href="#top">
              <img
                src="../../assets/images/small-logo-2-256x58.png"
                alt=""
                style="height: 3.8rem"
              />
            </a>
          </span>
        </div>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav nav-dropdown nav-right"
          data-app-modern-menu="true"
        >
          <li class="nav-item">
            <a class="nav-link link text-white display-4" href="#"
              >Min profil</a
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link link text-white display-4"
              :to="'/buyer/myrequests'"
              >Sendte forespørsler</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link link text-white display-4"
              :to="'/buyer/configure-carbrand'"
              >Send en forespørsel</router-link
            >
          </li>

          <li class="nav-item">
            <a class="nav-link link text-white display-4" href="#"
              >Personvern</a
            >
          </li>

          <logout></logout>
          <li class="nav-item">
            <a class="nav-link link text-white display-4" href="#"> </a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
</template>

<script>
import logout from "../logoutComponent.vue";

export default {
  components: { logout },
};
</script>
