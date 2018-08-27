import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// Define components.
import Home from '@/components/Home'
import OctopathSkillCalc from '@/components/OctopathSkillCalc'
import Job from '@/components/Octopath/Job'

Vue.use(VueRouter);
Vue.config.productionTip = false

// Define routes.
const routes = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/octopathskillcalc', name: 'OctopathSkillCalc', component: OctopathSkillCalc,
    children: [
      { path: ':characterName', component: Job }
    ]
  }
]

// Create the router instance.
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
