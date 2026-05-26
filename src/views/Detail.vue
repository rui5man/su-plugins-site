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
            <svg class="icon-download" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span class="btn-text">获取插件 {{ plugin.version }}</span>
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
                <p>用于将两个板件或组件进行精确对齐。</p>
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
/* ==========================================================================
   1. 全局基础排版与自适应背景（消灭白边）
   ========================================================================== */
.modern-detail-wrapper {
  color: #0f172a;
  background-color: #f8fafc;
  min-height: 100vh;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 完美匹配原本系统的工业级深邃蓝暗黑底色 */
:deep(.dark) .modern-detail-wrapper,
.modern-detail-wrapper:has(deep(.dark)) {
  color: #f1f5f9;
  background-color: #0b0f19 !important; /* 原生暗黑背景 */
}

/* ==========================================================================
   2. 顶部 Hero 区域样式提炼
   ========================================================================== */
.plugin-hero {
  background-color: #ffffff;
  padding: 50px 24px;
  border-bottom: 1px solid #e2e8f0;
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
:deep(.dark) .plugin-hero {
  background-color: #0e1422; /* 稍亮一点的衬托色 */
  border-bottom: 1px solid #1e293b;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 40px;
}

.hero-left { flex: 1.3; }
.hero-right { flex: 0.7; display: flex; justify-content: flex-end; }

/* 状态徽章 */
.hero-meta { display: flex; align-items: center; gap: 16px; margin-bottom: 20px; }
.status-badge { font-size: 11px; font-weight: 700; background: #2563eb; color: #ffffff; padding: 4px 12px; border-radius: 99px; letter-spacing: 0.5px; }
.pulse { box-shadow: 0 0 0 rgba(37,99,235, 0.4); animation: pulse 2s infinite; }
@keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(37,99,235, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(37,99,235, 0); } 100% { box-shadow: 0 0 0 0 rgba(37,99,235, 0); } }
.views-count { font-size: 12px; color: #64748b; font-weight: 600; }
:deep(.dark) .views-count { color: #4b5563; }

/* 标题结构 */
.plugin-title { font-size: 36px; font-weight: 800; color: #0f172a; margin-bottom: 14px; letter-spacing: -0.5px; line-height: 1.2; }
:deep(.dark) .plugin-title { color: #ffffff; }
.plugin-subtitle { font-size: 15px; color: #475569; margin-bottom: 28px; line-height: 1.6; }
:deep(.dark) .plugin-subtitle { color: #94a3b8; }

/* ==========================================================================
   3. 获取插件按钮（彻底修复成球问题）
   ========================================================================== */
.primary-download-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: #2563eb;
  color: #ffffff;
  /* 严格限制内边距与外形，严禁设置固定的等宽等高 */
  padding: 12px 24px; 
  border-radius: 10px;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.2s ease;
  box-shadow: 0 8px 20px -6px rgba(37, 99, 235, 0.4);
  text-decoration: none;
  white-space: nowrap; /* 确保文字绝对不换行缩水 */
  width: auto;
}
.primary-download-btn:hover { 
  background: #1d4ed8; 
  transform: translateY(-1.5px);
  box-shadow: 0 12px 24px -5px rgba(37, 99, 235, 0.5);
}
.icon-download { width: 18px; height: 18px; flex-shrink: 0; }
.btn-text { display: inline-block; }

/* B站视频组件 */
.video-container { width: 100%; max-width: 460px; height: 270px; border-radius: 14px; overflow: hidden; position: relative; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.12); border: 1px solid rgba(15,23,42,0.06); background: #000; }
:deep(.dark) .video-container { border-color: #1e293b; }
.bilibili-player { width: 100%; height: 234px; border: none; }
.player-controls { display: flex; align-items: center; gap: 12px; padding: 0 16px; height: 36px; background: #0f172a; color: rgba(255, 255, 255, 0.5); font-size: 11px; font-family: monospace; }

/* ==========================================================================
   4. 下方主体布局与卡片黑夜化
   ========================================================================== */
.main-layout { max-width: 1200px; width: 100%; margin: 0 auto; padding: 40px 24px 0; display: flex; gap: 32px; box-sizing: border-box; }
.content-left { flex: 1.6; min-width: 0; }
.content-right { flex: 1; min-width: 0; }

/* 通用自适应高阶卡片 */
.card { 
  background-color: #ffffff; 
  border-radius: 16px; 
  padding: 32px; 
  border: 1px solid rgba(15, 23, 42, 0.05);
  box-shadow: 0 4px 20px -4px rgba(0,0,0,0.01);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
:deep(.dark) .card { 
  background-color: #111827; /* 高级深灰蓝色卡片底色 */
  border-color: #1f2937; 
}

/* 小节标题 */
.section-title { font-size: 18px; font-weight: 700; color: #0f172a; margin-bottom: 24px; display: flex; align-items: center; gap: 10px; }
:deep(.dark) .section-title { color: #ffffff; }
.section-icon { width: 22px; height: 22px; object-fit: contain; }

/* 正文详情描述 */
.features-detailed-list { display: flex; flex-direction: column; gap: 28px; }
.detailed-feature h3 { font-size: 16px; font-weight: 700; color: #0f172a; margin-bottom: 10px; }
:deep(.dark) .detailed-feature h3 { color: #ffffff; }
.detailed-feature > p { color: #475569; font-size: 14px; margin-bottom: 16px; line-height: 1.6; }
:deep(.dark) .detailed-feature > p { color: #94a3b8; }

.mode-block { margin-top: 18px; border-left: 3px solid #e2e8f0; padding-left: 14px; }
:deep(.dark) .mode-block { border-left-color: #374151; }
.mode-block h4 { font-size: 13.5px; font-weight: 600; color: #1e293b; margin-bottom: 6px; }
:deep(.dark) .mode-block h4 { color: #cbd5e1; }

/* 终端指令块保持经典深色调 */
.step-guide { font-family: SFMono-Regular, Consolas, Monaco, monospace; font-size: 13px; color: #cbd5e1; background-color: #0f172a; padding: 16px; border-radius: 10px; margin: 12px 0; border: 1px solid #1e293b; }
.terminal-style strong { color: #38bdf8; }
.terminal-style ol { padding-left: 18px; margin-top: 4px; list-style: decimal; }
.terminal-style .comment { color: #64748b; font-style: italic; }

/* ==========================================================================
   5. 侧边栏与版本演进
   ========================================================================== */
.sticky-sidebar { position: sticky; top: 24px; display: flex; flex-direction: column; gap: 24px; }
.sidebar-card { 
  background-color: #ffffff; 
  border-radius: 16px; 
  padding: 24px; 
  border: 1px solid rgba(15, 23, 42, 0.05);
  transition: background-color 0.3s ease, border-color 0.3s ease;
}
:deep(.dark) .sidebar-card { 
  background-color: #111827; 
  border-color: #1f2937; 
}

.card-title { font-size: 13.5px; font-weight: 700; color: #0f172a; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px; }
:deep(.dark) .card-title { color: #ffffff; border-bottom-color: #1f2937; }

.nav-links { list-style: none; display: flex; flex-direction: column; gap: 10px; padding: 0; margin: 0; }
.nav-item { font-size: 13px; color: #475569; display: block; text-decoration: none; transition: color 0.2s; }
:deep(.dark) .nav-item { color: #94a3b8; }
.nav-item:hover { color: #2563eb; }

/* 时间轴线索 */
.version-timeline { display: flex; flex-direction: column; gap: 20px; }
.version-item { border-left: 2px solid #e2e8f0; padding-left: 16px; position: relative; }
:deep(.dark) .version-item { border-left-color: #374151; }
.version-item::after { content: ''; position: absolute; left: -5px; top: 5px; width: 8px; height: 8px; background: #2563eb; border-radius: 50%; }
.version-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
.v-num { font-size: 13px; font-weight: 700; color: #0f172a; font-family: monospace; }
:deep(.dark) .v-num { color: #ffffff; }
.v-date { font-size: 11px; color: #94a3b8; }
.v-notes { list-style: none; font-size: 12px; color: #475569; display: flex; flex-direction: column; gap: 6px; padding-left: 0; margin: 0; }
:deep(.dark) .v-notes { color: #94a3b8; }

.empty-state { text-align: center; padding: 80px 0; color: #64748b; }

/* 响应式适配 */
@media (max-width: 968px) {
  .plugin-hero { padding: 32px 16px; }
  .hero-content { flex-direction: column; text-align: center; gap: 24px; }
  .hero-right { justify-content: center; width: 100%; }
  .main-layout { flex-direction: column; padding: 24px 16px 0; gap: 24px; }
}
</style>
