<template>
  <div class="auth-shell">
    <div class="brand-panel">
      <div class="brand-badge">Enterprise Video</div>
      <h1>视频会议管理系统</h1>
      <p>
        面向会议、直播和在线表决的统一协作平台。
        让管理员、主持人和参会成员在同一套产品体验中完成日常业务。
      </p>
      <div class="feature-list">
        <div class="feature-item">稳定的会议预约与直播管理</div>
        <div class="feature-item">实时音视频与桌面共享</div>
        <div class="feature-item">在线表决与后台权限配置</div>
      </div>
    </div>
    <div class="form-panel">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.auth-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  background:
    radial-gradient(circle at top left, rgba(99, 102, 241, 0.22), transparent 35%),
    radial-gradient(circle at bottom right, rgba(56, 189, 248, 0.16), transparent 30%),
    linear-gradient(135deg, #eef2ff 0%, #f8fafc 45%, #eff6ff 100%);
}
.brand-panel {
  padding: 72px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.brand-badge {
  display: inline-flex;
  align-self: flex-start;
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(99, 102, 241, 0.1);
  color: #4f46e5;
  font-weight: 700;
  font-size: 12px;
  margin-bottom: 24px;
}
.brand-panel h1 {
  margin: 0;
  font-size: 48px;
  line-height: 1.1;
  color: #0f172a;
}
.brand-panel p {
  margin: 24px 0 0;
  max-width: 560px;
  color: #475569;
  font-size: 18px;
  line-height: 1.8;
}
.feature-list {
  margin-top: 36px;
  display: grid;
  gap: 14px;
}
.feature-item {
  padding: 18px 20px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(148, 163, 184, 0.15);
  color: #1e293b;
  font-weight: 600;
}
.form-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px;
}
@media (max-width: 960px) {
  .auth-shell {
    grid-template-columns: 1fr;
  }
  .brand-panel {
    padding: 48px 24px 16px;
  }
  .brand-panel h1 {
    font-size: 36px;
  }
  .form-panel {
    padding: 24px;
    padding-top: 8px;
  }
}
</style>
