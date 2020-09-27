<template>
  <div class="home">
    <div class="topView">
      <HomeTopBar />
      <div class="homeHeading">
        <h1 class="title title-large">
          <span class="color-accent">{{$t('Home.name')}},</span>
          {{$t('Home.title')}}
          <span class="dot dot1">.</span>
          <span class="dot dot2">.</span>
          <span class="dot dot3">.</span>
        </h1>

        <p class="subHeading">
          <span class="dot dot4">.</span>
          <span class="dot dot5">.</span>
          <span class="dot dot6">.</span>
          <span class="word1">{{$t('Home.sub1')}} </span>
          <span class="word2 color-accent">{{$t('Home.sub2')}} </span>
          <span class="word3">{{$t('Home.sub3')}} </span>
          <span class="word4 color-accent">{{$t('Home.sub4')}}</span>
        </p>
      </div>
      <!--   <img alt="joinging links" src="../assets/LinksWhite.svg"/> -->
      <img alt="single link" src="@/assets/SingleLinkWhite.svg" class="whiteLink col-4" />
      <img alt="single link" src="@/assets/LinkGreen.svg" class="greenLink col-4" />
      <p
        class="hint"
        :style="{'opacity': 1-opacity*2, 'display': appear ? 'block' : 'none'}"
      >{{$t('Home.scrollDown')}}</p>
    </div>
    <NavBar :fadable="true" :opacity="opacity" :scrollY="scrollY" />
    <div class="col lg-8 content">
      <DisciplineSummaryBox :heading="$t('Home.subTitle1')" body="" linkTo="/Projects/design">
        <p>{{$t('Home.section1.par1')}}</p>
        <p>{{$t('Home.section1.par2')}}</p>
        <p>{{$t('Home.section1.par3')}}</p>
   <!--      <ul>
          <li>What I enjoy as a designer/My strengths (written summary)</li>
          <li>Tools/techniques/processes I use (list)</li>

        </ul> -->
      </DisciplineSummaryBox>
       <div><img src="@/assets/dividerBlack.png" alt="dividing line"/></div>
      <DisciplineSummaryBox :heading="$t('Home.subTitle2')" body="" linkTo="/Projects/development">
        <p>{{$t('Home.section2.par1')}}</p>
          <ul>
          <li>What I enjoy as a developer/My strengths (written summary)</li>
          <li>Tools/techniques/processes I use (list)/Languages/frameworks I use</li>
        </ul>
        </DisciplineSummaryBox>
         <div><img src="@/assets/dividerBlack.png" alt="dividing line"/></div>
         <DisciplineSummaryBox :heading="$t('Home.subTitle3')" body="" linkTo="/Projects/all">
        <p>{{$t('Home.section3.par1')}}</p>
        </DisciplineSummaryBox>
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
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    setTimeout(() => {
      this.appear = true;
    }, 8000);
  },
  data() {
    return {
      opacity: 0,
      scrollY,
      appear: false,
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
.homeHeading {
  margin: 0 auto;
  padding-top: 10vh;
}
.subHeading {
  font-size: x-large;
  margin: 0.5em 0em;
}
.topView {
  background-color: #000;
  width: 100%;
  height: 100vh;
  color: var(--color-light);
}
.hint {
  font-size: 12px;
  color: var(--color-light);
  animation-name: float;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  margin-top: 20vh;
  text-shadow: 0 0 3px var(--color-light);
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

.dot {
  color: var(--color-light);
  opacity: 0;
  /* animation: fadeIn 0.5s ease-in 0 0 normal forwards; */
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
}

.dot1 {
  animation-delay: 0.5s;
}
.dot2 {
  animation-delay: 1s;
}
.dot3 {
  animation-delay: 1.5s;
}
.dot4 {
  animation-delay: 2s;
}
.dot5 {
  animation-delay: 2.5s;
}
.dot6 {
  animation-delay: 3s;
}
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.word1 {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 3.5s;
}
.word2 {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 4s;
}
.word3 {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 4.5s;
}
.word4 {
  opacity: 0;
  animation-name: fadeIn;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 5s;
}

.content {
  margin: 0 auto;
}
</style>
