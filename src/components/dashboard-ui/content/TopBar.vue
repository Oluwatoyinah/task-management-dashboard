<script setup>
import { ICONS } from '@/constants'
import { IMAGES } from '@/constants'

const { Bell } = ICONS
const { ProfileImg } = IMAGES

const props = defineProps(['title', 'paragraph'])

const { title, paragraph } = props
</script>

<template>
  <div class="flex gap-3 justify-between items-center">
    <div>
      <h1 class="text-secondary-500 text-[22px] font-semibold">{{ title }}</h1>
      <p v-if="paragraph" class="text-secondary-300 text-[15px]">{{ paragraph }}</p>
    </div>

    <div class="flex gap-3 items-center">
      <button>
        <img :src="Bell" class="size-10" alt="" />
      </button>
      <div class="size-10 rounded-full">
        <img :src="ProfileImg" class="w-full h-full object-cover rounded-full" alt="" />
      </div>
    </div>
  </div>
</template>
