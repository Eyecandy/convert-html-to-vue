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
          Dine tilbud
        </h4>

        <div class="row content-row mt-4 mt-lg-2">
          <div class="col-lg-2 col-md-2 col-sm-2 form-group">
            <p>Tilbud status</p>
            <br />
            <select
              class="form-control form-select display-7"
              v-model="statusOffer"
              @Change="setPriceRequesOrderFilters"
            >
              <option value="">Alle</option>
              <option value="won">Vunnet</option>
              <option value="not won">Ikke vunnet</option>
              <option value="awaiting customer">Venter kunde avgjørelse</option>
              <option value="awaiting deadline">Venter på tidsfrist</option>
            </select>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-2 form-group">
            <p>Sorter på tidsfrist</p>
            <br />
            <select
              class="form-control form-select display-7"
              v-model="sortStatus"
              @Change="setPriceRequesOrderFilters"
            >
              <option value="">Mest nylig dato</option>
              <option value="Ascending">Eldst dato</option>
            </select>
          </div>
        </div>
      </div>

      <div class="row mt-4" v-if="priceRequestFiltered.length == 0">
        Ingen forespørsler - sjekk dine filter
      </div>

      <div
        class="row mt-5"
        v-for="pr in priceRequestFiltered"
        v-bind:key="pr.id"
      >
        <OfferCardComponent
          :priceRequest="pr.priceRequest"
          :priceRequestOrder="pr"
          :totalPrice="pr.totalPrice"
          :deadlineReached="pr.deadlineReached"
        >
        </OfferCardComponent>
      </div>
    </div>
  </section>
</template>

<script>
import OfferCardComponent from "../../components/seller/OfferCardComponent.vue";

import RequestService from "../../services/request.service.js";

import moment from "moment";
export default {
  components: { OfferCardComponent },

  data() {
    return {
      priceRequestFiltered: [],
      priceRequestOrders: [],
      priceRequestOrdersFiltered: [],
      displayCards: true,
      statusOffer: "",
      sortStatus: "",
    };
  },

  mounted() {
    RequestService.sendAuthorizedGetRequest(
      "/api/seller/pricerequestorder/listpricerequestorders"
    ).then((response) => this.setInitialData(response));
  },

  computed: {},

  methods: {
    isPriceRequestsEmpty() {
      return this.priceRequests.length == 0;
    },
    setInitialData(response) {
      this.priceRequestOrders = response.filter((pro) => pro.answered);
      this.priceRequestOrders = this.priceRequestOrders.map(
        this.updatePriceRequestOrder
      );
      this.setPriceRequesOrderFilters(this.priceRequestOrders);
      console.log(this.priceRequestOrders);
    },

    updatePriceRequestOrder(priceRequestOrder) {
      priceRequestOrder["deadlineReached"] = this.setDeadlineStatus(
        priceRequestOrder.priceRequest.deadline
      );

      return priceRequestOrder;
    },

    setDeadlineStatus(deadline) {
      var date = moment(deadline);
      var now = moment();
      return now > date;
    },

    setPriceRequesOrderFilters() {
      var filterPriceRequestOrders = this.priceRequestOrders;
      filterPriceRequestOrders = this.sortOnDate(filterPriceRequestOrders);
      filterPriceRequestOrders = this.filterOnOfferStatus(
        filterPriceRequestOrders
      );
      this.priceRequestFiltered = filterPriceRequestOrders;
    },
    filterOnOfferStatus(priceRequestOrders) {
      if (this.statusOffer === "won") {
        return priceRequestOrders.filter(
          (pro) => pro.customerAcceptedThisOffer
        );
      } else if (this.statusOffer === "not won") {
        return priceRequestOrders.filter(
          (pro) =>
            !pro.customerAcceptedThisOffer &&
            pro.priceRequest.customerHasAcceptedOffer
        );
      } else if (this.statusOffer === "awaiting customer") {
        return priceRequestOrders.filter(
          (pro) =>
            pro.deadlineReached && !pro.priceRequest.customerHasAcceptedOffer
        );
      } else if (this.statusOffer === "awaiting deadline") {
        return priceRequestOrders.filter((pro) => !pro.deadlineReached);
      }
      return priceRequestOrders;
    },

    sortOnDate(priceRequestOrders) {
      if (this.sortStatus === "Ascending") {
        return priceRequestOrders.sort(function (a, b) {
          return (
            new Date(b.priceRequest.deadline) -
            new Date(a.priceRequest.deadline)
          );
        });
      } else {
        return priceRequestOrders.sort(function (a, b) {
          return (
            new Date(a.priceRequest.deadline) -
            new Date(b.priceRequest.deadline)
          );
        });
      }
    },
  },
};
</script>

