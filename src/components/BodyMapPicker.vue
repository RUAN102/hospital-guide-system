<script setup lang="ts">
defineProps<{
  type: 'body' | 'internal' | 'mental'
  modelValue: string | null
  invalid?: boolean
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', v: string): void
}>()

// 体表部位
const bodyParts = [
  { value: 'head', label: '头部', x: 50, y: 8 },
  { value: 'neck', label: '颈部', x: 50, y: 19 },
  { value: 'chest', label: '胸部', x: 50, y: 32 },
  { value: 'abdomen', label: '腹部', x: 50, y: 47 },
  { value: 'back', label: '腰背部', x: 50, y: 62 },
  { value: 'l_shoulder', label: '左肩', x: 28, y: 28 },
  { value: 'l_upper_arm', label: '左上臂', x: 20, y: 38 },
  { value: 'l_forearm', label: '左前臂', x: 14, y: 50 },
  { value: 'l_hand', label: '左手', x: 10, y: 62 },
  { value: 'r_shoulder', label: '右肩', x: 72, y: 28 },
  { value: 'r_upper_arm', label: '右上臂', x: 80, y: 38 },
  { value: 'r_forearm', label: '右前臂', x: 86, y: 50 },
  { value: 'r_hand', label: '右手', x: 90, y: 62 },
  { value: 'l_thigh', label: '左大腿', x: 38, y: 78 },
  { value: 'l_calf', label: '左小腿', x: 40, y: 90 },
  { value: 'l_foot', label: '左足', x: 42, y: 98 },
  { value: 'r_thigh', label: '右大腿', x: 62, y: 78 },
  { value: 'r_calf', label: '右小腿', x: 60, y: 90 },
  { value: 'r_foot', label: '右足', x: 58, y: 98 },
]

// 体内器官
const internalOrgans = [
  { value: 'heart', label: '心脏', x: 42, y: 34, color: '#e57373' },
  { value: 'lung_l', label: '左肺', x: 35, y: 30, color: '#81c784' },
  { value: 'lung_r', label: '右肺', x: 55, y: 30, color: '#81c784' },
  { value: 'liver', label: '肝脏', x: 55, y: 48, color: '#ffb74d' },
  { value: 'stomach', label: '胃', x: 42, y: 44, color: '#a1887f' },
  { value: 'intestine', label: '肠道', x: 50, y: 58, color: '#66bb6a' },
  { value: 'kidney_l', label: '左肾', x: 35, y: 52, color: '#7986cb' },
  { value: 'kidney_r', label: '右肾', x: 65, y: 52, color: '#7986cb' },
  { value: 'bladder', label: '膀胱', x: 50, y: 66, color: '#4fc3f7' },
]

// 精神情绪选项
const mentalOptions = [
  { value: 'anxiety', label: '焦虑紧张', desc: '持续感到紧张不安、坐立不安' },
  { value: 'depression', label: '情绪低落', desc: '心情压抑、对事物提不起兴趣' },
  { value: 'insomnia', label: '失眠', desc: '难以入睡或睡眠质量差' },
  { value: 'irritability', label: '易怒', desc: '容易发脾气、情绪不稳定' },
  { value: 'fatigue', label: '疲劳乏力', desc: '持续感到疲倦、精力不足' },
]
</script>

