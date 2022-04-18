<template>
  <div>
    <BuyerNavBar></BuyerNavBar>
    <section
      data-bs-version="5.1"
      class="form4 cid-t2pwi0gPN4 mbr-fullscreen"
      id="form4-b"
    >
      <div class="container">
        <div class="row content-wrapper justify-content-center">
          <div class="col-lg-4 mbr-form">
            <form
              @submit.prevent="handleSubmit"
              class="mbr-form form-with-styler"
            >
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
                  <p class="mbr-text mbr-fonts-style mb-4 display-7">
                    Velg ditt bilmerke
                  </p>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <select
                    v-model="selectedCarbrand"
                    class="form-control form-select display-7"
                  >
                    <option
                      v-for="carbrand in carbrands"
                      :key="carbrand.id"
                      :value="carbrand.id"
                    >
                      {{ carbrand.name }}
                    </option>
                  </select>

                  <div class="col-lg-12 col-md-12 col-sm-12 form-group"></div>

                  <div class="dragArea row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <p class="mbr-text mbr-fonts-style mb-4 display-7">
                        Dekktype
                      </p>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 form-group"
                      data-for="tyres"
                    >
                      <select
                        v-model="selectedTireOption"
                        class="form-control form-select display-7"
                      >
                        <option
                          v-for="tireOption in tireOptions"
                          :key="tireOption.id"
                          :value="tireOption.id"
                        >
                          {{ tireOption.name }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 form-group"></div>

                  <div class="dragArea row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <p class="mbr-text mbr-fonts-style mb-4 display-7">
                        Legg til din bilkonfigurasjon - velg format
                      </p>
                    </div>
                    <div
                      class="col-lg-12 col-md-12 col-sm-12 form-group"
                      data-for="tyres"
                    >
                      <select
                        @change="onChange($event)"
                        v-model="selectedConfigMethod"
                        class="form-control form-select display-7"
                      >
                        <option
                          v-for="configMethod in configMethods"
                          :key="configMethod.id"
                          :value="configMethod.id"
                        >
                          {{ configMethod.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <input
                    v-if="LinkFieldVisible"
                    type="text"
                    name="upload-2"
                    placeholder="Lim inn lenke til din bilkonfigurasjon"
                    data-form-field="upload-2"
                    class="form-control display-7"
                    v-model="UrlLink"
                  />

                  <div>
                    <input
                      v-if="PdfUploadVisible"
                      type="file"
                      @change="uploadFile"
                      ref="file"
                    />
                  </div>
                </div>

                <div class="col-12 col-md-auto mbr-section-btn">
                  <button type="submit" class="w-100 btn btn-primary display-4">
                    Velg
                  </button>
                </div>
              </div>
            </form>
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
import BuyerNavBar from "./BuyerNavBar.vue";
import RequestService from "../../services/request.service.js";
import authHeader, { AuthHead } from "../../services/auth-header.js";
import axios from "axios";
export default {
  components: { BuyerNavBar },
  data() {
    return {
      carbrands: [],
      selectedCarbrand: "",
      tireOptions: [],
      selectedTireOption: "",
      configMethods: "",
      selectedConfigMethod: "",
      LinkFieldVisible: false,
      PdfUploadVisible: false,
      UrlLink: "",
      file: "",
    };
  },
  mounted() {
    RequestService.sendAuthorizedGetRequest("/api/buyer/carbrands").then(
      (response) => (
        (this.carbrands = response[0]),
        (this.tireOptions = response[1]),
        (this.configMethods = response[2]),
        console.log(response)
      )
    );
  },
  methods: {
    handleSubmit() {
      console.log(this.selectedCarbrand);
      console.log(this.selectedTireOption);
      console.log(this.LinkFieldVisible);
    },
    onChange(event) {
      this.LinkFieldVisible = this.selectedConfigMethod == 1;
      this.PdfUploadVisible = this.selectedConfigMethod == 2;
    },
    uploadFile() {
      console.log(this.$refs.file.files[0]);
    },
  },
};
</script>
