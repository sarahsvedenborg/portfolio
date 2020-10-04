import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

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
    path: '/contact',
    name: 'Contakt',
    component: () => import('../views/Contact.vue')
  },
  {
    path: '/gridtest',
    name: 'GridTest',
    component: () => import('../views/GridTest.vue')
  },
  {
    path: '/project/:projectName',
    name: 'Project',
    component: () => import('../views/Project.vue'),
    props: true
  },
  {
    path: '/projects/all',
    name: 'Projects',
    component: () => import('../views/Projects.vue'),
    props: { preSelectedCategories: { "Front-end": true, "UX": true } }
  },
  {
    path: '/projects/development',
    name: 'ProjectsDev',
    component: () => import('../views/Projects.vue'),
    props: { preSelectedCategories: { "Front-end": true, "UX": false } }
  },
  {
    path: '/projects/design',
    name: 'ProjectsDes',
    component: () => import('../views/Projects.vue'),
    props: { preSelectedCategories: { "Front-end": false, "UX": true } }
  },
  {
    path: '/*',
    name: 'Not found',
    component: () => import('../views/NotFound.vue')
  },


]

const router = new VueRouter({
  routes
})

export default router
