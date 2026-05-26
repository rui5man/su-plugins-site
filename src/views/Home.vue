<template>
  <div class="home-container">
    <header class="site-header">
      <div class="header-left">
        <div class="logo-box">
          <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#3b82f6" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
        <span class="brand-name">天工定制</span>
        <span class="divider">/</span>
        <span class="sub-brand">工业级 SU 生态</span>
      </div>
      <div class="header-right">
        <span class="nav-link">插件中心</span>
        <span class="badge-enterprise">Enterprise 5.0</span>
        <button class="theme-toggle-btn" @click="$emit('toggle-theme')">
          <svg class="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
          </svg>
        </button>
      </div>
    </header>

    <section class="hero-slogan-wrapper">
      <h1 class="main-industrial-title">让 SketchUp 拥有全参数化工业灵魂</h1>
      <p class="sub-industrial-desc">面向全屋定制、数字化拆单及高性能效率工程的闭环控制系统</p>
    </section>

    <main class="main-content">
      <div class="search-bar-container">
        <div class="search-input-wrapper">
          <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input type="text" placeholder="搜索工业级全参数化生产插件功能..." class="search-input" />
        </div>
      </div>

      <div class="plugin-grid">
        <div class="plugin-card" @click="$router.push('/detail/panel-master')">
          <div class="card-header">
            <div class="plugin-avatar-icon pm-avatar">PM</div>
            <div class="tag-group">
              <span class="tag-blue">核心对齐 / 超级拉伸</span>
              <span class="tag-version">V1.2.2</span>
            </div>
          </div>
          <h2 class="card-title">板件大师 (PanelMaster)</h2>
          <p class="card-intro">让 SketchUp 拥有真正的工业灵魂。具备智能对齐（自动穿透组）、高性能 Picking 挑选与生产线无缝对接。</p>
          <div class="card-footer">
            <span class="enter-link">进入技术规格专页 <span class="arrow">→</span></span>
          </div>
        </div>
      </div>
    </main>

    <footer class="site-footer">
      <p>© 2026 天工定制 (TIANGONG CUSTOM) · 参数化自动化技术中心</p>
      <p class="footer-sub">专为全屋定制工业级拆单及生产流水线打造</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  color: #1e293b;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 头部导航 */
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 40px;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #e2e8f0;
}
.header-left, .header-right {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-box {
  width: 28px;
  height: 28px;
}
.brand-name {
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 0.5px;
}
.divider {
  color: #cbd5e1;
}
.sub-brand {
  font-size: 13px;
  color: #64748b;
}
.nav-link {
  font-size: 14px;
  color: #475569;
  cursor: pointer;
}
.badge-enterprise {
  font-size: 11px;
  padding: 2px 8px;
  background-color: #eff6ff;
  color: #2563eb;
  border: 1px solid #bfdbfe;
  border-radius: 4px;
  font-weight: 600;
}
.theme-toggle-btn {
  background: none;
  border: none;
  color: #475569;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
}

/* Slogan 核心区域（修复核心） */
.hero-slogan-wrapper {
  text-align: center;
  padding: 60px 20px 20px 20px;
  margin-top: 20px;
}
.main-industrial-title {
  font-size: 36px;
  font-weight: 850;
  color: #0f172a; /* 亮色模式下使用深黑蓝色，彻底拒绝白字隐形 */
  letter-spacing: -0.5px;
  margin-bottom: 16px;
  line-height: 1.3;
  transition: color 0.3s ease;
}
.sub-industrial-desc {
  font-size: 14px;
  color: #64748b;
  transition: color 0.3s ease;
}

/* 搜索区域 */
.main-content {
  flex: 1;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 40px 60px 40px;
}
.search-bar-container {
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
.search-input-wrapper {
  position: relative;
  width: 100%;
  max-width: 540px;
}
.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: #94a3b8;
}
.search-input {
  width: 100%;
  padding: 12px 16px 12px 48px;
  font-size: 14px;
  background-color: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 8px;
  outline: none;
  color: #0f172a;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

/* 卡片样式 */
.plugin-grid {
  display: flex;
  justify-content: center;
}
.plugin-card {
  width: 100%;
  max-width: 460px;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 24px;
  cursor: pointer;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.plugin-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.08);
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
}
.plugin-avatar-icon {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: #ffffff;
}
.pm-avatar {
  background: linear-gradient(135deg, #2563eb, #1d4ed8);
}
.tag-group {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
}
.tag-blue {
  font-size: 11px;
  padding: 2px 6px;
  background-color: #eff6ff;
  color: #2563eb;
  font-weight: 600;
  border-radius: 4px;
}
.tag-version {
  font-size: 11px;
  color: #64748b;
}
.card-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #0f172a;
}
.card-intro {
  font-size: 13px;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 20px;
}
.enter-link {
  font-size: 13px;
  color: #2563eb;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 4px;
}

/* 页脚 */
.site-footer {
  text-align: center;
  padding: 32px 20px;
  border-top: 1px solid #e2e8f0;
  font-size: 12px;
  color: #64748b;
  background-color: #f8fafc;
}
.footer-sub {
  margin-top: 4px;
  color: #94a3b8;
}

/* ==========================================================================
   全局及穿透暗黑模式样式覆盖
   ========================================================================== */
:global(.dark) .home-container {
  background-color: #060814 !important;
  color: #f1f5f9 !important;
}
:global(.dark) .site-header {
  background-color: rgba(6, 8, 20, 0.8) !important;
  border-bottom: 1px solid #1e293b !important;
}
:global(.dark) .sub-brand { color: #94a3b8; }
:global(.dark) .nav-link { color: #cbd5e1; }
:global(.dark) .badge-enterprise {
  background-color: #1e293b; color: #3b82f6; border-color: #2563eb;
}
:global(.dark) .theme-toggle-btn { color: #cbd5e1; }
:global(.dark) .main-industrial-title {
  color: #ffffff !important; /* 在暗黑模式下变回闪亮纯白 */
}
:global(.dark) .sub-industrial-desc { color: #94a3b8 !important; }
:global(.dark) .search-input {
  background-color: #0f172a; border-color: #1e293b; color: #f1f5f9;
}
:global(.dark) .plugin-card {
  background-color: #0f172a; border-color: #1e293b;
}
:global(.dark) .card-title { color: #ffffff; }
:global(.dark) .card-intro { color: #94a3b8; }
:global(.dark) .site-footer {
  background-color: #090d1f; border-top-color: #1e293b; color: #475569;
}
</style>
