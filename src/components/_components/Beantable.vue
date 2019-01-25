<template>
  <div class="beanData">
    <div class="beanData__share">
      <figure class="beanData__img">
        <img :src="'http://tonya.co.jp' + data.img" alt>
      </figure>
      <div class="beanData__like">
        <div class="button">
          <a
            v-on:click="addFavorite"
            v-bind:data-favindex="data.link"
            v-bind:class="{'-is-favorite': getFavoriteStatus(data)}"
          >
            <i class="icon icon--like"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="beanData__detail">
      <header class="beanData__detail__percentage" v-if="$route.path !== '/favorite'">
        Match level
        <span class="match">{{data.hitscore}}</span>
        <small>/ 5</small>
      </header>
      <h3 class="beanData__detail__name">{{data.name}}</h3>
      <ul class="beanScore">
        <li v-for="item in items" :key="item.name">
          <dl class="beanScore__table">
            <dt class="beanScore__name">{{item.name}}</dt>
            <dd class="beanScore__score">{{getVal(item.label,data)}}</dd>
          </dl>
        </li>
      </ul>
    </div>
    <i v-bind:data="modalPrefix" v-on:click="modalToggle(modalPrefix)" class="icon icon--more"></i>
    <modal v-bind:name="modalPrefix" height="auto" :scrollable="true">
      <div class="detail wrap">
        <figure class="detail__img">
          <img :src="'http://tonya.co.jp' + data.img" alt>
        </figure>
        <h4 class="detail__name">{{data.name}}</h4>
        <div :class="{'-sale': 0 < data.saleprice}" class="detail__price">
          <div class="price">
            <span v-if="data.saleprice">{{data.saleprice}}</span>
            <span v-else>{{data.price}}</span>
            <small class="detail__price__label" v-if="data.saleprice">sale!</small>
          </div>
          <div class="lot">
            100g
          </div>
        </div>
        <ul class="detail__beanScore beanScore">
          <li v-for="item in items" :key="item.name">
            <dl class="beanScore__table">
              <dt class="beanScore__name">{{item.name}}</dt>
              <dd class="beanScore__score">{{getVal(item.label,data)}}</dd>
            </dl>
          </li>
        </ul>   
        <footer class="detail__footer">
          <div class="button button-secondary">
            <a v-bind:href="'http://tonya.co.jp' + data.link" target="_blank">詳細を見る <small>（珈琲問屋サイト）</small></a>
          </div>
          <div v-on:click="modalToggle(modalPrefix)" class="detail__close">
            CLOSE
          </div>
        </footer>     
      </div>
    </modal>
  </div>
</template>

<script>
import Items from "@/data/item.json";
import favoritesSetting from "@/components/_mixins/favoriteSetting";

