<template>
  <div class="about">
    <NavBar ref="navBar" />
    <StopAtTop
      v-if="isMobile"
      :distanceToTop="{'initial': 40, 'final': 0}"
      :scrollY="scrollY"
      absolutePos
    >
      <OnPageNav
        :navItems="$t('About.menuItems')"
        :action="(ref) => scrollToSection(ref)"
        :itemInView="itemInView"
        :isMobile="true"
      />
    </StopAtTop>
    <div class="row">
      <h1 class="title title-large color-accent" ref="personalRef">{{$t('About.heading')}}</h1>
    </div>
    <div class="row">
      <OnPageNav
        v-if="!isMobile"
        :navItems="$t('About.menuItems')"
        :action="(ref) => scrollToSection(ref)"
        :itemInView="itemInView"
        :scrollY="scrollY"
        :distanceToTop="40"
        absolutePos
      />
      <div class="col col-11 md-8 lg-6">
        <img alt="profile picture" src="@/assets/Sarah.svg" class="col col-4 lg-5" />
        <p>{{$t('About.section1.par1')}}</p>
        <p>{{$t('About.section1.par2')}}</p>
        <p>{{$t('About.section1.par3')}}</p>
        <p>{{$t('About.section1.par4')}}</p>
        <div ref="educationRef">
          <AboutSection
            :heading="$t('About.education')"
            :lists="$t('About.educationList')"
            :setThreshold="(threshold) => threshold1 = threshold"
            listDivider="EducationDivider.svg"
          />
        </div>
        <div ref="skillsRef">
          <AboutSection
            :heading="$t('About.skills')"
            :lists="$t('About.skillsList')"
            :setThreshold="(threshold) => threshold2 = threshold"
            listDivider="SkillsDivider.svg"
          ></AboutSection>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar";
//import Table from "@/components/shared/UI/Table";
import AboutSection from "@/components/AboutSection";
import OnPageNav from "@/components/shared/OnPageNav";
import StopAtTop from "@/components/hoc/StopAtTop";
import { isMobile } from "@/utils.js";

export default {
  components: { NavBar, AboutSection, OnPageNav, StopAtTop },
  created() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  },
  data() {
    return {
      isMobile: isMobile(),
      scrollY: 0,
      threshold1: 1,
      threshold2: 2,
      screenHeight: window.innerHeight,
    };
  },
  computed: {
    // TODO - how to generalize this function to take arbitrary number of sections
    // How to use ref in translation files ans not hardcode refs everywhere...
    itemInView() {
      const offset = this.screenHeight / 2;
      if (this.scrollY >= 0 && this.scrollY + offset < this.threshold1) {
        return "personalRef";
      } else if (
        this.scrollY + offset >= this.threshold1 &&
        this.scrollY + offset < this.threshold2
      ) {
        return "educationRef";
      } else return "skillsRef";
    },
    navBarHeight() {
      return this.$refs.navBar.getBoundingClientRect().height;
    },
  },
  methods: {
    scrollToSection(ref) {
      this.$refs[ref].scrollIntoView();
    },
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: left;
}
p {
  text-align: justify;
  margin-top: 0px;
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
.accent {
  color: var(--color-accent);
  font-weight: bold;
  font-family: "Trirong", serif;
}

img {
  float: left;
  /*   padding: 10px 40px 30px 0px; */
  padding: 5%;
}
</style>
