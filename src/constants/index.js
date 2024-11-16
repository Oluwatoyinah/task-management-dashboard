import OverviewIcon from '@/assets/icons/overview.svg'
import TaskIcon from '@/assets/icons/task.svg'
import MentorIcon from '@/assets/icons/mentors.svg'
import SettingsIcon from '@/assets/icons/settings.svg'
import MentorsIc from '@/assets/icons/MentorsIc.vue'
import OverviewIc from '@/assets/icons/OverviewIc.vue'
import TasksIc from '@/assets/icons/TasksIc.vue'
import SettingsIc from '@/assets/icons/SettingsIc.vue'

export const NAV_LINKS = [
  {
    name: 'Overview',
    icon: OverviewIc,
    path: '/',
  },
  {
    name: 'Task',
    icon: TasksIc,
    path: '/tasks',
  },
  {
    name: 'Mentors',
    icon: MentorsIc,
    path: '/mentors',
  },
  {
    name: 'Settings',
    icon: SettingsIc,
    path: '/settings',
  },
]

export const ICONS = {
  OverviewIc,
  TasksIc,
  MentorsIc,
  SettingsIc,
}
