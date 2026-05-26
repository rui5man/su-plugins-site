<template>
  <div class="detail-container">
    <div class="back-nav">
      <router-link to="/" class="back-link">
        <span class="arrow">←</span> 返回产品集群控制台
      </router-link>
    </div>

    <section class="hero-banner-section">
      <div class="hero-main-layout">
        <div class="info-block">
          <div class="title-row">
            <h1 class="plugin-main-title">板件大师 (PanelMaster)</h1>
            <div class="meta-tags">
              <span class="status-badge">限时免费</span>
              <span class="view-count">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                25 VIEWS
              </span>
            </div>
          </div>
          <p class="plugin-slogan">智能对齐、超级拉伸、超级切割 —— 让 SketchUp 工业级参数化建模与拆单速度提升 300%</p>
          
          <div class="action-bar">
            <button class="btn-primary-download">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              获取插件 V1.2.2
            </button>
          </div>
        </div>

        <div class="video-preview-wrapper">
          <div class="video-placeholder">
            <div class="bilibili-mock-player">
              <span class="play-status-text">进入哔哩哔哩 观看更高清视频</span>
              <div class="mock-controls">
                <span class="play-icon">▶</span>
                <div class="progress-bar-mock"></div>
                <span class="time-text">00:08 / 00:17</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="content-split-layout">
      <main class="details-main-content">
        <article class="info-card-block">
          <div class="block-header">
            <span class="accent-bar"></span>
            <h2>核心功能介绍</h2>
          </div>
          
          <div class="feature-item">
            <h3>1. 🚀 智能对齐 & 整体贴合 (双模式)</h3>
            <p class="feature-desc">一个工具，两种用法。通过 <kbd>Ctrl</kbd> 键灵活切换。</p>
            
            <div class="sub-mode-box">
              <h4>• 模式 A：智能对齐 (默认)</h4>
              <p>用于将两个板件或组件进行精确对齐。</p>
              <div class="operation-guide">
                <h5>操作方法：</h5>
                <ol>
                  <li>点击工具栏<strong>“智能对齐”</strong>图标。</li>
                  <li>点击第一个对象 (源)。<i>(注：会自动穿透组，选中深层的板件)</i></li>
                  <li>点击第二个对象 (目标)。</li>
                  <li>源对象会自动移动并对齐到目标对象。</li>
                </ol>
              </div>
            </div>

            <div class="sub-mode-box">
              <h4>• 模式 B：整体贴合 (组到面/线)</h4>
              <p>用于将整合板件、组件贴合到指定的平面或参考线上。</p>
            </div>
          </div>
        </article>
      </main>

      <aside class="details-sidebar">
        <div class="sidebar-card">
          <div class="card-header-line">
            <span class="icon">☰</span> 内容导航
          </div>
          <ul class="nav-tree-list">
            <li class="active">核心功能介绍</li>
          </ul>
        </div>

        <div class="sidebar-card">
          <div class="card-header-line">
            <span class="icon">🕒</span> 版本演进
          </div>
          <div class="timeline-wrapper">
            <div class="timeline-item">
              <div class="version-meta">
                <span class="v-num">V 1.2.2</span>
                <span class="v-date">12/24/2025</span>
              </div>
              <ul class="changelog-list">
                <li>1. 双重逻辑，精准判断。新增意图识别，依据鼠标点击位置决定延伸哪一个头，彻底解决十字交叉板件延伸反向的问题。</li>
                <li>2. 新增：斜面/异形完美贴合。突破垂直限制，现在也支持非平行面延伸。自动斜切以完美贴合目标角度，无需二次修整。</li>
              </ul>
            </div>

            <div class="timeline-item">
              <div class="version-meta">
                <span class="v-num">V 1.1.2</span>
                <span class="v-date">12/13/2025</span>
              </div>
              <ul class="changelog-list">
                <li>1. 性能优化，Deep Picking 深层挑选速度提升 300%。</li>
                <li>2. 修复联动模式下特定豁口联动失效的问题。</li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailView'
}
</script>

<style scoped>
.detail-container {
  min-height: 100vh;
  background-color: #f8fafc;
  color: #0f172a;
  padding: 30px 40px 80px 40px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 返回面包屑 */
.back-nav {
  max-width: 1200px;
  margin: 0 auto 24px auto;
}
.back-link {
  font-size: 14px;
  color: #64748b;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 500;
}
.back-link:hover { color: #2563eb; }

/* 头部 Banner 重构 */
.hero-banner-section {
  max-width: 1200px;
  margin: 0 auto 32px auto;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.02);
}
.hero-main-layout {
  display: grid;
  grid-template-columns: 1fr 440px;
  gap: 40px;
  align-items: center;
}
.title-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}
.plugin-main-title {
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.5px;
}
.meta-tags {
  display: flex;
  align-items: center;
  gap: 10px;
}
.status-badge {
  font-size: 11px;
  background-color: #eff6ff;
  color: #2563eb;
  padding: 2px 8px;
  border-radius: 4px;
  font-weight: 700;
}
.view-count {
  font-size: 12px;
  color: #94a3b8;
  display: flex;
  align-items: center;
  gap: 4px;
}
.plugin-slogan {
  font-size: 15px;
  line-height: 1.6;
  color: #475569;
  margin-bottom: 28px;
}