<template>
  <div
    class="flex flex-col items-start gap-6 rounded-xl border bg-white p-5 shadow-card sm:p-6 lg:flex-row"
    :class="invalid ? 'border-danger/40' : 'border-line'"
  >
    <!-- 体表不适 -->
    <template v-if="type === 'body'">
      <!-- 人体线稿图 -->
      <div
        class="relative mx-auto h-[400px] w-[200px] shrink-0 select-none"
        aria-label="人体示意图"
      >
        <svg viewBox="0 0 200 400" class="h-full w-full">
          <!-- 头部 -->
          <circle cx="100" cy="40" r="28" fill="none" stroke="#90a4ae" stroke-width="2"/>
          <!-- 颈部 -->
          <line x1="92" y1="68" x2="92" y2="88" stroke="#90a4ae" stroke-width="2"/>
          <line x1="108" y1="68" x2="108" y2="88" stroke="#90a4ae" stroke-width="2"/>
          <!-- 躯干 -->
          <path d="M50 88 L50 200 Q50 210 60 210 L140 210 Q150 210 150 200 L150 88 Q150 78 100 78 Q50 78 50 88" 
                fill="none" stroke="#90a4ae" stroke-width="2"/>
          <!-- 左臂 -->
          <path d="M50 98 Q30 100 25 130 Q20 160 25 190 Q30 220 35 240" 
                fill="none" stroke="#90a4ae" stroke-width="2" stroke-linecap="round"/>
          <!-- 左手 -->
          <circle cx="35" cy="245" r="8" fill="none" stroke="#90a4ae" stroke-width="2"/>
          <!-- 右臂 -->
          <path d="M150 98 Q170 100 175 130 Q180 160 175 190 Q170 220 165 240" 
                fill="none" stroke="#90a4ae" stroke-width="2" stroke-linecap="round"/>
          <!-- 右手 -->
          <circle cx="165" cy="245" r="8" fill="none" stroke="#90a4ae" stroke-width="2"/>
          <!-- 左腿 -->
          <path d="M75 208 Q70 240 75 280 Q80 320 85 360" 
                fill="none" stroke="#90a4ae" stroke-width="2" stroke-linecap="round"/>
          <!-- 左足 -->
          <ellipse cx="85" cy="385" rx="12" ry="8" fill="none" stroke="#90a4ae" stroke-width="2"/>
          <!-- 右腿 -->
          <path d="M125 208 Q130 240 125 280 Q120 320 115 360" 
                fill="none" stroke="#90a4ae" stroke-width="2" stroke-linecap="round"/>
          <!-- 右足 -->
          <ellipse cx="115" cy="385" rx="12" ry="8" fill="none" stroke="#90a4ae" stroke-width="2"/>
          
          <!-- 可点击热点 -->
          <g v-for="part in bodyParts" :key="part.value">
            <circle
              :cx="part.x * 2"
              :cy="part.y * 4"
              r="10"
              :fill="modelValue === part.value ? '#2471e9' : '#e3f2fd'"
              :stroke="modelValue === part.value ? '#1565c0' : '#64b5f6'"
              stroke-width="2"
              class="cursor-pointer transition-colors"
              @click="emit('update:modelValue', part.value)"
            />
            <circle
              v-if="modelValue === part.value"
              :cx="part.x * 2"
              :cy="part.y * 4"
              r="4"
              fill="white"
            />
          </g>
        </svg>
      </div>
      
      <!-- 部位列表 -->
      <ul class="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-3">
        <li v-for="part in bodyParts" :key="part.value">
          <button
            type="button"
            class="flex w-full items-center gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors"
            :class="[
              modelValue === part.value
                ? 'border-medical-600 bg-medical-50 text-medical-950'
                : 'border-gray-200 text-gray-700 hover:border-medical-300',
            ]"
            @click="emit('update:modelValue', part.value)"
          >
            <span
              class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
              :class="
                modelValue === part.value
                  ? 'border-medical-600 bg-medical-600'
                  : 'border-medical-400 bg-medical-50'
              "
            >
              <span v-if="modelValue === part.value" class="text-[8px] text-white">●</span>
            </span>
            <span class="font-medium text-sm">{{ part.label }}</span>
          </button>
        </li>
      </ul>
    </template>

    <!-- 体内不适 -->
    <template v-else-if="type === 'internal'">
      <div
        class="relative mx-auto h-[400px] w-[200px] shrink-0 select-none"
        aria-label="人体内部器官示意图"
      >
        <svg viewBox="0 0 200 400" class="h-full w-full">
          <!-- 外轮廓 -->
          <circle cx="100" cy="40" r="28" fill="none" stroke="#90a4ae" stroke-width="1.5"/>
          <path d="M50 88 L50 200 Q50 210 60 210 L140 210 Q150 210 150 200 L150 88 Q150 78 100 78 Q50 78 50 88" 
                fill="none" stroke="#90a4ae" stroke-width="1.5"/>
          <path d="M75 208 Q70 240 75 280 Q80 320 85 360" fill="none" stroke="#90a4ae" stroke-width="1.5"/>
          <path d="M125 208 Q130 240 125 280 Q120 320 115 360" fill="none" stroke="#90a4ae" stroke-width="1.5"/>
          
          <!-- 器官示意 -->
          <g v-for="organ in internalOrgans" :key="organ.value">
            <ellipse
              :cx="organ.x * 2"
              :cy="organ.y * 4"
              rx="14"
              ry="10"
              :fill="modelValue === organ.value ? organ.color : 'none'"
              :stroke="modelValue === organ.value ? organ.color : '#90a4ae'"
              stroke-width="2"
              class="cursor-pointer transition-colors"
              @click="emit('update:modelValue', organ.value)"
            />
            <text
              :x="organ.x * 2"
              :y="(organ.y * 4) + 24"
              text-anchor="middle"
              fill="#616161"
              font-size="9"
            >{{ organ.label }}</text>
          </g>
        </svg>
      </div>
      
      <!-- 器官列表 -->
      <ul class="grid flex-1 grid-cols-2 gap-2">
        <li v-for="organ in internalOrgans" :key="organ.value">
          <button
            type="button"
            class="flex w-full items-center gap-2 rounded-md border px-3 py-2 text-left text-sm transition-colors"
            :class="[
              modelValue === organ.value
                ? 'border-medical-600 bg-medical-50 text-medical-950'
                : 'border-gray-200 text-gray-700 hover:border-medical-300',
            ]"
            @click="emit('update:modelValue', organ.value)"
          >
            <span
              class="flex h-4 w-4 shrink-0 items-center justify-center rounded-full"
              :style="{ backgroundColor: modelValue === organ.value ? organ.color : '#e3f2fd' }"
            ></span>
            <span class="font-medium text-sm">{{ organ.label }}</span>
          </button>
        </li>
      </ul>
    </template>

    <!-- 精神情绪 -->
    <template v-else-if="type === 'mental'">
      <div class="flex w-full flex-col gap-4">
        <p class="text-sm text-gray-600">请选择您的情绪或心理状态：</p>
        <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <li v-for="opt in mentalOptions" :key="opt.value">
            <button
              type="button"
              class="flex w-full flex-col items-start gap-1 rounded-md border px-4 py-3 text-left transition-colors"
              :class="[
                modelValue === opt.value
                  ? 'border-medical-600 bg-medical-50 text-medical-950'
                  : 'border-gray-200 text-gray-700 hover:border-medical-300',
              ]"
              @click="emit('update:modelValue', opt.value)"
            >
              <span class="font-medium">{{ opt.label }}</span>
              <span class="text-xs text-gray-500">{{ opt.desc }}</span>
            </button>
          </li>
        </ul>
      </div>
    </template>
  </div>
</template>
