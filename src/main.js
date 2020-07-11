import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VuePlyr from "vue-plyr";

Vue.config.productionTip = false;

Vue.use(VuePlyr, {
  plyr: {
    fullscreen: { enabled: true }
  },
  emit: ["ended"]
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
