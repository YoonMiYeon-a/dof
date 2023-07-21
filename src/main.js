import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import * as VueGoogleMaps from "vue2-google-maps"


Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyDNhn5qcitFbev-MubnJoQkdGwNTifkjzw",
    libraries: "places",
    region: "KR"
  }
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

