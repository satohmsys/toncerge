<template>
  <div class="about">
    <header class="about__index">
      <div class="wrap">
        <div class="about__index__top">About
          <span class="about__index__serviceName serviceName">toncerge</span>
        </div>
      </div>
      <figure class="about__index__img">
        <img src="../assets/img/toncerge-logo.svg" width="200" alt>
      </figure>
    </header>
    <section class="appSection appSection--intro">
      <div class="wrap">
        <h2 class="about__copy">あなたの
          <br class="-only-sp">コーヒーコンシェルジュ
        </h2>
        <div class="about__footer__content">
          <p>はじめまして。「
            <span class="serviceName">toncerge</span>」
            <small>（トンシェルジュ）</small>と申します。
          </p>
          <p>このサービスは、
            <a href="https://www.tonya.co.jp/" target="_blank">珈琲問屋</a>で販売されている「スペシャルティコーヒー」から、あなたに最適な一杯を選んでいただくための、「珈琲問屋のコンシェルジュ」的サービスです。（非公式）
          </p>
          <p>今、世の中にはコーヒーやコーヒー飲料が溢れています。
            <br>毎朝の一杯、休憩中の一杯…いろんなシーンであなたも触れていることでしょう。
          </p>
          <p>でも、ありふれたコモディティなものではなく「コーヒーそのもの」を知る人は意外と少ない。そしてそのなかでも一握りと言われる高品質なものが、とても便利でとても速いスピードで手に入る世の中だからこそ、もっとわかりやすく体験できるようにしたい。そう思いこのサービスを開発しました。</p>
          <p>あなたはコーヒーがお好きですか。お好きなら、今、どんなコーヒーが飲みたいですか。
            <br>
            <router-link to="/search">検索画面</router-link>でスライダー（ツマミ）を左右に動かして、今の気分を教えてください。選んだ数値に近い評価を、珈琲問屋の腕利きのバイヤーから得ているコーヒーをご案内します。
          </p>
        </div>
      </div>
    </section>
    <section class="appSection appSection--specialtycoffee">
      <i class="bg"></i>
      <div class="wrap">
        <h2 class="appSection__index">スペシャルティコーヒーとは</h2>
        <div class="about__footer__content">
          <p>コーヒーの文化は長く、その中で産業として発展してきました。
            <br>途中に大量生産・大量消費の傾向へと変化し、生産者が本当に良いコーヒーを作ることが二の次にされました。その結果、消費者のコーヒー離れが始まりました。品質の低下を招いたことで、改めてコーヒーの魅力を見直そうとする取り組みが「スペシャルティコーヒー」の考え方です。
          </p>
          <p>生産国において、栽培、収穫、生産処理、選別、品質管理が適正に行われており、手元に届くまで（From seed to cup）と、手元に届いてカップの中で液体になったときにそれが素晴らしい美味しさであるように定められた基準をクリアしたコーヒーのことを指します。</p>
          <p>具体的には</p>
          <ol>
            <li>カップ・クォリティのきれいさ</li>
            <li>甘さ</li>
            <li>酸味の特徴評価</li>
            <li>口に含んだ質感</li>
            <li>風味特性・風味のプロフィール</li>
            <li>後味の印象度</li>
            <li>バランス</li>
          </ol>
          <p>
            <small>
              <a
                href="http://scaj.org/about/specialty-coffee"
                target="_blank"
              >項目の詳細はこちらを参照ください（SCAJ）</a>
            </small>
            <br>の基準に基づき判断されています。
            <br>その割合は、流通しているコーヒーの中でもわずか10%ほどと言われています。
          </p>
        </div>
      </div>
    </section>
    <section class="appSection appSection--tonya">
      <i class="bg"></i>
      <div class="wrap">
        <h2 class="appSection__index">珈琲問屋とは</h2>
        <div class="about__footer__content">
          <p>珈琲問屋は、関東圏を中心に海外を含め13の実店舗と
            <a href="http://www.tonya.co.jp/shop/" target="_blank">オンラインストア</a>を構えるコーヒーの専門店です。<br>
            珈琲問屋のスタッフの方は選りすぐりの「コーヒー好き」で、質問するとなんでも明るく答えてくださり、問いが「1」に対して「2」も「3」も親切にご案内してくださいます。コーヒーが好きな方、コーヒーに詳しくないけど興味がある方、全てに知っていただきたいと思っていることも当サービスの開発の理由でもあります。
          </p>
          <p>オンラインストアについて詳しくは
            <a href="http://www.tonya.co.jp/shop/pages/beginner.aspx" target="_blank">こちら</a>をご覧ください。
          </p>
        </div>
      </div>
    </section>
    <section class="appSection appSection--about">
      <i class="bg"></i>
      <div class="wrap">
        <h2 class="appSection__index">当サービスについて</h2>
        <div class="about__footer__content">
          <p>当サービスは非公式です。
            <strong>サービスに関するお問い合わせを珈琲問屋にすることはおやめください。</strong>
          </p>
          <p>また、当サービスはスクレイピングを利用しデータを取得しています。アクセスが集中することで珈琲問屋本体のサービスに負荷がかかる可能性がございます。お目当てのコーヒーは
            <a href="http://www.tonya.co.jp/shop/" target="_blank">オンラインストア</a>でお買い求めください。
          </p>
          <h3 class="appSection__subindex">ご利用について</h3>
          <dl>
            <dt>免責事項</dt>
            <dd>当サービスをご利用されてのトラブルに関しては一切責任を負いません。
              <br>
            </dd>
          </dl>
          <dl>
            <dt>推奨環境</dt>
            <dd>OS: Mac OS,iOS11+,Android7+,Windows10+ / Browser: Google Chrome, Firefox, Safari
              <br>推奨環境以外での利用に関する動作の保証はいたしません。
            </dd>
          </dl>
        </div>
      </div>
    </section>
    <section class="about__footer">
      <div class="wrap">
        <h3 class="about__footer__index">Development</h3>
        <div class="about__footer__content">Design, Front-end, Planing:
          <a href="https://twitter.com/satohmsys" target="_blank">satohmsys</a>
        </div>
      </div>
    </section>
  </div>
