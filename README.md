# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).
# 医院智能导诊系统（Web 端）

> 一个面向普通患者的智能导诊系统，帮助用户根据症状快速匹配科室，导诊模式通俗、随地随地可使用，解决人工导诊需排队、咨询场景不灵活的问题。
**项目在线演示：https://hospital-guide-3232356.netlify.app/**

## 项目简介
本项目是一款基于 Vue3 + Vite + TypeScript + TailwindCSS 开发的 Web 应用，模拟线下医院分诊流程，贴合普通人就医认知路径，实现了从症状选择到科室推荐的全流程导诊功能，适配 PC/移动端响应式展示。

## 核心功能
多维度导诊：区分体表不适、体内不适、精神/情绪不适三大类
分级症状选择：从大类→部位→基础症状→细分症状，层层递进
人体示意图：采用标准解剖学姿势，部位标点清晰准确
科室/医生查询：内置完整科室列表与示例医生信息
院内导航与公告：提供楼层指引与就医须知
边界场景处理：支持自定义症状、空选拦截、无匹配兜底提示

##  技术栈
前端框架：Vue 3 + TypeScript
构建工具：Vite
样式方案：TailwindCSS
版本控制：Git + GitHub
线上部署：Netlify

##  本地运行
```bash
# 1. 安装依赖
npm install

# 2. 启动开发服务器
npm run dev

# 3. 访问项目
打开浏览器访问 http://localhost:5173
