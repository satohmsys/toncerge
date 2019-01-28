<template>
  <div id="app">
    <HeaderParts></HeaderParts>
    <router-view :favcount="favCount"/>
    <SiteNav :favcount="favCount"></SiteNav>
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
  },
  data: function(){
    return {
      favCount: this.setFavoritesLength(null)
    }
  },
    methods:{
      setFavoritesLength: function(val){
        var l = 0;

        if(! val){
          let favoritesStorage = window.localStorage.getItem("favorites"); 
          let favorites = favoritesStorage ? favoritesStorage.split(",") : [];
          l = favorites.length;
          console.log('(App.vue)! val l=', l)
        } else {
          l = val;
          console.log('(App.vue)val l=', l)
        }
        this.favoritesLength = Number(l);
        // return l
      }
    },
    watch: {
      favCount: function(newValue,oldValue){
        console.log('(App.vue)watch',newValue,oldValue)
      }
    },
    computed: {
      getFavoritesLength: {
        get: function(){
          console.log( '(App.vue)get', this.favoritesLength)
          let favoritesStorage = window.localStorage.getItem("favorites"); 
          let favorites = favoritesStorage ? favoritesStorage.split(",") : [];
          let l = favorites.length;
          return l;
        },
        set: function( newValue ){
          this.favoritesLength = newValue;
          console.log( '(App.vue)set', this.favoritesLength)
        }
      }  
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
