<template>
  <section
    data-bs-version="5.1"
    class="features3 cid-t4jbe4K6Cm"
    id="features3-1e"
  >
    <div class="container">
      <div class="mbr-section-head">
        <h4 class="mbr-section-title mbr-fonts-style align-left mb-0 display-5">
          Dine forespørsler
        </h4>
      </div>
      <div class="row mt-5">
        <div class="item features-image сol-12 col-md-6 col-lg-6">
          <div class="element-wrapper">
            <div class="item-img">
              <img src="assets/images/features10.svg" />
            </div>
            <div class="item-content">
              <h5 class="item-title mbr-fonts-style display-5">Volvo XC90</h5>

              <p class="mbr-text mbr-fonts-style mt-3 display-7">
                Leveringssted: Troms<br />Frist: 30.04 - <em>kl 13:50</em>
              </p>
            </div>
            <div class="mbr-section-btn item-footer mt-2">
              <a href="page5-2.html" class="btn btn-success item-btn display-4"
                ><span
                  class="
                    imind-bird-deliveringletter
                    mbr-iconfont mbr-iconfont-btn
                  "
                ></span
                >Les mer og gi tilbud&nbsp;</a
              >
            </div>
          </div>
        </div>

        <div class="item features-image сol-12 col-md-6 col-lg-6">
          <div class="element-wrapper">
            <div class="item-img">
              <img src="../../assets/images/features11.svg" />
            </div>
            <div class="item-content">
              <h5 class="item-title mbr-fonts-style display-5">Ford S-Max</h5>

              <p class="mbr-text mbr-fonts-style mt-3 display-7">
                Leveringssted: Agder<br />Frist: 30.04 - kl 17:45
              </p>
            </div>
            <div class="mbr-section-btn item-footer mt-2">
              <a
                href=""
                class="btn btn-success item-btn display-4"
                target="_blank"
                ><span
                  class="
                    imind-bird-deliveringletter
                    mbr-iconfont mbr-iconfont-btn
                  "
                ></span
                >Les mer og gi tilbud
              </a>
            </div>
          </div>
        </div>
        <div class="item features-image сol-12 col-md-6 col-lg-6"></div>

        <div class="item features-image сol-12 col-md-6 col-lg-6"></div>
        <div class="item features-image сol-12 col-md-6 col-lg-6"></div>
        <div class="item features-image сol-12 col-md-6 col-lg-6"></div>
      </div>
    </div>
  </section>

  <section
    data-bs-version="5.1"
    once="footers"
    class="cid-t4j9oPE0hB"
    id="footer01-14"
  >
    <div class="container">
      <div class="media-container-row align-center">
        <div class="row title-row">
          <h1
            class="
              mbr-section-title
              align-center
              mbr-bold
              pb-4
              mbr-fonts-style
              display-7
            "
          >
            Dine nøkkeltall
          </h1>
        </div>

        <div class="row row-links">
          <ul class="foot-menu">
            <li class="foot-menu-item mbr-fonts-style display-4">
              <strong><u>Venter på svar: 2 stk</u></strong>
            </li>
            <li class="foot-menu-item mbr-fonts-style display-4">
              <u>Din svarprosent: <strong>95%</strong></u>
            </li>
            <li class="foot-menu-item first mbr-fonts-style display-4">
              <u>Antall vunnet: <strong>8 stk</strong></u>
            </li>
          </ul>
        </div>

        <div class="row row-copirayt">
          <p class="mbr-text mb-0 mbr-fonts-style align-center display-4"></p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardComponent from "../../components/seller/CardComponent.vue";
import RequestService from "../../services/request.service.js";
import authHeader, { AuthHead } from "../../services/auth-header.js";

export default {
  components: { CardComponent },
  component: [CardComponent],

  data() {
    return { priceRequests: [1] };
  },

  mounted() {
    RequestService.sendAuthorizedGetRequest("/api/seller/").then(
      (response) => (this.priceRequests = response)
    );
  },

  methods: {
    isPriceRequestsEmpty() {
      console.log(this.priceRequests.length == 0);
      return this.priceRequests.length == 0;
    },
  },
};
</script>

<style scoped>
.outer-container {
  position: relative;
  top: 80px;
}

.headline {
  top: -300px;
  right: -200px;
  position: relative;
}

.infoline {
  top: -400;
  right: -500px;
  position: relative;
}

.flexcontainer {
  display: flex;
}
</style>