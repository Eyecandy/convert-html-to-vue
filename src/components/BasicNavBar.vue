<template>
  <section
    data-bs-version="5.1"
    class="menu menu1 cid-t5rSr4lFe0"
    once="menu"
    id="menu1-3"
  >
    <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-bs-toggle="collapse"
          data-target="#navbarSupportedContent"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div class="hamburger">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        <div class="navbar-brand">
          <span class="navbar-logo">
            <a href="index.html">
              <img
                src="../assets/images/logo-litenpng-418x96.png"
                alt=""
                style="height: 3rem"
              />
            </a>
          </span>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav nav-dropdown" data-app-modern-menu="true">
            <li class="nav-item">
              <router-link
                class="nav-link link text-black text-primary display-4"
                :to="'/'"
                >Hovedside</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link link text-black text-primary display-4"
                :to="'/'"
                >Privatkunde</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link link text-black text-primary display-4"
                :to="'/'"
                >Bedriftskunde</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link link text-black text-primary display-4"
                :to="'/'"
                >Forhandler</router-link
              >
            </li>
          </ul>

          <div class="navbar-buttons mbr-section-btn">
            <router-link class="btn btn-primary display-7" :to="'/login'"
              >Logg inn</router-link
            >
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>







