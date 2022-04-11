<template>
  <div class="transparent-form">
    <form @submit.prevent="handleSubmit">
      <div class="center-inner-div">
        <font face="Helvetica" color="#FFFFFF" size="4"
          ><b>{{ title }}</b></font
        >
        <div class="texts_margin_align">
          <td>
            <img
              src="../assets/images/two-fingers.png"
              class="two_finger_image"
            />
          </td>
          <td colspan="2">
            <font face="Helvetica" color="#FFFFFF" size="3"
              ><i>Best pris på nybil!</i></font
            >
          </td>
          <tr class="margin_between_text"></tr>
          <td>
            <img
              src="../assets/images/two-fingers.png"
              class="two_finger_image"
            />
          </td>
          <td colspan="2">
            <font face="Helvetica" color="#FFFFFF" size="3"
              ><i>Best pris på nybil!</i></font
            >
          </td>
          <tr class="margin_between_text"></tr>
          <td>
            <img
              src="../assets/images/two-fingers.png"
              class="two_finger_image"
            />
          </td>
          <td colspan="2">
            <font face="Helvetica" color="#FFFFFF" size="3"
              ><i>Best pris på nybil!</i></font
            >
          </td>
          <tr class="margin_between_text"></tr>
        </div>
        <CustomInput
          :type="email"
          v-model="formData.email"
          v-bind:label="emailLabel"
        />

        <CustomInput
          type="password"
          v-model="formData.password"
          v-bind:label="passwordLabel"
        />

        <button class="mbtn blue btn-pos">Regstrer</button>

        <div>
          <font face="Helvetica" color="#FFFFFF" size="1"
            >Allerede registrert? Trykk <u>her</u> for å logge inn.</font
          >
        </div>
      </div>
    </form>
    <img src="../assets/images/logo-liten.png" alt="" width="130" />
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput";
import axios from "axios";
export default {
  data() {
    return {
      title: "Ny bil til laveste pris! Enkelt og greit",
      emailLabel: "Email",
      passwordType: "password",
      passwordLabel: "Password",
      formData: {
        email: "",
        password: "",
        matchingPassword: "",
      },
    };
  },
  methods: {
    handleSubmit() {
      console.log(
        "submitted",
        this.formData.email,
        this.formData.password,
        this.formData.matchingPassword
      );
      axios
        .post("/api/register", {
          email: this.formData.email,
          password: this.formData.password,
          matchingPassword: this.formData.matchingPassword,
        })
        .then((Response) => console.log(Response))
        .catch((Response) => console.log(Response));
    },
  },
  components: { CustomInput },
};
</script>

<style scoped>
.transparent-form {
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid DarkGrey;
  border-radius: 13px;
  border-spacing: 0;
  align-self: center;
  width: 650px;
  height: 470px;
}

.two_finger_image {
  height: 30px;
  width: 30px;
}

.center-inner-div {
  width: 80%;
  margin: 10px;
  height: 90%;
}
.texts_margin_align {
  align-content: left;
  align-self: left;
  margin: 20px;
}

.margin_between_text {
  height: 10px;
}
</style>
