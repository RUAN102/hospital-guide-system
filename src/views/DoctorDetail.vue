<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageShell from '../components/PageShell.vue'
import BtnPrev from '../components/BtnPrev.vue'
import BtnHome from '../components/BtnHome.vue'
import { findDoctor } from '../guide/doctors'

const route = useRoute()
const router = useRouter()

const docId = computed(() => String(route.params.id || ''))
const doctor = computed(() => findDoctor(docId.value))
</script>

<template>
  <PageShell
    :title="doctor ? `${doctor.name} · ${doctor.title}` : '医生未找到'"
    :subtitle="doctor ? `${doctor.department} · 个人详情` : '请返回医生列表重新选择。'"
  >
    <div v-if="doctor" class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <!-- 基本信息 -->
      <section
        class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6 lg:col-span-2"
      >
        <div class="flex items-start gap-4">
          <div
            class="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-medical-300 bg-medical-50 text-lg font-semibold text-medical-800"
          >
            {{ doctor.name.charAt(0) }}
          </div>
          <div>
            <h1 class="text-xl font-semibold text-medical-950">
              {{ doctor.name }}
            </h1>
            <p class="mt-1 text-sm text-medical-700">
              {{ doctor.title }} · {{ doctor.department }}
            </p>
            <span
              class="mt-2 inline-flex items-center rounded-md bg-medical-100 px-3 py-1 text-xs font-medium text-medical-700"
            >
              门诊时间：{{ doctor.available }}
            </span>
          </div>
        </div>

        <h2 class="mt-6 text-base font-semibold text-medical-950">个人简介</h2>
        <p class="mt-3 text-sm leading-relaxed text-medical-800">
          {{ doctor.intro }}
        </p>
      </section>

      <!-- 擅长与接诊方向 -->
      <section
        class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
      >
        <h2 class="text-base font-semibold text-medical-950">擅长领域</h2>
        <ul class="mt-3 space-y-2">
          <li
            v-for="e in doctor.expertise"
            :key="e"
            class="flex items-center gap-2 rounded-md border border-medical-100 bg-medical-50/60 px-3 py-2 text-sm text-medical-800"
          >
            <span
              class="h-2 w-2 shrink-0 rounded-full bg-medical-600"
            ></span>
            <span>{{ e }}</span>
          </li>
        </ul>

        <h2 class="mt-6 text-base font-semibold text-medical-950">接诊方向</h2>
        <ul class="mt-3 space-y-2">
          <li
            v-for="p in doctor.practice"
            :key="p"
            class="flex items-center gap-2 rounded-md border border-medical-100 bg-medical-50/60 px-3 py-2 text-sm text-medical-800"
          >
            <span
              class="h-2 w-2 shrink-0 rounded-full bg-medical-600"
            ></span>
            <span>{{ p }}</span>
          </li>
        </ul>
      </section>
    </div>

    <section
      v-else
      class="mt-4 rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
    >
      <p class="text-sm text-medical-800">
        未找到对应的医生信息，请返回医生列表重新选择。
      </p>
    </section>

    <!-- 底部按钮 -->
    <section class="mt-8 flex flex-col items-stretch gap-3 sm:flex-row">
      <BtnHome />
      <BtnPrev @click="router.push('/doctors')" />
    </section>
  </PageShell>
</template>
