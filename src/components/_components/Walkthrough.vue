<template>
  <transition name="wt">
    <div v-if="! isHide" class="walkthrough">
      <swiper class="walkthrough__swiper" :options="swiperOptionA" ref="mySwiper">
        <!-- slides -->
        <swiper-slide class="walkthrough__child">
          <div class="walkthrough__child__wrap wrap">
            <div class="walkthrough__child__img">
              <img src="../../assets/img/walkthrough-drip.gif" width="150" alt>
            </div>
            <div class="walkthrough__child__text">お家で、オフィスで、
              <br class="-only-sp">次に飲むコーヒーに困っていませんか？
              <br>「
              <span class="serviceName">toncerge</span>
              <small>（トンシェルジュ）</small>」が
              <br class="-only-sp">ご案内します！
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="walkthrough__child">
          <div class="walkthrough__child__wrap wrap">
            <div class="walkthrough__child__img">
              <img src="../../assets/img/walkthrough-search.gif" width="150" alt>
            </div>
            <div class="walkthrough__child__text">ツマミを動かして、
              <br class="-only-sp">好みのコーヒーの特徴を設定！
              <br>好みに近いコーヒーを「珈琲問屋」から
              <br class="-only-sp">
              <strong>リストアップ</strong>します。
            </div>
          </div>
        </swiper-slide>
        <swiper-slide class="walkthrough__child">
          <div class="walkthrough__child__wrap wrap">
            <div class="walkthrough__child__img">
              <img src="../../assets/img/walkthrough-fab.gif" width="150" alt>
            </div>
            <div class="walkthrough__child__text">気になるコーヒーは<br class="-only-sp">
              <strong>お気に入り登録！</strong>
              <br>後からまた確認できます。
              <small>
                <br class="-only-sp">（予告なく削除される場合があります）
              </small>
            </div>
            <div class="walkthrough__child__button">
              <div class="button button-primary">
                <a @click="WalkthroughEnd">コーヒーをさがす</a>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
      <div class="walkthrough__skip" @click="WalkthroughEnd">Skip</div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import "../../assets/scss/include";

.swiper-pagination-bullet {
  background: $brown_bright;
}
.swiper-pagination-bullet-active {
  background: $brown;
}

.swiper-button-next,
.swiper-button-prev {
  background: none;
  width: 20px;
  height: 20px;
  border-top: 2px solid $color_accent;
  border-right: 2px solid $color_accent;
  transform-origin: center center;
  transform: rotate(45deg);
  outline: none;

  &.swiper-button-disabled {
    opacity: 0;
  }
}

.swiper-button-prev {
  transform: rotate(-135deg);
}
.swiper-button-next {
  transform: rotate(45deg);
}

.walkthrough {
  &,
  &__swiper {
    overflow: hidden;
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
  }

  &__child__wrap {
    height: 100%;
    padding-right: 10%;
    padding-left: 10%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
  }

  &__child__text {
    margin-top: $space_s;
    margin-bottom: 40px;
    padding-bottom: $space_s;
    line-height: 1.75;
  }

  &__child__button {
    position: absolute;
    bottom: 20vh;
  }

  &__skip {
    position: fixed;
    z-index: 100;
    right: 5vw;
    bottom: 5vw;
    font-family: $fontFamily_en;
  }
}

.wt-enter-active,
.wt-leave-active {
  transition: all $duration * 5 linear 0s;
}

.wt-enter,
.wt-leave-to {
  transform: scale(0.99);
  opacity: 0;
}
</style>
<script>
export default {
  name: "Walkthrough",
  data: function() {
    return {
      isHide: false,
      swiperOptionA: {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    WalkthroughEnd: function() {
      this.isHide = true;
    }
  }
};
</script>
