<template>
  <div class="col" v-if="selectedCategory">
    <div class="card">
      <div class="image" :class="index % 2 == 0 ? 'infoRight' : 'infoLeft'">
        <img alt="screenshot of website" :src="require('@/assets/screenshots/' + project.screenshots[0])" />
      </div>
      <div class="info" :class="index % 2 == 0 ? 'infoRight' : 'infoLeft'">
        <img class="logo" src="@/assets/Vue.svg" width="30px" />
        <h3 class="subtitle title-small">{{project.name}}</h3>
        <div class="tagArea">
          <Tag v-for="(tag,i) in project.discipline" :key="i" :tagType="tag" />
        </div>
        <p>{{project.summary}}</p>
        <router-link :to="'/project/'+ project.projectURL">Se mer</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Tag from "@/components/shared/Tag";
export default {
  components: { Tag },
  props: {
    project: {
      type: Object,
    },
    index: {
      type: Number,
    },
    selectedCategory: {
      type: Boolean
    }
   
  }
};
</script>

<style scoped>
.card {
  margin: 5vh 0px;
  border: 1px solid black;
}

.card::after {
  content: "";
  display: block;
  clear: both;
}

.infoRight {
  float: right;
  border-left: 1px solid black;
}

.infoLeft {
  float: left;
  border-right: 1px solid black;
}

.image {
  width: 50%;
  height: inherit;
  /*   height: 400px; */
}

.image img {
  width: 100%;
  height: inherit;
  object-fit: cover;
}
.info {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  overflow: hidden;
  text-overflow: ellipsis;
}

.tagArea{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

a {
  color: var(--color-accent);
  font-weight: bold;
}

@media (max-width: 576px) {
   .image{
     display: none;
   }
 }

 @media (max-width: 576px) {
   .info{
     width: 80%;
   }
 }
</style>