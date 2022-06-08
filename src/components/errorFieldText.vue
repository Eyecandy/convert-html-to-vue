<template>
  <em v-if="!isValid" class="error">{{ text }}</em>
</template>



<script>
export default {
  props: {
    isValid: Boolean,
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