import Vue from 'vue'
import VueSession from 'vue-session'
Vue.use(VueSession)
import App from './App.vue'


import Buefy from 'buefy'
import './assets/scss/app.scss'

Vue.use(Buefy)




Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')