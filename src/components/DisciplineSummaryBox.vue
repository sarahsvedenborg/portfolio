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

button {
  border: 1px solid var(--color-accent);
  background-color: var(--color-light);
  border-radius: 39px;
  height: 3.5em;
  width: 125px;
  color: var(--color-accent);
  margin: 1em;
  font-weight: bold;
  cursor: pointer;
}

button:hover{
  background-color: var(--color-accent);
  color: var(--color-light);
}
</style>