<template>
  <div class="notFound">
    <NavBar />
    <img src="@/assets/SiteIcon.svg" width="600px" class="animate" />
    <div class="appear">
      <h1 class="title title-large">Oh nooo.....</h1>
      <p>This site seems to have disappeared.</p>
      <p>
        Prøv å velge fra menyen eller gå tilbake til
        <router-link to="/">forsiden</router-link>.
      </p>
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
img {
  margin-top: 10vh;
}

.appear {
  position: absolute;
  top: 40vh;
  left: 35%;

  opacity: 0;
  animation-name: appear;
  animation-delay: 2s;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

.animate {
  animation-name: vanish;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes vanish {
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0);
    opacity: 0;
  }
}
@keyframes appear {
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>