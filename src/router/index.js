import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SheetView from '../views/SheetView.vue'
import PokemonView from '../views/PokemonView.vue'
import BoxView from '../views/BoxView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sheet/:sheetName',
      name: 'sheet',
      component: SheetView
    },
    {
      path: '/pokemon/:sheetName/:rowNum',
      name: 'pokemon',
      component: PokemonView,
      params: true
    },
    {
      path: '/boxes',
      name: 'boxes',
      component: BoxView
    }
  ]
})

export default router
