<script setup lang="ts">
import { ref } from 'vue'

const showModal = ref(false)

function openHelp() {
  showModal.value = true
}

function closeHelp() {
  showModal.value = false
}
</script>

<template>
  <button
    type="button"
    class="hidden rounded-md border border-medical-200 bg-white px-3 py-2 text-sm font-medium text-medical-800 hover:border-medical-400 sm:inline-block"
    @click="openHelp"
  >
    帮助
  </button>

  <Teleport to="body">
    <div
      v-if="showModal"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      @click.self="closeHelp"
    >
      <div
        class="w-full max-w-md rounded-xl border border-line bg-white p-5 shadow-lg"
      >
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-medical-950">使用指引</h3>
          <button
            type="button"
            class="rounded-md border border-medical-200 bg-white px-2 py-1 text-sm text-medical-700 hover:bg-medical-50"
            @click="closeHelp"
          >
            关闭
          </button>
        </div>

        <div class="mt-4 space-y-4 text-sm text-medical-800">
          <div class="flex gap-3">
            <span
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-medical-600 text-xs font-semibold text-white"
            >
              1
            </span>
            <div>
              <div class="font-medium">开始导诊</div>
              <div class="text-muted">根据您的症状，智能推荐就诊科室</div>
            </div>
          </div>
          <div class="flex gap-3">
            <span
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-medical-600 text-xs font-semibold text-white"
            >
              2
            </span>
            <div>
              <div class="font-medium">科室查询</div>
              <div class="text-muted">查看医院所有科室的详细信息</div>
            </div>
          </div>
          <div class="flex gap-3">
            <span
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-medical-600 text-xs font-semibold text-white"
            >
              3
            </span>
            <div>
              <div class="font-medium">医生查询</div>
              <div class="text-muted">浏览医生信息，了解专长与门诊时间</div>
            </div>
          </div>
          <div class="flex gap-3">
            <span
              class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-medical-600 text-xs font-semibold text-white"
            >
              4
            </span>
            <div>
              <div class="font-medium">院内导航</div>
              <div class="text-muted">查看楼层分布和就医须知</div>
            </div>
          </div>
        </div>

        <div class="mt-6 rounded-md border border-medical-100 bg-medical-50/60 p-3">
          <div class="text-xs text-medical-700">
            <div class="font-medium">温馨提示</div>
            <div class="mt-1 text-muted">导诊结果仅供参考，具体诊疗请咨询专业医生。</div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
