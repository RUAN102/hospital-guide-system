<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <section
    class="mx-auto max-w-5xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:px-8"
  >
    <div v-if="title" class="mb-8">
      <h1
        class="text-2xl font-semibold text-medical-950 sm:text-3xl"
      >
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mt-2 text-sm text-muted">
        {{ subtitle }}
      </p>
    </div>
    <slot />
  </section>
</template>
