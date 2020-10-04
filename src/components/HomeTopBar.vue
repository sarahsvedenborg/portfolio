<template>
  <div class="topBar">
    <!--  <router-link to="/gridtest">Test grid</router-link> -->
    <div>
      <a href="https://github.com/sarahsvedenborg/" target="blank">
        <TopBarIcon altText="GitHub logo" source="GitHub-Mark-Light-64px.png" />
      </a>
      <a href="https://www.linkedin.com/in/sarahsvedenborg/" target="blank">
        <TopBarIcon altText="LinkedIn logo" source="In-White-40.png" />
      </a>
    </div>
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
  </div>
</template>

<script>
import TopBarIcon from "@/components/shared/TopBarIcon";

export default {
  components: { TopBarIcon },
};
</script>

<style scoped>
.topBar {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  color: var(--color-light);
  font-weight: bold;
}

@media (min-width: 768px) {
  .topBar {
    flex-direction: row;
    justify-content: flex-end;
  }
}

.languages img {
  margin: 10px 0px;
}

.languages {
  margin: 0px 10px;
}
</style>