export default {
  name: "Beantable",
  mixins: [favoritesSetting],
  props: ["result", "item", "location"],
  data: function() {
    return {
      data: this.result,
      modalPrefix: this.getModalPrefix(),
      items: Items.items
    };
  },
  methods: {
    /**
     * 数値をポイント
     * @return {string} localStorage中のpoints中の各項目ポイント
     */
    getVal: function(index, data) {
      return data.points[index];
    },
    /**
     * ループ要素ごとに個別にモーダル指定
     * @return {string} localStorage中のデータから商品URLのディレクトリをプレフィクスとして
     */
    getModalPrefix: function() {
      let link = this.result.link;
      let result = link.match(/shop\/.*\/([a-z|0-9].*)\//);

      return result[1];
    },
    /**
     * お気に入りかどうか？の判定
     * @return {bool} localStorage中のfavoritesとlinkを照合して審議
     */
    getFavoriteStatus: function(data) {
      let favindex = data.link;
      let favoritesStorage = window.localStorage.getItem("favorites"); 
      let favorites = favoritesStorage ? favoritesStorage.split(",") : [];
      let results = favorites.indexOf(favindex) !== -1;
      return results;
    },
    /**
     * お気に入り登録
     */
    addFavorite: function() {
      event.stopPropagation();
      event.preventDefault();

      let target = event.currentTarget;
      let favindex = target.getAttribute("data-favindex");
      let favoritesStorage = window.localStorage.getItem("favorites"); 
      let favorites = favoritesStorage ? favoritesStorage.split(",") : [];
      let index = favorites.indexOf(favindex);
      let newFavorites = null;
      let budge = document.querySelector(".siteNav__favoritesNum");

      if (index === -1) {
        target.classList.add("-is-favorite");
        newFavorites = favorites;
        newFavorites.push(favindex);
      } else {
        target.classList.remove("-is-favorite");
        newFavorites = favorites.filter(function(e) {
          return e !== favorites.splice(index, 1)[0];
        });
      }

      newFavorites = newFavorites.filter(function(e) {
        return e !== "" && e !== "null" && e !== null &&e !== "undefined";
      });

      window.localStorage.setItem("favorites", newFavorites);
      this.getFavoritesLength = newFavorites.length;
      // this.$data.favoritesLength = newFavorites.length;
      // this.setFavoritesLength(newFavorites.length)
      console.log( this.$data.favoritesLength )

      // if (budge) budge.innerText = newFavorites.length;

    },
    /**
     * モーダル開閉
     */
    modalToggle: function(prefix) {
      this.$modal.toggle(prefix);
    }
  },
  computed: {
    
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/include";

.beanData {
  padding-top: 20px;
  padding-right: 40px;
  padding-bottom: 20px;
  display: flex;
  position: relative;

  ///// left
  &__share {
    width: percentage(70/ 335);
    min-width: 60px;
    margin-right: 20px;
  }

  ///// img
  &__img {
    background-color: #fff;
  }

  &__like {
    margin-top: 20px;

    .button {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 20px;
      right: -4px;

      @media screen and (max-width: 480px){
      width: 32px;
      height: 32px;
      }

      a {

        &.-is-favorite {
          background: $brown_bright;
        }
      }
    }
  }

  ///// right
  &__detail {
    &__percentage {
      margin-bottom: 1em;
      line-height: 1;
      letter-spacing: 0.015em;
      margin-bottom: 10px;
      font-family: $fontFamily_en;

      span {
        padding-left: 3px;
        padding-right: 5px;
        color: #d86414;
        font-size: 1.8rem;
        font-weight: 500;
      }

      small {
        font-weight: 500;
        color: $brown_bright;
        font-size: $fontsize_s;
      }
    }

    &__name {
      line-height: 1.5;
      margin-top: 0em;
      margin-bottom: 15px;
      letter-spacing: 0.015em;
      font-feature-settings: "palt";
      font-size: 1em;
      font-weight: 600;
      // font-weight: normal;
    }
  }

  ///////// modal
  .detail{
    &__img{
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__name{
      margin-bottom: 0;
      font-size: $fontsize_m;
      font-weight: bold;
      text-align: center;
    }

    &__price{
      line-height: 1;
      margin-top: 1em;
      margin-bottom: $space_s/2;
      color:$color_main;  
      text-align: center;
      font-weight: 500;
      font-family: $fontFamily_en;


      .price{
        display: inline-block;

        &:before{
          content: "¥";
          display: inline-block;
          font-size: $fontsize_s;
        }
      }
      &.-sale .price{
        color: $color_accent;
        position: relative;
      }

      .lot{
        margin-left: 5px;
        font-size: 1rem;
        display: inline-block;
          &:before{
            content: "/";
            display: inline-block;
          }        
      }

      &__label{
        padding-left: 2px;
      }

    }
    .detail__close{
      margin-top: 1em;
    }

    &__beanScore{
      margin-bottom: $space_s;
      justify-content: center;

      dl{

        @media screen and (min-width: 480px) {
          margin-bottom: 0;
        }        
      }

      li:last-child dl{
        margin-bottom: 0;
        margin-right: 0;
      }
    }
  }
}
</style>
