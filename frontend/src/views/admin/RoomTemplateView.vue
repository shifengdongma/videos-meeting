<template>
  <div class="space-y-8">
    <section class="flex flex-col gap-4 rounded-xl bg-white/70 p-6 shadow-sm ring-1 ring-gray-100 backdrop-blur-sm md:flex-row md:items-start md:justify-between">
      <div class="max-w-3xl">
        <div class="text-xs font-semibold uppercase tracking-[0.24em] text-[#2E3A59]/70">Room templates</div>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-[#2E3A59]">会议室模板</h1>
        <p class="mt-3 text-sm leading-7 text-slate-500">集中管理不同会议场景的标准配置，帮助运营、培训和管理层快速复用成熟的会议空间方案。</p>
      </div>

      <button
        type="button"
        class="inline-flex items-center justify-center rounded-md bg-[#2E3A59] px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-[#24324a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2E3A59]/30"
      >
        + 新建模板
      </button>
    </section>

    <section class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="template in templates"
        :key="template.name"
        class="bg-white rounded-xl shadow-sm hover:shadow-md border border-gray-100 p-5 transition-shadow"
      >
        <div class="flex items-start justify-between gap-4">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2E3A59]/10 text-[#2E3A59]">
            <component :is="template.icon" class="h-6 w-6" aria-hidden="true" />
          </div>
          <span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            {{ template.capacity }}
          </span>
        </div>

        <div class="mt-5">
          <h2 class="text-lg font-semibold text-slate-900">{{ template.name }}</h2>
          <p class="mt-2 text-sm leading-6 text-slate-500">{{ template.description }}</p>
        </div>

        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tag in template.tags"
            :key="tag"
            class="rounded-full bg-blue-50 px-2 py-1 text-xs text-blue-600"
          >
            {{ tag }}
          </span>
        </div>

        <div class="mt-6 flex items-center justify-end gap-4 text-sm font-medium">
          <button type="button" class="text-slate-500 transition-colors duration-200 hover:text-slate-900">编辑</button>
          <button type="button" class="text-[#2E3A59] transition-colors duration-200 hover:text-[#24324a]">使用此模板</button>
        </div>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  BriefcaseIcon,
  BuildingOffice2Icon,
  PresentationChartBarIcon,
  UserGroupIcon
} from '@heroicons/vue/24/outline'

const templates = [
  {
    name: '标准内部会议',
    description: '适用于日常周会、项目同步和跨部门评审，预置发言顺序与会议纪要位。',
    tags: ['屏幕共享', '纪要模板'],
    capacity: '8-12 人',
    icon: UserGroupIcon
  },
  {
    name: '大型企业培训',
    description: '适合线上培训、制度宣贯和新人入职说明，内置讲师席与互动问答流程。',
    tags: ['直播互动', '签到统计'],
    capacity: '50+ 人',
    icon: PresentationChartBarIcon
  },
  {
    name: '外部面试',
    description: '面向候选人远程面试场景，包含候场提醒、结构化评价和双人协同面试。',
    tags: ['候场区', '评价表'],
    capacity: '3-5 人',
    icon: BriefcaseIcon
  },
  {
    name: '高管董事会',
    description: '用于高层决策和董事会议程管理，突出议题控制、表决留痕和保密提醒。',
    tags: ['议题看板', '表决流程'],
    capacity: '10-20 人',
    icon: BuildingOffice2Icon
  }
]
</script>

<style scoped>
</style>
