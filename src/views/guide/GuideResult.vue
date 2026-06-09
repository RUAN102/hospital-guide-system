<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageShell from '../../components/PageShell.vue'
import GuideStepBar from '../../components/GuideStepBar.vue'
import GuideActionBar from '../../components/GuideActionBar.vue'
import { useGuideStore, findPart } from '../../guide/store'

const router = useRouter()
const store = useGuideStore()

const hasResult = ref(false)

onBeforeMount(() => {
  if (!store.state.category) {
    router.replace('/guide/step1')
    return
  }
  if (store.state.category === 'mental') {
    // ok
  } else if (!store.state.partValue) {
    router.replace('/guide/step2')
    return
  }
  if (!store.state.detailedSymptoms || store.state.detailedSymptoms.length === 0) {
    router.replace('/guide/step4')
    return
  }
  hasResult.value = true
})

const part = computed(() =>
  findPart(store.state.category, store.state.partValue)
)

const baseLabels = computed(() => {
  const pool = part.value?.baseSymptoms || []
  return (store.state.baseSymptoms || [])
    .map((v) => pool.find((s) => s.value === v)?.label)
    .filter(Boolean) as string[]
})
const detailedLabels = computed(() => {
  const pool = part.value?.detailedSymptoms || []
  return (store.state.detailedSymptoms || [])
    .map((v) => pool.find((s) => s.value === v)?.label)
    .filter(Boolean) as string[]
})
</script>

<template>
  <PageShell title="智能导诊 · 推荐结果" subtitle="基于您的选择生成科室建议。">
    <GuideStepBar :current="5" />

    <!-- 有效结果 -->
    <section
      v-if="part"
      class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3"
    >
      <!-- 主推科室 -->
      <div
        class="rounded-xl border border-medical-600 bg-medical-50 p-5 shadow-card sm:p-6 lg:col-span-2"
      >
        <p class="text-xs font-medium text-medical-700">主推科室</p>
        <h2 class="mt-2 text-2xl font-semibold text-medical-950">
          {{ part.departments.primary }}
        </h2>
        <p class="mt-3 text-sm text-medical-800">
          基于您选择的不适类型与症状，
          {{ part.departments.primary }}是最常见的接诊科室。
          如症状持续、加重或出现急症表现，请尽快就诊或前往急诊。
        </p>

        <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div class="rounded-lg border border-medical-200 bg-white p-4">
            <div class="text-xs text-muted">当前定位</div>
            <div class="mt-1 text-sm font-medium text-medical-950">
              {{ part.label }}
            </div>
          </div>
          <div class="rounded-lg border border-medical-200 bg-white p-4">
            <div class="text-xs text-muted">基础症状</div>
            <div class="mt-1 text-sm font-medium text-medical-950">
              {{ baseLabels.length ? baseLabels.join('、') : '未选择' }}
            </div>
          </div>
          <div class="rounded-lg border border-medical-200 bg-white p-4 sm:col-span-2">
            <div class="text-xs text-muted">细分症状</div>
            <div class="mt-1 text-sm font-medium text-medical-950">
              {{ detailedLabels.join('、') }}
            </div>
          </div>
          <div
            v-if="store.state.customDesc"
            class="rounded-lg border border-medical-200 bg-white p-4 sm:col-span-2"
          >
            <div class="text-xs text-muted">补充描述</div>
            <div class="mt-1 text-sm text-medical-900">
              {{ store.state.customDesc }}
            </div>
          </div>
        </div>
      </div>

      <!-- 备选科室 -->
      <div
        class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
      >
        <p class="text-xs font-medium text-medical-700">备选科室</p>
        <ul class="mt-3 space-y-2">
          <li
            v-for="alt in part.departments.alternatives"
            :key="alt"
            class="flex items-start gap-2 rounded-md border border-medical-100 bg-medical-50/70 px-3 py-2 text-sm text-medical-900"
          >
            <span class="mt-1 h-2 w-2 shrink-0 rounded-full bg-medical-600"></span>
            <span>{{ alt }}</span>
          </li>
        </ul>
        <p class="mt-4 text-xs leading-relaxed text-muted">
          备选科室用于当首诊科室存在排队、或您的表现存在其他系统相关线索时的参考。
        </p>
      </div>
    </section>

    <!-- 暂无匹配 -->
    <section
      v-else
      class="mt-6 rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
    >
      <h2 class="text-base font-semibold text-medical-950">暂无匹配科室</h2>
      <p class="mt-2 text-sm text-medical-800">
        未能基于当前选择生成明确推荐。建议您回到第一步，重新填写不适信息。
      </p>
    </section>

    <GuideActionBar
      prev-to="/guide/step4"
      next-to="/doctors"
      :show-next="hasResult"
    />
  </PageShell>
</template>
