// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'


Raven
  .config('https://5731f40584394e658fc70832a2aa22ec@sentry.io/209378')
  .addPlugin(RavenVue, Vue)
  .install()

Vue.config.productionTip = false

import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)
import 'bootstrap-vue/dist/bootstrap-vue.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
