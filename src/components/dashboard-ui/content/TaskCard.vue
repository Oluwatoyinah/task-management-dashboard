<script setup>
import { ICONS, IMAGES } from '@/constants'
const { TaskImg, StudentImg } = IMAGES
const { TimeIcon } = ICONS
</script>

<template>
  <div class="rounded-[10px] bg-primary-0 p-5 pb-5 min-h-[100px]">
    <div class="h-[110px] rounded-[10px] mb-2">
      <img :src="TaskImg" class="w-full h-full object-cover rounded-[10px]" alt="task" />
    </div>
    <div>
      <p class="font-medium text-secondary-500 -tracking-[0.1px] text-[14px]">
        Creating Awesome Mobile Apps
      </p>
      <p class="text-[11px] text-secondary-300">Product Engineering</p>
    </div>

    <div class="my-3">
      <div class="text-[12px] flex gap-2 items-center justify-between">
        <p>Progress</p>
        <p class="text-secondary-400">50%</p>
      </div>
      <input type="range" class="slider" disabled name="" id="" />
    </div>

    <div class="text-secondary-500 flex items-center justify-between text-nowrap flex-wrap">
      <div class="flex gap-2 items-center">
        <span><img :src="TimeIcon" alt="time" /></span>
        <p class="text-[14px]">1 Hour</p>
      </div>

      <div class="flex gap-2 items-center">
        <span><img :src="StudentImg" alt="student" /></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  background: linear-gradient(to right, $secondary-400 0%, $secondary-400 50%, #ddd 50%, #ddd 100%);
  transition: background 0.3s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  background: $secondary-400;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  background: $secondary-400;
  border-radius: 50%;
  cursor: pointer;
}

.slider:hover::-webkit-slider-thumb {
  background: $secondary-400;
}
</style>
