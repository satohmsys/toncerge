<template>
  <nav class="siteNav">
    <ul class="siteNav__wrap">
      <li class="siteNav__tab siteNav__tab--search">
        <router-link to="search">
          <i class="siteNav__tab__icon"></i>
          <span class="siteNav__tab__text">検索</span>
        </router-link>
      </li>
      <li class="siteNav__tab siteNav__tab--favorite">
        <router-link to="/favorite">
          <i class="siteNav__tab__icon">
            {{favoritesLength}}
            {{getFavoritesLength}}
            <i v-if="0 < favoritesLength" class="siteNav__favoritesNum">{{favoritesLength}}</i>
          </i>
          <span class="siteNav__tab__text">お気に入り</span>
        </router-link>
      </li>
      <li class="siteNav__tab siteNav__tab--history">
        <router-link to="/history">
          <i class="siteNav__tab__icon"></i>
          <span class="siteNav__tab__text">検索履歴</span>
        </router-link>
      </li>
      <li class="siteNav__tab siteNav__tab--about">
        <router-link to="/about">
          <i class="siteNav__tab__icon"></i>
          <span class="siteNav__tab__text">アプリについて</span>
        </router-link>
      </li>
    </ul>
    
  </nav>
</template>

<script>
import favoritesSetting from "@/components/_mixins/favoriteSetting";


export default {
  name: "SiteNav",
  mixins: [favoritesSetting]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../assets/scss/include";
.siteNav {
  width: 100%;
  line-height: 1;
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background-color: $color_main;

  &__wrap {
    display: flex;
    align-items: center;
    padding-left: 0;
  }

  &__tab {
    width: 25%;
    list-style: none;
    text-align: center;

    &:not(:last-child) {
      border-right: 1px solid $color_border;
    }
  }

  &__tab__icon {
    display: inline-block;
    width: 25px;
    height: 0;
    padding-top: 25px;
    transition: linear $duration;
    background-position: 0;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;

    @media screen and (max-width: 480px) {
      width: 18px;
      padding-top: 18px;
    }
  }

  &__favoritesNum {
    width: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    position: absolute;
    top: -1em;
    right: -1em;
    font-size: 1rem;
    font-family: $fontFamily_en;
    border-radius: 10000px;
    font-style: normal;
    background-color: $color_accent;
  }

  &__tab__text {
    margin-top: 10px;
    font-size: 1rem;
  }

  a {
    padding: 10px 5px;
    display: flex;
    text-decoration: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    transition: linear $duration;

    @media screen and (min-width: 768px) {
      &:hover {
        .siteNav__tab__icon {
          opacity: 0.5;
        }
        color: #aaa;
        background-color: darken($color_main, 5%);
      }
    }
    &:active,
    &:focus {
      .siteNav__tab__icon {
        opacity: 0.5;
      }
      color: #aaa;
      background-color: darken($color_main, 5%);
    }
  }

  &__tab--about .siteNav__tab__icon {
    background-image: url(../../assets/img/icon-about.svg);
  }
  &__tab--search .siteNav__tab__icon {
    background-image: url(../../assets/img/icon-search.svg);
  }
  &__tab--favorite .siteNav__tab__icon {
    background-image: url(../../assets/img/icon-favorite.svg);
  }
  &__tab--history .siteNav__tab__icon {
    background-image: url(../../assets/img/icon-history.svg);
  }
}
</style>
