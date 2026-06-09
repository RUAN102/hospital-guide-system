import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: { title: '道臻医疗 · 首页' },
  },
  {
    path: '/departments',
    name: 'departments',
    component: () => import('../views/DepartmentsList.vue'),
    meta: { title: '科室列表' },
  },
  {
    path: '/departments/:id',
    name: 'department-detail',
    component: () => import('../views/DepartmentDetail.vue'),
    meta: { title: '科室详情' },
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: () => import('../views/DoctorsList.vue'),
    meta: { title: '医生列表' },
  },
  {
    path: '/doctors/:id',
    name: 'doctor-detail',
    component: () => import('../views/DoctorDetail.vue'),
    meta: { title: '医生详情' },
  },
  {
    path: '/navigation',
    name: 'navigation',
    component: () => import('../views/NavigationView.vue'),
    meta: { title: '院内导航 & 就医公告' },
  },
  {
    path: '/guide',
    redirect: '/guide/step1',
  },
  {
    path: '/guide/step1',
    name: 'guide-step1',
    component: () => import('../views/guide/GuideStep1.vue'),
    meta: { title: '智能导诊 · 第1步' },
  },
  {
    path: '/guide/step2',
    name: 'guide-step2',
    component: () => import('../views/guide/GuideStep2.vue'),
    meta: { title: '智能导诊 · 第2步' },
  },
  {
    path: '/guide/step3',
    name: 'guide-step3',
    component: () => import('../views/guide/GuideStep3.vue'),
    meta: { title: '智能导诊 · 第3步' },
  },
  {
    path: '/guide/step4',
    name: 'guide-step4',
    component: () => import('../views/guide/GuideStep4.vue'),
    meta: { title: '智能导诊 · 第4步' },
  },
  {
    path: '/guide/result',
    name: 'guide-result',
    component: () => import('../views/guide/GuideResult.vue'),
    meta: { title: '智能导诊 · 推荐结果' },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const title = (to.meta?.title as string) || '道臻医疗'
  document.title = title
})

export default router
