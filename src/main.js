import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import VModal from "vue-js-modal";

import "./utils/scrape"

Vue.config.productionTip = false;
Vue.use(VModal);

// console.log("node ./node_modules/cheerio-httpcli/example/tonya.js")

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
