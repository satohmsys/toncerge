import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "Search",
      props: true,
      component: require("@/views/Search.vue").default
    }, {
      path: "/search",
      name: "Search",
      props: true,
      component: require("@/views/Search.vue").default
    }, {
      path: "/result/",
      name: "Result",
      component: require("@/views/Result.vue").default
    }, {
      path: "/favorite/",
      name: "Favorite",
      component: require("@/views/Favorite.vue").default
    }, {
      path: "/history/",
      name: "History",
      component: require("@/views/History.vue").default
    }, {
      path: "/about/",
      name: "About",
      component: require("@/views/About.vue").default
    }, {
      path: "*",
      redirect: "/"
    }
    // {
    //   path: "/",
    //   name: "home",
    //   component: Home
    // },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});