<script setup lang="ts">
import TopBar from '@/components/dashboard-ui/content/TopBar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="p-3 px-5 bg-primary-0">
    <TopBar title="Settings" />
  </div>

  <div class="p-5">
    <div class="bg-primary-0 rounded min-h-[500px] pt-5 pb-8">
      <div class="flex gap-5 px-5 *sm:text-[15px] *:text-[13px]">
        <RouterLink
          to="/settings/general"
          class="text-secondary-300"
          exact-active-class="active-nav"
        >
          <button
            class="flex items-center gap-3 p-3 pb-1.5 w-full hover:bg-[#f5f5f780] transition-all"
          >
            General
          </button>
        </RouterLink>
        <RouterLink
          to="/settings/notifications"
          class="text-secondary-300"
          exact-active-class="active-nav"
        >
          <button
            class="flex items-center gap-3 p-3 pb-1.5 w-full hover:bg-[#f5f5f780] transition-all"
          >
            Notifications
          </button>
        </RouterLink>
      </div>
      <div class="mt-5 px-5">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.active-nav {
  color: $secondary-500 !important;
  border-bottom: 2px solid $secondary-400;
}
</style>
