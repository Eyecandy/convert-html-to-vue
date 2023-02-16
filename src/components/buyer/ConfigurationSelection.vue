<template>
  <div class="mbr-form form-with-styler">
    <div class="dragArea row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <p class="mbr-text mbr-fonts-style mb-4 display-7">
          Velg ditt bilmerke
        </p>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 form-group">
        <select
          v-model="selectedCarbrand"
          :class="getClassForSelect(selectedCarbrand)"
        >
          <option
            v-for="carbrand in carbrands"
            :key="carbrand.id"
            :value="carbrand"
          >
            {{ carbrand.name }}
          </option>
        </select>

        <div class="col-lg-12 col-md-12 col-sm-12 form-group"></div>

        <div class="dragArea row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <p class="mbr-text mbr-fonts-style mb-4 display-7">Dekktype</p>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 form-group">
            <select
              v-model="selectedTireOption"
              :class="getClassForSelect(selectedTireOption)"
            >
              <option
                v-for="tireOption in tireOptions"
                :key="tireOption.id"
                :value="tireOption"
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
          <div class="col-lg-12 col-md-12 col-sm-12 form-group">
            <select
              @change="onChange($event)"
              v-model="selectedConfigMethod"
              :class="getClassForSelect(selectedConfigMethod)"
            >
              <option
                v-for="configMethod in configMethods"
                :key="configMethod.id"
                :value="configMethod"
              >
                {{ configMethod.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
      <div
        v-if="PdfUploadVisible || LinkFieldVisible"
        class="col-lg-12 col-md-12 col-sm-12 form-group"
      >
        <input
          v-if="LinkFieldVisible"
          type="text"
          name="upload-2"
          placeholder="Lim inn lenke til din bilkonfigurasjon"
          data-form-field="upload-2"
          :class="getClassForField(UrlLink)"
          v-model="UrlLink"
        />

        <div>
          <input
            id="upload-file-btn"
            v-if="PdfUploadVisible"
            type="file"
            @change="uploadFile"
            ref="file"
            hidden
          />
          <span v-if="PdfUploadVisible">
            <label :class="getClassForUploadFileButton()" for="upload-file-btn"
              >Velg en PDF</label
            >

            {{ getFileUploadText() }}
          </span>
        </div>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 form-group">
        <p class="mbr-text mbr-fonts-style mb-4 display-7">Fylke</p>
      </div>
      <div class="col-lg-12 col-md-12 col-sm-12 form-group">
        <select
          v-model="selectedCounty"
          :class="getClassForSelect(selectedCounty)"
        >
          <option v-for="county in counties" :key="county.id" :value="county">
            {{ county.name }}
          </option>
        </select>
      </div>

      <button @click="handleSubmit" class="w-100 btn btn-primary display-4">
        Neste
      </button>
    </div>
  </div>
</template>

<script>
import RequestService from "../../services/request.service.js";

export default {
  emits: ["nextPage", "formData"],
  data() {
    return {
      carbrands: [],

      tireOptions: [],
      counties: [],

      configMethods: [],

      LinkFieldVisible: false,
      PdfUploadVisible: false,

      UrlLink: "",
      file: "",

      selectedConfigMethod: "",
      selectedCarbrand: "",
      selectedTireOption: "",
      selectedCounty: "",

      missingSelects: false,
    };
  },
  mounted() {
    RequestService.sendAuthorizedGetRequest(
      "/api/buyer/pricerequest/dropdownvalues"
    ).then(
      (response) => (
        (this.carbrands = response[0]),
        (this.tireOptions = response[1]),
        (this.configMethods = response[2]),
        (this.counties = response[3])
      )
    );
  },
  methods: {
    handleSubmit() {
      if (this.everythingSelected()) {
        this.nextPage();
      } else {
        this.missingSelects = true;
      }
    },
    everythingSelected() {
      const carBrandSelected = this.selectedCarbrand !== "";
      const configMethodSelected = this.selectedConfigMethod !== "";
      const countySelected = this.selectedCounty !== "";
      const tireSelectedOption = this.selectedTireOption !== "";
      const pdfSelected = this.file !== "" && this.PdfUploadVisible;
      const linkSelected = this.UrlLink !== "" && this.LinkFieldVisible;
      const someConfigSelected = pdfSelected || linkSelected;
      console.log(pdfSelected, "pdf selected");
      console.log(linkSelected, "Link selected");

      return (
        carBrandSelected &&
        configMethodSelected &&
        someConfigSelected &&
        tireSelectedOption &&
        countySelected
      );
    },
    getClassForSelect(selectValue) {
      if (selectValue === "" && this.missingSelects) {
        return "form-control form-select display-7 select-error";
      }
      return "form-control form-select display-7";
    },

    getClassForField(value) {
      if (value === "" && this.missingSelects) {
        return "form-control display-7 select-error";
      }
      return "form-control display-7";
    },
    getClassForUploadFileButton() {
      if (this.file === "" && this.missingSelects) {
        return "upload-file-label-error";
      }
      return "upload-file-label";
    },

    getFileUploadText() {
      if (this.file === "") {
        return "Ingen fil valgt";
      }
      return this.file.name;
    },

    nextPage() {
      const priceRequestDto = JSON.stringify({
        carBrand: this.selectedCarbrand,
        tireOption: this.selectedTireOption,
        link: this.UrlLink,
        county: this.selectedCounty,
        configMethod: this.selectedConfigMethod,
      });

      var formData = new FormData();
      formData.append("file", this.file);

      formData.append(
        "priceRequestDTO",
        new Blob([priceRequestDto], {
          type: "application/json",
        })
      );

      sessionStorage.setItem(
        "carConfiguration",
        JSON.stringify(priceRequestDto)
      );

      this.$emit("formData", formData);
      this.$emit("nextPage", 2);
    },

    onChange(event) {
      this.LinkFieldVisible = this.selectedConfigMethod.id == 1;
      this.PdfUploadVisible = this.selectedConfigMethod.id == 2;
    },
    uploadFile() {
      this.file = this.$refs.file.files[0];
    },
  },
};
</script>


<style scoped>
.select-error {
  background-color: rgb(230, 137, 137, 0.5);
}
.upload-file-label {
  background-color: rgb(68, 134, 255);
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}

.upload-file-label-error {
  background-color: rgb(230, 137, 137, 0.5);
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-top: 1rem;
}
</style>