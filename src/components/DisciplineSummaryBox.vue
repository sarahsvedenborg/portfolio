<template>
  <div class="disciplineSummaryBox">
    <h2 class="title title-medium color-accent">{{heading}}</h2>
    <slot />
    <router-link :to="linkTo"><Button :label="$t('DisciplineSummaryBox.button')" outlined /></router-link>
  </div>
</template>

<script>
import Button from '@/components/shared/UI/Button'
export default {
  components: {Button},
  props: {
    heading: {
      type: String,
    },
    linkTo: {
      type: String
    }
  },
};
</script>

<style scoped>
.disciplineSummaryBox {
  width: 100%;
  margin: 2em 0em;
}

p {
  color: var(--color-dark);
}
</style>