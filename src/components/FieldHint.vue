<script setup lang="ts">
defineProps<{
  show?: boolean
  text?: string
}>()
</script>

<template>
  <p
    v-if="show"
    class="mt-2 text-xs font-medium leading-5 text-danger"
    role="alert"
  >
    {{ text || '请先选择对应选项后再继续' }}
  </p>
</template>
