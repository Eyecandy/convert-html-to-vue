<template>
  <div
    @submit.prevent="handleSubmit"
    class="col-lg-8 col-md-12 col-sm-12 form-group"
  >
    <input
      @change="onFormChange"
      type="Text"
      placeholder="Fornavn"
      class="form-control display-7"
      required="required"
      v-model="personalInfoDto.firstName"
      id="Brukernavn-form4-a1"
    />
  </div>
  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      type="Text"
      placeholder="Etternavn"
      class="form-control display-7"
      required="required"
      v-model="personalInfoDto.lastName"
      id="Brukernavn-form4-a2"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="telefon nummer"
      class="form-control display-7"
      required="required"
      v-model="personalInfoDto.phoneNumber"
      id="Brukernavn-form4-a3"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="By"
      class="form-control display-7"
      required="required"
      v-model="personalInfoDto.city"
      id="Brukernavn-form4-a3"
    />
  </div>
  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="Post Nummer"
      class="form-control display-7"
      required="required"
      v-model="personalInfoDto.postBox"
      id="Brukernavn-form4-a4"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="Gate Navn"
      class="form-control display-7"
      required="required"
      v-model="personalInfoDto.streetName"
      id="Brukernavn-form4-a5"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="Gate Nummer"
      class="form-control display-7"
      required="required"
      v-model="personalInfoDto.streetNumber"
      id="Brukernavn-form4-a6"
    />
  </div>

  <div class="col-12 col-md-auto mbr-section-btn">
    <button @click.stop="handleSubmit" class="w-100 btn btn-primary display-4">
      Neste
    </button>
  </div>
</template>

<script>
import SessionStorageService from "../../services/sessionStorage.service.js";
export default {
  emits: ["personalInfoDto", "nextPage"],

  async mounted() {
    const personalInfoDto = await SessionStorageService.getOrFetch(
      "personalInfoDto",
      "/api/buyer/info/get"
    );

    this.personalInfoDto = personalInfoDto;
  },

  data() {
    return {
      allDataFetched: false,
      personalInfoDto: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        postBox: "",
        city: "",
        streetName: "",
        streetNumber: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("personalInfoDto", this.personalInfoDto);
      this.$emit("nextPage", 3);
    },
    onFormChange() {
      SessionStorageService.tempUpdate("personalInfoDto", this.personalInfoDto);
    },
  },
};
</script>
