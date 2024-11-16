<script setup>
import DashboardSideNav from '@/components/dashboard-ui/DashboardSideNav.vue'
import DashboardContentArea from '@/components/dashboard-ui/DashboardContentArea.vue'
</script>

<template>
  <main class="dashboard">
    <DashboardSideNav />
    <DashboardContentArea />
  </main>
</template>

<style lang="scss" scoped>
.dashboard {
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #f5f5f7;
  font-family: $jakarta;
}
</style>
