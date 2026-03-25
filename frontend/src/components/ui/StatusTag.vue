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
  if (['admin', 'ongoing', 'live'].includes(props.status || '')) return 'danger'
  if (['host', 'scheduled'].includes(props.status || '')) return 'warning'
  if (['ended', 'offline'].includes(props.status || '')) return 'info'
  return 'success'
})
</script>

<style scoped>
.status-tag {
  padding-inline: 12px;
  font-weight: 600;
}
</style>
