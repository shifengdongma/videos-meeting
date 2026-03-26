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

      <div v-if="submitted && results.length" class="submitted-tip">
        当前议题你已投票，直接展示实时结果。
      </div>

      <div v-else class="option-list">
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
  border-radius: 28px;
  padding: 24px;
  background: linear-gradient(180deg, rgba(248, 250, 252, 0.92) 0%, rgba(255, 255, 255, 0.96) 100%);
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.08);
}
.panel-head {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
}
.panel-eyebrow {
  color: var(--color-primary-hover);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.panel-head h3 {
  margin: 10px 0 0;
  font-size: 24px;
  color: var(--color-text-primary);
}
.panel-status {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.14);
  color: var(--color-text-secondary);
  font-size: 12px;
  font-weight: 700;
}
.panel-status.active {
  background: rgba(59, 130, 246, 0.1);
  color: var(--color-primary-hover);
}
.vote-body {
  margin-top: 20px;
}
.topic-card {
  padding: 18px;
  border-radius: 18px;
  background: rgba(248, 250, 252, 0.9);
  border: 1px solid rgba(148, 163, 184, 0.14);
}
.topic-label {
  color: var(--color-text-muted);
  font-size: 12px;
}
.topic {
  margin: 10px 0 0;
  font-size: 18px;
  font-weight: 700;
  color: var(--color-text-primary);
}
.option-list {
  margin-top: 18px;
  display: grid;
  gap: 12px;
}
.vote-option {
  justify-content: flex-start;
  min-height: 46px;
  border-radius: 16px;
  font-weight: 600;
}
.submitted-tip {
  margin-top: 14px;
  color: #059669;
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
  color: var(--color-text-primary);
}
.result-item + .result-item {
  margin-top: 16px;
}
.result-line {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 10px;
  color: #334155;
  font-size: 14px;
}
:deep(.el-progress-bar__outer) {
  background: rgba(148, 163, 184, 0.18);
}
:deep(.el-progress-bar__inner) {
  transition: width 0.5s ease;
}
</style>
