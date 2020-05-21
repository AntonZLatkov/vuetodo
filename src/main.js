import Vue from 'vue'
import vuetify from '@/plugins/vuetify.js'
import app from './App.vue'

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(app),
}).$mount('#app')
