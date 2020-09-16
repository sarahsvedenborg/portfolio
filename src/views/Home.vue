<template>
  <div class="home">
    <!--  <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="topView">
      <HomeTopBar />
      <div class="homeHeading">
        <h1>
          <span class="accent">Sarah,</span> UX Engineer
          <span class="dot dot1">.</span>
          <span class="dot dot2">.</span>
          <span class="dot dot3">.</span>
        </h1>

        <p class="subtitle">
           <span class="dot dot4">.</span>
          <span class="dot dot5">.</span>
          <span class="dot dot6">.</span>
          <span class="word1">Connecting </span>
          <span class="word2 accent">Design </span> 
          <span class="word3">and </span>
          <span class="word4 accent">Development</span>
        </p>
      </div>
      <!--   <img alt="joinging links" src="../assets/LinksWhite.svg"/> -->
      <img alt="single link" src="@/assets/SingleLinkWhite.svg" class="whiteLink" />
      <img alt="single link" src="@/assets/LinkGreen.svg" class="greenLink" />
      <p class="hint" :style="{'opacity': 1-opacity*2, 'display': appear ? 'block' : 'none'}">Scroll down</p>
    </div>
    <NavBar :fadable="true" :opacity="opacity" :scrollY="scrollY" />
    <div>
      <DisciplineSummaryBox heading="UX designer - at a glance" body="Skills as a UX designer" />
      <DisciplineSummaryBox heading="Developer - at a glance" body="Skills as a developer" />
      <DisciplineSummaryBox heading="At a glance as a developer" body="Skills as a developer" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTopBar from "@/components/HomeTopBar";
import NavBar from "@/components/shared/NavBar";
import DisciplineSummaryBox from "@/components/DisciplineSummaryBox";

export default {
  name: "Home",
  components: {
    HomeTopBar,
    NavBar,
    DisciplineSummaryBox,
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted(){
setTimeout(() => {
      this.appear= true
    }, 8000)
  },
  data() {
    return {
      opacity: 0,
      scrollY,
      appear: false
    };
  },
  methods: {
    handleScroll() {
      this.opacity = window.scrollY / 300;
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style scoped>
body {
  margin: none;
}
.home {
  color: #19191a;
}
.accent {
  color: var(--color-accent);
}
.homeHeading {
  margin: 0 auto;
  padding-top: 10vh;
}
.subtitle{
  font-size: x-large;
  margin: 0.5em 0em;
}
.topView {
  background-color: #000;
  width: 100%;
  height: 100vh;
  color: white;
}
.hint {
  font-size: 12px;
  color: white;
  animation-name: float;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  margin-top: 20vh;
  text-shadow: 0 0 3px #fff;
  animation-delay: 0.5s;
}

.whiteLink {
  opacity: 0;
  margin: 1em 0em;
   animation-name: slideFromLeft; 
  animation-duration: 3s;
  transform: translate(-220%, 0);
  animation-fill-mode: forwards;
  animation-delay: 5s;
}

.greenLink {
  opacity: 0;
  margin: 1em 0em;
  animation-name: slideFromRight; 
  animation-duration: 3s;
  transform: translate(220%, 40%);
  animation-fill-mode: forwards;
  animation-delay: 5s;
}

@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0px, 20px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translate(-220%, 0);
  }
  to {
    opacity: 1;
    transform: translate(25%, 0%);
  }
}

@keyframes slideFromRight {
  from {
    opacity: 0;
    transform: translate(220%, 0%);
  }
  to {
    opacity: 1;
    transform: translate(-25%, 40%);
  }
}

.dot{
  color: white;
  opacity: 0;
  /* animation: fadeIn 0.5s ease-in 0 0 normal forwards; */
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.dot1{
  animation-delay: 0.5s
}
.dot2{
  animation-delay: 1s
}
.dot3{
  animation-delay: 1.5s
}
.dot4{
  animation-delay: 2s
}
.dot5{
  animation-delay: 2.5s
}
.dot6{
  animation-delay: 3s
}
@keyframes fadeIn {
  from{
    opacity: 0;
  }
  to{
    opacity: 1;
  }
}
 
.word1{
  opacity: 0;
animation-name: fadeIn;
animation-duration: 0.5s;
animation-fill-mode: forwards;
animation-delay: 3.5s;
}
.word2{
  opacity: 0;
animation-name: fadeIn;
animation-duration: 0.5s;
animation-fill-mode: forwards;
animation-delay: 4s;
}
.word3{
  opacity: 0;
animation-name: fadeIn;
animation-duration: 0.5s;
animation-fill-mode: forwards;
animation-delay: 4.5s;
}
.word4{
  opacity: 0;
animation-name: fadeIn;
animation-duration: 0.5s;
animation-fill-mode: forwards;
animation-delay: 5s;
}
</style>
