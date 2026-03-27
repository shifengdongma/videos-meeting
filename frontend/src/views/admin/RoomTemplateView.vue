<template>
  <div class="space-y-8">
    <section class="rounded-xl bg-white/70 p-6 shadow-sm ring-1 ring-gray-100 backdrop-blur-sm">
      <div class="max-w-3xl">
        <div class="text-xs font-semibold uppercase tracking-[0.24em] text-[#2E3A59]/70">Room templates</div>
        <h1 class="mt-3 text-3xl font-bold tracking-tight text-[#2E3A59]">会议室模板</h1>
        <p class="mt-3 text-sm leading-7 text-slate-500">预留不同会议模板与场景配置入口，便于后续扩展专项会议室能力。</p>
      </div>
    </section>

    <section class="grid grid-cols-4 gap-6">
      <article class="rounded-xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-shadow hover:shadow-md">
        <div class="text-sm font-medium text-slate-500">模板能力</div>
        <div class="mt-4 text-4xl font-bold text-[#2E3A59]">规划中</div>
        <p class="mt-3 text-sm leading-6 text-slate-500">当前阶段以管理入口与展示框架为主</p>
      </article>
      <article class="rounded-xl border border-gray-100 bg-white/80 p-6 shadow-sm backdrop-blur-md transition-shadow hover:shadow-md">
        <div class="text-sm font-medium text-slate-500">扩展方向</div>
        <div class="mt-4 text-4xl font-bold text-[#1E9E6F]">多场景</div>
        <p class="mt-3 text-sm leading-6 text-slate-500">可覆盖培训、直播、表决等业务类型</p>
      </article>
    </section>

    <section class="overflow-hidden rounded-xl bg-white shadow-sm">
      <EmptyState description="后续可扩展为特殊会议室模板分配能力。" />
    </section>
  </div>
</template>

<script setup lang="ts">
import EmptyState from '../../components/ui/EmptyState.vue'
</script>

<style scoped>
</style>
