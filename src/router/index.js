import { createRouter, createWebHistory } from 'vue-router'
import TheLanding from "../pages/TheLanding.vue"
import FirstPage from "../pages/FirstPage.vue"
import SecondPage from "../pages/SecondPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: TheLanding
    },
    {
      path: '/identification',
      component: FirstPage
    },
    {
      path: '/covid-questionaire',
      component: SecondPage
    },
  ]
})

export default router
