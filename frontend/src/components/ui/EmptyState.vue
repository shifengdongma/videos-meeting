<template>
  <div class="empty-state">
    <el-empty :description="description" />
    <div v-if="$slots.actions" class="actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  description: string
}>()
</script>

<style scoped>
.empty-state {
  padding: 28px 0;
}
.actions {
  display: flex;
  justify-content: center;
  margin-top: 8px;
}
</style>
