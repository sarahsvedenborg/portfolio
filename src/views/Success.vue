<template>
  <div class="success">
    <NavBar />
    <div class="row">
      <div class="col col-10 md-8 lg-6 content">
        <div>
          <div class="animationBackground">
            <img src="@/assets/icons/Flag.svg" class="animate" />
          </div>
          <div class="text">
            <h1 class="title title-large color-accent">Takk!</h1>
            <p>Din henvendelse er mottatt og vil bli besvart så fort som mulig.</p>
            <span>
              Tilbake til
              <router-link to="/">forsiden</router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar";
export default {
  components: { NavBar },
};
</script>

<style scoped>
.success {
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 100%;
  height: 100vh;
}

.content {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

a {
  color: var(color-accent);
}

p {
  font-weight: bold;
}

.animationBackground {
  position: relative;
  margin: 0 auto;
  width: 200px;
  height: 200px;
  background-image: url("../assets/icons/MailboxShell.svg");
  background-repeat: no-repeat;
  background-size: cover;
}

.animate {
  position: absolute;
  top: 65px;
  left: 88px;
  width: 60px;
  transform-origin: 10px 8px;
  animation-name: rotate;
  animation-delay: 1s;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-90deg);
  }
}

.text {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>