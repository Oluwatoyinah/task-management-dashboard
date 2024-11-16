import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import DashboardLayout from '@/views/dashboard/DashboardLayout.vue'
import Overview from '@/views/dashboard/layouts/Overview.vue'
import Tasks from '@/views/dashboard/layouts/Tasks.vue'
import Mentors from '@/views/dashboard/layouts/Mentors.vue'
import Settings from '@/views/dashboard/layouts/Settings.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardLayout,
      children: [
        {
          path: '',
          name: 'Overview',
          component: Overview,
        },
        {
          path: 'tasks',
          name: 'Tasks',
          component: Tasks,
        },
        {
          path: 'mentors',
          name: 'Mentors',
          component: Mentors,
        },
        {
          path: 'settings',
          name: 'Settings',
          component: Settings,
        },
      ],
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
