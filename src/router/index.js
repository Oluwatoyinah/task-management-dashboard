import { createRouter, createWebHistory } from 'vue-router'
import DashboardLayout from '@/views/dashboard/DashboardLayout.vue'
import Overview from '@/views/dashboard/layouts/Overview.vue'
import Tasks from '@/views/dashboard/layouts/Tasks.vue'
import Mentors from '@/views/dashboard/layouts/Mentors.vue'
import Settings from '@/views/dashboard/layouts/Settings.vue'
import GeneralSettings from '@/views/dashboard/layouts/settings/GeneralSettings.vue'
import NotificationsSettings from '@/views/dashboard/layouts/settings/NotificationsSettings.vue'

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
          children: [
            {
              path: '', 
              component: GeneralSettings,
            },
            {
              path: 'general',
              name: 'General',
              component: GeneralSettings,
            },
            {
              path: 'notifications',
              name: 'Notifications',
              component: NotificationsSettings,
            },
          ],
        },
      ],
    },
  ],
})

export default router
