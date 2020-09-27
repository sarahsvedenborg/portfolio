<template>
  <div class="navBar" :class="{fixed: stop}" :style="{'opacity': opacity}" ref="navBar">
    <div class="logo">
      <router-link to="/">
        <img alt="homeLogo" src="../../assets/LinksThumbnail.svg" width="40px" />
      </router-link>
    </div>
    <ul>
      <li>
        <router-link to="/Projects/all">{{$t('NavBar.projects')}}</router-link>
      </li>
      <li>
        <router-link to="/About">{{$t('NavBar.about')}}</router-link>
      </li>
      <li>
        <router-link to="/Contact">{{$t('NavBar.contact')}}</router-link>
      </li>
      <li>
        <div class="languages">
          <TopBarIcon
            v-if="$root.$i18n.locale == 'no'"
            source="NorwayAccent.svg"
            :action="() => $root.$i18n.locale = 'no'"
            altText="Norway"
          />
          <TopBarIcon
            v-else
            source="NorwayWhite.svg"
            :action="() => $root.$i18n.locale = 'no'"
            altText="Norway"
          />
          <TopBarIcon
            v-if="$root.$i18n.locale == 'en'"
            source="UKaccent.svg"
            :action="() => $root.$i18n.locale = 'en'"
            altText="England"
          />
          <TopBarIcon
            v-else
            source="UKwhite.svg"
            :action="() => $root.$i18n.locale = 'en'"
            altText="England"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import TopBarIcon from "@/components/shared/TopBarIcon";
export default {
  components: { TopBarIcon },
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
  background-color: var(--color-dark);
  color: var(--color-light);
  width: 100%;
}
.fixed {
  position: fixed;
  top: 0;
}
.logo {
  padding: 5px 0px 5px 10px;
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
  color: var(--color-light);
  padding: 10px;
  text-decoration: none;
  font-size: small;
}

li a:hover {
  color: var(--color-accent);
}

.languages img {
  margin: 0px;
}

.languages {
  margin: 0px 10px;
}
</style>