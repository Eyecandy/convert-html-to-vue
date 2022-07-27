<template>
  <div
    @submit.prevent="handleSubmit"
    class="col-lg-8 col-md-12 col-sm-12 form-group"
  >
    <input
      @change="onFormChange"
      type="Text"
      placeholder="Fornavn"
      :class="getClassForTextField(personalInfoDto.firstName)"
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
      :class="getClassForTextField(personalInfoDto.lastName)"
      required="required"
      v-model="personalInfoDto.lastName"
      id="Brukernavn-form4-a2"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="telefon nummer"
      :class="getClassForNumberField(personalInfoDto.phoneNumber)"
      v-model="personalInfoDto.phoneNumber"
      required="required"
      id="Brukernavn-form4-a3"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="By"
      :class="getClassForTextField(personalInfoDto.city)"
      required="required"
      v-model="personalInfoDto.city"
      id="Brukernavn-form4-a3"
    />
  </div>
  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="Post Nummer"
      :class="getClassForNumberField(personalInfoDto.postBox)"
      required="required"
      v-model="personalInfoDto.postBox"
      id="Brukernavn-form4-a4"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="Gate Navn"
      :class="getClassForTextField(personalInfoDto.streetName)"
      required="required"
      v-model="personalInfoDto.streetName"
      id="Brukernavn-form4-a5"
    />
  </div>

  <div class="col-lg-8 col-md-12 col-sm-12 form-group">
    <input
      @change="onFormChange"
      placeholder="Gate Nummer"
      :class="getClassForNumberField(personalInfoDto.streetNumber)"
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
      fieldCheckFailed: false,
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
    allFieldsHasValidInput() {
      const firstNameValid = this.isTextOnly(this.personalInfoDto.firstName);
      const lastNameValid = this.isTextOnly(this.personalInfoDto.lastName);
      const phoneNumberValid = this.isNumbersOnly(
        this.personalInfoDto.phoneNumber
      );
      const postBoxValid = this.isNumbersOnly(this.personalInfoDto.postBox);
      const cityValid = this.isTextOnly(this.personalInfoDto.city);
      const streetNameValid = this.isTextOnly(this.personalInfoDto.streetName);
      const streetNumberValid = this.isNumbersOnly(
        this.personalInfoDto.streetNumber
      );
      return (
        firstNameValid &&
        lastNameValid &&
        phoneNumberValid &&
        postBoxValid &&
        cityValid &&
        streetNameValid &&
        streetNumberValid
      );
    },
    isTextOnly(stringToCheck) {
      const textPattern = /^[a-zA-Z ]+$/;
      return textPattern.test(stringToCheck);
    },
    isNumbersOnly(stringToCheck) {
      const numberPattern = /^\d+$/;
      return numberPattern.test(stringToCheck);
    },
    handleSubmit() {
      if (this.allFieldsHasValidInput()) {
        this.$emit("personalInfoDto", this.personalInfoDto);
        this.$emit("nextPage", 3);
      } else {
        this.fieldCheckFailed = true;
      }
    },
    getClassForTextField(stringToCheck) {
      if (this.fieldCheckFailed && !this.isTextOnly(stringToCheck)) {
        return "form-control display-7 select-error";
      }
      return "form-control display-7";
    },
    getClassForNumberField(stringToCheck) {
      if (this.fieldCheckFailed && !this.isNumbersOnly(stringToCheck)) {
        return "form-control display-7 select-error";
      }
      return "form-control display-7";
    },
    onFormChange() {
      SessionStorageService.tempUpdate("personalInfoDto", this.personalInfoDto);
    },
  },
};
</script>
<style scoped>
.select-error {
  background-color: rgb(230, 137, 137, 0.5);
}
</style>