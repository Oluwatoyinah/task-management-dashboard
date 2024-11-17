<script setup lang="ts">
import ToggleInput from '@/components/form/ToggleInput.vue'
import MainButton from '@/components/shared/MainButton.vue'
</script>

<template>
  <div class="mb-5 flex gap-3 items-center">
    <ToggleInput />
    <label class="text-[14px]" for="">Message</label>
  </div>
  <div class="mb-5 flex gap-3 items-center">
    <ToggleInput />
    <label class="text-[14px]" for="">Task Update</label>
  </div>
  <div class="mb-5 flex gap-3 items-center">
    <ToggleInput />
    <label class="text-[14px]" for="">Task Deadline</label>
  </div>
  <div class="mb-5 flex gap-3 items-center">
    <ToggleInput />
    <label class="text-[14px]" for="">Mentor Help</label>
  </div>

  <div class="mt-8">
    <MainButton buttonText="Save Changes" extraClass="" />
  </div>
</template>
