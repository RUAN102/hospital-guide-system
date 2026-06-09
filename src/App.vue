<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>

<template>
  <div class="min-h-screen bg-surface text-ink">
    <NavBar title="道臻医疗 · 在线就医服务" subtitle="Daozhen Medical" />
    <main>
      <RouterView />
    </main>
  </div>
</template>
