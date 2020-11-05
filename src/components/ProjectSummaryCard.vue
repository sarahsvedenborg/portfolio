<template>
  <div class="row">
    <div
      class="card"
      @click="$router.push('/project/' + project.projectURL)"
      v-if="selectedCategory"
      :style="{'flex-direction': index % 2 == 0 ? 'row-reverse' : 'row'}"
    >
      <img
        :class="isMobile ? 'mobileImage' : 'image'"
        alt="screenshot of website"
        :src="require('@/assets/screenshots/' + project.screenshots[0])"
      />
      <div class="info" :class="{mobileInfo: isMobile}">
      <WIPbanner v-if="project.wip && project.wip == true" :placement="index % 2 == 0 ? 'left' : 'right'"/>
        <img class="logo" :src="require('@/assets/' + project.technologyIcon)" width="30px" />
        <h3 class="subtitle title-small">{{project.name}}</h3>
        <div class="tagArea">
          <Tag v-for="(tag,i) in project.discipline" :key="i" :tagType="tag" />
        </div>
        <p>{{project.summary}}</p>
        <router-link :to="'/project/'+ project.projectURL">{{$t('ProjectSummaryCard.button')}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/shared/Tag";
import WIPbanner from "@/components/shared/WIPbanner";
export default {
  components: { Tag, WIPbanner },
  props: {
    project: {
      type: Object,
    },
    index: {
      type: Number,
    },
    selectedCategory: {
      type: Boolean,
    },
    isMobile: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.card {
  position: relative;
  display: flex;
  margin: 5vh 0px;
  border: 1px solid gray;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.info {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 50%;
}

.mobileInfo {
  width: 100%;
  z-index: 0;
  padding: 5%;
}

.image {
  width: 50%;
  object-fit: cover;
}

.mobileImage {
  width: 80%;
  object-fit: cover;
  height: inherit;
  position: absolute;
  top: 10px;
  left: 31px;
  z-index: -2;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.2);
}

.tagArea {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

a {
  color: var(--color-accent);
  font-weight: bold;
}
</style>