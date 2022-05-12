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
                30.04 Volvo XC90 Troms &nbsp; &nbsp;
                <strong
                  ><a href="page2-2.html" class="text-primary"
                    >Gå til forespørsel</a
                  ></strong
                ><br />30.04 Ford S-Max Agder&nbsp; &nbsp;
                <strong
                  >&nbsp;<a href="page2-2.html" class="text-primary"
                    >Gå til forespørsel</a
                  ></strong
                ><br />
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
                Venter på svar:
                <u><a href="page2-2.html" class="text-primary">2 stk</a></u
                ><br />Din svarprosent: <u>95 %</u><br />Antall salg:
                <u><a href="page4-2.html" class="text-primary">8 stk</a></u>
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

export default {
  data() {
    return {
      sellerUserDto: "",

      firstname: "",
      lastname: "",
      email: "",
      phoneNumber: "",
    };
  },
  created() {
    RequestService.sendAuthorizedGetRequest("/api/user/info")
      .then((response) => this.setSellerUser(response))
      .catch((response) => console.log("error"));
  },
  methods: {
    setSellerUser(response) {
      console.log(response);
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

