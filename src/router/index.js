import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Add from "@/views/Add";
import Show from "@/components/Show"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/add/:id',
    name: 'Add',
    component: Add
  },
  {
    path: '/bigScreen/:id',
    name: 'Show',
    component: Show
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
