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
/*Mobile first*/
img {
  height: 15px;
  width: 15px;
  margin: 10px;
  cursor: pointer;
}
/*Small devices*/
@media (min-width: 576px) {
}
/*Medium devices*/
@media (min-width: 768px) {
    img {
    height: 20px;
    width: 20px;
  }
}
/*Large devices*/
@media (min-width: 992px) {
  img {
    height: 30px;
    width: 30px;
  }
}
</style>