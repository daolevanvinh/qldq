import Vue from 'vue'
import App from './view/Index.vue'
import vuetify from '@/plugins/vuetify'
import { store } from './store/store.js'
import router from './router.js'
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false
Vue.prototype.$http = Axios

Vue.filter('highlight', function (word, query) {
  var check = new RegExp(query, "ig");
  return word.toString().replace(check, function (matchedText) {
    return ('<span style="background-color: yellow">' + matchedText + '</span>');
  });
});



new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
