import { createRouter, createWebHistory } from 'vue-router'
// import panelAdmin from './panelAdmin/index'

import Main from './main'
import Auth from './auth/index.js'
import Admin from './admin/index.js'

const routes = [].concat(
  // panelAdmin
  Main,
  Auth,
  Admin
);

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
