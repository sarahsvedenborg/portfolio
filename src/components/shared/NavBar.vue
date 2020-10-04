<template>
  <div class="navBarContainer">
    <div class="navBar" :style="{'opacity': opacity}" ref="navBar">
      <TopBarIcon
        source="LinksThumbnail.svg"
        :action="() => $router.push('/')"
        altText="Home button"
      />
      <MenuItems v-if="!isMobile" />
      <TopBarIcon
        v-if="isMobile && !menuOpen"
        source="icons/HamburgerMenu.svg"
        :action="() => menuOpen = true"
        altText="menu icon"
      />
      <TopBarIcon
        v-if="menuOpen"
        source="icons/Exit.svg"
        :action="() => menuOpen = false"
        altText="close icon"
      />
    </div>
    <StopAtTop :distanceToTop="{initial: navBarHeight, final: navBarHeight}" :scrollY="scrollY" v-if="menuOpen" absolutePos :width="120" bringToFront>
      <MobileMenu />
    </StopAtTop>
  </div>
</template>
<script>
import MenuItems from "@/components/shared/MenuItems";
import TopBarIcon from "@/components/shared/TopBarIcon";
import MobileMenu from "@/components/shared/MobileMenu";
import StopAtTop from "@/components/hoc/StopAtTop";
import { isMobile } from "@/utils.js";
export default {
  components: { TopBarIcon, MenuItems, MobileMenu, StopAtTop },
  props: {
    fadable: {
      type: Boolean,
    },
    opacity: {
      type: Number,
    },
    scrollY: {
      type: Number,
    },
  },
  data() {
    return {
      //stop: false,
      isMobile: isMobile(),
      menuOpen: false,
      //scrollThreshold: null,
    };
  },
  computed: {
    navBarHeight() {
      return this.$refs.navBar.getBoundingClientRect().height;
    },
  },
/*   watch: {
    scrollY() {
      if (this.$refs.navBar.getBoundingClientRect().top < 0) {
        this.stop = true;
        this.scrollThreshold = this.scrollY;
      } else if (this.scrollThreshold && this.scrollY < this.scrollThreshold) {
        this.stop = false;
      }
    },
  }, */
};
</script>
<style scoped>
.navBarContainer {
  position: relative;
}
.navBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 100%;
  z-index: 8;
}
/* .fixed {
  position: fixed;
  top: 0;
} */
.hamburgerIcon {
  margin-right: 10px;
}
</style>