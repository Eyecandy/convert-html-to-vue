<template>
  <div class="item features-image сol-12 col-md-6 col-lg-6">
    <div class="element-wrapper">
      <div class="item-img">
        <img src="../../assets/images/features10.svg" />
      </div>
      <div class="item-content">
        <h5 class="item-title mbr-fonts-style display-5">
          {{ priceRequest.carBrand.name }}
        </h5>

        <p class="mbr-text mbr-fonts-style mt-3 display-7">
          Leveringssted: {{ priceRequest.county.name }} <br />Frist:
          {{ datelineDate }} -
          <em>kl {{ deadlineTime }}</em>
        </p>

        <p class="mbr-text mbr-fonts-style mt-3 display-7">
          Pris på ditt tilbud:
          <em>
            {{ totalPrice }}
          </em>
        </p>

        <p class="mbr-text mbr-fonts-style mt-3 display-7">
          Tilbud er levert og:
          <em :style="{ color: '#90EE90' }" v-if="statuOnOffer === 'Vunnet'"
            >{{ statuOnOffer }}
          </em>
          <em
            :style="{ color: '#8b0000' }"
            v-else-if="statuOnOffer === 'Ikke vunnet'"
            >{{ statuOnOffer }}
          </em>
          <em :style="{ color: '#FFFF99' }" v-else>{{ statuOnOffer }} </em>
        </p>
      </div>
      <div class="mbr-section-btn item-footer mt-2">
        <router-link
          class="btn btn-white display-4"
          :to="{
            name: `seller-giveoffer`,
            params: {
              priceRequestOrderId: priceRequestOrder.id,
              encodedPriceRequest: encodedPriceRequest,
            },
          }"
          exact
          >Se tilbudet ditt</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "CardComponentSeller",

  props: {
    priceRequest: Object,
    priceRequestOrder: Object,
    deadlineReached: Boolean,
    totalPrice: Number,
    deadlineReached: Boolean,
  },

  data() {
    return {
      encodedPriceRequest: "",
      deadlineTime: "",
      datelineDate: "",
      statuOnOffer: "",
      result: "",
    };
  },

  created() {
    this.encodedPriceRequest = btoa(JSON.stringify(this.priceRequest));
    this.deadlineTime = moment(this.priceRequest.deadline).format("HH:mm:ss");
    this.datelineDate = moment(this.priceRequest.deadline).format("DD/MM/YYYY");

    this.setStatusOnOffer();
  },

  methods: {
    setStatusOnOffer() {
      if (!this.deadlineReached) {
        this.statuOnOffer = "Venter på tidsfrist går ut";
      } else if (this.priceRequestOrder.customerAcceptedThisOffer) {
        this.statuOnOffer = "Vunnet";
      } else if (!this.priceRequest.customerHasAcceptedOffer) {
        this.statuOnOffer = "Venter på kunde avgjørelse";
      } else {
        this.statuOnOffer = "Ikke vunnet";
      }
    },
  },
};
</script>



<style scoped>
.green {
  color: "#90EE90";
}

.dark-red {
  color: "#8b0000";
}
</style>