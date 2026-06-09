<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
  step?: string
}>()
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 h-16 border-b border-medical-100 bg-white shadow-nav"
  >
    <div
      class="mx-auto flex h-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >
      <a href="#top" class="flex items-center gap-3">
        <span
          class="flex h-9 w-9 items-center justify-center rounded-md bg-medical-600 text-sm font-semibold text-white"
        >
          道
        </span>
        <div class="leading-tight">
          <div class="text-base font-semibold text-medical-950">
            {{ title || '道臻医疗 · 在线就医指引' }}
          </div>
          <div v-if="subtitle" class="text-xs text-medical-600">
            {{ subtitle }}
          </div>
          <div v-else class="text-xs text-medical-600">
            Daozhen Medical
          </div>
        </div>
      </a>

      <div class="flex items-center gap-2 sm:gap-4">
        <div
          v-if="step"
          class="hidden rounded-md border border-medical-100 bg-medical-50 px-3 py-1.5 text-xs font-medium text-medical-700 sm:block"
        >
          {{ step }}
        </div>
        <HelpModal />
      </div>
    </div>
  </header>
</template>
