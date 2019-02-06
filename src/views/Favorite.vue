<template>
  <div class="search">
    <header class="contentIndexArea">
      <div class="wrap">
        <h2 class="contentIndexArea__index">Favorite</h2>
        <div class="contentIndexArea__content">お気に入り登録をしたコーヒー豆の一覧です。
          <br>販売店のデータ自体が削除されているため表示されないものもございます。
        </div>
        <transition name="delete">
          <section v-if="! isDelete">
            <div class="clearList" v-if="favorites.length">
              <span v-on:click="clearHistory(); isDelete = true">お気に入りを消去する</span>
            </div>
          </section>
        </transition>
      </div>
    </header>
    <div class="wrap">
      <section class="appSection" v-if="favorites.length">
        <transition name="delete">
          <ul class="beansList" v-if="! isDelete">
            <li v-for="favorite in favorites" :key="favorite.url">
              <Beantable
                :location="favorite"
                :result="favorite"
                @changeFavoritesLength="setFavoriteLength"
              ></Beantable>
            </li>
          </ul>
        </transition>
        <transition name="show">
          <div v-if="isDelete">
            <div class="notFound">
              <h2 class="notFound__index">
                <i></i>まだお気に入り登録をしていません。
              </h2>
              <h3 class="notFound__hintIndex">お気に入り登録とは？</h3>
              <div class="notFound__content">
                <p>お好みの豆を見つけたら、画面のハートマーク
                  <span class="sampleIcon">
                    <i class="icon icon--like icon--like--inline"></i>
                  </span>をタップしてください。色が変わったら登録完了です。
                  <br>ここにはお気に入り登録された豆が表示されます。
                </p>
                <p
                  class="notFound__note"
                >お気に入りは一定期間が経過すると削除されたりされなかったりします。ブラウザや端末を変えると保存されませんのでご注意ください。</p>
              </div>
            </div>
          </div>
        </transition>
      </section>
      <section class="appSection" v-else>
        <div class="notFound">
          <h2 class="notFound__index">
            <i></i>まだお気に入り登録をしていません。
          </h2>
          <h3 class="notFound__hintIndex">お気に入り登録とは？</h3>
          <div class="notFound__content">
            <p>お好みの豆を見つけたら、画面のハートマーク
              <span class="sampleIcon">
                <i class="icon icon--like icon--like--inline"></i>
              </span>をタップしてください。色が変わったら登録完了です。
              <br>ここにはお気に入り登録された豆が表示されます。
            </p>
            <p class="notFound__note">お気に入りは一定期間が経過すると削除されたりされなかったりします。ブラウザや端末を変えると保存されませんのでご注意ください。</p>
          </div>
        </div>
      </section>
      <section class="appSection">
        <div class="button button--primary">
          <router-link to="/search" class="backtotop">検索に戻る</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Beantable from "@/components/_components/Beantable";
// import favoritesSetting from "@/components/_mixins/favoriteSetting";

import Items from "@/data/item.json";
import Data from "@/data/example.json";

export default {
  name: "Favorite",
  // mixin: [favoritesSetting],
  components: {
    Beantable
  },
  data: function() {
    return {
      isDelete: false,
      items: Items.items,
      favorites: this.getFavorites(Data)
    };
  },
  methods: {
    getFavorites: function(data) {
      let favoritesStorage = window.localStorage.getItem("favorites");
      let favorites = favoritesStorage
        ? window.localStorage.getItem("favorites").split(",")
        : [];
      let results = [];

      data.forEach(function(e) {
        let data = e;
        let compare = data.link;

        favorites.forEach(function(e) {
          if (compare == e) results.push(data);
        });
      });

      return results;
    },
    /**
     * 履歴を消す
     */
    clearHistory: function() {
      event.stopPropagation();
      event.preventDefault();
      window.localStorage.removeItem("favorites");
    },
    /**
     * App.vueのグローバル変数「FavCount」を変更
     */
    setFavoriteLength: function(l) {
      this.$parent.favCount = l;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/include";

.beansList {
  list-style: none;

  li {
    &:not(:last-child) {
      border-bottom: 1px solid $color_border;
    }
  }
}

.sampleIcon {
  width: 1.2em;
  height: 1.2em;
  margin-right: 3px;
  margin-left: 3px;
  vertical-align: middle;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 10000px;
  background-color: $color_accent;
}

.icon--like--inline:before {
  width: 0.6em;
  height: 0.6em;
}

.notFound__hintIndex {
  width: 150px;
}
</style>
