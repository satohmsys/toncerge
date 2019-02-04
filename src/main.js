import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import VModal from "vue-js-modal";
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import VueAnalytics from 'vue-analytics'

// require styles

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper, /* { default global options } */ )
Vue.use(VModal);
Vue.use(VueAnalytics, {
  id: 'UA-40118061-7',
  router
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
