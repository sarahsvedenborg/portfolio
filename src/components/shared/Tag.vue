<template>
  <div class="tag" :class="tagType == 'UX' ? 'ux' : 'dev'">{{tagType}}</div>
</template>

<script>
export default {
  props: {
    tagType: {
      type: String,
    },
  },
};
</script>

<style scoped>
.tag {
  border-radius: 20px;
  width: 75px;
  font-size: small;
  display: inline-block;
  margin: 0px 2px;
}

.ux {
/*   border: 2px solid var(--color-accent);
  background-color: var(--color-accent); */
   border: 2px solid grey;
  background-color: grey;
  color: var(--color-light);
  font-weight: bold;
}

.dev {
/*   border: 2px solid var(--color-accent); */
  border: 2px solid grey;
  background-color: var(--color-light);
/*   color: var(--color-accent); */
  color: grey;
  font-weight: bold;
}
</style>