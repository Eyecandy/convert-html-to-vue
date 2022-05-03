<template>
  <div class="item features-image сol-12 col-md-6 col-lg-6">
    <div class="element-wrapper">
      <div class="item-img">
        <img src="../../assets/images/features11.svg" />
      </div>
      <div class="item-content">
        <h5 class="item-title mbr-fonts-style display-5">{{ carBrand }}</h5>

        <p class="mbr-text mbr-fonts-style mt-3 display-7">
          Leveringssted: {{ county }} <br />Frist: {{ deadlineDate }} -
          <em>kl {{ deadlineTime }}</em>
        </p>
      </div>
      <div class="mbr-section-btn item-footer mt-2">
        <a href="page5-2.html" class="btn btn-success item-btn display-4"
          ><span
            class="imind-bird-deliveringletter mbr-iconfont mbr-iconfont-btn"
          ></span
          >Les mer og gi tilbud&nbsp;</a
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
export default {
  name: "CardComponentBuyer",

  props: {
    carBrand: String,
    county: String,
    deadlineDate: String,
    deadlineTime: String,
    configMethod: String,
    tireOption: String,
    isDeadlineReached: Boolean,
    priceRequestId: Number,
    priceRequestOrderId: Number,
    configUrl: String,
  },

  methods: {},
};
</script>



