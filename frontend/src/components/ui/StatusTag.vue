<template>
  <el-tag :type="tagType" effect="light" round class="status-tag">
    {{ text }}
  </el-tag>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  text: string
  status?: string
}>()

const tagType = computed(() => {
  if (['scheduled', 'host'].includes(props.status || '')) return 'success'
  if (['ongoing', 'live', 'admin'].includes(props.status || '')) return 'warning'
  if (['ended', 'offline'].includes(props.status || '')) return 'danger'
  return 'info'
})
</script>

<style scoped>
.status-tag {
  padding-inline: 12px;
  min-height: 30px;
  font-weight: 700;
  letter-spacing: 0.01em;
  border: 1px solid transparent;
}
:deep(.status-tag.el-tag--danger) {
  color: #b85a5a;
  background: rgba(229, 115, 115, 0.12);
  border-color: rgba(229, 115, 115, 0.18);
}
:deep(.status-tag.el-tag--warning) {
  color: #a26c00;
  background: rgba(251, 192, 45, 0.18);
  border-color: rgba(251, 192, 45, 0.2);
}
:deep(.status-tag.el-tag--info) {
  color: var(--color-primary);
  background: rgba(46, 58, 89, 0.08);
  border-color: rgba(46, 58, 89, 0.14);
}
:deep(.status-tag.el-tag--success) {
  color: #157554;
  background: rgba(30, 158, 111, 0.1);
  border-color: rgba(30, 158, 111, 0.16);
}
</style>
