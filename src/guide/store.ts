import { reactive, readonly } from 'vue'

export type GuideCategory = 'body' | 'internal' | 'mental' | null

export interface SymptomOption {
  value: string
  label: string
  desc?: string
}

export interface PartOption {
  value: string
  label: string
  group?: string
  /** 第三步基础症状 */
  baseSymptoms: SymptomOption[]
  /** 第四步细分症状 */
  detailedSymptoms: SymptomOption[]
  /** 推荐科室 */
  departments: { primary: string; alternatives: string[] }
}

interface GuideState {
  /** 第一步：不适类型 */
  category: GuideCategory
  /** 第二步：体表/体内部位 */
  partValue: string | null
  /** 第三步：基础症状 value[] */
  baseSymptoms: string[]
  /** 第三步：自定义文本描述 */
  customDesc: string
  /** 第四步：细分症状 value[] */
  detailedSymptoms: string[]
}

const initial = (): GuideState => ({
  category: null,
  partValue: null,
  baseSymptoms: [],
  customDesc: '',
  detailedSymptoms: [],
})

const state = reactive<GuideState>(initial())

export function resetGuide() {
  Object.assign(state, initial())
}

/** 体表选项（部位） */
export const bodyParts: PartOption[] = [
  {
    value: 'head',
    label: '头部',
    baseSymptoms: [
      { value: 'headache', label: '头痛' },
      { value: 'dizzy', label: '头晕 / 眩晕' },
      { value: 'fever', label: '发热' },
    ],
    detailedSymptoms: [
      { value: 'migraine', label: '偏头痛', desc: '单侧搏动性头痛，可伴恶心畏光' },
      { value: 'tension', label: '紧张性头痛', desc: '全头压迫感、紧箍感' },
      { value: 'vertigo', label: '眩晕', desc: '视物旋转、平衡障碍' },
    ],
    departments: { primary: '神经内科', alternatives: ['全科', '耳鼻喉科'] },
  },
  {
    value: 'neck',
    label: '颈部',
    baseSymptoms: [
      { value: 'stiff', label: '颈部僵硬' },
      { value: 'pain', label: '颈部疼痛' },
      { value: 'lump', label: '颈部肿块' },
    ],
    detailedSymptoms: [
      { value: 'cervical', label: '颈肩僵硬', desc: '长期伏案或姿势不良后加重' },
      { value: 'thyroid', label: '颈前区肿大', desc: '甲状腺区域隆起或可触及结节' },
    ],
    departments: { primary: '骨科 / 脊柱外科', alternatives: ['内分泌科', '全科'] },
  },
  {
    value: 'chest',
    label: '胸部',
    baseSymptoms: [
      { value: 'pain', label: '胸痛' },
      { value: 'cough', label: '咳嗽' },
      { value: 'sputum', label: '咳痰' },
      { value: 'dyspnea', label: '胸闷 / 气短' },
    ],
    detailedSymptoms: [
      { value: 'angina', label: '活动后胸痛', desc: '胸骨后压榨样，休息可缓解' },
      { value: 'pleuritic', label: '呼吸相关胸痛', desc: '深呼吸或咳嗽时加重' },
      { value: 'wheeze', label: '喘息 / 哮鸣', desc: '呼气时可闻及高调哨鸣音' },
    ],
    departments: { primary: '心血管内科', alternatives: ['呼吸内科', '全科'] },
  },
  {
    value: 'abdomen',
    label: '腹部',
    baseSymptoms: [
      { value: 'pain', label: '腹痛' },
      { value: 'nausea', label: '恶心 / 呕吐' },
      { value: 'diarrhea', label: '腹泻' },
      { value: 'constipation', label: '便秘' },
    ],
    detailedSymptoms: [
      { value: 'epigastric', label: '上腹痛', desc: '进食相关，伴反酸、嗳气' },
      { value: 'rlq', label: '右下腹痛', desc: '需警惕阑尾相关问题' },
      { value: 'diarrhea_ac', label: '急性水样便', desc: '伴或不伴发热、里急后重' },
    ],
    departments: { primary: '消化内科', alternatives: ['普通外科', '全科'] },
  },
  {
    value: 'back',
    label: '腰背部',
    baseSymptoms: [
      { value: 'backache', label: '腰痛' },
      { value: 'stiffness', label: '腰部僵硬' },
    ],
    detailedSymptoms: [
      { value: 'lumbar', label: '下腰痛', desc: '久坐或弯腰后明显' },
      { value: 'nerve', label: '向下肢放射痛', desc: '沿大腿后侧/外侧放射' },
    ],
    departments: { primary: '骨科 / 脊柱外科', alternatives: ['康复医学科', '全科'] },
  },
  {
    value: 'limbs',
    label: '四肢',
    baseSymptoms: [
      { value: 'pain', label: '关节痛' },
      { value: 'swelling', label: '肿胀' },
      { value: 'skin', label: '皮肤异常' },
    ],
    detailedSymptoms: [
      { value: 'knee', label: '膝关节痛', desc: '上下楼或蹲起时加重' },
      { value: 'rash', label: '皮疹 / 红斑', desc: '伴或不伴瘙痒、脱屑' },
    ],
    departments: { primary: '骨科', alternatives: ['皮肤科', '风湿免疫科'] },
  },
]

