<template>
  <div
    :class="stop ? 'fixed' : absolutePos ? 'absolute' : 'relative'"
    :style="{'top': stop ? distanceToTop.final : distanceToTop.initial + 'px', 'width': width ? width + 'px' : '100%', 'z-index': bringToFront ? 6 : 4}"
    ref="containerRef"
  >
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    distanceToTop: {
      type: Object,
    },
    scrollY: {
      type: Number,
    },
    absolutePos: {
      type: Boolean,
    },
    width: {
      type: Number,
    },
    bringToFront: {
        type: Boolean
    }
  },
  data() {
    return {
      stop: false,
      scrollThreshold: null,
    };
  },
  watch: {
    scrollY() {
      if (
        this.$refs.containerRef.getBoundingClientRect().top <
        this.distanceToTop.final
      ) {
        this.stop = true;
        this.scrollThreshold = this.scrollY;
      } else if (this.scrollThreshold && this.scrollY < this.scrollThreshold) {
        this.stop = false;
      }
    },
  },
};
</script>
<style scoped>
.fixed {
  position: fixed;
  right: 0px;
}

.absolute {
  position: absolute;
  right: 0px;
}

.relative {
  position: relative;
}
/* .container{
    z-index: 4;
} */
</style>