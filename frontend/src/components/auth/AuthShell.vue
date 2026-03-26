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
          <span class="feature-icon">◌</span>
          <div>
            <div class="feature-title">稳定会议</div>
            <div class="feature-text">统一管理会议预约、状态流转与会议入口，确保日常协作稳定可控。</div>
          </div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">◌</span>
          <div>
            <div class="feature-title">实时音视频</div>
            <div class="feature-text">支持本地音视频与桌面共享，帮助主持人与成员快速进入协同状态。</div>
          </div>
        </div>
        <div class="feature-item">
          <span class="feature-icon">◌</span>
          <div>
            <div class="feature-title">在线表决</div>
            <div class="feature-text">提供会议投票与结果反馈能力，让关键议题在线完成决策闭环。</div>
          </div>
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
  grid-template-columns: 1.1fr 0.9fr;
  background:
    linear-gradient(135deg, rgba(251, 252, 253, 0.98) 0%, rgba(244, 246, 248, 0.94) 48%, rgba(237, 241, 245, 0.94) 100%);
}

.auth-mesh {
  position: absolute;
  inset: auto;
  z-index: -1;
  border-radius: 999px;
  filter: blur(24px);
  pointer-events: none;
}

.auth-mesh-a {
  top: -160px;
  left: -120px;
  width: 460px;
  height: 460px;
  background: radial-gradient(circle, rgba(46, 58, 89, 0.22) 0%, rgba(46, 58, 89, 0) 70%);
}

.auth-mesh-b {
  right: -140px;
  bottom: -180px;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle, rgba(30, 158, 111, 0.18) 0%, rgba(30, 158, 111, 0) 72%);
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
  border: 1px solid rgba(46, 58, 89, 0.1);
  box-shadow: 0 14px 34px rgba(26, 31, 59, 0.06);
  color: var(--color-primary);
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 28px;
  backdrop-filter: blur(16px);
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
  gap: 18px;
  max-width: 620px;
}

.feature-item {
  display: grid;
  grid-template-columns: 52px minmax(0, 1fr);
  align-items: start;
  gap: 16px;
  padding: 20px 22px;
  border-radius: 24px;
  background: rgba(255, 255, 255, 0.52);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(46, 58, 89, 0.1);
  box-shadow: 0 18px 42px rgba(26, 31, 59, 0.08);
  color: #1e293b;
  transition: transform var(--motion-fast) ease, box-shadow var(--motion-base) ease, border-color var(--motion-fast) ease;
}

.feature-item:hover {
  transform: translateY(-2px);
  box-shadow: 0 24px 52px rgba(26, 31, 59, 0.12);
  border-color: rgba(46, 58, 89, 0.16);
}

.feature-icon {
  width: 52px;
  height: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(46, 58, 89, 0.96) 0%, rgba(36, 48, 79, 0.9) 100%);
  color: rgba(255, 255, 255, 0.88);
  box-shadow: 0 16px 28px rgba(46, 58, 89, 0.2);
  font-size: 18px;
}

.feature-title {
  font-size: 16px;
  font-weight: 800;
  color: var(--color-text-primary);
}

.feature-text {
  margin-top: 8px;
  color: var(--color-text-secondary);
  font-size: 14px;
  line-height: 1.75;
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

  .feature-item {
    grid-template-columns: 44px minmax(0, 1fr);
    padding: 18px;
  }

  .feature-icon {
    width: 44px;
    height: 44px;
    border-radius: 16px;
  }

  .form-panel {
    padding: 24px;
    padding-top: 8px;
  }
}
</style>
