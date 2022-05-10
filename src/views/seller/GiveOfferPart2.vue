<template>
  <section class="form cid-t4kckIeNap" id="formbuilder-1r">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 mx-auto mbr-form">
          <!--Formbuilder Form-->
          <form>
            <div class="form-row">
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
                <h5 class="mbr-fonts-style display-5">
                  Last opp tilbud på {{ priceRequest.carBrand.name }},Levert
                  {{ priceRequest.county.name }} fylke
                </h5>
              </div>
              <div
                class="col-lg-12 col-md-12 col-sm-12 form-group"
                data-for="number"
              >
                <input
                  type="number"
                  placeholder="Tast inn totalbeløp i NOK"
                  class="form-control display-7"
                  v-model="amountTotal"
                />
              </div>
              <div
                data-for="number1"
                class="col-lg-12 col-md-12 col-sm-12 form-group"
              >
                <input
                  type="number"
                  placeholder="Oppgi antatt leveringstid i mnd."
                  class="form-control display-7"
                  v-model="monthsToDeliver"
                />
              </div>
              <div
                class="col-lg-12 col-md-12 col-sm-12 form-group"
                data-for="text1"
              >
                <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                  <div>
                    <input type="file" @change="uploadFile" ref="file" />
                  </div>
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12">
                <hr />
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12 form-group">
                <div class="form-control-label">
                  <label
                    for="Jeg bekrefter at informasjonen stemmer-formbuilder-1r"
                    class="mbr-fonts-style display-7"
                    >Bekreft at informasjonen er korrekt</label
                  >
                </div>
                <div
                  data-for="Jeg bekrefter at informasjonen stemmer"
                  class="form-check ms-2"
                >
                  <input
                    type="checkbox"
                    value="Yes"
                    name="Jeg bekrefter at informasjonen stemmer"
                    data-form-field="Jeg bekrefter at informasjonen stemmer"
                    required="required"
                    class="form-check-input display-7"
                    id="Jeg bekrefter at informasjonen stemmer-formbuilder-1r"
                  />
                  <label
                    for="Jeg bekrefter at informasjonen stemmer-formbuilder-1r"
                    class="form-check-label display-7"
                    >Jeg bekrefter at informasjonen stemmer</label
                  >
                </div>
              </div>
              <div class="col-lg-12 col-md-12 col-sm-12">
                <hr />
              </div>
              <div class="col-auto">
                <button
                  type="button"
                  class="w-100 w-100 w-100 w-100 btn btn-primary display-7"
                  @Click="handleSubmit"
                >
                  Send inn tilbud
                </button>
              </div>
            </div>
          </form>
          <!--Formbuilder Form-->
        </div>
      </div>
    </div>
  </section>
</template>




<script>
import RequestService from "../../services/request.service.js";
import axios from "axios";
import authHeader, { AuthHead } from "../../services/auth-header.js";
export default {
  props: { priceRequestOrderId: String, encodedPriceRequest: String },
  data() {
    return {
      amountTotal: null,
      monthsToDeliver: null,
      priceRequest: {},
      priceRequestOrderIdParam: -1,
      configMethod: "None",
      file: "",
    };
  },
  created() {
    this.priceRequestOrderIdParam = this.$route.params.priceRequestOrderId;
    this.priceRequest = JSON.parse(
      atob(this.$route.params.encodedPriceRequest)
    );
    this.configMethod = this.priceRequest.configMethod.name;
  },
  methods: {
    handleSubmit() {
      console.log(this.amountTotal);
      console.log(this.monthsTotal);
      console.log(this.file);
      var offerDto = JSON.stringify({
        priceRequestOrderId: this.priceRequestOrderId,
        amountTotal: this.amountTotal,
        monthsToDelivery: this.monthsToDeliver,
      });

      console.log(offerDto);

      var formData = new FormData();
      formData.append("file", this.file);

      formData.append(
        "offerDto",
        new Blob([offerDto], {
          type: "application/json",
        })
      );
      axios
        .post("/api/seller/pricerequestorder/offer", formData, {
          headers: {
            Authorization: authHeader().Authorization,
          },
        })
        .then((response) => {
          console.log("SUCCESS");
          this.$router.push("/seller/requests");
        })
        .catch((response) => {
          console.log("ERROR");
          console.log(response);
        });
    },
    uploadFile() {
      this.file = this.$refs.file.files[0];
      console.log(this.amountTotal);
      console.log(this.monthsToDeliver);
      console.log(this.file);
    },
  },
};
</script>
