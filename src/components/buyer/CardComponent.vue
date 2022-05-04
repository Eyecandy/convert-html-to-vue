<template>
  <div class="margin">
    <div class="container">
      <div class="element-wrapper">
        <div>
          <img
            src="../../assets/images/features11.svg"
            width="20"
            height="20"
          />
        </div>
        <div class="box">
          <div>
            <div class="item-content">
              <h5 class="item-title mbr-fonts-style display-5">
                {{ carBrand }}
              </h5>
              <br />
              <br />

              <p class="mbr-text mbr-fonts-style mt-3 display-7">
                Leveringssted: {{ county }}

                <br />
                <br />
                <br />
                Dekkvalg: {{ tireOption }}
                <br />
                <br />
              </p>
            </div>

            <div width="50px" @click="downloadFile(priceRequestId)">
              <a class="btn btn-success item-btn display-4"
                ><span
                  class="
                    imind-bird-deliveringletter
                    mbr-iconfont mbr-iconfont-btn
                  "
                ></span
                >Se din konfigurasjon&nbsp;</a
              >
            </div>
          </div>
          <div>
            <div class="item-content">
              <p class="mbr-text mbr-fonts-style mt-3 display-7">
                Antall forhandlere som har mottat forespørsel:
                {{ numSellerTotal }}
                <br />
                <br />
                <br />
                Antall svar fra forhandlere så langt: {{ numSellerAnswered }}
                <br />
                <br />
                <br />

                Du vil kunne se den beste prisen: Kl: {{ deadlineTime }} - Dato:
                {{ deadlineDate }}
                <br />
                <br />
                <br />
              </p>
            </div>

            <div class="col-12 col-md-auto mbr-section-btn">
              <button
                :disabled="!isDeadlineReached ? '' : disabled"
                class="w-100 btn btn-primary display-4"
              >
                Se den beste prisen
              </button>
            </div>
          </div>
        </div>
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

  data() {
    return {
      disabled: false,
    };
  },

  props: {
    carBrand: String,
    county: String,
    deadlineDate: String,
    deadlineTime: String,
    configMethod: String,
    tireOption: String,
    isDeadlineReached: Boolean,
    numSellerTotal: Number,
    numSellerAnswered: Number,
    priceRequestId: Number,
    configUrl: String,
  },

  methods: {
    getFile(pricerequestId) {
      console.log(configUrl);
      var url = `/api/buyer/pricerequest/getfile/${pricerequestId}`;
      RequestService.sendAuthorizedGetRequestForFileDownload(url).then(
        console.log("success")
      );
    },
    downloadFile(pricerequestId) {
      var url = `/api/buyer/pricerequest/getfile/${pricerequestId}`;

      if (this.configMethod === "PDF") {
        axios
          .get(url, {
            headers: {
              Authorization: authHeader().Authorization,
            },
            responseType: "blob", // had to add this one here
          })
          .then((response) => {
            const blob = new Blob([response.data], { type: "application/pdf" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);

            link.click();
            window.open(link.href);
            URL.revokeObjectURL(link.href);
          })
          .catch(console.error);
      } else {
        console.log(this.configUrl);

        window.location.href = this.configUrl;
      }
    },
  },
};
</script>


<style scoped>
.margin {
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid rgb(75, 75, 82);
  border-radius: 5px;
  height: 300px;
}
.box {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 2em;
}

.box :first-child {
  align-self: center;
}
</style>
