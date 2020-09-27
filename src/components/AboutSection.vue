<template>
  <div class="row">
    <div class="col">
      <h2 class="title title-medium color-accent">{{heading}}</h2>
      <div class="lists" :class="{horizontal: horizontal}">
        <TitledList v-for="(list,i) in lists" :key="i" :list="list" :horizontal="horizontal"/>
      </div>
    </div>
  </div>
</template>
<script>
import TitledList from "@/components/shared/TitledList";
export default {
  components: { TitledList },
  props: {
    heading: {
      type: String,
    },
    lists: {
      type: Array,
    },
    horizontal: {
        type: Boolean,
        required: false
    }
  },
};
</script>
<style scoped>
.horizontal{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
</style>