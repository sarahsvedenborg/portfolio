<template>
  <div class="titledList" :class="{'lg-6': horizontal}">
    <h3 class="subtitle title-small">{{list.heading}}</h3>
    <ul>
      <li v-for="(item,i) in list.items" :key="i">
        <span>{{item}}</span>
        <br />
        <img :src="require('@/assets/icons/' + (listDivider ? listDivider : 'dividerShortGreen.png'))" width="50px" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Object,
    },
    horizontal: {
      type: Boolean,
      required: false,
    },
    listDivider: {
      type: String,
    },
  },
};
</script>

<style scoped>
.titledList {
  text-align: center;
}
ul {
  padding-left: 0px;
}
li {
  list-style-type: none;
  padding: 0px 10px;
}

li:last-child img {
  display: none;
}

li img {
  padding: 15px 0px 5px 0px;
}
</style>