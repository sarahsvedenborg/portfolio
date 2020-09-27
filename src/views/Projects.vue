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
      <div class="col lg-8">
        <ProjectSummaryCard
          v-for="(project,i) in projects"
          :key="project.name"
          :project="project"
          :index="i"
          :selectedCategory="isSelectedCategory(project.discipline)"
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
import { projects } from "@/projects.js";
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
      projects: Object.keys(projects).map((itemName) => {
        let project = projects[itemName];
        project["projectURL"] = itemName;
        return project;
      }),
      selectedCategories: this.preSelectedCategories,
      displayModal: false,
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
  },
};
</script>

<style scoped>
.teaser {
  font-size: small;
  margin-bottom: 0px;
  cursor: pointer;
}
</style>