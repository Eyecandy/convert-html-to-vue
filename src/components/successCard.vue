<template>
  <div v-if="isVisible" class="mydiv">
    <div id="card" class="animated fadeIn">
      <div id="upper-side">
        <!-- Generator: Adobe Illustrator 17.1.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->

        <i class="fa fa-check"></i>
        <h3 id="status">{{ statusText }}</h3>
      </div>
      <div id="lower-side">
        <p id="message">{{ text }}</p>
        <router-link :to="`${path}`" id="contBtn">{{
          continueText
        }}</router-link>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    text: String,
    isVisible: Boolean,
    path: String,
    continueText: String,
    statusText: String,
  },
};
</script>



<style scoped>
#card {
  position: relative;
  width: 520px;
  display: block;
  margin: 40px auto;
  text-align: center;
  font-family: "Source Sans Pro", sans-serif;
}

#upper-side {
  padding: 2em;
  background-color: #8bc34a;
  display: block;
  color: #fff;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
}

#status {
  font-weight: lighter;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 1em;
  margin-top: -0.2em;
  margin-bottom: 0;
}

#lower-side {
  padding: 2em 2em 5em 2em;
  background: #fff;
  display: block;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}

#message {
  margin-top: -0.5em;
  color: #757575;
  letter-spacing: 1px;
}

#contBtn {
  position: relative;
  top: 1.5em;
  text-decoration: none;
  background: #8bc34a;
  color: #fff;
  margin: auto;
  padding: 0.8em 3em;
  -webkit-box-shadow: 0px 15px 30px rgba(50, 50, 50, 0.21);
  -moz-box-shadow: 0px 15px 30px rgba(50, 50, 50, 0.21);
  box-shadow: 0px 15px 30px rgba(50, 50, 50, 0.21);
  border-radius: 25px;
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}
#contBtn:hover {
  -webkit-box-shadow: 0px 15px 30px rgba(50, 50, 50, 0.41);
  -moz-box-shadow: 0px 15px 30px rgba(50, 50, 50, 0.41);
  box-shadow: 0px 15px 30px rgba(50, 50, 50, 0.41);
  -webkit-transition: all 0.4s ease;
  -moz-transition: all 0.4s ease;
  -o-transition: all 0.4s ease;
  transition: all 0.4s ease;
}

.mydiv {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50%;
}
</style>


<style scoped>
</style>

