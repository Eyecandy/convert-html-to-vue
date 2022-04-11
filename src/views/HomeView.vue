<template>
  <img src="../assets/images/logo-liten.png" alt="" width="130" />
  <div class="home">
    <nav>
      <router-link to="/registration">Registrer Bruker</router-link>
    </nav>

    <center>
      <TransparentBox></TransparentBox>
    </center>
  </div>
</template>

<script>
import TransparentBox from "@/components/TransparentBox.vue";

export default {
  components: {
    TransparentBox,
  },
};
</script>
