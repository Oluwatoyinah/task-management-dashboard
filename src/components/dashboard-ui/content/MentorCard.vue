<script setup>
import { IMAGES } from '@/constants'
import { ICONS } from '@/constants'
import { ref } from 'vue'
const { MentorImg } = IMAGES
const { NoteIcon, StarIcon } = ICONS

const isFollowed = ref(false)
</script>

<template>
  <div class="rounded-[10px] bg-primary-0 p-5 pb-5 min-h-[100px]">
    <div class="flex gap-2 items-center flex-wrap">
      <div class="flex gap-2 items-center flex-grow">
        <div class="size-10 rounded-full">
          <img :src="MentorImg" class="w-full h-full object-cover rounded-full" alt="img" />
        </div>
        <div>
          <p class="font-medium text-secondary-500 -tracking-[0.1px] text-[14px]">
            Akinbobola Oluwatoyin
          </p>
          <p class="text-[11px] text-secondary-300">Frontend Engineer</p>
        </div>
      </div>
      <button @click="isFollowed = !isFollowed" class="text-[12px]">
        <p v-if="!isFollowed" class="text-secondary-400">+ Follow</p>
        <p v-else class="text-secondary-300">Unfollow</p>
      </button>
    </div>

    <div class="my-3 mb-5">
      <p class="text-secondary-300 text-[13px]">
        Hi, I'm Akinbobola Oluwatoyin. I'm a Frontend Engineer. I enjoy building wonderful softwares
        . . .
      </p>
    </div>

    <div class="text-secondary-500 flex items-center justify-between text-nowrap flex-wrap">
      <div class="flex gap-2 items-center">
        <span><img :src="NoteIcon" alt="" /></span>
        <p class="text-[14px]">10 Tasks</p>
      </div>

      <div class="flex gap-2 items-center">
        <span><img :src="StarIcon" alt="" /></span>
        <p class="text-[14px] ">4.9 (970 Reviews)</p>
      </div>
    </div>
  </div>
</template>
