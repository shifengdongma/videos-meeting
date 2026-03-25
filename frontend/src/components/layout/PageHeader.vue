<template>
  <div class="page-header">
    <div>
      <div class="eyebrow" v-if="eyebrow">{{ eyebrow }}</div>
      <h1 class="title">{{ title }}</h1>
      <p v-if="description" class="description">{{ description }}</p>
    </div>
    <div v-if="$slots.actions" class="actions">
      <slot name="actions" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description?: string
  eyebrow?: string
}>()
</script>

<style scoped>
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 24px;
}
.eyebrow {
  color: #6366f1;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 10px;
}
.title {
  margin: 0;
  font-size: 30px;
  line-height: 1.15;
  color: #0f172a;
}
.description {
  margin: 10px 0 0;
  color: #64748b;
  line-height: 1.6;
  max-width: 720px;
}
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}
@media (max-width: 900px) {
  .page-header {
    flex-direction: column;
  }
  .title {
    font-size: 26px;
  }
}
</style>
