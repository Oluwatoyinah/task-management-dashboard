<script setup>
const props = defineProps(['label', 'options'])
const { label, options } = props
</script>

<template>
  <div>
    <label class="text-[13px] text-secondary-500" v-if="label" for="">{{ label }}</label>
    <div class="p-2 w-full max-w-[350px] rounded border border-[#f5f5f7] mt-1">
      <select name="" id="" class="bg-primary-0 w-full outline-none text-[14px]">
        <option value="">Choose</option>

        <option v-for="option in options" :value="option.value">{{ option.name }}</option>
      </select>
    </div>
  </div>
</template>
