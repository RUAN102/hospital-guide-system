<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <button
    type="button"
    class="inline-flex h-10 min-w-[112px] items-center justify-center rounded-md border border-medical-200 bg-white px-4 text-sm font-medium text-medical-700 hover:border-medical-400 hover:text-medical-950"
    @click="goHome"
  >
    <span>返回主页</span>
    <span aria-hidden="true" class="ml-1.5">↩</span>
  </button>
</template>
