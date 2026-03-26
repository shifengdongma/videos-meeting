<template>
  <el-card shadow="hover" class="summary-card">
    <div class="label">{{ label }}</div>
    <div class="value-row">
      <div class="value">{{ value }}</div>
      <div v-if="hint" class="hint">{{ hint }}</div>
    </div>
    <div v-if="description" class="description">{{ description }}</div>
  </el-card>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string | number
  hint?: string
  description?: string
}>()
</script>

<style scoped>
.summary-card {
  border: 1px solid rgba(148, 163, 184, 0.14);
  border-radius: 26px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.88) 100%);
  box-shadow: var(--shadow-soft);
  transition: transform var(--motion-fast) ease, box-shadow var(--motion-base) ease, border-color var(--motion-fast) ease;
}
.summary-card:hover {
  transform: translateY(-2px);
  border-color: rgba(59, 130, 246, 0.18);
  box-shadow: 0 24px 52px rgba(15, 23, 42, 0.1), 0 10px 24px rgba(59, 130, 246, 0.08);
}
.label {
  color: var(--color-text-muted);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 18px;
}
.value-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
}
.value {
  font-size: clamp(34px, 3vw, 42px);
  line-height: 0.95;
  font-weight: 800;
  letter-spacing: -0.05em;
  color: var(--color-text-primary);
}
.hint {
  display: inline-flex;
  align-items: center;
  min-height: 30px;
  padding: 0 10px;
  border-radius: 999px;
  background: rgba(16, 185, 129, 0.08);
  color: #047857;
  border: 1px solid rgba(16, 185, 129, 0.14);
  font-size: 12px;
  font-weight: 700;
  white-space: nowrap;
}
.description {
  margin-top: 18px;
  color: #94a3b8;
  font-size: 13px;
  line-height: 1.7;
}
</style>
