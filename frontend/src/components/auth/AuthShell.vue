<template>
  <div class="auth-shell">
    <div class="auth-mesh auth-mesh-a"></div>
    <div class="auth-mesh auth-mesh-b"></div>
    <div class="brand-panel">
      <div class="brand-badge">Enterprise Video</div>
      <h1>视频会议管理系统</h1>
      <p>
        面向会议、直播和在线表决的统一协作平台。
        让管理员、主持人和参会成员在同一套产品体验中完成日常业务。
      </p>
      <div class="feature-list">
        <div class="feature-item">
          <span class="feature-icon"></span>
          <span>稳定的会议预约与直播管理</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon"></span>
          <span>实时音视频与桌面共享</span>
        </div>
        <div class="feature-item">
          <span class="feature-icon"></span>
          <span>在线表决与后台权限配置</span>
        </div>
      </div>
    </div>
    <div class="form-panel">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.auth-shell {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1.08fr 0.92fr;
  background:
    linear-gradient(135deg, rgba(251, 253, 255, 0.96) 0%, rgba(245, 247, 251, 0.92) 46%, rgba(239, 246, 255, 0.92) 100%);
}

.auth-mesh {
  position: absolute;
  inset: auto;
  z-index: -1;
  border-radius: 999px;
  filter: blur(18px);
  pointer-events: none;
}

.auth-mesh-a {
  top: -140px;
  left: -90px;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.22) 0%, rgba(59, 130, 246, 0) 68%);
}

.auth-mesh-b {
  right: -120px;
  bottom: -160px;
  width: 460px;
  height: 460px;
  background: radial-gradient(circle, rgba(125, 211, 252, 0.24) 0%, rgba(125, 211, 252, 0) 70%);
}

.brand-panel {
  padding: 88px 72px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.brand-badge {
  display: inline-flex;
  align-self: flex-start;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(148, 163, 184, 0.16);
  box-shadow: 0 14px 34px rgba(15, 23, 42, 0.06);
  color: var(--color-primary-hover);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 28px;
}

.brand-panel h1 {
  margin: 0;
  max-width: 560px;
  font-size: clamp(46px, 5vw, 58px);
  line-height: 0.96;
  letter-spacing: -0.05em;
  color: var(--color-text-primary);
}

.brand-panel p {
  margin: 28px 0 0;
  max-width: 560px;
  color: var(--color-text-secondary);
  font-size: 18px;
  line-height: 1.85;
}

.feature-list {
  margin-top: 42px;
  display: grid;
  gap: 16px;
  max-width: 560px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.66);
  backdrop-filter: blur(14px);
  border: 1px solid rgba(148, 163, 184, 0.14);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.06);
  color: #1e293b;
  font-weight: 600;
}

.feature-icon {
  width: 10px;
  height: 10px;
  flex: 0 0 10px;
  border-radius: 999px;
  background: linear-gradient(135deg, var(--color-primary) 0%, #7dd3fc 100%);
  box-shadow: 0 0 0 6px rgba(59, 130, 246, 0.08);
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
    padding: 52px 24px 20px;
  }

  .brand-panel h1 {
    font-size: 38px;
  }

  .brand-panel p {
    font-size: 16px;
  }

  .form-panel {
    padding: 24px;
    padding-top: 8px;
  }
}
</style>
