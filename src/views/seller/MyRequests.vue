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
          Mottate forespørsler
        </h4>

        <div class="row content-row mt-4 mt-lg-2">
          <div class="col-lg-2 col-md-2 col-sm-2 form-group">
            <p>Tidsfrist status</p>
            <br />
            <select
              class="form-control form-select display-7"
              v-model="deadlineStatusFilter"
              @Change="setPriceRequesOrdertFilters"
            >
              <option value="">Alle</option>
              <option value="Active">Aktiv</option>
              <option value="Expired">Utløpt</option>
            </select>
          </div>
          <div class="col-lg-2 col-md-2 col-sm-2 form-group">
            <p>Tilbud levert</p>
            <br />
            <select
              class="form-control form-select display-7"
              v-model="deliveryStatusFilter"
              @Change="setPriceRequesOrdertFilters"
            >
              <option value="">Alle</option>
              <option value="delivered">Ja</option>
              <option value="not delivered">Nei</option>
            </select>
          </div>

          <div class="col-lg-2 col-md-2 col-sm-2 form-group">
            <p>Sorter på tidsfrist</p>
            <br />
            <select
              class="form-control form-select display-7"
              v-model="sortStatus"
              @Change="setPriceRequesOrdertFilters"
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
        <CardComponent
          :priceRequest="pr.priceRequest"
          :priceRequestOrderId="pr.id"
          :deadlineReached="pr.deadlineReached"
          :answered="pr.answered"
        >
        </CardComponent>
      </div>
    </div>
  </section>
</template>

<script>
import CardComponent from "../../components/seller/CardComponent.vue";

import RequestService from "../../services/request.service.js";

import PriceRequestOrderService from "../../services/PriceRequestOrder.service.js";

import moment from "moment";
export default {
  components: { CardComponent },

  data() {
    return {
      priceRequestFiltered: [],
      priceRequests: [],
      priceOrderRequests: [],
      displayCards: true,
      priceRequestOrdersFiltered: [],
      deadlineStatusFilter: "Active",
      deliveryStatusFilter: "not delivered",
      sortStatus: "",
      priceRequestOrdersExtra: [],
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
      console.log(this.priceRequests.length == 0);
      return this.priceRequests.length == 0;
    },
    setInitialData(response) {
      this.priceOrderRequests = response;
      this.priceRequestOrdersExtra = response.map((priceRequestOrder) =>
        this.updatePriceRequest(priceRequestOrder)
      );
      this.setPriceRequesOrdertFilters(this.priceRequestOrdersExtra);
    },
    updatePriceRequest(priceRequestOrder) {
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

    setPriceRequesOrdertFilters() {
      var filterPriceRequestOrders = this.filterOnDeadLine(
        this.priceRequestOrdersExtra
      );

      filterPriceRequestOrders = this.filterOnDelivery(
        filterPriceRequestOrders
      );

      filterPriceRequestOrders = this.sortOnDate(filterPriceRequestOrders);
      this.priceRequestFiltered = filterPriceRequestOrders;
    },
    filterOnDeadLine(priceRequestOrders) {
      if (this.deadlineStatusFilter === "Expired") {
        return priceRequestOrders.filter((pro) => pro.deadlineReached);
      } else if (this.deadlineStatusFilter === "Active") {
        return priceRequestOrders.filter((pro) => !pro.deadlineReached);
      } else {
        return priceRequestOrders;
      }
    },
    filterOnDelivery(priceRequestOrders) {
      if (this.deliveryStatusFilter == "delivered") {
        return priceRequestOrders.filter((pro) => pro.answered);
      } else if (this.deliveryStatusFilter == "not delivered") {
        return priceRequestOrders.filter((pro) => !pro.answered);
      } else {
        return priceRequestOrders;
      }
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

