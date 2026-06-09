<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import PageShell from '../components/PageShell.vue'
import BtnPrev from '../components/BtnPrev.vue'
import BtnHome from '../components/BtnHome.vue'
import { findDepartment } from '../guide/departments'

const route = useRoute()
const router = useRouter()

const deptId = computed(() => String(route.params.id || ''))
const found = computed(() => findDepartment(deptId.value))
</script>

<template>
  <PageShell
    :title="found ? `${found.category} · ${found.item.name}` : '科室未找到'"
    :subtitle="found ? '科室介绍、诊疗范围与适配病症。' : '请返回科室列表重新选择。'"
  >
    <div v-if="found" class="grid grid-cols-1 gap-6 lg:grid-cols-3">
      <!-- 科室介绍 -->
      <section
        class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6 lg:col-span-2"
      >
        <h2 class="text-lg font-semibold text-medical-950">科室介绍</h2>
        <p class="mt-3 text-sm leading-relaxed text-medical-800">
          {{ found.item.intro }}
        </p>

        <h3 class="mt-6 text-base font-semibold text-medical-950">
          诊疗范围
        </h3>
        <ul
          class="mt-3 grid grid-cols-1 gap-2 text-sm text-medical-800 sm:grid-cols-2"
        >
          <li
            v-for="s in found.item.scope"
            :key="s"
            class="flex items-start gap-2 rounded-md border border-medical-100 bg-medical-50/60 px-3 py-2"
          >
            <span
              class="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-medical-600"
            ></span>
            <span>{{ s }}</span>
          </li>
        </ul>
      </section>

      <!-- 适配病症 -->
      <section
        class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
      >
        <h2 class="text-base font-semibold text-medical-950">适配病症</h2>
        <p class="mt-2 text-xs text-muted">
          如出现下列不适，可优先考虑该科室首诊。
        </p>
        <ul class="mt-4 space-y-2 text-sm text-medical-800">
          <li
            v-for="c in found.item.conditions"
            :key="c"
            class="flex items-start gap-2 rounded-md border border-medical-100 bg-medical-50/60 px-3 py-2"
          >
            <span
              class="mt-1 inline-block h-2 w-2 shrink-0 rounded-full bg-medical-600"
            ></span>
            <span>{{ c }}</span>
          </li>
        </ul>

        <div
          class="mt-6 border-t border-medical-100 pt-4 text-xs text-muted"
        >
          提示：以上信息仅用于导诊参考，具体诊断与治疗方案请以接诊医师判断为准。
        </div>
      </section>
    </div>

    <section
      v-else
      class="mt-4 rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
    >
      <p class="text-sm text-medical-800">
        未找到对应的科室信息，请返回科室列表重新选择。
      </p>
    </section>

    <!-- 底部按钮 -->
    <section class="mt-8 flex flex-col items-stretch gap-3 sm:flex-row">
      <BtnHome />
      <BtnPrev @click="router.push('/departments')" />
    </section>
  </PageShell>
</template>
