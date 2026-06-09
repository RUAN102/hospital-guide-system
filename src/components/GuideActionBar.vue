<script setup lang="ts">
import { useRouter } from 'vue-router'
import BtnPrev from './BtnPrev.vue'
import BtnNext from './BtnNext.vue'
import BtnHome from './BtnHome.vue'

const props = defineProps<{
  prevTo?: string
  nextTo?: string
  canNext?: boolean
  showNext?: boolean
  onNext?: () => boolean | void
}>()

const router = useRouter()

function clickPrev() {
  if (props.prevTo) router.push(props.prevTo)
}
function clickNext() {
  const ok = props.onNext ? props.onNext() : true
  if (ok !== false && props.nextTo) {
    router.push(props.nextTo)
  }
}
</script>

<template>
  <section
    class="sticky bottom-0 mt-8 border-t border-line bg-surface/90 py-4"
  >
    <div
      class="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div class="flex flex-col items-stretch gap-3 sm:flex-row">
        <BtnHome />
        <BtnPrev @click="clickPrev" />
      </div>
      <BtnNext @click="clickNext" />
    </div>
  </section>
</template>
