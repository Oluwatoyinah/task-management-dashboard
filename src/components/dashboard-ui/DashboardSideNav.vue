<script setup>
import HelpBox from './sidebar/HelpBox.vue'
import LogoBox from './sidebar/LogoBox.vue'
import NavList from './sidebar/NavList.vue'
</script>

<template>
  <div class="dashboard_side_nav p-3 md:pt-5 md:p-8 flex gap-3 md:flex-col md:justify-between">
    <div class="flex-grow">
      <LogoBox />
      <NavList />
    </div>
    <div>
      <HelpBox />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dashboard_side_nav {
  width: $dashboard-side-nav-width;
  background-color: $primary-0;
  position: relative;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    bottom: 0;
  }
}
</style>
