<template>
  <div>
    <NavBar />
    <div class="row">
      <div class="col">
        <h1 class="title title-large color-accent">{{$t("Projects.heading")}}</h1>
        <Checkbox
          id="inputUX"
          :val="$t('Projects.ux')"
          :checkedByDefault="selectedCategories['UX']"
          :changed="(e) => selectedCategories['UX'] = e.target.checked"
        />
        <Checkbox
          id="inputFronted"
          :val="$t('Projects.dev')"
          :checkedByDefault="selectedCategories['Front-end']"
          :changed="(e) => selectedCategories['Front-end'] = e.target.checked"
        />
        <p class="teaser" @click="() => displayModal = true">{{$t('Projects.strangeCheckmarks')}}</p>
      </div>
    </div>
    <div class="row">
      <div class="col col-11 lg-8">
        <ProjectSummaryCard
          v-for="(project,i) in projects"
          :key="project.name"
          :project="project"
          :index="i"
          :selectedCategory="isSelectedCategory(project.discipline)"
          :isMobile="isMobile"
        />
      </div>
    </div>
    <Modal v-if="displayModal" :closeModal="() => displayModal = false" />
  </div>
</template>

<script>
import Checkbox from "@/components/shared/UI/Checkbox";
import Modal from "@/components/shared/UI/Modal";
import NavBar from "@/components/shared/NavBar";
import ProjectSummaryCard from "@/components/ProjectSummaryCard";
import { projectsENG } from "@/projectsENG.js";
import { projectsNO } from "@/projectsNO.js";
import { isMobile } from "@/utils.js";
export default {
  created() {
    window.scrollTo(0, 0);
  },
  components: { NavBar, ProjectSummaryCard, Checkbox, Modal },
  props: {
    preSelectedCategories: {
      type: Object,
    },
  },
  data() {
    return {
      projects: this.initializeProjects(),
      selectedCategories: this.preSelectedCategories,
      displayModal: false,
      isMobile: isMobile()
    };
  },
  methods: {
    isSelectedCategory(tagList) {
      let selectedCategoriesAsList = Object.keys(this.selectedCategories).map(
        (itemName) => {
          return this.selectedCategories[itemName] ? itemName : null;
        }
      );
      for (let i = 0; i < tagList.length; i++) {
        if (selectedCategoriesAsList.includes(tagList[i])) {
          return true;
        }
      }
      return false;
    },
    initializeProjects() {
      const localizedProjects = this.$root.$i18n.locale == 'en' ? projectsENG : projectsNO
      let projects = Object.keys(localizedProjects).map((itemName) => {
        let project = localizedProjects[itemName];
        project["projectURL"] = itemName;
        return project;
      })
      return projects
    }
  },
};
</script>

<style scoped>
.teaser {
  font-size: small;
  margin-bottom: 0px;
  cursor: pointer;
  text-decoration: underline;
    text-decoration-color: var(--color-accent);
}
</style>