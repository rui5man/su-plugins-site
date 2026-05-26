<template>
  <div v-if="plugin" class="modern-detail-wrapper">
    <header class="plugin-hero">
      <div class="hero-content">
        <div class="hero-left">
          <div class="hero-meta">
            <span class="status-badge">限时免费</span>
            <span class="views-count">● 25 VIEWS</span>
          </div>
          <h1 class="plugin-title">{{ plugin.name }}</h1>
          <p class="plugin-subtitle">{{ plugin.tagline }}</p>
          
          <div class="download-btn-area">
            <a :href="plugin.rbzUrl || '#'" class="primary-download-btn" @click.prevent="handleSecureDownload">
              <svg class="icon-download" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              <span class="btn-text">获取插件 {{ plugin.version }}</span>
            </a>
          </div>
        </div>
        
        <div class="hero-right">
          <div class="video-container">
            <iframe 
              class="bilibili-player"
              :src="`//player.bilibili.com/player.html?bvid=${plugin.bilibiliId}&page=1&high_quality=1&danmaku=0`" 
              scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true">
            </iframe>
            <div class="player-controls">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              <div class="progress-bar"><div class="progress-fill"></div></div>
              <span class="time">00:08 / 00:17</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="main-layout">
      <article class="content-left card">
        <div id="core-features" class="section">
          <h2 class="section-title">核心功能介绍</h2>
          
          <div class="features-detailed-list">
            <div class="detailed-feature">
              <h3 class="feature-headline">1. 智能对齐 & 整体贴合 (双模式)</h3>
              <p class="feature-desc">一个工具，两种用法。通过 `Ctrl` 键灵活切换。</p>
              
              <div class="mode-block">
                <h4 class="mode-title">● 模式 A: 智能对齐 (默认)</h4>
                <p class="mode-desc">用于将两个板件或组件进行精确对齐。</p>
                <div class="step-guide">
                  <p class="guide-summary"><strong>操作方法：</strong></p>
                  <ol class="guide-steps">
                    <li>点击工具栏<strong>“智能对齐”</strong>图标。</li>
                    <li>点击第一个对象（源）。<span class="comment">(注: 会自动穿透组，选中深层的板件)</span></li>
                    <li>点击第二个对象（目标）。</li>
                    <li>源对象会自动移动并对齐到目标对象。</li>
                  </ol>
                </div>
              </div>
              
              <div class="mode-block">
                <h4 class="mode-title">● 模式 B: 整体贴合 (组到面/线)</h4>
                <p class="mode-desc">用于将整合板件、组件贴合到指定的平面或参考线上。</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <aside class="content-right">
        <div class="sticky-sidebar">
          <nav id="doc-nav" class="sidebar-card">
            <h3 class="sidebar-title">内容导航</h3>
            <ul class="nav-links">
              <li><a href="#core-features" class="nav-item">核心功能介绍</a></li>
            </ul>
          </nav>
          
          <section id="version-log" class="sidebar-card">
            <h3 class="sidebar-title">版本演进</h3>
            <div class="version-timeline">
              <div v-for="(log, idx) in plugin.versionLogs" :key="idx" class="version-item">
                <div class="version-header">
                  <span class="v-num">V {{ log.version }}</span>
                  <span class="v-date">{{ log.date }}</span>
                </div>
                <ul class="v-notes">
                  <li v-for="(note, nIdx) in log.notes" :key="nIdx">{{ note }}</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </aside>
    </div>
  </div>

  <div v-else class="empty-state card">
    <h3>未检索到相关产品详情页</h3>
    <router-link to="/">返回系统控制中心</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { pluginsData } from '../data/plugins.js';

const route = useRoute();
const plugin = computed(() => {
  return pluginsData.find(p => p.id.toLowerCase() === route.params.id.toLowerCase());
});

const handleSecureDownload = () => {
  if (plugin.value && plugin.value.id.toLowerCase() === 'opennewer') {
    window.location.href = plugin.value.rbzUrl;
  } else {
    alert(`【系统安全提示】${plugin.value.name} (${plugin.value.version}) 企业级插件已启动全代码加密。如需索取企业内部授权安装包(.rbz) or 申请生产线绑定许可，请通过工厂内部对接通道联系开发团队获取凭证。`);
  }
};
</script>

<style scoped>
/* 详情页底层基础环境（消灭白边、自适应平滑色彩） */
.modern-detail-wrapper {
  color: #1e293b; background-color: #f8fafc; min-height: 100vh; display: flex; flex-direction: column; box-sizing: border-box;
}

