<template>
  <div id="app">
    <HeaderParts></HeaderParts>
    <router-view/>
    <SiteNav></SiteNav>
  </div>
</template>

<script>
import HeaderParts from "./components/_module/Header";
import SiteNav from "./components/_module/Navigation";

export default {
  name: "App",
  components: {
    HeaderParts,
    SiteNav
  }
};
</script>

<style lang="scss">
@import "./assets/scss/style";
#app {
  padding-top: $space_s;
  padding-bottom: 105px;

  @media screen and (min-width: 480px) {
    min-height: calc(100vh - 105px);
  }
}
</style>
