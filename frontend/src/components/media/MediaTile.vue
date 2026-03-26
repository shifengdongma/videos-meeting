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
  icon: '◌'
})
</script>

<style scoped>
.media-tile {
  position: relative;
  min-height: 320px;
  background:
    linear-gradient(180deg, rgba(30, 35, 58, 0.98) 0%, rgba(12, 16, 31, 0.98) 100%);
  border-radius: 30px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 26px 62px rgba(12, 16, 31, 0.3);
}
.media-tile::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, transparent 30%);
  pointer-events: none;
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
  padding: 20px 20px 0;
  color: #fff;
}
.media-title {
  font-size: 15px;
  font-weight: 700;
}
.media-subtitle {
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.68);
  font-size: 12px;
}
.media-body {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 320px;
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
  width: 70px;
  height: 70px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  font-size: 24px;
  backdrop-filter: blur(10px);
}
.placeholder-text {
  font-size: 14px;
}
:slotted(video) {
  width: 100%;
  height: 100%;
  min-height: 320px;
  object-fit: cover;
}
</style>
