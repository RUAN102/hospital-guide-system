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
    class="inline-flex h-10 min-w-[96px] items-center justify-center rounded-md bg-medical-600 px-4 text-sm font-medium text-white hover:bg-medical-700 disabled:cursor-not-allowed disabled:bg-medical-300"
    @click="$emit('click')"
  >
    <span>下一步</span>
    <span class="ml-1.5" aria-hidden="true">→</span>
  </button>
</template>
