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
  border: 1px solid rgba(148, 163, 184, 0.18);
  border-radius: 20px;
}
.label {
  color: #64748b;
  font-size: 13px;
  margin-bottom: 12px;
}
.value-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 16px;
}
.value {
  font-size: 30px;
  font-weight: 700;
  color: #0f172a;
}
.hint {
  color: #10b981;
  font-size: 13px;
  font-weight: 600;
}
.description {
  margin-top: 12px;
  color: #94a3b8;
  font-size: 13px;
}
</style>
