<template>
  <div>
    <section
      data-bs-version="5.1"
      class="form4 cid-t2pwi0gPN4 mbr-fullscreen"
      id="form4-b"
    >
      <div class="container">
        <div class="row content-wrapper justify-content-center">
          <div v-if="page === 1" class="col-lg-4 mbr-form">
            <ConfigurationSelector
              @formData="setFormData($event)"
              @nextPage="nextPage($event)"
            ></ConfigurationSelector>
          </div>
          <div v-else-if="page === 2" class="col-lg-4 mbr-form">
            <ConfigurationPersonalInfo
              @personalInfoDto="setPersonalInfoDto($event)"
              @nextPage="nextPage($event)"
            ></ConfigurationPersonalInfo>
          </div>

          <div class="col-lg-7 offset-lg-1 col-12">
            <div class="image-wrapper">
              <img
                class="w-100"
                src="../../assets/images/intro-1000x667.png"
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
import ConfigurationSelector from "../../components/buyer/ConfigurationSelection.vue";
import ConfigurationPersonalInfo from "../../components/buyer/ConfigurationPersonalInfo.vue";
import Vipps from "../../components/buyer/vipps.vue";
import axios from "axios";
import authHeader, { AuthHead } from "../../services/auth-header.js";
import RequestService from "../../services/request.service.js";

export default {
  components: { ConfigurationSelector, ConfigurationPersonalInfo, Vipps },
  data() {
    return {
      allFormsSentSuccesfully: true,
      page: 1,
      formData: "",
      personalInfoDto: {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        postbox: "",
        city: "",
        streetName: "",
        streetNumber: "",
      },
      maxPage: 3,
    };
  },
  methods: {
    setFormData(formData) {
      this.formData = formData;
    },
    nextPage(pageNumber) {
      if (pageNumber === this.maxPage) {
        this.handleSubmit();
      }
      this.page = pageNumber;
    },
    setPersonalInfoDto(personalInfoDto) {
      console.log(personalInfoDto);
      this.personalInfoDto = personalInfoDto;
    },
    handleSubmit() {
      this.submitPersonalInfo();
    },

    submitPersonalInfo() {
      RequestService.sendAuthorizedPostRequest(
        "/api/buyer/info/update",
        this.personalInfoDto
      )
        .then((response) => this.submitFormData())
        .catch((response) => console.log("submitPersonalInfo failed"));
    },

    submitFormData() {
      axios
        .post("/api/buyer/pricerequest/create", this.formData, {
          headers: {
            Authorization: authHeader().Authorization,
          },
        })
        .then((response) => {
          this.$router.push("/buyer/myrequests");
        })
        .catch((response) => {
          console.log("failed to create priceRequest");
        });
    },
  },
};
</script>
