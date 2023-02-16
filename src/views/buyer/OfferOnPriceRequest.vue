<template>
  <div>
    <section
      data-bs-version="5.1"
      class="content4 cid-t4jDV5F4dY"
      id="content4-1i"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="title col-md-12 col-lg-12">
            <h3
              class="
                mbr-section-title mbr-fonts-style
                align-left
                mb-4
                display-5
              "
            >
              {{ priceRequest.carBrand }}<br />
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
              {{ priceRequest.county }}
            </h4>

            <h4
              class="
                mbr-section-subtitle
                align-left
                mbr-fonts-style
                mb-4
                display-7
              "
            >
              dekkvalg:
              {{ priceRequest.tireOption }}
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
                  <a><strong>TILBUD MOTTATT</strong></a>
                </h3>

                <br />
                <br />

                <div class="row justify-content-center">
                  <h5
                    class="
                      mbr-section-title mbr-fonts-style
                      align-center
                      mb-0
                      display-7
                    "
                  >
                    Du har mottatt det laveste tilbudet fra forhandlere på:
                    {{ priceRequestStatsDto.lowestOffer }}
                    NOK
                  </h5>
                </div>

                <br />
                <br />

                <div class="row justify-content-center">
                  <h5
                    class="
                      mbr-section-title mbr-fonts-style
                      align-center
                      mb-0
                      display-7
                    "
                  >
                    Det høyeste tilbudet var på:
                    {{ priceRequestStatsDto.highestOffer }}
                    NOK
                  </h5>
                </div>

                <br />
                <br />

                <div class="row justify-content-center">
                  <h5
                    class="
                      mbr-section-title mbr-fonts-style
                      align-center
                      mb-0
                      display-7
                    "
                  >
                    Du har spart
                    {{
                      priceRequestStatsDto.highestOffer -
                      priceRequestStatsDto.lowestOffer
                    }}
                    NOK
                  </h5>
                </div>
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
              <div width="50px" @click="downloadFile()">
                <a class="btn btn-success item-btn display-4"
                  ><span
                    class="
                      imind-bird-deliveringletter
                      mbr-iconfont mbr-iconfont-btn
                    "
                  ></span
                  >Se tilbud fra forhandler</a
                >
              </div>
              <div>
                <button
                  @Click="customerAcceptOffer"
                  class="btn btn-white display-4"
                  exact
                >
                  Bestill Bilen!
                </button>
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
      priceRequestStatsDto: {},
      pdfsrc: "",
    };
  },
  created() {
    this.priceRequestOrderIdParam = this.$route.params.priceRequestOrderId;
    this.priceRequest = JSON.parse(
      atob(this.$route.params.encodedPriceRequest)
    );
    this.getLowestAndHighestOfferOnPriceRequest(
      this.priceRequest.priceRequestId
    );
  },
  methods: {
    downloadFile() {
      var url = `/api/buyer/pricerequest/lowest-offer-file/${this.priceRequest.priceRequestId}`;
      RequestService.downloadLowestOfferFile(url);
    },
    getLowestOfferFile() {
      var url = `/api/buyer/pricerequest/lowest-offer-file/${this.priceRequest.priceRequestId}`;
      this.pdfsrc = RequestService.getLowestOfferFile(url);
      document.getElementById("myid").src = this.pdfsrc;
    },
    getLowestAndHighestOfferOnPriceRequest(priceRequestId) {
      var url = `/api/buyer/pricerequest/price-request-stats/${priceRequestId}`;
      RequestService.sendAuthorizedGetRequest(url).then(
        (response) => (this.priceRequestStatsDto = response)
      );
    },
    customerAcceptOffer() {
      RequestService.sendAuthorizedPostRequest(
        "/api/buyer/pricerequest/customer-accept-offer",
        { priceRequestId: this.priceRequest.priceRequestId }
      )
        .then((response) => console.log(response))
        .catch((response) => console.log(response));
    },
  },
};
</script>


