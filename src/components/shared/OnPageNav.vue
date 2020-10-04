<template>
<!--   <StopAtTop v-if="isMobile" :distanceToTop="navBarHeight" :scrollY="scrollY" absolutePos>
    <div class="mobile">
      <ul>
        <li
          v-for="navItem in navItems"
          :key="navItem.name"
          :class="{selected: navItem.ref == itemInView}"
          @click="() => action(navItem.ref)"
        >{{navItem.name}}</li>
      </ul>
    </div>
  </StopAtTop> -->
  <div :class="isMobile ? 'mobile' : 'desktop'">
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
//import StopAtTop from "@/components/hoc/StopAtTop";
//import { isMobile } from "@/utils.js";
export default {
  //components: { StopAtTop },
  props: {
    navItems: {
      type: Array,
    },
    action: {
      type: Function,
    },
    itemInView: {
      type: String,
    },
/*     navBarHeight: {
      type: Number,
    },
    scrollY: {
        type: Number
    } */
    isMobile: {
        type: Boolean
    }
  },
/*   data() {
    return {
      isMobile: isMobile(),
    };
  }, */
};
</script>
<style scoped>
.desktop {
  position: fixed;
  top: 10vh;
  right: 20px;
  text-align: right;
}
li {
  cursor: pointer;
  list-style-type: none;
  padding: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.selected {
  color: var(--color-accent);
}

.mobile {
  width: 100%;
  background-color: var(--color-dark);
  color: white;
  z-index: 2;
}

.mobile ul {
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 0px;
  margin: 0px;
  font-size: small;
}
</style>