/** 体内选项：器官 / 骨骼 / 内分泌 三个标签组 */
export const internalGroups: { label: string; items: PartOption[] }[] = [
  {
    label: '器官',
    items: [
      {
        value: 'heart',
        label: '心脏',
        baseSymptoms: [
          { value: 'chest_pain', label: '胸痛 / 胸闷' },
          { value: 'palpitation', label: '心悸' },
          { value: 'edema', label: '下肢水肿' },
        ],
        detailedSymptoms: [
          { value: 'exertion', label: '活动后气短', desc: '体力活动受限，需休息缓解' },
          { value: 'nocturia', label: '夜间憋醒', desc: '睡眠中突发呼吸困难' },
        ],
        departments: { primary: '心血管内科', alternatives: ['全科'] },
      },
      {
        value: 'lung',
        label: '肺 / 气管',
        baseSymptoms: [
          { value: 'cough', label: '慢性咳嗽' },
          { value: 'sputum', label: '咳痰' },
          { value: 'hemoptysis', label: '痰中带血' },
        ],
        detailedSymptoms: [
          { value: 'chronic', label: '慢性咳嗽 > 8 周', desc: '需评估气道及肺部情况' },
          { value: 'asthma', label: '反复发作喘息', desc: '夜间或接触过敏原时加重' },
        ],
        departments: { primary: '呼吸内科', alternatives: ['全科', '感染科'] },
      },
      {
        value: 'stomach',
        label: '胃 / 肠道',
        baseSymptoms: [
          { value: 'epigastric', label: '上腹痛 / 反酸' },
          { value: 'bowel', label: '排便异常' },
        ],
        detailedSymptoms: [
          { value: 'gerd', label: '餐后反酸 / 烧心', desc: '胸骨后烧灼感，平卧加重' },
          { value: 'ibs', label: '腹痛与排便相关', desc: '排便后腹痛缓解' },
        ],
        departments: { primary: '消化内科', alternatives: ['全科'] },
      },
      {
        value: 'kidney',
        label: '肾脏 / 尿路',
        baseSymptoms: [
          { value: 'flank', label: '腰侧 / 腰背痛' },
          { value: 'dysuria', label: '排尿不适' },
        ],
        detailedSymptoms: [
          { value: 'colic', label: '突发剧烈腰痛', desc: '阵发性，伴或不伴血尿' },
          { value: 'uti', label: '尿频 / 尿痛', desc: '需评估尿路感染可能' },
        ],
        departments: { primary: '泌尿外科', alternatives: ['肾内科', '全科'] },
      },
    ],
  },
  {
    label: '骨骼',
    items: [
      {
        value: 'spine',
        label: '脊柱',
        baseSymptoms: [
          { value: 'neck', label: '颈痛' },
          { value: 'back', label: '腰痛' },
        ],
        detailedSymptoms: [
          { value: 'disc', label: '伴肢体放射痛', desc: '需警惕椎间盘相关问题' },
          { value: 'morning_stiff', label: '晨起僵硬', desc: '活动后改善' },
        ],
        departments: { primary: '骨科 / 脊柱外科', alternatives: ['风湿免疫科', '康复医学科'] },
      },
      {
        value: 'joints',
        label: '关节',
        baseSymptoms: [
          { value: 'knee', label: '膝关节痛' },
          { value: 'shoulder', label: '肩痛' },
          { value: 'hands', label: '手关节痛' },
        ],
        detailedSymptoms: [
          { value: 'oa', label: '中老年关节痛', desc: '活动后加重，休息缓解' },
          { value: 'symmetric', label: '对称性小关节痛', desc: '伴晨僵 > 30 分钟' },
        ],
        departments: { primary: '骨科', alternatives: ['风湿免疫科', '康复医学科'] },
      },
    ],
  },
  {
    label: '内分泌',
    items: [
      {
        value: 'thyroid',
        label: '甲状腺',
        baseSymptoms: [
          { value: 'lump', label: '颈前肿块' },
          { value: 'palpitation', label: '心悸 / 怕热' },
          { value: 'fatigue', label: '乏力 / 怕冷' },
        ],
        detailedSymptoms: [
          { value: 'hyper', label: '体重下降 + 心悸', desc: '伴多汗、易怒、失眠' },
          { value: 'hypo', label: '体重增加 + 怕冷', desc: '伴皮肤干燥、记忆下降' },
        ],
        departments: { primary: '内分泌科', alternatives: ['全科', '耳鼻喉头颈外科'] },
      },
      {
        value: 'sugar',
        label: '血糖代谢',
        baseSymptoms: [
          { value: 'polyuria', label: '多饮多尿' },
          { value: 'fatigue', label: '不明原因乏力' },
          { value: 'weight', label: '近期体重明显变化' },
        ],
        detailedSymptoms: [
          { value: 'new_dm', label: '三多一少', desc: '多饮多尿多食 + 体重下降' },
          { value: 'hypo', label: '反复心慌手抖', desc: '饥饿时明显，进食后缓解' },
        ],
        departments: { primary: '内分泌科', alternatives: ['全科'] },
      },
    ],
  },
]

