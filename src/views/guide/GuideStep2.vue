<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageShell from '../../components/PageShell.vue'
import GuideStepBar from '../../components/GuideStepBar.vue'
import BodyMapPicker from '../../components/BodyMapPicker.vue'
import FieldHint from '../../components/FieldHint.vue'
import { useGuideStore } from '../../guide/store'

const router = useRouter()
const store = useGuideStore()

onBeforeMount(() => {
  if (!store.state.category) {
    router.replace('/guide/step1')
    return
  }
  store.setPartValue('')
})

const category = computed(() => store.state.category)
const part = ref<string | null>(store.state.partValue || null)
const showError = ref(false)

function goNext() {
  if (!part.value) {
    showError.value = true
    return
  }
  store.setPartValue(part.value)
  router.push('/guide/step3')
}

function reset() {
  store.reset()
  router.push('/guide/step1')
}
</script>

<template>
  <PageShell
    title="智能导诊 · 第二步"
    subtitle="请在人体示意图或右侧列表中选择最明显不适的部位。"
  >
    <GuideStepBar :current="2" />

    <!-- 体表不适 -->
    <section v-if="category === 'body'" class="mt-6">
      <div class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6">
        <h2 class="text-base font-semibold text-medical-950">
          2. 请选择体表部位
        </h2>
        <p class="mt-1 text-xs text-muted">点击图中的圆形标点或右侧列表中的项目。</p>
        <div class="mt-4">
          <BodyMapPicker
            type="body"
            v-model="part"
            :invalid="showError && !part"
          />
          <FieldHint :show="showError && !part" text="请先选择部位" />
        </div>
      </div>
    </section>

    <!-- 体内不适 -->
    <section v-else-if="category === 'internal'" class="mt-6">
      <div class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6">
        <h2 class="text-base font-semibold text-medical-950">
          2. 请选择体内器官
        </h2>
        <p class="mt-1 text-xs text-muted">点击图中的器官或右侧列表中的项目。</p>
        <div class="mt-4">
          <BodyMapPicker
            type="internal"
            v-model="part"
            :invalid="showError && !part"
          />
          <FieldHint :show="showError && !part" text="请先选择部位" />
        </div>
      </div>
    </section>

    <!-- 精神情绪不适 -->
    <section v-else-if="category === 'mental'" class="mt-6">
      <div class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6">
        <h2 class="text-base font-semibold text-medical-950">
          2. 请选择情绪状态
        </h2>
        <p class="mt-1 text-xs text-muted">选择最符合您当前状态的选项。</p>
        <div class="mt-4">
          <BodyMapPicker
            type="mental"
            v-model="part"
            :invalid="showError && !part"
          />
          <FieldHint :show="showError && !part" text="请先选择情绪状态" />
        </div>
      </div>
    </section>

    <!-- 加载中 -->
    <section v-else class="mt-6 rounded-xl border border-line bg-white p-5 shadow-card">
      <p class="text-sm text-medical-800">正在加载，请稍候...</p>
    </section>

    <!-- 操作按钮 -->
    <section class="sticky bottom-0 mt-8 border-t border-line bg-surface/90 py-4">
      <div class="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div class="flex flex-col items-stretch gap-3 sm:flex-row">
          <button
            type="button"
            class="inline-flex h-10 min-w-[112px] items-center justify-center rounded-md border border-medical-200 bg-white px-4 text-sm font-medium text-medical-700 hover:border-medical-400 hover:text-medical-950"
            @click="reset"
          >
            <span>↺ 重新选择</span>
          </button>
          <button
            type="button"
            class="inline-flex h-10 min-w-[96px] items-center justify-center rounded-md border border-medical-200 bg-white px-4 text-sm font-medium text-medical-700 hover:border-medical-400"
            @click="router.push('/guide/step1')"
          >
            <span>← 上一步</span>
          </button>
        </div>
        <button
          type="button"
          class="inline-flex h-10 min-w-[96px] items-center justify-center rounded-md bg-medical-600 px-4 text-sm font-medium text-white hover:bg-medical-700"
          @click="goNext"
        >
          <span>下一步</span>
          <span class="ml-1.5" aria-hidden="true">→</span>
        </button>
      </div>
    </section>
  </PageShell>
</template>
