<script setup lang="ts">
export interface OptionItem {
  value: string | number
  label: string
  desc?: string
}

const props = defineProps<{
  modelValue: (string | number)[]
  options: OptionItem[]
  invalid?: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', v: (string | number)[]): void
}>()

function toggle(val: string | number) {
  const set = new Set(props.modelValue || [])
  if (set.has(val)) set.delete(val)
  else set.add(val)
  emit('update:modelValue', Array.from(set))
}

function isChecked(val: string | number) {
  return (props.modelValue || []).includes(val)
}
</script>

<template>
  <ul class="grid grid-cols-1 gap-3 sm:grid-cols-2">
    <li v-for="opt in options" :key="opt.value">
      <label
        class="flex cursor-pointer items-start gap-3 rounded-md border bg-white px-4 py-3 text-sm"
        :class="[
          isChecked(opt.value)
            ? 'border-medical-600 bg-medical-50 text-medical-950'
            : 'border-medical-100 text-medical-800 hover:border-medical-300',
          invalid ? 'ring-1 ring-danger/40' : '',
        ]"
      >
        <span
          class="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border"
          :class="
            isChecked(opt.value)
              ? 'border-medical-600 bg-medical-600 text-white'
              : 'border-medical-300 bg-white text-transparent'
          "
          aria-hidden="true"
        >
          <span class="text-[10px] leading-none">✓</span>
        </span>
        <input
          type="checkbox"
          :value="opt.value"
          :checked="isChecked(opt.value)"
          class="sr-only"
          @change="toggle(opt.value)"
        />
        <span class="flex flex-col">
          <span
            class="font-medium"
            :class="isChecked(opt.value) ? 'text-medical-950' : 'text-medical-900'"
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
