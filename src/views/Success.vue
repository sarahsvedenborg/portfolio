<template>
  <div class="success">
    <NavBar />
    <div class="row">
      <div class="col col-10 md-8 lg-6 content">
        <div>
          <img alt :src="require('@/assets/icons/' + frame)" width="200px" />

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

const sprites = [
  "Mailbox1.svg",
  "Mailbox2.svg",
  "Mailbox3.svg",
  "Mailbox4.svg",
  "Mailbox5.svg",
];

let myInterval = null;
let index = 0;

export default {
  components: { NavBar },
  mounted() {
    setTimeout(() => {
      myInterval = setInterval(() => {
        this.changeFrame();
      }, 100);
    }, 500);
  },
  data() {
    return {
      frame: sprites[0],
    };
  },
  methods: {
    changeFrame() {
      if (index == sprites.length - 2) clearInterval(myInterval);
      this.frame = sprites[++index];
    },
  },
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