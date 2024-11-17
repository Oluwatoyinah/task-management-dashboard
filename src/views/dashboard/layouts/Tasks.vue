<script setup>
import TaskCard from '@/components/dashboard-ui/content/TaskCard.vue'
import TopBar from '@/components/dashboard-ui/content/TopBar.vue'
</script>

<template>
  <div class="p-3 px-5 bg-primary-0 sticky top-0">
    <TopBar title="Explore Tasks" />
  </div>

  <div class="p-5">
    <div class="pb-8">
      <h3 class="text-[20px] font-semibold mb-5">Time Limit</h3>

      <div class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <TaskCard />
      </div>
    </div>
    <div class="pb-8">
      <h3 class="text-[20px] font-semibold mb-5">New Task</h3>

      <div class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <TaskCard v-for="numbers in 6" />
      </div>
    </div>
  </div>
</template>
