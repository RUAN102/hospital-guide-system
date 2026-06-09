<script setup lang="ts">
import PageShell from '../components/PageShell.vue'
import BtnHome from '../components/BtnHome.vue'

const navs = [
  { place: '门诊大厅', detail: '主入口直行，导诊台位于中央。', floor: '门诊楼 1F' },
  { place: '挂号 / 收费处', detail: '门诊楼 1 层东侧，支持自助机与人工窗口。', floor: '门诊楼 1F' },
  { place: '检验科', detail: '空腹采血请在 10:00 前到达，报告可自助打印。', floor: '门诊楼 1F' },
  { place: '影像科 (CT/MRI/X 线)', detail: '检查需提前预约，按预约时间前往。', floor: '医技楼 B1' },
  { place: '药房', detail: '按叫号取药，支持处方扫码查询。', floor: '门诊楼 1F' },
  { place: '住院部', detail: '探视时间 16:00-20:00，一人一证进入。', floor: '住院楼 2-8F' },
]

const notices = [
  { date: '2026-06-01', title: '关于调整门诊预约时段的通知', body: '为优化就医体验，自 6 月 15 日起门诊实行分时段预约，每 30 分钟为一时段。请按预约时间准时到达，避免长时间等候。' },
  { date: '2026-05-22', title: '端午节门诊安排', body: '6 月 10 日（周三）上午正常开诊，下午及夜间急诊照常。专家门诊停诊一天，节后恢复正常。' },
  { date: '2026-05-10', title: '新上线在线导诊功能', body: '可通过首页「开始导诊」进入症状引导流程，帮助您快速定位科室并预约挂号。' },
]

const tips = [
  { title: '预约就诊', content: '建议通过官方渠道提前预约，可减少现场排队时间。' },
  { title: '携带证件', content: '请携带本人有效身份证件及就诊卡，儿童需携带户口本。' },
  { title: '空腹检查', content: '血液检查、胃肠镜等项目需空腹，请提前做好准备。' },
  { title: '复诊患者', content: '复诊时请携带既往病历及检查报告，便于医生参考。' },
  { title: '费用结算', content: '支持微信、支付宝、银行卡及医保结算。' },
]
</script>

<template>
  <PageShell title="院内导航 & 就医公告" subtitle="院区位置指引与就医须知。">
    <!-- 上半部分：院内导航 -->
    <section class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6">
      <h2 class="text-lg font-semibold text-medical-950">院内导航</h2>
      <p class="mt-1 text-xs text-muted">门诊楼楼层分布示意</p>

      <!-- 静态简易楼层图 -->
      <div class="mt-4 rounded-lg border border-medical-100 bg-medical-50/50 p-4">
        <div class="grid grid-cols-1 gap-2">
          <div
            class="flex items-center gap-3 rounded-md border border-medical-200 bg-white px-3 py-2"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded bg-medical-600 text-xs font-semibold text-white"
            >
              B1
            </span>
            <div class="text-sm text-medical-800">医技楼：影像科（CT/MRI/X线）、放疗科</div>
          </div>
          <div
            class="flex items-center gap-3 rounded-md border border-medical-200 bg-white px-3 py-2"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded bg-medical-600 text-xs font-semibold text-white"
            >
              1F
            </span>
            <div class="text-sm text-medical-800">门诊大厅、挂号收费、检验科、药房、急诊科</div>
          </div>
          <div
            class="flex items-center gap-3 rounded-md border border-medical-200 bg-white px-3 py-2"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded bg-medical-600 text-xs font-semibold text-white"
            >
              2F
            </span>
            <div class="text-sm text-medical-800">内科（呼吸、消化、心血管、神经）</div>
          </div>
          <div
            class="flex items-center gap-3 rounded-md border border-medical-200 bg-white px-3 py-2"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded bg-medical-600 text-xs font-semibold text-white"
            >
              3F
            </span>
            <div class="text-sm text-medical-800">外科（普外、骨科、泌尿外科）、妇产科</div>
          </div>
          <div
            class="flex items-center gap-3 rounded-md border border-medical-200 bg-white px-3 py-2"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded bg-medical-600 text-xs font-semibold text-white"
            >
              4F
            </span>
            <div class="text-sm text-medical-800">眼科、耳鼻喉科、口腔科、皮肤科</div>
          </div>
          <div
            class="flex items-center gap-3 rounded-md border border-medical-200 bg-white px-3 py-2"
          >
            <span
              class="flex h-8 w-8 items-center justify-center rounded bg-medical-600 text-xs font-semibold text-white"
            >
              5F
            </span>
            <div class="text-sm text-medical-800">精神心理科、康复医学科、疼痛科</div>
          </div>
        </div>
        <div class="mt-3 text-xs text-center text-muted">
          住院楼位于门诊楼东侧，共 8 层
        </div>
      </div>

      <!-- 文字指引 -->
      <h3 class="mt-6 text-base font-semibold text-medical-950">主要地点指引</h3>
      <ul class="mt-3 space-y-2">
        <li
          v-for="n in navs"
          :key="n.place"
          class="flex items-start gap-3 rounded-md border border-medical-100 bg-medical-50/60 p-3"
        >
          <span
            class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-medical-600 text-xs font-semibold text-white"
          >
            ⇲
          </span>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-sm font-medium text-medical-950">{{ n.place }}</span>
              <span class="text-xs text-medical-600">{{ n.floor }}</span>
            </div>
            <div class="mt-1 text-xs text-muted">{{ n.detail }}</div>
          </div>
        </li>
      </ul>
    </section>

    <!-- 下半部分：就医须知 + 医院公告 -->
    <section
      class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2"
    >
      <div class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6">
        <h2 class="text-base font-semibold text-medical-950">就医须知</h2>
        <ul class="mt-4 space-y-3">
          <li
            v-for="t in tips"
            :key="t.title"
            class="rounded-md border border-medical-100 bg-medical-50/60 p-3"
          >
            <div class="text-sm font-medium text-medical-950">{{ t.title }}</div>
            <div class="mt-1 text-xs text-muted">{{ t.content }}</div>
          </li>
        </ul>
      </div>

      <div class="rounded-xl border border-line bg-white p-5 shadow-card sm:p-6">
        <h2 class="text-base font-semibold text-medical-950">医院公告</h2>
        <ul class="mt-4 space-y-3">
          <li
            v-for="n in notices"
            :key="n.title"
            class="rounded-md border border-medical-100 bg-white p-4"
          >
            <div class="flex items-center justify-between gap-2">
              <div class="text-sm font-medium text-medical-950">{{ n.title }}</div>
              <span class="text-xs text-muted">{{ n.date }}</span>
            </div>
            <p class="mt-2 text-sm leading-relaxed text-muted">{{ n.body }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- 返回主页按钮 -->
    <section class="mt-8">
      <BtnHome />
    </section>
  </PageShell>
</template>
