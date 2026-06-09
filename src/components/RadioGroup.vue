<script setup lang="ts">
import { computed } from 'vue'

export interface OptionItem {
  value: string | number
  label: string
  desc?: string
}

const props = defineProps<{
  modelValue: string | number | null
  options: OptionItem[]
  name?: string
  invalid?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: string | number): void
}>()

const groupName = computed(() => props.name || 'radio-group')
</script>

<template>
  <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <li v-for="opt in options" :key="opt.value">
      <label
        class="flex cursor-pointer items-start gap-3 rounded-md border bg-white px-4 py-3 text-sm"
        :class="[
          modelValue === opt.value
            ? 'border-medical-600 bg-medical-50 text-medical-950'
            : 'border-medical-100 text-medical-800 hover:border-medical-300',
          invalid ? 'ring-1 ring-danger/40' : '',
        ]"
      >
        <span
          class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border"
          :class="
            modelValue === opt.value
              ? 'border-medical-600 bg-white'
              : 'border-medical-300 bg-white'
          "
          aria-hidden="true"
        >
          <span
            v-if="modelValue === opt.value"
            class="h-2 w-2 rounded-full bg-medical-600"
          ></span>
        </span>
        <input
          type="radio"
          :name="groupName"
          :value="opt.value"
          :checked="modelValue === opt.value"
          class="sr-only"
          @change="emit('update:modelValue', opt.value)"
        />
        <span class="flex flex-col">
          <span
            class="font-medium"
            :class="modelValue === opt.value ? 'text-medical-950' : 'text-medical-900'"
          >
            {{ opt.label }}
          </span>
          <span v-if="opt.desc" class="mt-0.5 text-xs text-medical-600">
            {{ opt.desc }}
          </span>
        </span>
      </label>
    </li>
  </ul>
</template>
