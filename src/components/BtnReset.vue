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
    class="inline-flex h-10 min-w-[112px] items-center justify-center rounded-md border border-medical-200 bg-white px-4 text-sm font-medium text-medical-700 hover:border-medical-400 hover:text-medical-950 disabled:cursor-not-allowed disabled:border-medical-100 disabled:text-medical-400"
    @click="$emit('click')"
  >
    <span aria-hidden="true">↺</span>
    <span class="ml-1.5">重新选择</span>
  </button>
</template>
