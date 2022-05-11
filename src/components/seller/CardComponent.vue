<template>
  <div class="item features-image сol-12 col-md-6 col-lg-6">
    <div class="element-wrapper">
      <div class="item-img">
        <img src="../../assets/images/features11.svg" />
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
          Tidsfrist status:
          <em :style="{ color: '#90EE90' }" v-if="deadlineStatus === 'Aktiv'">
            {{ deadlineStatus }}
          </em>

          <em :style="{ color: '#8b0000' }" v-else>
            {{ deadlineStatus }}
          </em>
        </p>
        <p class="mbr-text mbr-fonts-style mt-3 display-7">
          Tilbud levert:
          <em :style="{ color: '#90EE90' }" v-if="deliveredStatus === 'Ja'">
            {{ deliveredStatus }}
          </em>

          <em :style="{ color: '#8b0000' }" v-else>
            {{ deliveredStatus }}
          </em>
        </p>
      </div>
      <div class="mbr-section-btn item-footer mt-2">
        <router-link
          class="btn btn-white display-4"
          :to="{
            name: `seller-giveoffer`,
            params: {
              priceRequestOrderId: priceRequestOrderId,
              encodedPriceRequest: encodedPriceRequest,
            },
          }"
          exact
          >Les mer og gi Tilbud</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import RequestService from "../../services/request.service.js";

import authHeader, { AuthHead } from "../../services/auth-header.js";
import download from "downloadjs";
import axios from "axios";
import moment from "moment";
export default {
  name: "CardComponentSeller",

  props: {
    priceRequest: Object,
    priceRequestOrderId: Number,
    deadlineReached: Boolean,
    answered: Boolean,
  },

  data() {
    return {
      encodedPriceRequest: "",
      deadlineTime: "",
      datelineDate: "",
      deadlineStatus: "",
      deliveredStatus: "",
      result: "",
    };
  },

  created() {
    this.encodedPriceRequest = btoa(JSON.stringify(this.priceRequest));
    this.deadlineTime = moment(this.priceRequest.deadline).format("HH:mm:ss");
    this.datelineDate = moment(this.priceRequest.deadline).format("DD/MM/YYYY");
    this.setDeadlineStatus();
    this.setDeliveredStatus();
  },

  methods: {
    setDeadlineStatus() {
      if (this.deadlineReached) {
        this.deadlineStatus = "Utløpt";
      } else {
        this.deadlineStatus = "Aktiv";
      }
    },
    setDeliveredStatus() {
      if (this.answered) {
        this.deliveredStatus = "Ja";
      } else {
        this.deliveredStatus = "Ikke enda";
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