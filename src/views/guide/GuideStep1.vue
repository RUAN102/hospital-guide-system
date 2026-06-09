<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import PageShell from '../../components/PageShell.vue'
import GuideStepBar from '../../components/GuideStepBar.vue'
import GuideActionBar from '../../components/GuideActionBar.vue'
import FieldHint from '../../components/FieldHint.vue'
import { useGuideStore, type GuideCategory } from '../../guide/store'

const store = useGuideStore()

const category = ref<GuideCategory>(store.state.category)
const showError = ref(false)

const options: { value: Exclude<GuideCategory, null>; label: string; desc: string }[] = [
  {
    value: 'body',
    label: '体表不适',
    desc: '如皮肤、关节、肌肉、四肢等可触及的部位不适',
  },
  {
    value: 'internal',
    label: '体内不适',
    desc: '如心、肺、胃、肠、甲状腺等体内器官或系统相关',
  },
  {
    value: 'mental',
    label: '精神情绪不适',
    desc: '如情绪低落、焦虑、失眠、持续紧张等',
  },
]

onBeforeMount(() => {
  // 进入导诊第一步即重置，避免缓存选择
  store.reset()
})

function goNext(): boolean {
  if (!category.value) {
    showError.value = true
    return false
  }
  store.setCategory(category.value)
  return true
}
</script>

<template>
  <PageShell
    title="智能导诊 · 第一步"
    subtitle="请选择您最主要的不适类型，我们将据此引导后续定位。"
  >
    <GuideStepBar :current="1" />

    <section
      class="mt-6 rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
    >
      <h2 class="text-base font-semibold text-medical-950">
        1. 请选择不适类型
      </h2>
      <p class="mt-1 text-xs text-muted">单选，必选</p>

      <div class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <button
          v-for="opt in options"
          :key="opt.value"
          type="button"
          class="flex flex-col items-start gap-2 rounded-lg border bg-white p-4 text-left text-sm"
          :class="[
            category === opt.value
              ? 'border-medical-600 bg-medical-50 text-medical-950'
              : 'border-medical-100 text-medical-800 hover:border-medical-300',
            showError && !category ? 'ring-1 ring-danger/40' : '',
          ]"
          @click="category = opt.value; showError = false"
        >
          <span class="text-base font-semibold">{{ opt.label }}</span>
          <span class="text-xs text-muted">{{ opt.desc }}</span>
        </button>
      </div>

      <FieldHint
        :show="showError && !category"
        text="请先选择对应选项后再继续"
      />
    </section>

    <GuideActionBar
      :prev-to="'/'"
      :next-to="category === 'mental' ? '/guide/step3' : '/guide/step2'"
      :on-next="goNext"
    />
  </PageShell>
</template>
