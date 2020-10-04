<template>
  <ul :class="mobile ? 'mobile' : 'desktop'">
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
</template>
<script>
import TopBarIcon from "@/components/shared/TopBarIcon";
export default {
  components: { TopBarIcon },
  props: {
    mobile: {
      type: Boolean,
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  padding: 10px;
  margin: 0px;
}

.desktop {
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.mobile {
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-end;
  height: 150px;
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