<script setup lang="ts">
import { computed, onBeforeMount, ref } from 'vue'
import { useRouter } from 'vue-router'
import PageShell from '../../components/PageShell.vue'
import GuideStepBar from '../../components/GuideStepBar.vue'
import FieldHint from '../../components/FieldHint.vue'
import { useGuideStore } from '../../guide/store'

const router = useRouter()
const store = useGuideStore()

onBeforeMount(() => {
  if (!store.state.category) {
    router.replace('/guide/step1')
    return
  }
  if (store.state.category === 'mental') {
    store.setPartValue('mental')
  } else if (!store.state.partValue) {
    router.replace('/guide/step2')
    return
  }
  store.setBaseSymptoms([])
  store.setDetailedSymptoms([])
  store.setCustomDesc('')
})

const category = computed(() => store.state.category)
const partValue = computed(() => store.state.partValue)

const partSymptoms: Record<string, { label: string; symptoms: string[] }> = {
  head: { label: '头部', symptoms: ['头痛', '头晕', '头胀', '头沉', '头皮痛', '耳鸣', '听力下降', '鼻塞', '流涕', '咽痛'] },
  neck: { label: '颈部', symptoms: ['颈痛', '僵硬', '活动受限', '酸胀', '淋巴结肿大'] },
  chest: { label: '胸部', symptoms: ['胸痛', '胸闷', '心慌', '气短', '咳嗽', '咳痰', '咯血'] },
  abdomen: { label: '腹部', symptoms: ['腹痛', '腹胀', '恶心', '呕吐', '反酸', '烧心', '腹泻', '便秘'] },
  back: { label: '腰背部', symptoms: ['腰痛', '腰酸', '僵硬', '活动痛', '放射痛'] },
  l_shoulder: { label: '左肩', symptoms: ['肩痛', '手臂痛', '麻木', '无力', '酸胀', '关节痛'] },
  r_shoulder: { label: '右肩', symptoms: ['肩痛', '手臂痛', '麻木', '无力', '酸胀', '关节痛'] },
  l_upper_arm: { label: '左上臂', symptoms: ['手臂痛', '麻木', '无力', '酸胀', '关节痛'] },
  r_upper_arm: { label: '右上臂', symptoms: ['手臂痛', '麻木', '无力', '酸胀', '关节痛'] },
  l_forearm: { label: '左前臂', symptoms: ['手臂痛', '麻木', '无力', '酸胀'] },
  r_forearm: { label: '右前臂', symptoms: ['手臂痛', '麻木', '无力', '酸胀'] },
  l_hand: { label: '左手', symptoms: ['麻木', '无力', '关节痛'] },
  r_hand: { label: '右手', symptoms: ['麻木', '无力', '关节痛'] },
  l_thigh: { label: '左大腿', symptoms: ['髋痛', '腿痛', '麻木', '无力', '酸胀', '关节痛', '肿胀'] },
  r_thigh: { label: '右大腿', symptoms: ['髋痛', '腿痛', '麻木', '无力', '酸胀', '关节痛', '肿胀'] },
  l_calf: { label: '左小腿', symptoms: ['腿痛', '麻木', '无力', '酸胀', '肿胀'] },
  r_calf: { label: '右小腿', symptoms: ['腿痛', '麻木', '无力', '酸胀', '肿胀'] },
  l_foot: { label: '左足', symptoms: ['腿痛', '麻木', '无力', '关节痛', '肿胀'] },
  r_foot: { label: '右足', symptoms: ['腿痛', '麻木', '无力', '关节痛', '肿胀'] },
  heart: { label: '心脏', symptoms: ['胸痛', '胸闷', '心慌', '气短'] },
  lung_l: { label: '左肺', symptoms: ['咳嗽', '咳痰', '咯血', '气短'] },
  lung_r: { label: '右肺', symptoms: ['咳嗽', '咳痰', '咯血', '气短'] },
  liver: { label: '肝脏', symptoms: ['腹痛', '腹胀', '恶心', '呕吐'] },
  stomach: { label: '胃', symptoms: ['腹痛', '腹胀', '恶心', '呕吐', '反酸', '烧心'] },
  intestine: { label: '肠道', symptoms: ['腹痛', '腹胀', '腹泻', '便秘'] },
  kidney_l: { label: '左肾', symptoms: ['腰痛', '腰酸', '排尿异常'] },
  kidney_r: { label: '右肾', symptoms: ['腰痛', '腰酸', '排尿异常'] },
  bladder: { label: '膀胱', symptoms: ['腹痛', '尿频', '尿急', '尿痛'] },
  mental: { label: '精神情绪', symptoms: ['焦虑', '抑郁', '烦躁', '失眠', '多梦', '注意力不集中'] },
  anxiety: { label: '焦虑紧张', symptoms: ['焦虑', '烦躁', '失眠', '注意力不集中'] },
  depression: { label: '情绪低落', symptoms: ['抑郁', '失眠', '多梦', '注意力不集中'] },
  insomnia: { label: '失眠', symptoms: ['失眠', '多梦', '注意力不集中'] },
  irritability: { label: '易怒', symptoms: ['烦躁', '焦虑'] },
  fatigue: { label: '疲劳乏力', symptoms: ['无力', '注意力不集中'] },
}

