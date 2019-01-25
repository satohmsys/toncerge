<template>
  <div class="search">
    <header class="contentIndexArea">
      <div class="wrap">
        <h2 class="contentIndexArea__index">Result</h2>
        <div class="contentIndexArea__content">
          <h3 class="contentIndexArea__content__index">あなたの検索情報</h3>
          <ul class="beanScore">
            <li v-for="item in items" :key="item.name">
              <dl class="beanScore__table">
                <dt class="beanScore__name">{{item.name}}</dt>
                <dd class="beanScore__score">{{getVal(item.label)}}</dd>
              </dl>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="wrap">
      <section class="appSection">
        <ul class="beansList" v-if="results.length">
          <li v-for="result in results" :key="result.name">
            <Beantable :result="result"></Beantable>
          </li>
        </ul>
        <div class="notFound" v-else >
          <h2 class="notFound__index">
            <i></i>あなたの好みに近い豆はありませんでした…
          </h2>
          <h3 class="notFound__hintIndex">
            検索のヒント
          </h3>
          <div class="notFound__content">
            <p>
              <strong>各項目を「<span class="numAppear">3</span>」以上に設定</strong>するとヒットしやすくなります。
            </p>
            <p>良質なコーヒーは様々な個性があり、どれも絶妙な風味のバランス感を持っていますので、思い切って選んでみましょう。</p>
          </div>
        </div>
        <!-- <figure class="notFound__logo">
          <img src="../assets/img/toncerge-logo.svg" width="100" alt="">
        </figure> -->
      </section>
      <section class="appSection">
        <div class="button button--primary">
          <router-link to="/" class="backtotop">検索に戻る</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Beantable from "@/components/_components/Beantable";
import Items from "@/data/item.json";
import Data from "@/data/example.json";

export default {
  name: "Result",
  components: {
    Beantable
  },
  data: function() {
    return {
      items: Items.items,
      results: this.getResults(Items.items, Data)
    };
  },
  // computed: {

  // },
  methods: {
    getVal: function(index) {
      return window.localStorage.getItem(index);
    },
    setSearchVal: function(index) {
      var value = window.localStorage.getItem(index);
      var splittedVal = value.split(".", -1);
      if (splittedVal.length < 2) {
        value = splittedVal + ".0";
      }
      return {
        index: value
      };
    },
    getResults: function(items, data) {
      let query = {},
        subQuery_plus = {}, // + 0.´5
        subQuery_minus = {}, // - 0.´5
        results = []; //検索結果ヒット格納配列

      /**
       * @description デフォルト項目を使い検索クエリを設定
       */
      items.forEach(function(e) {
        // query.push(e);
        query[e.label] = window.localStorage.getItem(e.label); //検索
        subQuery_plus[e.label] =
          Number(window.localStorage.getItem(e.label)) + 0.5;
        subQuery_minus[e.label] =
          Number(window.localStorage.getItem(e.label)) - 0.5;
      });

      /**
       * @description スクレイピングデータで取得したオブジェクトを走査
       */
      data.forEach(function(e) {
        let score = e.points; //1データ中各テイストのスコア
        let hittedCount = 0; //ヒットした数をカウント

        for (var key in score) {
          let compare = String(query[key]); //検索クエリの特定テイストのスコア

          // console.log(query[key],'::q')
          // console.log(subQuery_plus[key],'::pus')
          // console.log(subQuery_minus[key],'::minus')
          // console.log(score[key],'thisscore')

          if (compare == Number(score[key])) {
            hittedCount++;
          } else if (
            subQuery_plus[key] == Number(score[key]) ||
            subQuery_minus[key] == Number(score[key])
          ) {
            hittedCount += 0.5;
          }
        }

        /**
         * @description ヒット数を判定し配列に追加
         */
        if (3 <= hittedCount) {
          e["hitscore"] = hittedCount;
          results.push(e);
        }
      });

      /**
       * @description hitscore で配列のソート
       */
      results.sort(function(a,b){
        if(a.hitscore<b.hitscore) return 1;
        if(a.hitscore > b.hitscore) return -1;
        return 0;        
      })

      return results;
    }
  }
  // created: ($route, $params) => {
  //   console.log($route)
  //   return false
  // },
  // beforeRouteEnter(to, from, next) {
  // このコンポーネントを描画するルートが確立する前に呼ばれます。
  // `this` でのこのコンポーネントへのアクセスはできません。
  // なぜならばこのガードが呼び出される時にまだ作られていないからです!
  //   console.log(to, from);
  //   next(vm => {
  //     let aa = vm.$children;

  //     aa.forEach(function(e) {
  //       console.log(e);
  //     });
  //   });
  // }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/include";
.contentIndexArea{
  &__content{
    line-height: 1;
  }
}

.beansList {
  list-style: none;

  li{

    &:not(:last-child) {
      border-bottom: 1px solid $color_border;
    }    
  }
}


.notFound{
  padding-top: $space_s;

  &__index{
    margin-bottom: $space_s;
    font-weight: bold;
    // font-size: $fontsize_m;
    text-align: center;

    i{
      &:before{
        content:"Sorry! Not found.";
        letter-spacing: 0.09em;        
        display: block;
        margin-bottom: 10px;
        color: $brown_bright;
        font-style: normal;
        font-size: $fontsize_m;
        font-family: $fontFamily_en;
        font-weight: bold;
      }
    }
  }
  &__hintIndex{
    width: 100px;
    line-height: 1;
    margin-right: auto;
    margin-bottom: -0.5em;
    margin-left: auto;
    padding-right: 1em;
    padding-left: 1em;
    position: relative;
    margin-right: auto;
    margin-left: auto;
    text-align: center;
    background-color: #f8f8f8;

    &:before,
    &:after
    {
      content:"";
      width: 1px;
      height: 1em;
      transform-origin: center bottom;
      display: inline-block;
      background-color: $brown;
    }

    &:before{
      transform: rotate( -45deg );
    }
    &:after{
      transform: rotate( 45deg );
    }
  }

  .numAppear{
    padding-right: 2px;
    padding-left: 2px;
    font-size: 1.5em;
    color: #d86414;
  }

  &__content{
    line-height: 1.75;
    padding: 0.1em 1em 0em;
    border: 1px solid $brown;
  }

}
</style>
