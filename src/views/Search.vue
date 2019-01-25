<template>
  <div class="search">
    <div class="wrap">
      <section class="appSection search__intro">
        <h2>つまみを左右に動かして、
          <br>好みのコーヒーの味をなんとなく決めてみましょう。
          <br>右に行くほど特徴が強いものを検索できます。
        </h2>
        <footer class="search__intro__footer" v-on:click="modalToggle">
          <span class="needsHelp">
            <a href data-fancybox>検索のヒント</a>
          </span>
        </footer>
        <modal name="hint" height="auto" :scrollable="true">
          <div class="detail wrap">  
            <h3 class="detail__index">
              検索のヒント
            </h3>
            <div class="detail__content">
              <h4 class="detail__content__index">はじめに</h4>
              <p>それぞれの項目のツマミを左右に動かして、コーヒーの特徴の強さを指定してください。<br>「1」だとその特徴が弱く、「5」だとその特徴が強く現れるとされるコーヒー豆を検索できます。</p>
              <p>また、検索履歴は一定期間<router-link to="/history">保存</router-link>されます。（ブラウザや端末を変えていない場合）</p>
              <h4 class="detail__content__index">指定のコツ</h4>
              <p>それぞれの値を「<strong class="numAppear">3</strong>」以上にするとヒットしやすくなります。</p>
              <p> また、「甘み」「苦み」と、一見、相反するように捉えることができる項目がありますが、気にせずに指定してください。</p>
              <figure><img src="@/assets/img/top-hint-sensaku.jpg" alt=""></figure>
              <p>コーヒーの味は様々な果実や野菜、食べ物や飲み物に例えられます。コーヒー自体が果実であり、気候や土地によって全く違う味になるため、甘くもあり、苦くもあり、また、心地の良い酸味があるものが存在するのです。</p>
            </div>
            <footer class="detail__footer">
              <div v-on:click="modalToggle" class="detail__close">
                CLOSE
              </div>
            </footer>
          </div>
        </modal>
      </section>
      <section class="appSection">
        <ol class="barsArea">
          <li v-for="item in items" :key="item.label">
            <Bar :item="item"></Bar>
          </li>
        </ol>
      </section>
      <section class="appSection">
        <div class="button button--primary" v-on:click="saveSearchQuery">
          <router-link :to="{ name: 'Result'}" >好みのコーヒーをさがす</router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/_components/Search-bar";
import Items from "@/data/item.json";

export default {
  name: "Search",
  components: {
    Bar
  },
  // beforeEach (to, from, next) {
  //   console.log(to)
  //   alert('aaa')
  // },
  // render: function (createElement, context) {
  // },
  // watch: {
  // },
  methods: {
    modalToggle: function () {
      event.stopPropagation();
      event.preventDefault();
      this.$modal.toggle('hint');      
    },
    saveSearchQuery: function(){
      let inputs = document.querySelectorAll("input");
      let historyStorage = JSON.parse(window.localStorage.getItem('history'));
      let query = {};
      let newHistory = [];

      // Array.prototype.forEach.call(inputs, function(e) {
      //   query = {[e.name]: e.value};
      //   // query.push({[e.name]: e.value});
      // });
      // query.push({"time": new Date() })
      Array.prototype.forEach.call(inputs, function(e) {
        query[e.name] = e.value;
      });
      query["time"] = new Date();

      if( historyStorage ) newHistory = historyStorage;
      newHistory.push(query);
      
      window.localStorage.setItem('history',JSON.stringify(newHistory));

      console.log( query, newHistory )
      console.log( window.localStorage.getItem('history'))
    }
  },
  data: () => {
    return Items;
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/include";

.needsHelp {
  a {
    color: inherit;
    text-decoration: none;
  }
  &:before {
    content: "i";
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1;
    margin-right: 5px;
    display: inline-flex;
    vertical-align: bottom;
    align-items: center;
    justify-content: center;
    border-radius: 10000px;
    font-family: $fontFamily_en;
    color: #ffffff;
    background-color: $color_main;
  }
}
.barsArea{
  max-width: 370px;
  margin-right: auto;
  margin-left: auto;
}
.search {
  &__intro {
    text-align: center;

    h2 {
      font-weight: normal;
      line-height: #{(24/14)};
      margin-top: 0;
      margin-bottom: 0;
    }

    &__footer {
      margin-top: 2em;
      text-align: right;
      font-size: 1rem;
    }
  }
}

.barsArea {
  li {
    counter-increment: num;
    list-style: none;

    &:not(:first-child) {
      margin-top: $space_s;
    }
  }
}


.v--modal{
  p{
    line-height: 1.5;
  }

  .detail__index{
    margin-top: 0;
    line-height: 1;
    text-align: center;
    font-weight: bold;
    // font-size: $fontsize_m;
  }

  .detail__content__index{
    font-weight: bold;
    color: $color_main;
  }

  .numAppear {
    padding-right: 2px;
    padding-left: 2px;
    font-size: 1.15em;
    color: #d86414;
  }  
}
</style>
