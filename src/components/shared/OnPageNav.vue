<template>
  <div class="nav">
    <ul>
      <li
        v-for="navItem in navItems"
        :key="navItem.name"
        :class="{selected: navItem.ref == itemInView}"
        @click="() => action(navItem.ref)"
      >{{navItem.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    navItems: {
      type: Array,
    },
    action: {
      type: Function,
    },
    itemInView: {
        type: String
    }
  },
};
</script>
<style scoped>
.nav{
    position: fixed;
    top: 10vh;
    right: 20px;
    text-transform: uppercase;
    text-align: right;
}
li {
  cursor: pointer;
  list-style-type: none;
  padding: 5px;
  letter-spacing: 2px;
}
.selected{
    color: var(--color-accent)
}
</style>