<template>
  <div class="row" ref="sectionRef">
    <div class="col">
      <h2 class="title title-medium color-accent">{{heading}}</h2>
      <div class="lists" :class="{horizontal: horizontal}" v-if="lists">
        <TitledList v-for="(list,i) in lists" :key="i" :list="list" :horizontal="horizontal" :listDivider="listDivider"/>
      </div>
           <slot v-else/>
    </div>
  </div>
</template>
<script>
import TitledList from "@/components/shared/TitledList";
export default {
  components: { TitledList },
  mounted() {
    this.setThreshold(this.$refs.sectionRef.getBoundingClientRect().top);
  },
  props: {
    heading: {
      type: String,
    },
    lists: {
      type: Array,
    },
    horizontal: {
      type: Boolean,
      required: false,
    },
    setThreshold: {
      type: Function,
    },
    listDivider: {
        type: String
    }
  }
};
</script>
<style scoped>
.horizontal {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>