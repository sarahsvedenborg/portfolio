<template>
  <div class="navBar" :class="{fixed: stop}" :style="{'opacity': opacity}" ref="navBar">
    <div class="logo">
      <router-link to="/">
        <img alt="homeLogo" src="../../assets/Links.svg" width="40px" />
      </router-link>
    </div>
    <ul>
      <li>
        <router-link to="/Projects">Projects</router-link>
      </li>
      <li>
        <router-link to="/About">About</router-link>
      </li>
      <li>
        <router-link to="/Contact">Contact</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    fadable: {
      type: Boolean,
    },
    opacity: {
      type: Number,
    },
    scrollY: {
      type: Number,
    },
  },
  data() {
    return {
      stop: false,
    };
  },
  watch: {
    scrollY() {
      if (this.$refs.navBar.getBoundingClientRect().top < 0) {
        this.stop = true;
      }
    },
  },
};
</script>
<style scoped>
.navBar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  color: white;
  width: 100%;
}
.fixed {
  position: fixed;
  top: 0;
}
.logo {
  padding: 10px;
}
ul {
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  margin: 0px;
}
li a {
  text-transform: uppercase;
  color: white;
  padding: 10px;
  text-decoration: none;
  font-size: small;
}

li a:hover {
  color: var(--color-accent);
}
</style>