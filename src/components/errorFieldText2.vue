<template>
  <em v-if="showText" class="error">{{ text }}</em>
</template>



<script>
export default {
  props: {
    showText: Boolean,
    text: String,
  },
};
</script>


<style scoped>
.error {
  display: block;
  color: rgb(202, 3, 3);
  margin: 5px 0 0 0;
  font-size: 15px;
}
</style>