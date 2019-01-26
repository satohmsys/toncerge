<script>
  export default {
    data: function(){
      return{
        favoritesLength: this.setFavoritesLength()
      }
    },
    methods:{
      setFavoritesLength: function(val){
        var l = 0;

        if(! val){
          let favoritesStorage = window.localStorage.getItem("favorites"); 
          let favorites = favoritesStorage ? favoritesStorage.split(",") : [];
          l = favorites.length;
          console.log('(favoriteSetting.vue)! val l=', l)
        } else {
          l = val;
          console.log('(favoriteSetting.vue)val l=', l)
        }
        this.favoritesLength = Number(l);
        return l
      }
    },
    watch: {
      favoritesLength: function(newValue,oldValue){
        console.log('(favoriteSetting.vue)watch',newValue,oldValue)
      }
    },
    computed: {
      getFavoritesLength: {
        get: function(){
          // console.log( '(favoriteSetting.vue)get', this.favoritesLength)
          // return this.favoritesLength;
          console.log( '(favoriteSetting.vue)get', this.favoritesLength)
          let favoritesStorage = window.localStorage.getItem("favorites"); 
          let favorites = favoritesStorage ? favoritesStorage.split(",") : [];
          let l = favorites.length;
          return l;
        },
        set: function( newValue ){
          this.favoritesLength = newValue;
          console.log( '(favoriteSetting.vue)set', this.favoritesLength)
        }
      }
      
      // getFavoritesLength: function(){
      //   console.log(this.favoritesLength )
      //   return this.favoritesLength;
      // }
    }
  };
</script>