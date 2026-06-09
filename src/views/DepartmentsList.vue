<script setup lang="ts">
import { useRouter } from 'vue-router'
import PageShell from '../components/PageShell.vue'
import BtnHome from '../components/BtnHome.vue'
import { departmentGroups } from '../guide/departments'

const router = useRouter()
</script>

<template>
  <PageShell title="科室列表" subtitle="按分类查看各科室信息，点击卡片查看详情。">
    <div class="space-y-8">
      <section
        v-for="group in departmentGroups"
        :key="group.category"
        class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
      >
        <h2 class="text-lg font-semibold text-medical-950">
          {{ group.category }}
        </h2>
        <p class="mt-1 text-xs text-muted">共 {{ group.items.length }} 个科室</p>

        <div
          class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3"
        >
          <button
            v-for="item in group.items"
            :key="item.id"
            type="button"
            class="flex flex-col items-start rounded-lg border border-medical-100 bg-medical-50/60 p-4 text-left hover:border-medical-500 hover:bg-white"
            @click="router.push(`/departments/${item.id}`)"
          >
            <span class="text-base font-semibold text-medical-950">
              {{ item.name }}
            </span>
            <span class="mt-1 text-xs leading-relaxed text-medical-700 line-clamp-2">
              {{ item.intro }}
            </span>
            <span
              class="mt-3 inline-flex items-center text-xs font-medium text-medical-600 hover:text-medical-900"
            >
              查看详情 →
            </span>
          </button>
        </div>
      </section>
    </div>

    <section class="mt-8">
      <BtnHome />
    </section>
  </PageShell>
</template>