/* 下载按钮重构（拒绝巨大球形，统一走工业标准按钮结构） */
.action-bar {
  display: flex;
  gap: 12px;
}
.btn-primary-download {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
}
.btn-primary-download:hover { background-color: #1d4ed8; }

/* 右侧视频区域 */
.video-preview-wrapper {
  width: 100%;
}
.video-placeholder {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: #000000;
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}
.bilibili-mock-player {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1e293b, #0f172a);
  color: #94a3b8;
  font-size: 13px;
}
.mock-controls {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,0,0,0.6);
  padding: 8px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}
.progress-bar-mock {
  flex: 1;
  height: 4px;
  background-color: #2563eb;
  border-radius: 2px;
}
.time-text { font-size: 11px; color: #cbd5e1; }

/* 下方分栏布局 */
.content-split-layout {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 32px;
}

/* 左侧主体卡片（拒绝暗黑白边边框核心） */
.info-card-block {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 32px;
}
.block-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 24px;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 12px;
}
.accent-bar {
  width: 4px;
  height: 18px;
  background-color: #2563eb;
  border-radius: 2px;
}
.block-header h2 { font-size: 18px; font-weight: 800; color: #0f172a; }

.feature-item h3 { font-size: 15px; font-weight: 700; margin-bottom: 8px; }
.feature-desc { font-size: 13px; color: #475569; margin-bottom: 16px; }
kbd {
  background-color: #f1f5f9; border: 1px solid #cbd5e1;
  padding: 2px 6px; border-radius: 4px; font-family: monospace; font-size: 11px;
}

.sub-mode-box {
  margin-left: 12px;
  margin-bottom: 20px;
}
.sub-mode-box h4 { font-size: 14px; font-weight: 700; color: #1e293b; margin-bottom: 6px; }
.sub-mode-box p { font-size: 13px; color: #64748b; }

.operation-guide {
  background-color: #0f172a;
  color: #e2e8f0;
  padding: 16px;
  border-radius: 8px;
  margin-top: 12px;
}
.operation-guide h5 { color: #94a3b8; font-size: 12px; margin-bottom: 8px; font-family: monospace; }
.operation-guide ol { padding-left: 20px; font-size: 13px; line-height: 1.8; }

/* 右侧侧边栏卡片 */
.sidebar-card {
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 24px;
}
.card-header-line {
  font-size: 14px;
  font-weight: 700;
  color: #334155;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 10px;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.nav-tree-list { list-style: none; padding: 0; font-size: 13px; }
.nav-tree-list li { padding: 6px 10px; border-radius: 6px; color: #64748b; }
.nav-tree-list li.active { background-color: #f1f5f9; color: #2563eb; font-weight: 600; }

/* 版本时间轴 */
.timeline-wrapper { display: flex; flex-direction: column; gap: 20px; }
.timeline-item { border-left: 2px solid #e2e8f0; padding-left: 14px; position: relative; }
.timeline-item::before {
  content: ''; position: absolute; left: -5px; top: 5px;
  width: 8px; height: 8px; background-color: #3b82f6; border-radius: 50%;
}
.version-meta { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.v-num { font-size: 13px; font-weight: 700; color: #0f172a; }
.v-date { font-size: 11px; color: #94a3b8; }
.changelog-list { padding-left: 14px; font-size: 12px; color: #475569; line-height: 1.6; }

/* ==========================================================================
   详情页暗黑模式色彩翻转实现（消除突兀白边与大白底）
   ========================================================================== */
:global(.dark) .detail-container {
  background-color: #060814 !important; /* 统一首页的深蓝钛空底色 */
  color: #f1f5f9 !important;
}
:global(.dark) .back-link { color: #94a3b8; }
:global(.dark) .hero-banner-section,
:global(.dark) .info-card-block,
:global(.dark) .sidebar-card {
  background-color: #0f172a !important; /* 卡片内层全部转为高级深邃黑蓝 */
  border-color: #1e293b !important; /* 彻底去除刺眼的白边 */
}
:global(.dark) .plugin-main-title,
:global(.dark) .block-header h2,
:global(.dark) .v-num {
  color: #ffffff !important;
}
:global(.dark) .plugin-slogan,
:global(.dark) .feature-desc,
:global(.dark) .changelog-list {
  color: #94a3b8 !important;
}
:global(.dark) .sub-mode-box h4 { color: #cbd5e1; }
:global(.dark) .card-header-line {
  color: #cbd5e1; border-bottom-color: #1e293b;
}
:global(.dark) .block-header { border-bottom-color: #1e293b; }
:global(.dark) .nav-tree-list li.active {
  background-color: #1e293b; color: #3b82f6;
}
:global(.dark) .timeline-item { border-left-color: #1e293b; }
:global(.dark) kbd {
  background-color: #1e293b; border-color: #334155; color: #f1f5f9;
}
</style>
