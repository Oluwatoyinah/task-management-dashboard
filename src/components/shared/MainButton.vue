<script setup>
const props = defineProps(['buttonText', 'extraClass'])
const { buttonText, extraClass } = props
</script>

<template>
  <button
    :class="`bg-secondary-400 text-primary-0 text-[13px] p-2 min-w-[120px] rounded ${extraClass}`"
  >
    {{ buttonText || 'Click me' }}
  </button>
</template>
