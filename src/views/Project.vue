<template>
  <div>
    <NavBar />
    <div class="row">
      <StopAtTop :distanceToTop="{ initial: 0, final: 0 }" :scrollY="scrollY">
        <WIPbanner
          placement="right"
          v-if="project.wip && project.wip == true"
        />
      </StopAtTop>
      <div class="col lg-8">
        <h1 class="title title-large color-accent">{{ project.name }}</h1>
        <ProjectSection :heading="$t('Project.problem')">
          <div class="problem">
            <p>
              <!--   <img class="quote" src="@/assets/quoteStart.svg" /> -->
              {{ project.problem }}
              <!--  <img class="quote" src="@/assets/quoteEnd.svg" /> -->
            </p>
            <p>{{ $t("Project.demography") }}: {{ project.demography }}</p>
          </div>
        </ProjectSection>
        <ProjectSection :heading="$t('Project.solution')">
          <p v-if="project.gitHubURL != ''">
            {{ $t("Project.seeCode") }}
            <a :href="project.gitHubURL" target="_blank">{{
              $t("Project.here")
            }}</a>
          </p>
          <p v-if="project.siteURL != ''">
            {{ $t("Project.seeSite") }}
            <a :href="project.siteURL" target="_blank">{{
              $t("Project.here")
            }}</a>
          </p>
          <div class="images">
            <img
              v-for="image in project.screenshots"
              :key="image"
              :src="require('@/assets/screenshots/' + image)"
            />
          </div>
        </ProjectSection>
        <ProjectSection :heading="$t('Project.technology')">
          <ul class="technologies">
            <li v-for="technology in project.technology" :key="technology[0]">
              {{ technology[0] }}: {{ technology[1] }}
            </li>
          </ul>
        </ProjectSection>
        <ProjectSection :heading="$t('Project.lessons')">
          <p>{{ project.lessons }}</p>
        </ProjectSection>
        <ProjectSection :heading="$t('Project.other')" v-if="project.other">
          <p>{{ project.other }}</p>
        </ProjectSection>
        <ProjectSection
          :heading="$t('Project.acknowledgements')"
          v-if="project.acknowledgements.length > 0"
        >
          <h4 class="subtitle">{{ $t("Project.acknowledgementsSub") }}</h4>
          <p v-for="(item, i) in project.acknowledgements" :key="i">
            {{ item.what }}:
            <a :href="item.source" target="_blank">{{ item.source }}</a>
          </p>
        </ProjectSection>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar";
import WIPbanner from "@/components/shared/WIPbanner";
import StopAtTop from "@/components/hoc/StopAtTop";
import ProjectSection from "@/components/hoc/ProjectSection";
import { projectsNO } from "@/projectsNO.js";
import { projectsENG } from "@/projectsENG.js";
export default {
  created() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleScroll);
  },
  components: { NavBar, ProjectSection, WIPbanner, StopAtTop },
  props: {
    projectName: {
      type: String,
    },
  },
  data() {
    return {
      project:
        this.$root.$i18n.locale == "en"
          ? projectsENG[this.projectName]
          : projectsNO[this.projectName],
      scrollY: 0,
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
.quote {
  display: inline-block;
  width: 1.5em;
  padding: 0px 5px;
}
.problem {
  position: relative;
}

a {
  font-weight: bold;
  color: var(--color-accent);
}

.images img {
  width: 60%;
  margin: 5px 0px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}

.images {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}

@media (min-width: 768px) {
  .images img {
    width: 25%;
    margin: 0px;
  }
  .images {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
}

.technologies {
  list-style-type: none;
  margin: 0px;
  padding: 0px;
}

.technologies li {
  padding: 5px;
}
</style>