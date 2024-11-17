import MentorsIc from '@/assets/icons/MentorsIc.vue'
import OverviewIc from '@/assets/icons/OverviewIc.vue'
import SettingsIc from '@/assets/icons/SettingsIc.vue'
import TasksIc from '@/assets/icons/TasksIc.vue'
import Bell from '@/assets/icons/bell.svg'
import ProfileImg from '@/assets/images/profile.jpg'

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
    path: '/settings/general',
  },
]

export const ICONS = {
  OverviewIc,
  TasksIc,
  MentorsIc,
  SettingsIc,
  Bell,
}

export const IMAGES = { ProfileImg }

export const LANGUAGES = [
  {
    name: 'English (Default)',
    value: 'english',
  },
  {
    name: 'French',
    value: 'french',
  },
]
