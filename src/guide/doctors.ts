export interface DoctorItem {
  id: string
  name: string
  title: string
  department: string
  departmentId: string
  intro: string
  expertise: string[]
  practice: string[]
  available: string
}

export interface DoctorGroup {
  departmentId: string
  departmentName: string
  doctors: DoctorItem[]
}

export const doctorGroups: DoctorGroup[] = [
  {
    departmentId: 'general-surgery',
    departmentName: '普外科',
    doctors: [
      {
        id: 'chen-guoqiang',
        name: '陈国强',
        title: '主任医师',
        department: '普外科',
        departmentId: 'general-surgery',
        intro: '从事普外科临床工作 20 余年，擅长腹部外科各类常规及微创手术。',
        expertise: ['胃肠外科', '肝胆胰外科', '甲状腺外科', '乳腺外科'],
        practice: ['胃癌根治术', '腹腔镜胆囊切除术', '甲状腺结节评估', '乳腺疾病诊治'],
        available: '周一、周三 上午',
      },
      {
        id: 'wang-lihua',
        name: '王丽华',
        title: '副主任医师',
        department: '普外科',
        departmentId: 'general-surgery',
        intro: '专注于疝与腹壁外科、胃肠疾病的临床诊治，经验丰富。',
        expertise: ['疝外科', '胃肠疾病', '腹壁重建'],
        practice: ['腹股沟疝修补', '切口疝修复', '消化道息肉切除'],
        available: '周二、周四 全天',
      },
    ],
  },
  {
    departmentId: 'orthopedics',
    departmentName: '骨科',
    doctors: [
      {
        id: 'zhang-jianwei',
        name: '张建伟',
        title: '主任医师',
        department: '骨科',
        departmentId: 'orthopedics',
        intro: '主攻关节外科与运动医学，曾赴国外研修关节置换技术。',
        expertise: ['膝关节置换', '髋关节置换', '运动损伤', '关节镜手术'],
        practice: ['全膝关节置换', '全髋关节置换', '半月板修复', '韧带重建'],
        available: '周一、周四 上午',
      },
      {
        id: 'li-ming',
        name: '李明',
        title: '副主任医师',
        department: '骨科',
        departmentId: 'orthopedics',
        intro: '擅长脊柱外科常见疾病的诊治，尤其在腰椎间盘突出症方面有深入研究。',
        expertise: ['脊柱外科', '腰椎间盘突出', '颈椎病', '脊柱骨折'],
        practice: ['腰椎间盘切除术', '颈椎前路手术', '脊柱融合术'],
        available: '周二、周五 全天',
      },
    ],
  },
  {
    departmentId: 'respiratory',
    departmentName: '呼吸内科',
    doctors: [
      {
        id: 'zhou-mei',
        name: '周梅',
        title: '主任医师',
        department: '呼吸内科',
        departmentId: 'respiratory',
        intro: '从事呼吸内科临床工作 18 年，对慢性气道疾病及肺部感染有丰富经验。',
        expertise: ['慢性阻塞性肺疾病', '哮喘', '肺部感染', '间质性肺病'],
        practice: ['慢阻肺管理', '哮喘个体化治疗', '肺部感染诊治', '肺功能评估'],
        available: '周一、周三 全天',
      },
      {
        id: 'wu-jun',
        name: '吴军',
        title: '副主任医师',
        department: '呼吸内科',
        departmentId: 'respiratory',
        intro: '专注于睡眠呼吸疾病及烟草依赖的临床与研究工作。',
        expertise: ['睡眠呼吸暂停', '烟草依赖', '戒烟干预'],
        practice: ['睡眠监测', '无创通气治疗', '戒烟咨询'],
        available: '周四 上午',
      },
    ],
  },
  {
    departmentId: 'cardiology',
    departmentName: '心血管内科',
    doctors: [
      {
        id: 'zhang-min',
        name: '张敏',
        title: '主任医师',
        department: '心血管内科',
        departmentId: 'cardiology',
        intro: '长期从事心血管疾病诊治，在冠心病、高血压领域有较高造诣。',
        expertise: ['冠心病', '高血压', '心律失常', '心力衰竭'],
        practice: ['冠状动脉造影', '支架植入', '高血压个体化治疗', '心脏康复'],
        available: '周一、周五 上午',
      },
      {
        id: 'chen-yi',
        name: '陈怡',
        title: '副主任医师',
        department: '心血管内科',
        departmentId: 'cardiology',
        intro: '擅长心律失常的电生理检查与射频消融治疗。',
        expertise: ['心律失常', '心脏电生理', '射频消融'],
        practice: ['心电图分析', '动态心电图', '射频消融手术'],
        available: '周二、周三 全天',
      },
    ],
  },
  {
    departmentId: 'gastroenterology',
    departmentName: '消化内科',
    doctors: [
      {
        id: 'liu-fang',
        name: '刘芳',
        title: '主任医师',
        department: '消化内科',
        departmentId: 'gastroenterology',
        intro: '擅长胃肠疾病的内镜诊断与治疗，经验丰富。',
        expertise: ['慢性胃炎', '消化性溃疡', '炎症性肠病', '内镜治疗'],
        practice: ['胃镜', '结肠镜', '息肉切除', '黏膜下剥离术'],
        available: '周一、周四 全天',
      },
      {
        id: 'huang-zhi',
        name: '黄志',
        title: '副主任医师',
        department: '消化内科',
        departmentId: 'gastroenterology',
        intro: '专注于肝脏疾病及胆胰疾病的诊治。',
        expertise: ['脂肪肝', '肝硬化', '胰腺炎', '胆道疾病'],
        practice: ['肝功能评估', '肝纤维化检测', '胰腺疾病诊治'],
        available: '周二、周五 上午',
      },
    ],
  },
  {
    departmentId: 'neurology',
    departmentName: '神经内科',
    doctors: [
      {
        id: 'zhao-jianhua',
        name: '赵建华',
        title: '主任医师',
        department: '神经内科',
        departmentId: 'neurology',
        intro: '在脑血管病、头痛、眩晕等领域有深入研究。',
        expertise: ['脑血管病', '头痛', '眩晕', '帕金森病'],
        practice: ['卒中急性期治疗', '头痛分型诊治', '眩晕病因鉴别'],
        available: '周一、周三 上午',
      },
      {
        id: 'sun-wei',
        name: '孙伟',
        title: '副主任医师',
        department: '神经内科',
        departmentId: 'neurology',
        intro: '擅长癫痫及神经肌肉疾病的诊治。',
        expertise: ['癫痫', '周围神经病', '肌病'],
        practice: ['癫痫分型', '脑电图解读', '神经肌肉疾病评估'],
        available: '周四、周五 全天',
      },
    ],
  },
  {
    departmentId: 'endocrinology',
    departmentName: '内分泌科',
    doctors: [
      {
        id: 'xu-ling',
        name: '徐玲',
        title: '主任医师',
        department: '内分泌科',
        departmentId: 'endocrinology',
        intro: '长期致力于糖尿病及甲状腺疾病的临床研究与治疗。',
        expertise: ['糖尿病', '甲状腺疾病', '骨质疏松', '代谢综合征'],
        practice: ['糖尿病个体化治疗', '甲状腺功能评估', '骨密度检测'],
        available: '周一、周二 全天',
      },
      {
        id: 'ma-qiang',
        name: '马强',
        title: '副主任医师',
        department: '内分泌科',
        departmentId: 'endocrinology',
        intro: '擅长垂体及肾上腺疾病的诊治。',
        expertise: ['垂体疾病', '肾上腺疾病', '生长发育异常'],
        practice: ['激素水平检测', '垂体 MRI 解读', '生长激素评估'],
        available: '周三、周五 上午',
      },
    ],
  },
  {
    departmentId: 'dermatology',
    departmentName: '皮肤科',
    doctors: [
      {
        id: 'lin-na',
        name: '林娜',
        title: '主任医师',
        department: '皮肤科',
        departmentId: 'dermatology',
        intro: '在过敏性皮肤病、痤疮及银屑病诊治方面有丰富经验。',
        expertise: ['过敏性皮肤病', '痤疮', '银屑病', '皮肤肿瘤'],
        practice: ['过敏原检测', '痤疮分级治疗', '皮肤镜检查'],
        available: '周一、周四 全天',
      },
      {
        id: 'zheng-qun',
        name: '郑群',
        title: '副主任医师',
        department: '皮肤科',
        departmentId: 'dermatology',
        intro: '专注于美容皮肤科及激光治疗。',
        expertise: ['激光美容', '色素性疾病', '瘢痕修复'],
        practice: ['激光祛斑', '光子嫩肤', '瘢痕治疗'],
        available: '周二、周五 上午',
      },
    ],
  },
  {
    departmentId: 'psychiatry',
    departmentName: '精神心理科',
    doctors: [
      {
        id: 'wang-xiaoming',
        name: '王小明',
        title: '主任医师',
        department: '精神心理科',
        departmentId: 'psychiatry',
        intro: '从事精神医学临床工作 20 余年，擅长各类精神障碍的诊治。',
        expertise: ['抑郁症', '焦虑症', '精神分裂症', '睡眠障碍'],
        practice: ['认知行为治疗', '药物治疗', '睡眠评估'],
        available: '周一、周三 全天',
      },
      {
        id: 'li-xin',
        name: '李欣',
        title: '副主任医师',
        department: '精神心理科',
        departmentId: 'psychiatry',
        intro: '专注于青少年心理问题及家庭治疗。',
        expertise: ['青少年心理', '家庭治疗', '情绪调节'],
        practice: ['青少年心理咨询', '家庭治疗', '正念训练'],
        available: '周二、周四 全天',
      },
    ],
  },
  {
    departmentId: 'general-practice',
    departmentName: '全科医学科',
    doctors: [
      {
        id: 'chen-hong',
        name: '陈红',
        title: '主任医师',
        department: '全科医学科',
        departmentId: 'general-practice',
        intro: '全科医学带头人，擅长多病共存患者的综合管理。',
        expertise: ['慢病管理', '健康评估', '多病共存', '预防医学'],
        practice: ['慢病综合管理', '健康体检解读', '预防接种指导'],
        available: '周一至周五 全天',
      },
      {
        id: 'yuan-yang',
        name: '袁洋',
        title: '副主任医师',
        department: '全科医学科',
        departmentId: 'general-practice',
        intro: '擅长老年人健康管理及康复指导。',
        expertise: ['老年医学', '康复医学', '用药管理'],
        practice: ['老年综合评估', '用药调整', '康复训练'],
        available: '周一、周三、周五 全天',
      },
    ],
  },
]

export function findDoctor(id: string): DoctorItem | null {
  for (const group of doctorGroups) {
    const doc = group.doctors.find((d) => d.id === id)
    if (doc) return doc
  }
  return null
}

export function getDoctorsByDepartment(deptId: string): DoctorItem[] {
  const group = doctorGroups.find((g) => g.departmentId === deptId)
  return group?.doctors || []
}