</template>
<style>
html {
  overflow-x: hidden;
}
</style>

<style lang="scss" scoped>
@import "../assets/scss/include";

.serviceName {
  font-feature-settings: "palt";
  letter-spacing: 0.17em;
  color: $brown;
  font-weight: bold;
  font-family: $fontFamily_en;
}

.appSection {
  &__index {
    margin-top: $space_s;
    line-height: 1.45;
    letter-spacing: 0.15em;
    font-feature-settings: "palt";
    font-size: $fontsize_m;
    font-weight: bold;
    text-align: center;
  }

  &__subindex {
    margin-top: $space_s;
    line-height: 1.45;
    letter-spacing: 0.15em;
    font-feature-settings: "palt";
    font-size: 1.25em;
    font-weight: bold;
    text-align: center;
  }
}

.about {
  &__copy {
    line-height: 1.45;
    letter-spacing: 0.15em;
    font-feature-settings: "palt";
    font-size: $fontsize_m;
    font-weight: bold;
    text-align: center;
  }

  &__index {
    font-family: $fontFamily_en;
    padding-bottom: $space_s;
    text-align: center;

    &__top {
      padding-bottom: $space_s;
    }

    &__serviceName {
      display: block;
    }

    &__img {
      padding: 0 $space_s;
      background-color: #ffffff;

      @media screen and(min-width: 768px) {
        margin-left: calc(-100% - 768px / 2);
        margin-right: calc(-100% - 768px / 2);
      }
    }
  }

  .appSection {
    margin-bottom: $space_m;
    p {
      line-height: 1.5;
    }
  }
}

.appSection--specialtycoffee {
  .bg {
    width: 100%;
    height: 30vh;
    // toncerge/src/assets/img/about-specialtycoffee-bg.jpg
    background: url(../assets/img/about-specialtycoffee-bg.jpg) center bottom
      no-repeat;
    background-size: cover;
    background-attachment: fixed;
    display: block;

    @media screen and(max-width:768px) {
      height: 20vh;
    }
  }

  ol {
    list-style: none;

    li {
      margin-top: 0.5em;
      margin-bottom: 0.5em;
      counter-increment: count;
      &:before {
        content: counter(count) ".";
        padding-right: 5px;
        font-family: $fontFamily_en;
        color: $color_main;
      }
    }
  }
}

.appSection--tonya {
  .bg {
    width: 100%;
    height: 30vh;
    // toncerge/src/assets/img/about-specialtycoffee-bg.jpg
    background: $brown url(../assets/img/tonya.png) center center no-repeat;
    background-size: 100px;
    background-attachment: fixed;
    display: block;

    @media screen and(max-width:768px) {
      height: 20vh;
    }
  }
}

.appSection--about {
  .bg {
    width: 100%;
    height: 30vh;
    // toncerge/src/assets/img/about-specialtycoffee-bg.jpg
    background: $brown url(../assets/img/logo-typo.svg) center center no-repeat;
    background-size: 100px;
    background-attachment: fixed;
    display: block;

    @media screen and(max-width:768px) {
      height: 20vh;
    }
  }

  dl {
    margin: 0;
    padding-top: 1em;
    padding-bottom: 1em;
    display: flex;

    &:not(:last-child) {
      border-bottom: 1px solid $color_border;
    }

    dd,
    dt {
      padding: 1em;
    }

    dt {
      width: 60px;
      font-weight: bold;
      flex-shrink: 0;
    }
    dd {
      margin-left: 0;
      word-break: break-all;
    }
  }
}

.about__footer {
  padding: 1em;
  border-radius: 4px;
  background-color: $brown_bright;
  font-family: $fontFamily_en;
  font-weight: 400;

  &__index {
    margin-top: 0;
    line-height: 1;
    color: $color_main;
    font-size: $fontsize_m;
  }
}
</style>
 
