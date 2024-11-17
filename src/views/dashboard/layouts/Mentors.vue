<script setup lang="ts">
import MentorCard from '@/components/dashboard-ui/content/MentorCard.vue'
import TopBar from '@/components/dashboard-ui/content/TopBar.vue'
</script>

<template>
  <div class="p-3 px-5 bg-primary-0">
    <TopBar title="Explore Mentors" />
  </div>

  <div class="p-5">
    <div class="pb-8">
      <h3 class="text-[20px] font-semibold mb-5">Mentors</h3>

      <div class="grid sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
        <MentorCard v-for="numbers in 10" />
      </div>
    </div>
  </div>
</template>