const currentPartInfo = computed(() => {
  const pv = partValue.value
  if (!pv) return null
  return partSymptoms[pv] || { label: pv, symptoms: [] }
})

const picked = ref<string[]>([...store.state.baseSymptoms])
const custom = ref<string>(store.state.customDesc || '')
const showError = ref(false)

function goNext() {
  if (picked.value.length === 0 && !custom.value.trim()) {
    showError.value = true
    return
  }
  store.setBaseSymptoms(picked.value)
  store.setCustomDesc(custom.value.trim())
  router.push('/guide/step4')
}

function reset() {
  store.reset()
  router.push('/guide/step1')
}

function toggleSymptom(symptom: string) {
  const index = picked.value.indexOf(symptom)
  if (index > -1) {
    picked.value.splice(index, 1)
  } else {
    picked.value.push(symptom)
  }
}
</script>

<template>
  <PageShell
    title="智能导诊 · 第三步"
    subtitle="请选择您当前存在的基础症状，也可直接在文本框补充描述。"
  >
    <GuideStepBar :current="3" />

    <section
      v-if="currentPartInfo"
      class="mt-6 rounded-xl border border-line bg-white p-5 shadow-card sm:p-6"
    >
      <p class="text-sm text-muted">
        当前定位：
        <span class="font-semibold text-medical-900">{{ currentPartInfo.label }}</span>
      </p>

      <h2 class="mt-4 text-base font-semibold text-medical-950">
        3. 选择基础症状
      </h2>
      <p class="mt-1 text-xs text-muted">多选，至少选择一项或填写下方描述。</p>

      <div class="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        <button
          v-for="symptom in currentPartInfo.symptoms"
          :key="symptom"
          type="button"
          class="flex items-center justify-center rounded-md border px-4 py-2.5 text-sm font-medium transition-colors"
          :class="[
            picked.includes(symptom)
              ? 'border-medical-600 bg-medical-600 text-white'
              : 'border-medical-200 text-medical-800 hover:border-medical-400',
          ]"
          @click="toggleSymptom(symptom)"
        >
          {{ symptom }}
        </button>
      </div>

      <div class="mt-6">
        <label class="block text-sm font-medium text-medical-900">
          其他（自行输入）
        </label>
        <textarea
          v-model="custom"
          rows="3"
          placeholder="例如：夜间加重、持续3天、伴低热等"
          class="mt-2 block w-full resize-y rounded-md border border-medical-200 bg-white px-3 py-2 text-sm text-medical-900 focus:border-medical-500 focus:outline-none"
        ></textarea>
      </div>

      <FieldHint
        v-if="showError"
        text="请选择至少1个症状"
      />
    </section>

    <section v-else class="mt-6 rounded-xl border border-line bg-white p-5 shadow-card">
      <p class="text-sm text-medical-800">正在加载，请稍候...</p>
    </section>

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
            @click="router.push(category === 'mental' ? '/guide/step1' : '/guide/step2')"
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
