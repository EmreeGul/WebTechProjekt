import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Spiele from "@/views/Spiele.vue";
import Favourites from "@/views/Favourites.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/spiele',
      name: 'spiele',
        component: Spiele
    },
    {
      path: '/favourites',
      name: 'favorites',
      component: Favourites
    },
  ]
})

export default router
