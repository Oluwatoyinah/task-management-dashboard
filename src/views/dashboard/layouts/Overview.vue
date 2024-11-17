<script setup lang="ts">
import MentorCard from '@/components/dashboard-ui/content/MentorCard.vue'
import TaskCard from '@/components/dashboard-ui/content/TaskCard.vue'
import TopBar from '@/components/dashboard-ui/content/TopBar.vue'
</script>

<template>
  <div class="p-3 px-5 bg-primary-0 sticky top-0">
    <TopBar title="Hi, Guest" paragraph="Let's finsh yout task today!" />
  </div>

  <div class="p-5">
    <div class="pb-8">
      <div class="flex gap-3 flex-wrap">
        <div
          class="w-full sm:max-w-[180px] min-h-[180px] bg-secondary-500 rounded-[10px] p-3 text-primary-0 flex flex-col justify-between"
        >
          <p>Running Task</p>
          <p class="font-bold text-[40px] -tracking-[2px]">70</p>
        </div>
        <div
          class="w-full sm:max-w-[180px] min-h-[180px] bg-secondary-400 rounded-[10px] p-3 text-primary-0 flex flex-col justify-between"
        >
          <p>Active Mentors</p>
          <p class="font-bold text-[40px]">6</p>
        </div>
      </div>
    </div>

    <div class="pb-8">
      <h3 class="text-[20px] font-semibold mb-5">Monthly Mentors</h3>

      <div
        class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
      >
        <MentorCard v-for="numbers in 2" />
      </div>
    </div>
    <div class="pb-8">
      <h3 class="text-[20px] font-semibold mb-5">Upcoming Task</h3>

      <div
        class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5"
      >
        <TaskCard v-for="numbers in 4" />
      </div>
    </div>
  </div>
</template>
