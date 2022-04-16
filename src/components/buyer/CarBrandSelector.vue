<template>
  <div>
    <BuyerNavBar></BuyerNavBar>
    <section
      data-bs-version="5.1"
      class="form4 cid-t2pwi0gPN4 mbr-fullscreen"
      id="form4-b"
    >
      <div class="container">
        <div class="row content-wrapper justify-content-center">
          <div class="col-lg-4 mbr-form">
            <form
              action="page1.html"
              method="POST"
              class="mbr-form form-with-styler"
            >
              <div class="row">
                <div
                  hidden="hidden"
                  data-form-alert-danger=""
                  class="alert alert-danger col-12"
                >
                  Oops...! some problem!
                </div>
              </div>
              <div class="dragArea row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <p class="mbr-text mbr-fonts-style mb-4 display-7">
                    Last opp din bilkonfigurasjon
                  </p>
                </div>
                <div
                  class="col-lg-12 col-md-12 col-sm-12 form-group"
                  data-for="car-brand"
                >
                  <div>{{ carbrands }}</div>
                  <select
                    name="car-brand"
                    data-form-field="car-brand"
                    class="form-control form-select display-7"
                    id="car-brand-form4-b"
                  >
                    <option value="Velg ditt bilmerke">
                      Velg ditt bilmerke
                    </option>
                    <option value="Alfa Romeo">Alfa Romeo</option>
                    <option value="Audi">Audi</option>
                    <option value="BMW">BMW</option>
                    <option value="BYD">BYD</option>
                    <option value="Chevrolet">Chevrolet</option>
                    <option value="Chrystler">Chrystler</option>
                    <option value="Citroen">Citroen</option>
                    <option value="Cupra">Cupra</option>
                    <option value="DS">DS</option>
                    <option value="Dacia">Dacia</option>
                    <option value="Dodge">Dodge</option>
                    <option value="Fiat">Fiat</option>
                    <option value="Fisker">Fisker</option>
                    <option value="Ford">Ford</option>
                    <option value="GMC">GMC</option>
                    <option value="Honda">Honda</option>
                    <option value="Hongqi">Hongqi</option>
                    <option value="Hummer">Hummer</option>
                    <option value="Hyundai">Hyundai</option>
                    <option value="Infiniti">Infiniti</option>
                    <option value="Isuzu">Isuzu</option>
                    <option value="Jepp">Jepp</option>
                    <option value="Kia">Kia</option>
                    <option value="Land Rover">Land Rover</option>
                    <option value="Lexus">Lexus</option>
                    <option value="MG">MG</option>
                    <option value="Mini">Mini</option>
                    <option value="Maxus">Maxus</option>
                    <option value="Mazda">Mazda</option>
                    <option value="Mercedes-Benz">Mercedes-Benz</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Nissan">Nissan</option>
                    <option value="Opel">Opel</option>
                    <option value="Peugeot">Peugeot</option>
                    <option value="Polestar">Polestar</option>
                    <option value="Renault">Renault</option>
                    <option value="Rover">Rover</option>
                    <option value="Seat">Seat</option>
                    <option value="Skoda">Skoda</option>
                    <option value="SsangYong">SsangYong</option>
                    <option value="Subaru">Subaru</option>
                    <option value="Suzuki">Suzuki</option>
                    <option value="Toyota">Toyota</option>
                    <option value="Volkswagen">Volkswagen</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Xpeng">Xpeng</option>
                  </select>
                </div>
                <div class="col-12 col-md-auto mbr-section-btn">
                  <button type="submit" class="w-100 btn btn-primary display-4">
                    Velg
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="col-lg-7 offset-lg-1 col-12">
            <div class="image-wrapper">
              <img
                class="w-100"
                src="../../assets/images/intro-1000x667.png"
                alt="Digibil"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import BuyerNavBar from "./BuyerNavBar.vue";
import RequestService from "../../services/request.service.js";
import authHeader, { AuthHead } from "../../services/auth-header.js";
import axios from "axios";
export default {
  components: { BuyerNavBar },
  data() {
    return { carbrands: [2] };
  },
  mounted() {
    RequestService.sendAuthorizedRequest("/api/buyer/carbrands").then(
      (response) => (this.carbrands = response)
    );
  },
};
</script>
