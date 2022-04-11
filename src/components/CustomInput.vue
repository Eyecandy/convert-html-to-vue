<template>
  <div>
    <label>
      <font face="Helvetica" color="#FFFFFF" size="2">{{ label }}</font>
    </label>
    <input type="text" v-model="inputValue" id="rcorners2" />
  </div>
</template>

<script>
export default {
  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(value) {
        console.log(value);
        this.$emit("update:modelValue", value);
      },
    },
  },
  props: ["label", "modelValue"],
};
</script>

<style scoped>
label {
  display: inline-block;
  width: 110px;
  color: "#FFFFFF";
  text-align: left;
}
input {
  padding: 5px 10px;
  margin: 10px;
  color: burlywood;
}
</style>
