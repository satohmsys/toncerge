<template>
  <div class="history">
    <header class="contentIndexArea">
      <div class="wrap">
        <h2 class="contentIndexArea__index">History</h2>
        <div class="contentIndexArea__content">
          <h3 class="contentIndexArea__content__index">あなたの検索履歴</h3>
        </div>
        <transition name="delete">
          <section v-if="! isDelete">
            <div class="clearList" v-if="histories.length">
              <span v-on:click="clearHistory(); isDelete = true">検索履歴を消去する</span>
            </div>
          </section>        
        </transition>
      </div>
    </header>
    <div class="wrap" v-if="histories.length">
      <section class="appSection">
        <transition name="delete">
          <ul class="historyList" v-if="! isDelete">
            <li v-for="history in histories" :key="history.time" class="historyList__li">
              <header class="historyList__li__index">
                <span class="historyList__li__index__num">{{new Date(history.time).getFullYear()}}</span>年
                <span class="historyList__li__index__num">{{new Date(history.time).getMonth() + 1}}</span>月
                <span class="historyList__li__index__num">{{new Date(history.time).getDate()}}</span>日
                <span class="historyList__li__index__num">{{new Date(history.time).getHours()}}</span>時
                <span class="historyList__li__index__num">{{new Date(history.time).getMinutes()}}</span>分
              </header>
              <ul class="beanScore">
                <li v-for="item in items" :key="item.name">
                  <dl class="beanScore__table">
                    <dt class="beanScore__name">{{item.name}}</dt>
                    <dd class="beanScore__score">{{getVal(item.label,history)}}</dd>
                  </dl>
                </li>
              </ul>
              <div class="button button--primary" v-on:click="reSearch(history)">
                <router-link to="/result">この値でもう一度検索する</router-link>
              </div>
            </li>
          </ul>        
        </transition>
        <transition name="show">
          <div v-if="isDelete">
            <section class="appSection">
              <div class="notFound">
                <h2 class="notFound__index">
                  <i></i>検索履歴はありません。
                </h2>
                <h3 class="notFound__hintIndex">検索履歴とは？</h3>
                <div class="notFound__content">
                  <p>あなたの検索した値を一定期間保存して、このページでまた検索することができます。</p>
                  <p>同じ内容を検索してもラインナップが入れ替わることで、新しいコーヒー豆に出会えるかもしれません。ご活用ください。</p>
                  <p class="notFound__note">検索履歴は一定期間が経過すると削除されたりされなかったりします。ブラウザや端末を変えると保存されませんのでご注意ください。</p>
                </div>
              </div>
            </section>
            <section class="appSection">
              <div class="button button--primary">
                <router-link to="/" class="backtotop">検索にもどる</router-link>
              </div>
            </section>
          </div>            
        </transition>
      </section>
    </div>
    <div class="wrap" v-else>
      <section class="appSection">
        <div class="notFound">
          <h2 class="notFound__index">
            <i></i>検索履歴はありません。
          </h2>
          <h3 class="notFound__hintIndex">検索履歴とは？</h3>
          <div class="notFound__content">
            <p>あなたの検索した値を一定期間保存して、このページでまた検索することができます。</p>
            <p>同じ内容を検索してもラインナップが入れ替わることで、新しいコーヒー豆に出会えるかもしれません。ご活用ください。</p>
            <p class="notFound__note">検索履歴は一定期間が経過すると削除されたりされなかったりします。ブラウザや端末を変えると保存されませんのでご注意ください。</p>
          </div>
        </div>
      </section>
      <section class="appSection">
        <div class="button button--primary">
          <router-link to="/" class="backtotop">検索にもどる</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Items from "@/data/item.json";
// import Data from "@/data/example.json";

export default {
  name: "History",
  data: function() {
    return {
      isDelete: false,
      items: Items.items,
      histories: this.getHistories()
      // results: this.getResults(Items.items, Data)
    };
  },
  methods: {
    /**
     * loop内で使用。localStorageのhistoryから各indexの値を取り出す
     * @param index /data/item.jsonのlabelを参照しlocalStorage.historyのindexとする
     * @param data {object} localStorageのhistory
     * @return
     */
    getVal: function(index, data) {
      return data[index];
    },
    /**
     * localStorageのhistoryを取り出す
     * @return {string} localStorage.historyの中身
     */
    getHistories: function() {
      let historyStorage = JSON.parse(window.localStorage.getItem("history"));
      let histories = historyStorage ? historyStorage : [];

      return histories;
    },
    /**
     * クリックで各historyを再検索する
     * @param query
     */
    reSearch: function(query) {
      event.stopPropagation();
      event.preventDefault();
      Object.keys(query).forEach( function( index ){
        if(index == 'time' ) return;
        // console.log( index, query[index] )
        window.localStorage.setItem( index, query[index] )
      })
    },
    /**
     * 履歴を消す
     */
    clearHistory: function(){
      event.stopPropagation();
      event.preventDefault();
      window.localStorage.removeItem( 'history' )
    }
  }
  // computed: {

  // },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/include";

.contentIndexArea {
  &__content {
    line-height: 1;
  }
}


.historyList {
  list-style: none;

  > li {
    padding-top: $space_s/2;
    padding-bottom: $space_s/2;
    &:not(:last-child) {
      border-bottom: 1px solid $color_border;
    }
  }

  .button {
    width: 200px;
    height: 30px;
    font-size: $fontsize_s;
    margin-left: 0;
  }

  &__li__index {
    letter-spacing: 0.025em;
    margin-bottom: 1em;
    color: $color_main;
    font-weight: bold;

    &:before {
      content: "";
      width: 1em;
      height: 1em;
      background-size: cover;
      background: url(../assets/img/icon-history-color.svg) center center
        no-repeat;
      display: inline-block;
    }

    &__num {
      padding-left: 3px;
      font-family: $fontFamily_en;
      font-size: 1.25em;
    }
  }
}
</style>
