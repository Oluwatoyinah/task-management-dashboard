<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="dashboard-main-content">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.dashboard-main-content {
  width: calc(100vw - $dashboard-side-nav-width);
  overflow-y: auto;
  background-color: #f9f9f9;
  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
