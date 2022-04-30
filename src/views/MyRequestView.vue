<template>
  <section
    data-bs-version="5.1"
    class="form4 cid-t2pwi0gPN4 mbr-fullscreen"
    id="form4-b"
  >
    <div class="container">
      <div class="outer-container">
        <h4>Mine forespørsler</h4>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col1 align-left my-auto">
            <div class="row justify-content-center">
              <div class="card col-12 col-md-12 col-lg-12 md-pb">
                <div class="card-wrapper">
                  <div class="card-box">
                    <h5 class="card-text mbr-fonts-style display-4">
                      <div v-for="pr in priceRequests" v-bind:key="pr.id">
                        <CardComponent
                          :carBrand="pr.carBrand.name"
                          :county="pr.county.name"
                          :deadline="pr.deadline"
                        >
                        </CardComponent>
                      </div>
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardComponent from "../components/buyer/CardComponent.vue";
import RequestService from "../services/request.service.js";
import authHeader, { AuthHead } from "../services/auth-header.js";
export default {
  components: { CardComponent },
  component: [CardComponent],

  data() {
    return { priceRequests: [] };
  },

  mounted() {
    RequestService.sendAuthorizedGetRequest(
      "/api/buyer/pricerequest/list_price_request"
    ).then((response) => (this.priceRequests = response));
  },
};
</script>

<style scoped>
.outer-container {
  position: relative;
  top: 80px;
}
</style>