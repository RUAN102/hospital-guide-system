<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useGuideStore } from '../guide/store'

defineProps<{
  current: 1 | 2 | 3 | 4 | 5
}>()

const router = useRouter()
const store = useGuideStore()

const steps = [
  { n: 1, label: '不适类型', to: '/guide/step1' },
  { n: 2, label: '定位', to: '/guide/step2' },
  { n: 3, label: '基础症状', to: '/guide/step3' },
  { n: 4, label: '细分症状', to: '/guide/step4' },
  { n: 5, label: '推荐科室', to: '/guide/result' },
]

function clickStep(n: number) {
  // 只允许点击已完成的前序步骤，或回到第一步；不缓存选择
  if (n === 1) {
    store.reset()
    router.push('/guide/step1')
    return
  }
  const target = steps.find((s) => s.n === n)
  if (target) router.push(target.to)
}
</script>

<template>
  <div
    class="flex flex-wrap items-center gap-2 rounded-xl border border-line bg-white p-3 shadow-card sm:p-4"
  >
    <button
      v-for="s in steps"
      :key="s.n"
      type="button"
      class="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm"
      :class="[
        current === s.n
          ? 'bg-medical-600 text-white'
          : 'border border-medical-100 bg-medical-50 text-medical-700',
      ]"
      @click="clickStep(s.n)"
    >
      <span
        class="inline-flex h-5 w-5 items-center justify-center rounded-full text-xs font-semibold"
        :class="[
          current === s.n
            ? 'bg-white text-medical-700'
            : 'bg-medical-200 text-medical-800',
        ]"
      >
        {{ s.n }}
      </span>
      <span>{{ s.label }}</span>
    </button>
  </div>
</template>
