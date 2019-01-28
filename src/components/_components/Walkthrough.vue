<template>
    <swiper class="walkthrough" ref="mySwiper">
    <!-- slides -->
    <swiper-slide class="walkthrough__child">I'm Slide 1</swiper-slide>
    <swiper-slide class="walkthrough__child">I'm Slide 2</swiper-slide>
    <swiper-slide class="walkthrough__child">I'm Slide 3</swiper-slide>
    <swiper-slide class="walkthrough__child">I'm Slide 4</swiper-slide>
    <swiper-slide class="walkthrough__child">I'm Slide 5</swiper-slide>
    <swiper-slide class="walkthrough__child">I'm Slide 6</swiper-slide>
    <swiper-slide class="walkthrough__child">I'm Slide 7</swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>
</template>

<style lang="scss" scoped>

  .walkthrough{
    position: fixed;
    z-index: 100;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
  }
</style>
<script>
import WalkthroughPage from "@/components/_components/Walkthrough-page"

export default {
  name: "Walkthrough",
  components: {
    WalkthroughPage
  }
}
</script>
