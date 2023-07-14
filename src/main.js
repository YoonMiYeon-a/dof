import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import * as VueGoogleMaps from "vue2-google-maps" // Import package


Vue.config.productionTip = false


Vue.use(VueGoogleMaps, {
  load: {
    key: "API 키 입력",
    libraries: "places",
    region: "KR"
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

