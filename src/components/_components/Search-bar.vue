<template>
  <div class="barArea">
    <h3 class="barArea__index">{{ item.name }}</h3>
    <div class="barArea__input">
      <i class="barArea__input__label -min"></i>
      <i class="barArea__input__label -max"></i>
      <div class="bar">
        <i class="bar__value">{{val}}</i>
        <input
          type="range"
          min="1"
          max="5"
          step="0.5"
          v-model="val"
          v-bind:val="val"
          v-bind:name="item.label"
          v-on:change="setValPosition"
        >
      </div>
    </div>
  </div>
</template>

<script>
/**
 * ストレージに保存
 */
function setStorage(t) {
  window.localStorage.setItem(t.item.label, t.val);
  return false;
}

export default {
  name: "Bar",
  props: ["item"],
  data: function() {
    return {
      val: 1,
      label: this.item.label
    };
  },
  created: function() {
    setStorage(this);
    return false;
  },
  watch: {
    val: function() {
      setStorage(this);
      return false;
    }
  },
  methods: {
    setVal: function() {
      return {
        val: this.val,
        name: this.item.name
      };
    },
    setValPosition: function() {
      let target = document.querySelector('[name="' + this.item.label + '"]');
      let targetValTips = target.previousElementSibling;
      let pos =
        ((target.clientWidth / target.getAttribute("max")) + 8) * (this.val-1);
      targetValTips.setAttribute(
        "style",
        "transform: translateX(" + pos + "px)"
      );
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/include";
.barArea {
  line-height: 1;
  list-style: none;
  display: flex;
  align-items: flex-end;

  &__index {
    min-width: 60px;
    flex-shrink: 0;
    margin-top: 0;
    margin-right: 20px;
    margin-bottom: 0;
    display: flex;
    align-items: flex-end;
    font-weight: bold;

    &:before {
      width: 1em;
      content: counter(num) ".";
      margin-right: 5px;
      line-height: 1;
      position: relative;
      bottom: -5px;
      font-weight: 500;
      font-family: $fontFamily_en;
      color: #e8e3df;
      font-size: 2em;
    }
  }

  &__input {
    width: 100%;
    position: relative;

    &__label {
      line-height: 1;
      font-size: 1rem;
      color: $brown;
      position: absolute;
      top: -2em;
      font-style: normal;
      opacity: 0.5;
      font-family: $fontFamily_en;

      &.-min {
        left: 0;
        &:before {
          content: "min";
        }
      }
      &.-max {
        right: 0;
        &:before {
          content: "max";
        }
      }
    }
  }
}

.bar {
  position: relative;

  &__value {
    line-height: 1;
    width: 20px;
    height: 15px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: absolute;
    top: -20px;
    left: 0px;
    font-style: normal;
    transform-origin: 50% 50%;
    font-family: $fontFamily_en;
    border-radius: 2px;
    color: #ffffff;
    background: $color_accent;
    opacity: 0.9;

    &:after {
      content: " ";
      width: 0;
      height: 0;
      margin: auto;
      position: absolute;
      right: 0;
      bottom: -4px;
      left: 0;
      border-style: solid;
      border-width: 4px 2px 0 2px;
      border-color: $color_accent transparent transparent transparent;
    }
  }
}

input[type="range"] {
  -webkit-appearance: none;
  background: #d9d9d9;
  height: 7px;
  width: 100%;
  border-radius: 10000px;

  &:focus {
    outline: none;
  }
}
input[type="range"]::-moz-range-thumb {
  -webkit-appearance: none;
  background: $brown;
  height: 20px;
  width: 20px;
  border-radius: 100000px;
}
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: $brown;
  height: 20px;
  width: 20px;
  border-radius: 100000px;
}
input[type="range"]::-ms-tooltip {
  display: none;
}
input[type="range"]::-moz-range-track {
  height: 0;
}
</style>
