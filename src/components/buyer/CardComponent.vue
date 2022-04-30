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

        <div class="item-content">
          <h5 class="item-title mbr-fonts-style display-5">{{ carBrand }}</h5>

          <p class="mbr-text mbr-fonts-style mt-3 display-7">
            Leveringssted: {{ county }}
            <br />
            Tidsfrist: {{ deadline }}
          </p>
        </div>
        <div width="50px">
          <a href="page5-2.html" class="btn btn-success item-btn display-4"
            ><span
              class="imind-bird-deliveringletter mbr-iconfont mbr-iconfont-btn"
            ></span
            >Les mer og gi tilbud&nbsp;</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",

  props: {
    carBrand: String,
    county: String,
    deadline: String,
  },
};
</script>


<style scoped>
.margin {
  margin-top: 60px;
  margin-bottom: 60px;
  border: 1px solid rgb(75, 75, 82);
  border-radius: 5px;
  height: 200px;
}
</style>
