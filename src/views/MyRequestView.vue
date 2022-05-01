<template>
  <section
    v-cloak
    data-bs-version="5.1"
    class="form4 cid-t2pwi0gPN4 mbr-fullscreen"
    id="form4-b"
  >
    <div class="container">
      <div class="outer-container">
        <div>
          <div class="col-8 col-md-auto mbr-section-btn" w>
            <button
              @click.prevent="createNewPriceRequest()"
              class="w-100 btn btn-primary display-4"
            >
              Ny forespørsel
            </button>
          </div>
        </div>
        <div v-if="isPriceRequestsEmpty()" class="infoline">
          <h4>Du har ingen forspørsler</h4>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-12 col-md-12 col1 align-left my-auto">
            <div class="row justify-content-center">
              <div class="card col-12 col-md-12 col-lg-12 md-pb">
                <div class="card-wrapper">
                  <div class="card-box">
                    <h5 class="card-text mbr-fonts-style display-4">
                      <div v-for="pr in priceRequests" v-bind:key="pr.id">
                        <CardComponent
                          :carBrand="pr.carBrandName"
                          :county="pr.county.name"
                          :deadlineDate="pr.deadlineDatePretty"
                          :deadlineTime="pr.deadlineTimePretty"
                          :configMethod="pr.configMethod.name"
                          :tireOption="pr.tireOption.name"
                          :isDeadlineReached="pr.deadLineReached"
                          :numSellerTotal="pr.numRetailersSentTo"
                          :numSellerAnswered="pr.numRetailersAnswered"
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

  methods: {
    isPriceRequestsEmpty() {
      console.log(this.priceRequests.length == 0);
      return this.priceRequests.length == 0;
    },
    createNewPriceRequest() {
      this.$router.push("/configure-carbrand");
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