<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps(['data'])

const { name, icon, path } = props['data']
</script>

<template>
  <RouterLink :to="path" class="text-secondary-300" exact-active-class="active-nav">
    <button class="flex items-center gap-3 p-3 w-full hover:bg-[#f5f5f780] transition-all">
      <span>
        <icon />
      </span>
      <span class="text-[14px] hidden md:inline-flex">{{ name }}</span>
    </button>
  </RouterLink>
</template>

<style lang="scss" scoped>
.active-nav {
  color: $secondary-500 !important;
  background-color: #f5f5f7;
  border-radius: 4px;
  @media (max-width: 768px) {
    background-color: $secondary-400;
    color: $primary-0 !important;
  }
}
</style>
