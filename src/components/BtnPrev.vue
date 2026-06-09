<script setup lang="ts">
defineProps<{
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}>()
defineEmits<{
  (e: 'click'): void
}>()
</script>

<template>
  <button
    :type="type || 'button'"
    :disabled="disabled"
    class="inline-flex h-10 min-w-[96px] items-center justify-center rounded-md border border-medical-200 bg-white px-4 text-sm font-medium text-medical-800 hover:border-medical-400 hover:text-medical-950 disabled:cursor-not-allowed disabled:border-medical-100 disabled:bg-medical-50/60 disabled:text-medical-500"
    @click="$emit('click')"
  >
    <span class="mr-1.5" aria-hidden="true">←</span>
    <span>上一步</span>
  </button>
</template>
