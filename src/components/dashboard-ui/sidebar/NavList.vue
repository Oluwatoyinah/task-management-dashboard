<script setup>
import { NAV_LINKS } from '@/constants'
import NavItem from './NavItem.vue'
</script>

<template>
  <div class="nav-list">
    <ul class="flex md:flex-col gap-3 justify-around md:justify-start">
      <NavItem v-for="link in NAV_LINKS" :key="link.name" :data="link" />
    </ul>
  </div>
</template>
