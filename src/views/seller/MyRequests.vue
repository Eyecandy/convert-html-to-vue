<template>
  <section
    v-if="displayCards"
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

      <div class="row mt-5" v-for="pr in priceOrderRequests" v-bind:key="pr.id">
        <CardComponent
          :priceRequest="pr.priceRequest"
          :priceRequestOrderId="pr.id"
        >
        </CardComponent>
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

  data() {
    return { priceOrderRequests: [], displayCards: true };
  },

  mounted() {
    RequestService.sendAuthorizedGetRequest(
      "/api/seller/pricerequestorder/listpricerequestorders"
    ).then((response) => (this.priceOrderRequests = response));
  },

  methods: {
    isPriceRequestsEmpty() {
      console.log(this.priceRequests.length == 0);
      return this.priceRequests.length == 0;
    },
  },
};
</script>

