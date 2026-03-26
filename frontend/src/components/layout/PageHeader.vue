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
  align-items: flex-end;
  gap: 24px;
  margin-bottom: 6px;
  padding: 8px 2px 0;
}
.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: var(--color-primary-hover);
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.eyebrow::before {
  content: '';
  width: 32px;
  height: 1px;
  background: linear-gradient(90deg, rgba(37, 99, 235, 0.95), rgba(125, 211, 252, 0.36));
}
.title {
  margin: 0;
  font-size: clamp(30px, 3vw, 40px);
  line-height: 1;
  letter-spacing: -0.05em;
  color: var(--color-text-primary);
}
.description {
  margin: 16px 0 0;
  color: var(--color-text-muted);
  line-height: 1.8;
  max-width: 760px;
  font-size: 15px;
}
.actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  flex-wrap: wrap;
}
@media (max-width: 900px) {
  .page-header {
    flex-direction: column;
    align-items: flex-start;
  }
  .actions {
    width: 100%;
    justify-content: flex-start;
  }
}
</style>
