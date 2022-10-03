import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import FavoritesView from '../views/FavoritesView.vue';
import About from '../views/About.vue';
import Update from '../views/Update.vue';
import NotFound from '../views/NotFound.vue';

import { onUpdated } from 'vue';

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
    },
    {
      path: '/uppdatera/:id',
      name: 'Update', 
      component: Update,
      props: true
    },
    {
      //404 - Not found-sida
      path: '/:catchAll(.*)',
      name: 'Not found',
      component: NotFound

    }
  ]
})

export default router
