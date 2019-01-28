<script>
  export default {
    methods:{
      /**
       * App.vueのグローバル変数「FavCount」を変更
       */
      setFavoriteLength: function(l){
        this.$root.favCount = l
      }
    },
    // watch: {
    //   favoritesLength: function(newValue,oldValue){
    //     console.log('(favoriteSetting.vue)watch',newValue,oldValue)
    //   }
    // },
    // computed: {
    //   getFavoritesLength: {
    //     get: function(){
    //       // console.log( '(favoriteSetting.vue)get', this.favoritesLength)
    //       // return this.favoritesLength;
    //       console.log( '(favoriteSetting.vue)get', this.favoritesLength)
    //       let favoritesStorage = window.localStorage.getItem("favorites"); 
    //       let favorites = favoritesStorage ? favoritesStorage.split(",") : [];
    //       let l = favorites.length;
    //       return l;
    //     },
    //     set: function( newValue ){
    //       this.favoritesLength = newValue;
    //       console.log( '(favoriteSetting.vue)set', this.favoritesLength)
    //     }
    //   }
    // }
  };
</script>