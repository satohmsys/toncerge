<script>
  export default {
    data: function(){
      return{
        favoritesLength: 0,//this.setFavoritesLength(null),
        favs: this.setFavoritesLength(null)
      }
    },
    methods:{
      setFavoritesLength: function(val){
        let l = 0;

        if(! val){
          let favoritesStorage = window.localStorage.getItem("favorites"); 
          let favorites = favoritesStorage ? favoritesStorage.split(",") : [];
          l = favorites.length;
          console.log('val l=', l)
        } else {
          l = val;
          console.log('!val l=', l)
        }
        this.favoritesLength = l;
        return l
      },
      countFavoritesLength: function( l ){
        return l;
      }
    },
    watch: {
      favoritesLength: function(newValue,oldValue){
        console.log('watch::',newValue,oldValue)
      }
    },
    computed: {
      getFavoritesLength: {
        get: function(){
          console.log( 'get', this.favoritesLength)
          return this.favoritesLength;
        },
        set: function( newValue ){
          this.favoritesLength = newValue;
          console.log( 'set', this.favoritesLength)
          return newValue
        }
      }
      // getFavoritesLength: function(){
      //   console.log(this.favoritesLength )
      //   return this.favoritesLength;
      // }
    }
  };
</script>