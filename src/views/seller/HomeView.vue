<template>
  <section
    data-bs-version="5.1"
    class="features23 cid-t3a6wo27iv"
    id="features23-11"
  >
    <div class="container">
      <div class="card-wrapper pb-lg-4">
        <div class="card-box align-left">
          <div class="card-inner">
            <h4 class="mbr-section-title mbr-fonts-style display-5">
              God å se deg igjen <strong> {{ firstname }}</strong>
            </h4>
          </div>
        </div>
      </div>

      <div class="row content-row mt-4 mt-lg-2">
        <div class="card p-4 pb-md-5 col-12 col-md-6 col-lg-4">
          <div class="card-box">
            <div class="card-inner-block">
              <div class="title">
                <span class="num mbr-fonts-style display-7"
                  ><strong>Ventende tilbud</strong></span
                >
              </div>

              <p class="mbr-text card-text mbr-fonts-style display-6"></p>
              <p>
                <router-link :to="'/seller/requests'">
                  Du har
                  <strong>{{ notAnsweredAndActivePriceRequestOrder }} </strong>
                  forespørsler som venter på deg</router-link
                >
              </p>
            </div>
          </div>
        </div>
        <div class="card p-4 pb-md-5 col-12 col-md-6 col-lg-4">
          <div class="card-box">
            <div class="card-inner-block">
              <div class="title">
                <span class="num mbr-fonts-style display-7"
                  ><strong>Nøkkeltall</strong></span
                >
              </div>

              <p class="mbr-text card-text mbr-fonts-style display-4">
                Mottate forespørseler:
                <u>{{ numberOfRequests }} stk<br /></u>

                Venter på svar:
                <u
                  ><router-link :to="'/seller/requests'">
                    {{ notAnsweredAndActivePriceRequestOrder }}

                    stk</router-link
                  ></u
                ><br />Din svarprosent: <u>{{ answerPercentage }} %</u
                ><br />Antall salg:
                <u
                  ><router-link :to="'/seller/my-offers'">
                    {{ numPriceRequestWon }} stk</router-link
                  ></u
                >
              </p>
            </div>
          </div>
        </div>
        <div class="card p-4 pb-md-5 col-12 col-md-6 col-lg-4">
          <div class="card-box">
            <div class="card-inner-block">
              <div class="title">
                <span class="num mbr-fonts-style display-7"
                  ><strong>Visste du at...?</strong></span
                >
              </div>

              <p class="mbr-text card-text mbr-fonts-style display-4">
                <em> Du er en av våre topp tre leverandører. Godt jobba!</em>
              </p>
            </div>
          </div>
        </div>

        <div class="card p-4 pb-md-5 col-12 col-md-6 col-lg-4">
          <div class="card-box card-box-last">
            <div class="card-inner-block">
              <div class="mbr-text card-text-last mbr-fonts-style display-6">
                <strong>Firma: {{ sellerUserDto.retailerName }}</strong
                ><br />Kontaktperson: {{ firstname + " " + lastname }}

                <br />E-post:
                {{ email }}
                <br />
                Telefon: {{ phoneNumber }}
                <br />
                Endre opplysninger
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>


<script>
import RequestService from "../../services/request.service.js";
import SessionStorageService from "../../services/sessionStorage.service.js";
import PriceRequestOrderService from "../../services/PriceRequestOrder.service.js";
export default {
  data() {
    return {
      sellerUserDto: "",
      priceRequestOrders: "",
      priceRequestOrderseExtra: "",
      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
      numPriceRequestWon: "",
      notAnsweredAndActivePriceRequestOrder: "",
      answerPercentage: "",
      numberOfRequests: "",
    };
  },
  async mounted() {
    var priceRequestOrders = await RequestService.sendAuthorizedGetRequest(
      "/api/seller/pricerequestorder/listpricerequestorders"
    ).then((response) => PriceRequestOrderService.addExtraFields(response));

    var numberOfPriceRequestOrders = priceRequestOrders.length;
    this.numPriceRequestWon = this.countWon(priceRequestOrders);
    var numPriceRequestAnswered = this.countAnswered(priceRequestOrders);

    this.answerPercentage = this.getAnswerPercentage(
      numPriceRequestAnswered,
      numberOfPriceRequestOrders
    );

    this.notAnsweredAndActivePriceRequestOrder =
      this.countNotAnsweredAndActive(priceRequestOrders);
    this.numberOfRequests = numberOfPriceRequestOrders;
  },
  created() {
    RequestService.sendAuthorizedGetRequest("/api/user/info")
      .then((response) => this.setSellerUser(response))
      .catch((response) => console.log("error"));
  },
  methods: {
    countWon(priceRequestOrders) {
      var count = 0;
      for (let [index, pro] of priceRequestOrders.entries()) {
        if (pro.customerAcceptedThisOffer) {
          count = count + 1;
        }
      }
      return count;
    },
    countAnswered(priceRequestOrders) {
      var count = 0;

      for (let [index, pro] of priceRequestOrders.entries()) {
        if (pro.answered) {
          count = count + 1;
        }
      }
      return count;
    },
    countNotAnsweredAndActive(priceRequestOrdersExtra) {
      var count = 0;
      console.log(priceRequestOrdersExtra);
      for (let [index, pro] of priceRequestOrdersExtra.entries()) {
        if (!pro.answered && !pro.deadlineReached) {
          count = count + 1;
        }
      }
      return count;
    },
    getAnswerPercentage(numPriceRequestAnswered, numberOfPriceRequestOrders) {
      if (numberOfPriceRequestOrders === 0) {
        return 0;
      } else {
        return (
          (numPriceRequestAnswered / numberOfPriceRequestOrders) *
          100
        ).toFixed(2);
      }
    },

    setSellerUser(response) {
      this.sellerUserDto = response;
      this.setName(this.sellerUserDto);
      this.email = this.sellerUserDto.email;
      if (this.sellerUserDto.phoneNumber) {
        this.phoneNumber = this.sellerUserDto.phoneNumber;
      }
    },
    setName(sellerUserDto) {
      if (sellerUserDto.firstName) {
        this.firstname = sellerUserDto.firstName;
      } else {
        this.firstname = sellerUserDto.email;
      }
      if (sellerUserDto.lastName) {
        this.lastname = sellerUserDto.lastName;
      }
    },
  },
};
</script>

