<template>
  <div class="notFound">
    <NavBar />
    <div class="contentWrapper">
      <div class="content">
        <h2 class="title title-small">Denne siden finnes ikke.</h2>
        <img class="image" src="@/assets/404.svg" />
        <img class="needle" src="@/assets/CompassNeedle.svg" />
      </div>
      <router-link to="/" class="anchor color-accent title title-small">Gå hjem</router-link>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar";
export default {
  created() {
    window.scrollTo(0, 0);
  },
  components: { NavBar },
};
</script>

<style scoped>
.notFound {
  height: 100vh;
}

.contentWrapper {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.content {
  position: relative;
}

.anchor {
  opacity: 0;
  transform: translateY(-50px);
  animation-name: appear;
  animation-duration: 2.5s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
}

a {
  font-weight: bold;
}

.needle {
  position: absolute;
  top: 114px;
  left: 217px;
  transform-origin: 9px 53px;
  animation-name: rotate;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}

@media (max-width: 992px) {
  .image {
    width: 270px;
  }
  .anchor {
    top: -23px;
    right: 70px;
    padding: 10px 20px;
  }
  .needle {
    width: 12px;
    height: 70px;
    top: 81px;
    left: 132px;
    transform-origin: 6px 35px;
  }
}

@keyframes appear {
  from {
    transform: translateY(-50px) scale(0.5);
    opacity: 0;
  }
  to {
    transform: translateY(-20px) scale(1);
    opacity: 1;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  90% {
    transform: rotate(560deg);
  }
  100% {
    transform: rotate(540deg);
  }
}
</style>