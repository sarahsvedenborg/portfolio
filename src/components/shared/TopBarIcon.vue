<template>
  <img :src="require('@/assets/' + source)" :alt="altText" @click="action ? action() : null" />
</template>

<script>
export default {
  props: {
    source: {
      type: String,
    },
    action: {
      type: Function,
    },
    altText: {
        type: String
    }
  }
};
</script>

<style scoped>
img {
  height: 20px;
  width: auto;
  margin: 10px;
  cursor: pointer;
}
</style>