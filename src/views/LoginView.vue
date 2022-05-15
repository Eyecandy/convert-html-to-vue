<template>
  <div>
    <section
      data-bs-version="5.1"
      class="form4 cid-t2pwi0gPN4 mbr-fullscreen"
      id="form4-a"
    >
      <div class="container">
        <div class="row content-wrapper justify-content-center">
          <div class="col-lg-4 mbr-form">
            <!--Formbuilder Form-->
            <form @submit.prevent="handleLogin">
              <div class="row">
                <div
                  hidden="hidden"
                  data-form-alert-danger=""
                  class="alert alert-danger col-12"
                >
                  Oops...! some problem!
                </div>
              </div>
              <div class="dragArea row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <h1 class="mbr-section-title mb-3 display-2">
                    Logg Inn Bruker
                  </h1>
                </div>
                <div
                  class="col-lg-12 col-md-12 col-sm-12 form-group"
                  data-for="Brukernavn"
                >
                  <input
                    type="email"
                    name="Brukernavn"
                    placeholder="Skriv inn din e-post"
                    class="form-control display-7"
                    required="required"
                    v-model="email"
                  />
                </div>
                <div
                  class="col-lg-12 col-md-12 col-sm-12 form-group"
                  data-for="password"
                >
                  <input
                    type="password"
                    name="password"
                    placeholder="Skriv inn ditt Passord"
                    v-model="password"
                    class="form-control display-7"
                    required="required"
                  />
                </div>

                <div class="col-12 col-md-auto mbr-section-btn">
                  <button type="submit" class="w-100 btn btn-primary display-4">
                    Logg Inn Bruker
                  </button>
                </div>

                <tr class="my-container">
                  <td class="my-column">
                    <router-link :to="'/register'"
                      >Registrer bruker
                    </router-link>
                  </td>
                  <td class="my-column">|</td>
                  <td>
                    <router-link :to="'/resetpassword'"
                      >Glemt passord?</router-link
                    >
                  </td>
                </tr>
              </div>
            </form>
            <!--Formbuilder Form-->
          </div>
          <div class="col-lg-7 offset-lg-1 col-12">
            <div class="image-wrapper">
              <img
                class="w-100"
                src="../assets/images/intro-1000x667.png"
                alt="Digibil"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RedirectService from "../services/redirect-service.js";
export default {
  name: "LoginView",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      this.$router.push(RedirectService.getRedirectUrl());
    }
  },

  methods: {
    handleLogin() {
      const user = { email: this.email, password: this.password };
      this.loading = true;
      this.$store.dispatch("auth/login", user).then(
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

<style scoped>
.my-column {
  padding-right: 10px;
}
</style>