/** 精神情绪：跳过第二步，直接走基础症状 & 细分症状 */
export const mental: PartOption = {
  value: 'mental',
  label: '精神情绪不适',
  baseSymptoms: [
    { value: 'insomnia', label: '失眠 / 睡眠差' },
    { value: 'anxious', label: '焦虑 / 担心' },
    { value: 'depressed', label: '情绪低落 / 兴趣减退' },
    { value: 'fatigue', label: '易疲劳' },
  ],
  detailedSymptoms: [
    { value: 'panic', label: '突发紧张 / 濒死感', desc: '数分钟达峰，伴心悸、胸闷、手脚发麻' },
    { value: 'anxiety', label: '持续担忧', desc: '对多种事件出现难以控制的担心' },
    { value: 'depression', label: '持续情绪低落', desc: '持续 2 周以上，影响生活与工作' },
    { value: 'somatic', label: '躯体化不适', desc: '多处游走性不适但检查未见异常' },
  ],
  departments: { primary: '精神心理科', alternatives: ['全科', '神经内科'] },
}

export function findPart(cat: GuideCategory, partValue: string | null): PartOption | null {
  if (!cat || !partValue) return null
  if (cat === 'body') return bodyParts.find((p) => p.value === partValue) || null
  if (cat === 'internal') {
    for (const g of internalGroups) {
      const p = g.items.find((i) => i.value === partValue)
      if (p) return p
    }
    return null
  }
  if (cat === 'mental') return mental
  return null
}

export function useGuideStore() {
  return {
    state: readonly(state) as GuideState,
    setCategory(v: GuideCategory) {
      state.category = v
      state.partValue = null
      state.baseSymptoms = []
      state.detailedSymptoms = []
      state.customDesc = ''
    },
    setPartValue(v: string) {
      state.partValue = v
      state.baseSymptoms = []
      state.detailedSymptoms = []
    },
    setBaseSymptoms(list: string[]) {
      state.baseSymptoms = list
    },
    setCustomDesc(v: string) {
      state.customDesc = v
    },
    setDetailedSymptoms(list: string[]) {
      state.detailedSymptoms = list
    },
    reset: resetGuide,
  }
}
