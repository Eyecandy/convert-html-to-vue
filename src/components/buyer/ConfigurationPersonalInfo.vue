<template>
  <div
    @submit.prevent="handleSubmit"
    class="col-lg-8 col-md-12 col-sm-12 form-group"
  >
    <input
      type="Text"
      placeholder="Fornavn"
      class="form-control display-7"
      required="required"
      v-model="firstName"
      id="Brukernavn-form4-a1"
    />
  </div>
  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      type="Text"
      placeholder="Etternavn"
      class="form-control display-7"
      required="required"
      v-model="lastName"
      id="Brukernavn-form4-a2"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      name="Brukernavn"
      placeholder="telefon nummer"
      class="form-control display-7"
      required="required"
      v-model="phoneNumber"
      id="Brukernavn-form4-a3"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      name="Brukernavn"
      placeholder="By"
      class="form-control display-7"
      required="required"
      v-model="city"
      id="Brukernavn-form4-a3"
    />
  </div>
  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      placeholder="Post Nummer"
      class="form-control display-7"
      required="required"
      v-model="postbox"
      id="Brukernavn-form4-a4"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      placeholder="Gate Navn"
      class="form-control display-7"
      required="required"
      v-model="streetName"
      id="Brukernavn-form4-a5"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      placeholder="Gate Nummer"
      class="form-control display-7"
      required="required"
      v-model="streetNumber"
      id="Brukernavn-form4-a6"
    />
  </div>

  <div class="col-12 col-md-auto mbr-section-btn">
    <button @click="handleSubmit" class="w-100 btn btn-primary display-4">
      Neste
    </button>
  </div>
</template>

<script>
export default {
  emits: ["personalInfoDto", "nextPage"],
  data() {
    return {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      postbox: "",
      city: "",
      streetName: "",
      streetNumber: "",
    };
  },
  methods: {
    handleSubmit() {
      const personalInfoDto = {
        firstName: this.firstName,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        postBox: this.postbox,
        city: this.city,
        streetName: this.streetName,
        streetNumber: this.streetNumber,
      };

      this.$emit("personalInfoDto", personalInfoDto);
      this.$emit("nextPage", 3);
    },
  },
};
</script>
