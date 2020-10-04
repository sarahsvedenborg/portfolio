<template>
  <div
    class="mobileMenu"
    ref="mobileMenuRef"
  >
    <MenuItems mobile />
  </div>
</template>
<script>
import MenuItems from "@/components/shared/MenuItems";
export default {
  components: { MenuItems },
  props: {
/*     scrollY: {
      type: Number,
    },
    navBarHeight: {
      type: Number,
    }, */
  },
  mounted() {
    //console.log("navBarHeight", this.navBarHeight);
  },
 /*  data() {
    return {
      stop: false,
      scrollThreshold: null,
    };
  }, */
  /* watch: {
    scrollY() {
      if (this.$refs.mobileMenuRef.getBoundingClientRect().top < this.navBarHeight) {
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
.mobileMenu {
  background-color: var(--color-dark);
  z-index: 8;
}
/* .fixed {
  position: fixed;
  right: 0;
}

.absolute {
  position: absolute;
  right: 0px;
} */
</style>