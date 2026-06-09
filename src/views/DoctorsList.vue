<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import PageShell from '../components/PageShell.vue'
import BtnHome from '../components/BtnHome.vue'
import { doctorGroups } from '../guide/doctors'

const router = useRouter()
const search = ref('')

const filteredGroups = computed(() => {
  if (!search.value.trim()) return doctorGroups
  const key = search.value.toLowerCase()
  return doctorGroups.map((group) => ({
    ...group,
    doctors: group.doctors.filter(
      (d) =>
        d.name.toLowerCase().includes(key) ||
        d.title.toLowerCase().includes(key) ||
        d.expertise.some((e) => e.toLowerCase().includes(key))
    ),
  })).filter((g) => g.doctors.length > 0)
})
</script>

<template>
  <PageShell title="医生列表" subtitle="按科室浏览医生信息，点击卡片查看详情。">
    <div class="flex items-center gap-2 rounded-xl border border-line bg-white p-3 shadow-card sm:p-4">
      <input
        v-model="search"
        type="text"
        placeholder="搜索医生姓名、职称或擅长领域"
        class="block flex-1 rounded-md border border-medical-200 bg-white px-3 py-2 text-sm text-medical-900 focus:border-medical-500 focus:outline-none"
      />
      <span class="text-xs text-muted">共 {{ filteredGroups.length }} 个科室</span>
    </div>

    <div class="mt-6 space-y-8">
      <section
        v-for="group in filteredGroups"
        :key="group.departmentId"
        class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
      >
        <h2 class="text-lg font-semibold text-medical-950">
          {{ group.departmentName }}
        </h2>
        <p class="mt-1 text-xs text-muted">共 {{ group.doctors.length }} 位医生</p>

        <div
          class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          <button
            v-for="doc in group.doctors"
            :key="doc.id"
            type="button"
            class="flex items-start gap-4 rounded-lg border border-medical-100 bg-medical-50/60 p-4 text-left hover:border-medical-500 hover:bg-white"
            @click="router.push(`/doctors/${doc.id}`)"
          >
            <div class="flex flex-col">
              <div class="flex items-center gap-2">
                <span class="text-base font-semibold text-medical-950">
                  {{ doc.name }}
                </span>
                <span
                  class="inline-flex items-center rounded-md bg-medical-100 px-2 py-0.5 text-xs font-medium text-medical-700"
                >
                  {{ doc.title }}
                </span>
              </div>
              <p class="mt-1 text-xs text-medical-600">{{ doc.department }}</p>
              <p class="mt-2 text-xs text-medical-800 line-clamp-2">
                擅长：{{ doc.expertise.join('、') }}
              </p>
            </div>
            <span
              class="mt-1 inline-flex h-8 items-center rounded-md bg-medical-600 px-3 text-xs font-medium text-white"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </div>
      </section>
    </div>

    <section
      v-if="filteredGroups.length === 0"
      class="mt-6 rounded-xl border border-line bg-white p-5 shadow-card"
    >
      <p class="text-sm text-medical-800">
        未找到匹配的医生，请尝试其他关键词。
      </p>
    </section>

    <section class="mt-8">
      <BtnHome />
    </section>
  </PageShell>
</template>
