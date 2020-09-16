<template>
  <div class="col lg-10">
    <div class="card">
      <div class="image" :class="index % 2 == 0 ? 'infoRight' : 'infoLeft'">
        <img alt="screenshot of website" src="@/assets/forBarnaThumbnail.png" />
      </div>
      <div class="info" :class="index % 2 == 0 ? 'infoRight' : 'infoLeft'">
        <img class="logo" src="@/assets/Vue.svg" width="50px" />
        <h4 class="heading">{{project.name}}</h4>
        <p>{{project.summary}}</p>
        <router-link to="/projects">Se mer</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    created(){
        console.log("icon", this.project.technology)
    },
  props: {
    project: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
};
</script>

<style scoped>
.card {
  margin-bottom: 20px;
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
}
</style>