/* 顶部 Banner 区 */
.plugin-hero { background-color: #ffffff; border-bottom: 1px solid #e2e8f0; }
.hero-content {
  max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: center; padding: 50px 24px;
}
.hero-meta { display: flex; align-items: center; gap: 16px; margin-bottom: 18px; }
.status-badge { font-size: 11px; font-weight: 700; background: #2563eb; color: #ffffff; padding: 4px 12px; border-radius: 4px; }
.views-count { font-size: 12px; color: #64748b; font-weight: 600; }
.plugin-title { font-size: 32px; font-weight: 800; color: #0f172a; margin-bottom: 12px; letter-spacing: -0.5px; }
.plugin-subtitle { font-size: 14.5px; color: #475569; margin-bottom: 4px; line-height: 1.6; }

/* 🛠️ 下载按钮排版深度修正（绝不是圆球，文字完美居中展现） */
.download-btn-area { display: block; margin-top: 24px; }
.primary-download-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  background: #2563eb; color: #ffffff !important; padding: 12px 28px; border-radius: 8px; /* 规整现代圆角 */
  font-size: 14px; font-weight: 700; text-decoration: none; white-space: nowrap; width: auto; transition: background 0.2s;
}
.primary-download-btn:hover { background: #1d4ed8; }
.icon-download { width: 18px; height: 18px; flex-shrink: 0; }
.btn-text { display: inline-block; line-height: 1; }

/* 视频窗口 */
.video-container { width: 100%; max-width: 460px; height: 260px; border-radius: 12px; overflow: hidden; position: relative; border: 1px solid rgba(15,23,42,0.06); background: #000; }
.bilibili-player { width: 100%; height: 224px; border: none; }
.player-controls { display: flex; align-items: center; gap: 12px; padding: 0 16px; height: 36px; background: #0f172a; color: rgba(255, 255, 255, 0.4); font-size: 11px; font-family: monospace; }

/* 下方经典工业分栏 */
.main-layout { max-width: 1200px; width: 100%; margin: 0 auto; padding: 40px 24px; display: grid; grid-template-columns: 1.6fr 1fr; gap: 32px; box-sizing: border-box; }
.card, .sidebar-card { background-color: #ffffff; border-radius: 12px; padding: 32px; border: 1px solid rgba(15, 23, 42, 0.05); }
.sidebar-card { padding: 24px; margin-bottom: 24px; }

/* 去除小图标的纯净标题 */
.section-title { font-size: 20px; font-weight: 800; color: #0f172a; margin-bottom: 24px; border-left: 4px solid #2563eb; padding-left: 12px; line-height: 1.2; }
.feature-headline { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 10px; }
.feature-desc { color: #475569; font-size: 14px; margin-bottom: 20px; }
.mode-block { margin-top: 18px; padding-left: 16px; border-left: 2px solid #e2e8f0; }
.mode-title { font-size: 14px; font-weight: 600; color: #0f172a; margin-bottom: 6px; }
.mode-desc { font-size: 13.5px; color: #64748b; margin-bottom: 12px; }

/* 终端指令风格说明块 */
.step-guide { font-size: 13px; color: #cbd5e1; background-color: #0f172a; padding: 18px; border-radius: 6px; border: 1px solid #1e293b; }
.guide-summary strong { color: #38bdf8; }
.guide-steps { padding-left: 20px; margin-top: 6px; line-height: 1.8; }
.comment { color: #64748b; font-style: italic; }

/* 侧边栏与版本时间轴 */
.sticky-sidebar { position: sticky; top: 24px; }
.sidebar-title { font-size: 14px; font-weight: 800; color: #0f172a; margin-bottom: 16px; padding-bottom: 10px; border-bottom: 1px solid #f1f5f9; }
.nav-links { list-style: none; padding: 0; margin: 0; }
.nav-item { font-size: 13px; color: #475569; text-decoration: none; }
.version-timeline { display: flex; flex-direction: column; gap: 24px; }
.version-item { border-left: 2px solid #e2e8f0; padding-left: 16px; position: relative; }
.version-item::after { content: ''; position: absolute; left: -5px; top: 5px; width: 8px; height: 8px; background: #2563eb; border-radius: 50%; }
.version-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.v-num { font-size: 13px; font-weight: 700; color: #0f172a; font-family: monospace; }
.v-date { font-size: 12px; color: #64748b; }
.v-notes { list-style: decimal; font-size: 12.5px; color: #475569; display: flex; flex-direction: column; gap: 6px; padding-left: 14px; margin: 0; }
.empty-state { text-align: center; padding: 80px 0; color: #64748b; }

/* ==========================================================================
   🌓 彻底修补详情页暗黑模式色彩崩塌与大白边漏洞
   ========================================================================== */
:deep(.dark) .modern-detail-wrapper { background-color: #0b0f19 !important; color: #cbd5e1; }
:deep(.dark) .plugin-hero { background-color: #0f1422; border-bottom: 1px solid #1e293b; }
:deep(.dark) .plugin-title { color: #ffffff; }
:deep(.dark) .plugin-subtitle { color: #94a3b8; }
:deep(.dark) .card, :deep(.dark) .sidebar-card { background-color: #111827 !important; border-color: #1f2937 !important; }
:deep(.dark) .section-title, :deep(.dark) .sidebar-title, :deep(.dark) .feature-headline, :deep(.dark) .v-num { color: #ffffff !important; }
:deep(.dark) .feature-desc, :deep(.dark) .v-notes, :deep(.dark) .v-date { color: #94a3b8 !important; }
:deep(.dark) .mode-title { color: #e2e8f0; }
:deep(.dark) .mode-block { border-left-color: #2d3748; }
:deep(.dark) .sidebar-title { border-bottom-color: #1f2937; }
:deep(.dark) .version-item { border-left-color: #2d3748; }
</style>
