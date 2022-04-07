<template>
  <body bgcolor="#FFFFFF">
    <img src="../assets/logo-liten.png" alt="" width="130" />

    <center>
      <br /><br /><br /><br />

      <table
        width="650"
        height="401"
        border="0"
        class="roundedCorners transparent-style"
      >
        <tbody>
          <tr>
            <td width="650" height="397">
              <table width="650" height="403" border="0">
                <tbody>
                  <tr>
                    <th width="9" scope="row">&nbsp;</th>
                    <td colspan="6">
                      <center>
                        <font face="Helvetica" color="#FFFFFF" size="4"
                          ><b>Ny bil til laveste pris! Enkelt og greit</b></font
                        >
                      </center>
                    </td>
                    <td width="16">&nbsp;</td>
                  </tr>
                  <tr>
                    <th scope="row">&nbsp;</th>
                    <td width="83">&nbsp;</td>
                    <td colspan="4"></td>
                    <td width="76">&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th height="51" rowspan="3" scope="row">&nbsp;</th>
                    <td rowspan="3">&nbsp;</td>
                    <td width="44" height="32">&nbsp;</td>
                    <td width="30">
                      <img
                        src="../assets/two-fingers.png"
                        height="30"
                        width="30"
                      />
                    </td>
                    <td colspan="2">
                      <font face="Helvetica" color="#FFFFFF" size="3"
                        ><i>Best pris på nybil!</i></font
                      >
                    </td>
                    <td rowspan="3">&nbsp;</td>
                    <td rowspan="3">&nbsp;</td>
                  </tr>
                  <tr>
                    <td width="44" height="32">&nbsp;</td>
                    <td>
                      <img
                        src="../assets/two-fingers.png"
                        height="30"
                        width="30"
                      />
                    </td>
                    <td colspan="2">
                      <font face="Helvetica" color="#FFFFFF" size="3"
                        ><i>Super enkelt!</i></font
                      >
                    </td>
                  </tr>
                  <tr>
                    <td width="44" height="45">&nbsp;</td>
                    <td>
                      <img
                        src="../assets/two-fingers.png"
                        height="30"
                        width="30"
                      />
                    </td>
                    <td colspan="2">
                      <font face="Helvetica" color="#FFFFFF" size="3"
                        ><i>Velg mellom flere forhandlere</i></font
                      >
                    </td>
                  </tr>
                  <tr>
                    <th height="22" scope="row">&nbsp;</th>
                    <td>&nbsp;</td>
                    <td colspan="3">
                      <font face="Helvetica" color="#FFFFFF" size="2"
                        >E-post</font
                      >
                    </td>
                    <td width="339">
                      <label for="email"></label>
                      <input type="email" name="email" id="rcorners2" />
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th height="54" scope="row">&nbsp;</th>
                    <td>&nbsp;</td>
                    <td colspan="3">
                      <font face="Helvetica" color="#FFFFFF" size="2"
                        >Ønsket passord</font
                      >
                    </td>
                    <td>
                      <label for="password"></label>
                      <input type="password" name="password" id="rcorners2" />
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th scope="row">&nbsp;</th>
                    <td>&nbsp;</td>
                    <td colspan="2">&nbsp;</td>
                    <td width="19">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                      <label for="checkbox"></label>
                    </td>
                    <td>
                      <font face="Helvetica" color="#FFFFFF" size="1"
                        >Ved å registrere deg godtar du våre generelle vilkår.
                        Les mer
                        <router-link to="/policy1">her</router-link>.</font
                      >
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th scope="row">&nbsp;</th>
                    <td>&nbsp;</td>
                    <td colspan="4">
                      <a href="min-side.html">
                        <center>
                          <button class="mbtn blue">Registrer deg</button>
                        </center>
                      </a>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th scope="row">&nbsp;</th>
                    <td>&nbsp;</td>
                    <td colspan="3">&nbsp;</td>
                    <td>
                      <font face="Helvetica" color="#FFFFFF" size="1"
                        >Allerede registrert? Trykk <u>her</u> for å logge
                        inn.</font
                      >
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr>
                    <th scope="row">&nbsp;</th>
                    <td>&nbsp;</td>
                    <td colspan="4">
                      <center>
                        <img
                          src="../assets/logo-liten.png"
                          alt=""
                          width="130"
                        />
                      </center>
                    </td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
              <p>&nbsp;</p>
            </td>
          </tr>
        </tbody>
      </table>
    </center>
    <br />
    <CommercialBanner />
  </body>
</template>
<script>
import CommercialBanner from "@/components/CommercialBanner.vue";

export default {
  components: {
    CommercialBanner,
  },
};
</script>

<style>
button.mbtn {
  padding: 0.6em 2em;
  border-radius: 30px;
  color: #fff;
  background-color: #3276ce;
  font-size: 1.1em;
  border: 0;
  cursor: pointer;
  margin: 1em;
}

#rcorners2 {
  border-radius: 25px;
  border: 1px solid #ffffff;
  padding: 8px;
  width: 150px;
  height: 5px;
}

body {
  background-image: url("../assets/Forsidebilde.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
}

.transparent-style {
  background: rgba(0, 0, 0, 0.3);
}

table.roundedCorners {
  border: 1px solid DarkGrey;
  border-radius: 13px;
  border-spacing: 0;
}

table.roundedCorners tr:last-child > td {
  border-bottom: none;
}

.linska-text-web {
  font-family: Consolas, Andale Mono, Lucida Console, Lucida Sans Typewriter,
    Monaco, Courier New, monospace;
}
</style>
