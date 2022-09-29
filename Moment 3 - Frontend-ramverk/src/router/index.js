import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import FavoritesView from '../views/FavoritesView.vue';
import About from '../views/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mina-favoriter',
      name: 'Mina favoriter',
      component: FavoritesView
    },
    {
      path: '/om-uppgiften',
      name: 'Om uppgiften',
      component: About
    }
  ]
})

export default router
