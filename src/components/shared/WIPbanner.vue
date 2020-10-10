<template>
  <div class="banner" :class="placement ? 'trapezoid ' + placement : 'top'">
    <p>Work in progress</p>
  </div>
</template>
<script>
export default {
  props: {
    placement: {
      type: String,
    },
  },
};
</script>
<style scoped>
.banner {
  color: white;
  position: absolute;
  font-weight: bold;
}

.top {
  top: 90px;
  width: 100%;
  z-index: 3;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.2);
}

.trapezoid {
  background-color: transparent;
  border-bottom: 50px solid darkred;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  height: 0;
  width: 250px;
}

.left {
  top: 45px;
  left: -55px;
  transform: rotate(-45deg);
}

.right {
  top: 45px;
  right: -55px;
  transform: rotate(45deg);
}
</style>