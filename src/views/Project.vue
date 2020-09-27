<template>
  <div>
    <NavBar />
    <div class="row">
      <div class="col lg-8">
        <h1 class="title title-large color-accent">{{project.name}}</h1>
        <ProjectSection heading="The problem">
          <div class="problem">
            <p>{{project.problem}}</p>
            <p>Målgruppe: {{project.demography}}</p>
          </div>
        </ProjectSection>
        <ProjectSection heading="The solution">
          <p>
            Se koden
            <a :href="project.gitHubURL" target="_blank">her</a>
          </p>
          <p>
            Se siden
            <a :href="project.siteURL" target="_blank">her</a>
          </p>
          <div class="images">
            <img
              v-for="image in project.screenshots"
              :key="image"
              :src="require('@/assets/screenshots/' + image)"
            />
          </div>
        </ProjectSection>
        <ProjectSection heading="Teknologier">
          <ul>
            <li>Rammeverk: Vue.js</li>
            <li>Backend: Firebase</li>
            <li>Hosting: Netlify</li>
            <li>Version control: Git</li>
            <li>Project planning: Trello</li>
          </ul>
        </ProjectSection>
        <ProjectSection heading="Lærdom">
          <p>
            Prosjeket er laget som en del av et React-kurs på
            <a href="www.udemy.com">udemy.com</a> med Maximillian Swartzmüller
          </p>
        </ProjectSection>
        <ProjectSection heading="Annet">
          <p>Prosjeket er laget som en del av et React-kurs på udemy.com med Maximillian Swartzmüller</p>
        </ProjectSection>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/shared/NavBar";
import ProjectSection from "@/components/hoc/ProjectSection";
import { projects } from "@/projects.js";
export default {
  created() {
    window.scrollTo(0, 0);
  },
  components: { NavBar, ProjectSection },
  props: {
    projectName: {
      type: String,
    },
  },
  data() {
    return {
      project: projects[this.projectName],
    };
  },
};
</script>

<style scoped>
.problem {
  position: relative;
}
.problem::before {
  content: url("../assets/quoteStart.svg");
  position: absolute;
  top: 0;
  left: 0;
}
.problem::after {
  content: url("../assets/quoteEnd.svg");
  position: absolute;
  bottom: 0;
  right: 0;
}

a {
  font-weight: bold;
  color: var(--color-accent);
}

.images img {
  width: 25%;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
}

.images {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>