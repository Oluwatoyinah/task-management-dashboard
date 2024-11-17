<script setup lang="ts">
import SelectInput from '@/components/form/SelectInput.vue'
import MainButton from '@/components/shared/MainButton.vue'
import { LANGUAGES } from '@/constants'
</script>

<template>
  <div>
    <div class="mb-3">
      <SelectInput label="Language" :options="LANGUAGES" />
    </div>

    <div class="mb-3">
      <SelectInput label="Timezone" :options="LANGUAGES" />
    </div>
  </div>

  <div class="mt-8">
    <MainButton buttonText="Save Changes" extraClass="" />
  </div>
</template>
