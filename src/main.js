import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import VModal from "vue-js-modal";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// require styles

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(VModal);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
