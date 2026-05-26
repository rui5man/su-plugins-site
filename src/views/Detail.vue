<template>
  <div v-if="plugin" class="modern-detail-wrapper">
    <header class="plugin-hero">
      <div class="hero-content">
        <div class="hero-left">
          <div class="hero-meta">
            <span class="status-badge pulse">限时免费</span>
            <span class="views-count">● 25 VIEWS</span>
          </div>
          <h1 class="plugin-title">{{ plugin.name }}</h1>
          <p class="plugin-subtitle">{{ plugin.tagline }}</p>
          
          <a :href="plugin.rbzUrl || '#'" class="primary-download-btn" @click.prevent="handleSecureDownload">
            <svg class="icon-download" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span>获取插件 {{ plugin.version }}</span>
          </a>
        </div>
        
        <div class="hero-right">
          <div class="video-container glass-card">
            <iframe 
              class="bilibili-player"
              :src="`//player.bilibili.com/player.html?bvid=${plugin.bilibiliId}&page=1&high_quality=1&danmaku=0`" 
              scrolling="no" 
              border="0" 
              frameborder="no" 
              framespacing="0" 
              allowfullscreen="true">
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
          <h2 class="section-title">
            <img src="/rocket.png" alt="features" class="section-icon" />
            核心功能介绍
          </h2>
          <div class="features-detailed-list">
            <div class="detailed-feature">
              <h3>1. <span class="emoji">✏️</span> 智能对齐 & 整体贴合 (双模式)</h3>
              <p>一个工具，两种用法。通过 `Ctrl` 键灵活切换。</p>
              
              <div class="mode-block">
                <h4>● 模式 A: 智能对齐 (默认)</h4>
                <p>由于将两个板件或组件进行精确对齐。</p>
                <div class="step-guide terminal-style">
                  <p><strong>操作方法：</strong></p>
                  <ol>
                    <li>点击工具栏<strong>“智能对齐”</strong>图标。</li>
                    <li>点击第一个对象（源）。<span class="comment">(注: 会自动穿透组，选中深层的板件)</span></li>
                    <li>点击第二个对象（目标）。</li>
                    <li>源对象会自动移动并对齐到目标对象。</li>
                  </ol>
                </div>
              </div>
              
              <div class="mode-block">
                <h4>● 模式 B: 整体贴合 (组到面/线) </h4>
                <p>用于将整合板件、组件贴合到指定的平面或参考线上。</p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <aside class="content-right">
        <div class="sticky-sidebar">
          <nav id="doc-nav" class="sidebar-card">
            <h3 class="card-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg>
              内容导航
            </h3>
            <ul class="nav-links">
              <li><a href="#core-features" class="nav-item">核心功能介绍</a></li>
            </ul>
          </nav>
          
          <section id="version-log" class="sidebar-card">
            <h3 class="card-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              版本演进
            </h3>
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
/* 全局容器：自适应背景色与文字颜色 */
.modern-detail-wrapper {
  color: var(--text-primary, #0f172a);
  background: var(--bg-fallback, #f8fafc);
  min-height: 100vh;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
}

/* 顶级黑夜模式自适应（如果宿主系统在 html/body 或父级加了 .dark 类） */
:deep(.dark) .modern-detail-wrapper,
.modern-detail-wrapper:has(deep(.dark)) {
  color: #f1f5f9;
  background: #090d16;
}

/* Hero头部：保证内边距充足，且不使用可能导致重叠的绝对定位或负边距 */
.plugin-hero {
  background: var(--bg-card, #ffffff);
  padding: 60px 24px 50px;
  border-bottom: 1px solid var(--border-color, #e2e8f0);
}
:deep(.dark) .plugin-hero {
  background: #111827;
  border-bottom: 1px solid #1f2937;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;
}

.hero-left { flex: 1.2; }
.hero-right { flex: 0.8; display: flex; justify-content: flex-end; }

/* 元数据与徽章 */
.hero-meta { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.status-badge { font-size: 11px; font-weight: 700; background: #2563eb; color: #ffffff; padding: 4px 12px; border-radius: 99px; letter-spacing: 0.5px; }
.pulse { box-shadow: 0 0 0 rgba(37,99,235, 0.4); animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(37,99,235, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(37,99,235, 0); } 100% { box-shadow: 0 0 0 0 rgba(37,99,235, 0); } }
.views-count { font-size: 12px; color: var(--text-secondary, #64748b); font-weight: 600; }

/* 标题与副标题 */
.plugin-title { font-size: 38px; font-weight: 800; color: var(--text-title, #0f172a); margin-bottom: 14px; letter-spacing: -0.5px; line-height: 1.2; }
:deep(.dark) .plugin-title { color: #ffffff; }
.plugin-subtitle { font-size: 15px; color: var(--text-secondary, #475569); margin-bottom: 30px; line-height: 1.6; }
:deep(.dark) .plugin-subtitle { color: #9ca3af; }

/* 下载按钮 */
.primary-download-btn { display: inline-flex; align-items: center; gap: 12px; background: #2563eb; color: #ffffff; padding: 14px 28px; border-radius: 99px; font-size: 14px; font-weight: 700; transition: all 0.3s ease; box-shadow: 0 10px 25px -5px rgba(37, 99, 235, 0.3); text-decoration: none; }
.primary-download-btn:hover { background: #1d4ed8; transform: translateY(-2px); }

/* B站视频外壳 */
.video-container { width: 100%; max-width: 480px; height: 280px; border-radius: 16px; overflow: hidden; position: relative; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.15); border: 1px solid var(--border-color, rgba(15,23,42,0.05)); background: #000; }
.bilibili-player { width: 100%; height: 242px; border: none; }
.player-controls { display: flex; align-items: center; gap: 12px; padding: 0 16px; height: 38px; background: #0f172a; color: rgba(255, 255, 255, 0.6); font-size: 11px; font-family: monospace; }
.progress-bar { flex: 1; height: 4px; background: rgba(255,255,255,0.2); border-radius: 2px; }
.progress-fill { width: 45%; height: 100%; background: #2563eb; border-radius: 2px; }

/* 核心正文排版：去除 margin-top 负值，改用标准 padding 上移 */
.main-layout { max-width: 1200px; width: 100%; margin: 0 auto; padding: 40px 24px 0; display: flex; gap: 32px; box-sizing: border-box; }
.content-left { flex: 1.7; min-width: 0; }
.content-right { flex: 1; min-width: 0; }

/* 通用自适应卡片组件 */
.card { background: var(--bg-card, #ffffff); border-radius: 20px; padding: 35px; border: 1px solid var(--border-color, rgba(15, 23, 42, 0.04)); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.02); }
:deep(.dark) .card { background: #111827; border-color: #1f2937; }

/* 内部小节标题 */
.section-title { font-size: 20px; font-weight: 700; color: var(--text-title, #0f172a); margin-bottom: 28px; display: flex; align-items: center; gap: 12px; }
:deep(.dark) .section-title { color: #ffffff; }
.section-icon { width: 24px; height: 24px; object-fit: contain; }

/* 详细特写展示 */
.features-detailed-list { display: flex; flex-direction: column; gap: 32px; }
.detailed-feature h3 { font-size: 17px; font-weight: 700; color: var(--text-title, #0f172a); margin-bottom: 12px; }
:deep(.dark) .detailed-feature h3 { color: #ffffff; }
.detailed-feature > p { color: var(--text-secondary, #475569); font-size: 14.5px; margin-bottom: 18px; line-height: 1.6; }
:deep(.dark) .detailed-feature > p { color: #9ca3af; }

.mode-block { margin-top: 20px; border-left: 3px solid var(--border-color, #e2e8f0); padding-left: 16px; }
:deep(.dark) .mode-block { border-left-color: #374151; }
.mode-block h4 { font-size: 14px; font-weight: 600; color: var(--text-title, #0f172a); margin-bottom: 8px; }
:deep(.dark) .mode-block h4 { color: #e5e7eb; }

/* 黑灰色命令终端框 */
.step-guide { font-family: SFMono-Regular, Consolas, Monaco, monospace; font-size: 13px; color: #cbd5e1; background: #0f172a; padding: 18px; border-radius: 12px; margin: 14px 0; border: 1px solid #1e293b; }
.terminal-style p, .terminal-style ol { line-height: 1.7; color: #cbd5e1; }
.terminal-style strong { color: #38bdf8; }
.terminal-style ol { padding-left: 18px; margin-top: 6px; list-style: decimal; }
.terminal-style .comment { color: #64748b; font-style: italic; }

/* 侧边栏卡片群 */
.sticky-sidebar { position: sticky; top: 24px; display: flex; flex-direction: column; gap: 24px; }
.sidebar-card { background: var(--bg-card, #ffffff); border-radius: 20px; padding: 24px; border: 1px solid var(--border-color, rgba(15, 23, 42, 0.04)); box-shadow: 0 10px 30px -10px rgba(0,0,0,0.02); }
:deep(.dark) .sidebar-card { background: #111827; border-color: #1f2937; }

.card-title { font-size: 14px; font-weight: 700; color: var(--text-title, #0f172a); margin-bottom: 16px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid var(--border-color, #f1f5f9); padding-bottom: 10px; }
:deep(.dark) .card-title { color: #ffffff; border-bottom-color: #1f2937; }

.nav-links { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0; margin: 0; }
.nav-item { font-size: 13.5px; color: var(--text-secondary, #475569); display: block; text-decoration: none; transition: color 0.2s; }
:deep(.dark) .nav-item { color: #9ca3af; }
.nav-item:hover { color: #2563eb; }

/* 版本演进树轴 */
.version-timeline { display: flex; flex-direction: column; gap: 20px; }
.version-item { border-left: 2px solid var(--border-color, #e2e8f0); padding-left: 16px; position: relative; }
:deep(.dark) .version-item { border-left-color: #374151; }
.version-item::after { content: ''; position: absolute; left: -5px; top: 5px; width: 8px; height: 8px; background: #2563eb; border-radius: 50%; }
.version-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.v-num { font-size: 13px; font-weight: 700; color: var(--text-title, #0f172a); font-family: monospace; }
:deep(.dark) .v-num { color: #ffffff; }
.v-date { font-size: 11px; color: #94a3b8; }
.v-notes { list-style: none; font-size: 12.5px; color: var(--text-secondary, #475569); display: flex; flex-direction: column; gap: 6px; padding-left: 0; margin: 0; }
:deep(.dark) .v-notes { color: #9ca3af; }

.empty-state { text-align: center; padding: 80px 0; color: #64748b; }

/* 响应式断点 */
@media (max-width: 968px) {
  .plugin-hero { padding: 40px 16px; }
  .hero-content { flex-direction: column; text-align: center; gap: 30px; }
  .hero-right { justify-content: center; width: 100%; }
  .main-layout { flex-direction: column; padding: 20px 16px 0; gap: 24px; }
}
</style>
