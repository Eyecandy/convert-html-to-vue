<template>
  <div>
    <section
      data-bs-version="5.1"
      class="form4 cid-t2pwi0gPN4 mbr-fullscreen"
      id="form4-a"
    >
      <div class="container">
        <SuccessCard
          :text="accountCreated"
          :isVisible="successMessageVisible"
          :path="loginPath"
          :continueText="'Fortsett til logg inn'"
          :statusText="'Konto Laget!'"
        ></SuccessCard>
        <div class="row content-wrapper justify-content-center">
          <div :class="getClass()">
            <!--Formbuilder Form-->
            <form @submit.prevent="handleSubmit">
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
                    Opprett bruker
                  </h1>
                </div>
                <div
                  class="col-lg-8 col-md-12 col-sm-12 form-group"
                  data-for="Brukernavn"
                >
                  <ErrorFieldText
                    :isValid="isValidEmail || checkInit"
                    :text="emailErrorText"
                  ></ErrorFieldText>
                  <input
                    name="Brukernavn"
                    placeholder="Skriv inn din e-post"
                    class="form-control display-7"
                    v-model="email"
                    id="Brukernavn-form4-a"
                  />
                </div>
                <div
                  class="col-lg-8 col-md-12 col-sm-12 form-group"
                  data-for="password"
                  style=""
                >
                  <ErrorFieldText
                    :isValid="isValidPassword || checkInit"
                    :text="passwordErrorText"
                  ></ErrorFieldText>
                  <input
                    type="password"
                    name="password"
                    title="Passord må inneholder 8 tegn"
                    placeholder="Ønsket passord"
                    v-model="password"
                    class="form-control display-7"
                  />
                </div>
                <div
                  class="col-lg-8 col-md-12 col-sm-12 form-group"
                  data-for="password1"
                >
                  <ErrorFieldText
                    :isValid="isValidConfirmPassword || checkInit"
                    :text="passwordConfirmErrorText"
                  ></ErrorFieldText>
                  <input
                    type="password"
                    name="password1"
                    placeholder="Bekreft passord"
                    class="form-control display-7"
                    v-model="matchingPassword"
                  />
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <div class="form-control-label"></div>
                  <div
                    data-for="Ved å registrere deg godtar du våre generelle vilkår. Les mer her."
                    class="form-check form-check-inline ms-2"
                  >
                    <ErrorFieldText
                      :isValid="checkBoxConfirmed || checkInit"
                      :text="checkBoxTicked"
                    ></ErrorFieldText>
                    <input
                      @change="toggle()"
                      type="checkbox"
                      name="Ved å registrere deg godtar du våre generelle vilkår. Les mer her."
                      class="form-check-input display-7"
                      id="Ved å registrere deg godtar du våre generelle vilkår. Les mer her.-form4-a"
                    />
                    <label
                      for="Ved å registrere deg godtar du våre generelle vilkår. Les mer her.-form4-a"
                      class="form-check-label display-7"
                      >Ved å registrere deg godtar du våre generelle vilkår. Les
                      mer her.</label
                    >
                  </div>
                </div>
                <div class="col-12 col-md-auto mbr-section-btn">
                  <button type="submit" class="w-100 btn btn-primary display-4">
                    Registrer bruker
                  </button>
                </div>
                <tr>
                  <td>
                    <router-link :to="'/Login'"
                      >Allerede registrert? - Logg inn
                    </router-link>
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
import axios from "axios";
import RedirectService from "../services/redirect-service.js";
import ErrorFieldText from "../components/errorFieldText.vue";
import FieldValidationService from "../services/fieldValidation.service.js";
import SuccessCard from "../components/successCard.vue";

export default {
  components: { ErrorFieldText, SuccessCard },
  name: "RegistrationView",
  data() {
    return {
      email: "",
      password: "",
      matchingPassword: "",
      checkInit: true,
      allChecksPassed: false,
      isValidEmail: false,
      isValidPassword: false,

      isValidConfirmPassword: false,

      emailErrorText:
        "må være en gyldig epost adresse. For eksempel bruker@epost.no",
      passwordErrorText: "Passord må inneholde minst 8 tegn",
      passwordConfirmErrorText: "Bekreftet passord må være likt som passord",

      checkBoxConfirmed: false,
      checkBoxTicked: "Godkjenn villkår ved å krysse av boksen",
      accountCreated: "",
      successMessageVisible: false,
      loginPath: "/login",
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
    getClass() {
      if (this.successMessageVisible) {
        return "col-lg-4 mbr-form blur-content";
      } else {
        return "col-lg-4 mbr-form justify-content-center";
      }
    },

    successAccountCreatedMessage() {
      this.accountCreated =
        "Din konto er opprettet, du vil snart motta en e-post på: " +
        this.email;
    },
    toggle() {
      this.checkBoxConfirmed = !this.checkBoxConfirmed;
    },

    checkFormFields() {
      this.checkInit = false;
      this.isValidEmail = FieldValidationService.validateEmail(this.email);
      this.isValidPassword = FieldValidationService.validatePassword(
        this.password
      );
      this.isValidConfirmPassword =
        FieldValidationService.validatePasswordMatch(
          this.password,
          this.matchingPassword
        );
      this.allChecksPassed =
        this.isValidEmail &&
        this.isValidPassword &&
        this.isValidConfirmPassword &&
        this.checkBoxConfirmed;
    },

    handleSubmit() {
      this.checkFormFields();

      if (this.allChecksPassed === true) {
        axios
          .post("/api/auth/signup", {
            email: this.email,
            password: this.password,
            matchingPassword: this.matchingPassword,
          })
          .then((Response) => this.afterRegistrationSuccess())
          .catch((Response) => console.log(Response));
      }
    },
    afterRegistrationSuccess() {
      this.successAccountCreatedMessage();
      this.successMessageVisible = true;
    },
  },
};
</script>


<style scoped>
.blur-content {
  filter: blur(3px);
}
</style>