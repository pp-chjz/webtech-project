import Vue from 'vue'
import VueSwal from 'vue-swal'
import App from './App.vue'
import router from './router'
import store from './store'





// ------------ vuesax ------------
import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles

Vue.use(Vuesax)
// -------------------------------


// ------------ Buefy ------------
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { Table, Input } from 'buefy'

Vue.use(Buefy)
Vue.use(Table)
Vue.use(Input)
// ---------------------------------


// ------------ vuetify ------------
import vuetify from '@/plugins/vuetify' // path to vuetify export
// ---------------------------------


// ------------ Bootstrap ------------
// import { BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'


// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

Vue.use(BootstrapVueIcons)

// ----------------------------------

Vue.use(VueSwal)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
