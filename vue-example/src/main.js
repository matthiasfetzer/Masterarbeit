import Vue from 'vue'
import App from './App.vue'
import VueRouter from  'vue-router'
import Dashboard from './components/Dashboard.vue'
import Highlight from './components/Highlight.vue'
import MultipleChoice from './components/MultipleChoice'
import Performance from './components/Performance'


Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/', component: Dashboard},
  {path: '/highlight', component: Highlight},
  {path: '/multiplechoice', component: MultipleChoice},
  {path: '/performance', component: Performance}
]

const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router
}).$mount('#app')

