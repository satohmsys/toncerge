<template>
  <div class="siteHeader">
    <i class="siteHeader__back" v-if="$route.path !== '/'" v-on:click="goBack()"></i>
    <h1 class="siteHeader__logo">
      <img src="../../assets/img/logo-typo.svg" width="100" alt="toncerge">
    </h1>
  </div>
</template>

<script>
// console.log(this.$router)
export default {
  name: "HeaderParts",
  // created() {
  //   // beforeEachでアニメーションする名前を決める
  //   this.$router.beforeEach((to, from, next) => {
  //     // forwardかbackwardか判定して、どっちかを入れる
  //     this.$data.transitionName = ( `forwardかbackwardかの判定` ) ? 'backward' : 'forward';
  //     // console.log( to, from )
  //     next();
  //   })
  // },
  methods: {
    goBack: function() {
      this.$router.back();
      // console.log(this.$router)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/include";
.siteHeader {
  width: 100%;
  line-height: 1;
  padding: 15px;
  box-sizing: border-box;
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  text-align: center;
  font-family: "Rubik", sans-serif;
  // position: fixed;
  background-color: $color_main;

  &__back {
    width: 40px;
    height: 40px;
    transform-origin: center center;
    transform: rotate(-45deg);
    left: 2vw;

    &,
    &:before {
      margin-top: auto;
      margin-bottom: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      display: block;
    }

    &:before {
      content: "";
      width: 25%;
      height: 25%;
      left: 0;
      right: 0;
      margin: auto;
      border-top: 1px solid #fff;
      border-left: 1px solid #fff;
    }
  }

  &__logo {
    line-height: 0;
    padding-top: 0;
    padding-bottom: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
}
</style>
