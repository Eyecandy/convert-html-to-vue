<template>
  <div>
    <section
      data-bs-version="5.1"
      class="content4 cid-t4jDV5F4dY"
      id="content4-1i"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="title col-md-6 col-lg-6">
            <h3
              class="
                mbr-section-title mbr-fonts-style
                align-left
                mb-4
                display-5
              "
            >
              {{ priceRequest.carBrand.name }}<br />
            </h3>
            <h4
              class="
                mbr-section-subtitle
                align-left
                mbr-fonts-style
                mb-4
                display-7
              "
            >
              Leveringssted:
              {{ priceRequest.county.name }} <br />Frist:
              {{ priceRequest.deadline.split("T")[0] }} -
              <em
                >kl {{ priceRequest.deadline.split("T")[1].split(".")[0] }}</em
              >
            </h4>

            <a
              class="btn btn-success item-btn display-4"
              @click="downloadFile(priceRequestOrderId)"
              ><span
                class="
                  imind-bird-deliveringletter
                  mbr-iconfont mbr-iconfont-btn
                "
              >
                <img
                  src="../../assets/images/pdf.png"
                  alt=""
                  width="50"
                  height="40" /></span
              >Se kunde sin bil konfigurasjon</a
            >
          </div>
          <div class="title col-md-6 col-lg-6">
            <h3
              class="
                mbr-section-title mbr-fonts-style
                align-left
                mb-4
                display-5
              "
            >
              Kunde Opplysninger
            </h3>

            <h4
              class="
                mbr-section-subtitle
                align-left
                mbr-fonts-style
                mb-4
                display-7
              "
            >
              Navn:
              {{ buyerInfoDto.firstName + " " + buyerInfoDto.lastName }}
              <br />
              <br />
              Tlf Nummer: {{ buyerInfoDto.phoneNumber }}
              <br />
              <br />
              E-post:
              {{ buyerInfoDto.email }}
              <br />
              <br />
              By: {{ buyerInfoDto.city }}
              <br />
              <br />
              Postnummer: {{ buyerInfoDto.postBox }}
              <br />
              <br />
              Gate Addresse:
              {{ buyerInfoDto.streetName + " " + buyerInfoDto.streetNumber }}
            </h4>
          </div>
        </div>
      </div>
    </section>

    <span>
      <section
        data-bs-version="5.1"
        class="content5 cid-OJ6634jHyG"
        id="design-block-OJ6634jHyG"
      >
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-12 col-lg-9 frame">
              <div class="col-12" style="margin-bottom: 20px">
                <h3
                  class="
                    mbr-section-title mbr-fonts-style
                    align-center
                    mb-0
                    display-7
                  "
                >
                  <a class="text-success"><strong>GI TILBUD</strong></a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </span>

    <section
      data-bs-version="5.1"
      class="content11 cid-t4jLAyePBJ"
      id="content11-1j"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="mbr-section-btn align-center">
              <div>
                <router-link
                  class="btn btn-white display-4"
                  :to="{
                    name: `seller-giveoffer-part2`,
                    params: {
                      priceRequestOrderId: priceRequestOrderIdParam,
                      encodedPriceRequest: encodedPriceRequest,
                    },
                  }"
                  exact
                  >GI TILBUD</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import RequestService from "../../services/request.service.js";
export default {
  props: { priceRequestOrderId: String, encodedPriceRequest: String },
  data() {
    return {
      priceRequest: {},
      priceRequestOrderIdParam: -1,
      configMethod: "None",
      buyerInfoDto: { x: "nothing" },
    };
  },
  async mounted() {
    await RequestService.sendAuthorizedGetRequest(
      `/api/seller/pricerequestorder/getbuyerinfo/${this.$route.params.priceRequestOrderId}`
    )
      .then((response) => (this.buyerInfoDto = response))
      .catch(() => alert("mounted in giveOfferFailed on request to backend"));
  },
  created() {
    this.priceRequestOrderIdParam = this.$route.params.priceRequestOrderId;
    this.priceRequest = JSON.parse(
      atob(this.$route.params.encodedPriceRequest)
    );
    this.configMethod = this.priceRequest.configMethod.name;
  },
  methods: {
    downloadFile(priceRequestOrderId) {
      console.log(priceRequestOrderId);
      var url = `/api/seller/pricerequestorder/getfile/${this.$route.params.priceRequestOrderId}`;

      RequestService.downloadFile(
        url,
        this.configMethod,
        this.priceRequest.configuration
      );
    },
  },
};
</script>


