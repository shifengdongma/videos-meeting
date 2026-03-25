<template>
  <div class="media-tile">
    <div class="media-head">
      <div>
        <div class="media-title">{{ title }}</div>
        <div v-if="subtitle" class="media-subtitle">{{ subtitle }}</div>
      </div>
      <slot name="badge" />
    </div>
    <div class="media-body">
      <slot />
      <div v-if="empty" class="media-placeholder">
        <div class="placeholder-icon">{{ icon }}</div>
        <div class="placeholder-text">{{ emptyText }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  subtitle?: string
  empty?: boolean
  emptyText?: string
  icon?: string
}>(), {
  empty: false,
  emptyText: '暂无媒体流',
  icon: '▶'
})
</script>

<style scoped>
.media-tile {
  position: relative;
  min-height: 280px;
  background: linear-gradient(180deg, #111827 0%, #020617 100%);
  border-radius: 24px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 24px 60px rgba(2, 6, 23, 0.28);
}
.media-head {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 18px 18px 0;
  color: #fff;
}
.media-title {
  font-size: 15px;
  font-weight: 700;
}
.media-subtitle {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
}
.media-body {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 280px;
}
.media-placeholder {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.8);
  gap: 12px;
}
.placeholder-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  font-size: 22px;
}
.placeholder-text {
  font-size: 14px;
}
:slotted(video) {
  width: 100%;
  height: 100%;
  min-height: 280px;
  object-fit: cover;
}
</style>
