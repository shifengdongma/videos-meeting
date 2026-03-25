<template>
  <div class="vote-panel">
    <div class="panel-head">
      <div>
        <div class="panel-eyebrow">Meeting vote</div>
        <h3>会议投票</h3>
      </div>
      <div class="panel-status" :class="{ active: !!activeVote }">
        {{ activeVote ? '进行中' : '待开始' }}
      </div>
    </div>

    <div v-if="activeVote" class="vote-body">
      <div class="topic-card">
        <div class="topic-label">当前议题</div>
        <p class="topic">{{ activeVote.topic }}</p>
      </div>

      <div class="option-list">
        <el-button
          v-for="option in activeVote.options"
          :key="option.id"
          class="vote-option"
          :disabled="submitted"
          @click="emit('submit', option.id)"
        >
          {{ option.content }}
        </el-button>
      </div>

      <div v-if="submitted" class="submitted-tip">你已完成当前表决，等待实时结果更新。</div>
    </div>

    <div v-else class="empty-wrap">
      <el-empty description="当前没有进行中的表决" />
    </div>

    <div v-if="results.length" class="results-card">
      <div class="results-title">实时结果</div>
      <div v-for="item in results" :key="item.id" class="result-item">
        <div class="result-line">
          <span>{{ item.content }}</span>
          <span>{{ item.count }} 票 ({{ Math.round(item.ratio * 100) }}%)</span>
        </div>
        <el-progress :percentage="Math.round(item.ratio * 100)" :stroke-width="10" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface VoteResultItem {
  id: number
  content: string
  count: number
  ratio: number
}

defineProps<{
  activeVote: { id: number; topic: string; options: Array<{ id: number; content: string }> } | null
  results: VoteResultItem[]
  submitted: boolean
}>()

const emit = defineEmits<{
  submit: [optionId: number]
}>()
</script>

<style scoped>
.vote-panel {
  border-radius: 24px;
  padding: 22px;
  background: rgba(255, 255, 255, 0.92);
  border: 1px solid rgba(148, 163, 184, 0.18);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}
.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}
.panel-eyebrow {
  color: #6366f1;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.panel-head h3 {
  margin: 10px 0 0;
  font-size: 24px;
  color: #0f172a;
}
.panel-status {
  padding: 8px 12px;
  border-radius: 999px;
  background: #e2e8f0;
  color: #475569;
  font-size: 12px;
  font-weight: 700;
}
.panel-status.active {
  background: rgba(99, 102, 241, 0.12);
  color: #4f46e5;
}
.vote-body {
  margin-top: 20px;
}
.topic-card {
  padding: 16px;
  border-radius: 18px;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.14);
}
.topic-label {
  color: #64748b;
  font-size: 12px;
}
.topic {
  margin: 10px 0 0;
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
}
.option-list {
  margin-top: 18px;
  display: grid;
  gap: 12px;
}
.vote-option {
  justify-content: flex-start;
  height: 44px;
  border-radius: 14px;
  font-weight: 600;
}
.submitted-tip {
  margin-top: 14px;
  color: #10b981;
  font-size: 13px;
  font-weight: 600;
}
.empty-wrap {
  margin-top: 16px;
}
.results-card {
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid rgba(148, 163, 184, 0.18);
}
.results-title {
  margin-bottom: 14px;
  font-size: 16px;
  font-weight: 700;
  color: #0f172a;
}
.result-item + .result-item {
  margin-top: 14px;
}
.result-line {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 8px;
  color: #334155;
  font-size: 14px;
}
</style>
