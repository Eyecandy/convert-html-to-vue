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
                  <input
                    type="email"
                    name="Brukernavn"
                    placeholder="Skriv inn din e-post"
                    class="form-control display-7"
                    required="required"
                    v-model="email"
                    id="Brukernavn-form4-a"
                  />
                </div>
                <div
                  class="col-lg-8 col-md-12 col-sm-12 form-group"
                  data-for="password"
                  style=""
                >
                  <input
                    type="password"
                    name="password"
                    placeholder="Ønsket passord"
                    v-model="password"
                    class="form-control display-7"
                    required="required"
                  />
                </div>
                <div
                  class="col-lg-8 col-md-12 col-sm-12 form-group"
                  data-for="password1"
                >
                  <input
                    type="password"
                    name="password1"
                    placeholder="Bekreft passord"
                    class="form-control display-7"
                    v-model="matchingPassword"
                    required="required"
                  />
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <div class="form-control-label"></div>
                  <div
                    data-for="Ved å registrere deg godtar du våre generelle vilkår. Les mer her."
                    class="form-check form-check-inline ms-2"
                  >
                    <input
                      type="checkbox"
                      value="Yes"
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

export default {
  name: "RegistrationView",
  data() {
    return {
      email: "",
      password: "",
      matchingPassword: "",
    };
  },
  methods: {
    handleSubmit() {
      console.log(
        "submitted",
        this.email,
        this.password,
        this.matchingPassword
      );
      axios
        .post("/api/auth/register", {
          email: this.email,
          password: this.password,
          matchingPassword: this.matchingPassword,
        })
        .then((Response) => console.log(Response))
        .catch((Response) => console.log(Response));
    },
  },
};
</script>
