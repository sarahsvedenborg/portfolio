<template>
  <div class="success">
    <NavBar />
    <div class="row">
      <div class="col col-10 md-8 lg-6 content">
        <div>
          <div class="animationImage"></div>
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
  components: { NavBar },∑
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

.animationImage {
  margin: 0 auto;
  width: 200px;
  height: 200px;
  background-image: url("../assets/icons/Mailbox1.svg");
  background-repeat: no-repeat;
  background-size: cover;
  animation-name: changeImage;
  animation-duration: 0.4s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
}

@keyframes changeImage {
  0% {
    background-image: url("../assets/icons/Mailbox1.svg");
  }
  25% {
    background-image: url("../assets/icons/Mailbox2.svg");
  }
  50% {
    background-image: url("../assets/icons/Mailbox3.svg");
  }
  75% {
    background-image: url("../assets/icons/Mailbox4.svg");
  }
  100% {
    background-image: url("../assets/icons/Mailbox5.svg");
  }
}

.text {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 2s;
  animation-delay: 1s;
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