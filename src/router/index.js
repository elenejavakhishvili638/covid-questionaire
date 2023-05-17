import { createRouter, createWebHistory } from 'vue-router'
import TheLanding from "../pages/TheLanding.vue"
import FirstPage from "../pages/FirstPage.vue"
import SecondPage from "../pages/SecondPage.vue"
import ThirdPage from "../pages/ThirdPage.vue"
import FourthPage from "../pages/FourthPage.vue"
import TheFin from "../pages/TheFin.vue"


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
    {
      path: '/vaccination',
      component: ThirdPage
    },
    {
      path: '/advices',
      component: FourthPage
    },
    {
      path: '/thank-you',
      component: TheFin
    },
  ]
})

export default router
