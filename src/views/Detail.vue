<template>
  <div v-if="plugin" class="modern-detail-wrapper">
    <header class="plugin-hero">
      <div class="hero-content">
        <div class="hero-left">
          <div class="hero-meta">
            <span class="status-badge">精品插件</span>
            <span class="views-count">● 2.5k VIEWS</span>
          </div>
          <h1 class="plugin-title">{{ plugin.name }}</h1>
          <p class="plugin-subtitle">{{ plugin.tagline }}</p>
          
          <a :href="plugin.rbzUrl || '#'" class="primary-download-btn" @click.prevent="handleSecureDownload">
            <svg class="icon-download" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            <span class="btn-text">获取插件 {{ plugin.version }}</span>
          </a>
        </div>
        
        <div class="hero-right">
          <div class="video-container">
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
          <h2 class="section-title">核心功能介绍</h2>
          <div
            v-if="renderedHtml"
            class="markdown-body"
            v-html="renderedHtml"
          ></div>
          <p v-else class="empty-features">暂无功能介绍</p>
        </div>
      </article>

      <aside class="content-right">
        <div class="sticky-sidebar">
          <nav id="doc-nav" class="sidebar-card">
            <h3 class="sidebar-title">内容导航</h3>
            <div v-if="tocItems.length" class="toc-tree">
              <div
                v-for="(item, idx) in tocItems"
                :key="idx"
                class="toc-node"
                :class="{
                  'toc-h2': item.level === 2,
                  'toc-h3': item.level === 3,
                }"
              >
                <span class="toc-line"></span>
                <a
                  :href="'#' + item.id"
                  class="toc-link"
                  :class="{ active: activeId === item.id }"
                  @click.prevent="scrollToHeading(item.id)"
                >{{ item.text }}</a>
              </div>
            </div>
            <p v-else class="empty-features">暂无目录</p>
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
import { computed, ref, watch, onMounted, onUnmounted, nextTick } from 'vue';
import { pluginsData } from '../data/plugins.js';
import { marked } from 'marked';

marked.setOptions({ breaks: true, gfm: true });

const route = useRoute();
const plugin = computed(() => {
  return pluginsData.find(p => p.id.toLowerCase() === route.params.id.toLowerCase());
});

const renderedHtml = computed(() => {
  const md = plugin.value?.featureMd;
  if (!md || !md.trim()) return '';
  const raw = marked.parse(md);
  return injectHeadingIds(raw);
});

function injectHeadingIds(html) {
  const used = {};
  return html.replace(
    /<(h[23])([^>]*)>([^<]*)<\/\1>/gi,
    (match, tag, attrs, text) => {
      let id = text
        .replace(/<[^>]+>/g, '')
        .replace(/[^\w一-鿿]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .toLowerCase();
      if (used[id] !== undefined) {
        used[id]++;
        id = id + '-' + used[id];
      } else {
        used[id] = 0;
      }
      return '<' + tag + attrs + ' id="' + id + '">' + text + '</' + tag + '>';
    }
  );
}

const tocItems = computed(() => {
  const md = plugin.value?.featureMd;
  if (!md || !md.trim()) return [];
  const items = [];
  const used = {};
  const headingRe = /^(#{2,3})\s+(.+)$/gm;
  let m;
  while ((m = headingRe.exec(md)) !== null) {
    const level = m[1].length;
    const text = m[2].replace(/[`*_~\[\]]/g, '').trim();
    if (!text) continue;
    let id = text
      .replace(/[^\w一-鿿]+/g, '-')
      .replace(/^-+|-+$/g, '')
      .toLowerCase();
    if (used[id] !== undefined) {
      used[id]++;
      id = id + '-' + used[id];
    } else {
      used[id] = 0;
    }
    items.push({ level, text, id });
  }
  return items;
});

const activeId = ref('');

let observer = null;

function setupScrollSpy() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          activeId.value = entry.target.id;
        }
      }
    },
    { rootMargin: '-60px 0px -70% 0px' }
  );
  const headings = document.querySelectorAll('.markdown-body h2[id], .markdown-body h3[id]');
  headings.forEach((h) => observer.observe(h));
}

watch(renderedHtml, async () => {
  await nextTick();
  setupScrollSpy();
});

onMounted(() => {
  nextTick(() => setupScrollSpy());
});

onUnmounted(() => {
  if (observer) observer.disconnect();
});

function scrollToHeading(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

const handleSecureDownload = () => {
  if (plugin.value && plugin.value.rbzUrl) {
    window.open(plugin.value.rbzUrl, '_blank');
  }
};
</script>

<style scoped>
/* 所有颜色通过 CSS 变量驱动，自动响应 data-theme 切换 */

.modern-detail-wrapper {
  color: var(--text-main);
  background-color: var(--bg-main);
  min-height: 100vh;
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

/* ── Hero ── */
.plugin-hero {
  background-color: var(--bg-hero);
  padding: 60px 24px;
  border-bottom: 1px solid var(--border-color);
}

.hero-content { max-width: 1200px; margin: 0 auto; display: flex; align-items: center; gap: 40px; }
.hero-left { flex: 1.2; }
.hero-right { flex: 0.8; display: flex; justify-content: flex-end; }

.hero-meta { display: flex; align-items: center; gap: 16px; margin-bottom: 18px; }
.status-badge { font-size: 11px; font-weight: 700; background: #2563eb; color: #fff; padding: 4px 12px; border-radius: 4px; letter-spacing: 0.5px; }
.views-count { font-size: 12px; color: var(--text-muted); font-weight: 600; }

.plugin-title { font-size: 38px; font-weight: 800; color: var(--text-title); margin-bottom: 12px; letter-spacing: -0.5px; }
.plugin-subtitle { font-size: 15px; color: var(--text-main); margin-bottom: 32px; line-height: 1.6; }

/* ── Download button ── */
.primary-download-btn {
  display: inline-flex; align-items: center; justify-content: center; gap: 10px;
  background: #2563eb; color: #fff; padding: 12px 28px; border-radius: 8px;
  font-size: 14px; font-weight: 700; text-decoration: none; white-space: nowrap;
  transition: all 0.2s ease;
}
.primary-download-btn:hover { background: #1d4ed8; transform: translateY(-1px); }
.icon-download { width: 18px; height: 18px; flex-shrink: 0; }
.btn-text { display: inline-block; line-height: 1; }

/* ── Video ── */
.video-container {
  width: 100%; max-width: 480px; height: 280px; border-radius: 12px;
  overflow: hidden; position: relative; border: 1px solid var(--border-color); background: #000;
}
.bilibili-player { width: 100%; height: 244px; border: none; }
.player-controls {
  display: flex; align-items: center; gap: 12px; padding: 0 16px; height: 36px;
  background: var(--bg-terminal); color: rgba(255,255,255,0.4); font-size: 11px; font-family: monospace;
}

/* ── Content layout ── */
.main-layout { max-width: 1200px; width: 100%; margin: 0 auto; padding: 40px 24px 0; display: flex; gap: 32px; box-sizing: border-box; }
.content-left { flex: 1.6; min-width: 0; }
.content-right { flex: 1; min-width: 0; }

.card {
  background-color: var(--bg-card); border-radius: 12px; padding: 36px;
  border: 1px solid var(--border-color);
}

.section-title {
  font-size: 22px; font-weight: 800; color: var(--text-title); margin-bottom: 28px;
  border-left: 4px solid #2563eb; padding-left: 12px; line-height: 1.2;
}

/* ── Markdown ── */
.markdown-body { line-height: 1.85; color: var(--text-main); }

.markdown-body :deep(h2) {
  font-size: 20px; font-weight: 700; color: var(--text-title);
  margin: 32px 0 12px; padding-bottom: 8px; border-bottom: 1px solid var(--border-color);
}
.markdown-body :deep(h3) { font-size: 16px; font-weight: 600; color: var(--text-main); margin: 24px 0 8px; }
.markdown-body :deep(p) { margin: 8px 0; }
.markdown-body :deep(ul), .markdown-body :deep(ol) { padding-left: 24px; margin: 8px 0; }
.markdown-body :deep(li) { margin: 4px 0; }

.markdown-body :deep(code) {
  background: var(--bg-code); color: var(--text-code); padding: 2px 6px; border-radius: 4px;
  font-family: "Consolas", "Courier New", monospace; font-size: 13px;
}
.markdown-body :deep(pre) {
  background: var(--bg-terminal); color: #cbd5e1; padding: 16px; border-radius: 6px;
  overflow-x: auto; margin: 12px 0;
}
.markdown-body :deep(pre code) { background: none; padding: 0; }

.markdown-body :deep(blockquote) {
  border-left: 4px solid #2563eb; padding-left: 16px; margin: 12px 0; color: var(--text-muted);
}
.markdown-body :deep(strong) { font-weight: 700; }
.markdown-body :deep(a) { color: #2563eb; text-decoration: underline; }

.empty-features { color: var(--text-muted); font-size: 13px; }

/* ── Sidebar ── */
.sticky-sidebar { position: sticky; top: 24px; display: flex; flex-direction: column; gap: 24px; }
.sidebar-card {
  background-color: var(--bg-card); border-radius: 12px; padding: 24px;
  border: 1px solid var(--border-color);
}
.sidebar-title {
  font-size: 14px; font-weight: 800; color: var(--text-title); margin-bottom: 16px;
  padding-bottom: 10px; border-bottom: 1px solid var(--border-color);
}

/* ── TOC ── */
.toc-tree { position: relative; padding-left: 4px; }
.toc-node { position: relative; display: flex; align-items: flex-start; line-height: 1.5; }
.toc-node.toc-h2 { margin-top: 2px; }
.toc-node.toc-h3 { padding-left: 20px; }

.toc-link {
  display: block; font-size: 13px; color: var(--text-main); text-decoration: none;
  padding: 3px 6px 3px 18px; border-left: 2px solid var(--border-color);
  border-radius: 0 4px 4px 0; transition: all 0.2s ease; width: 100%;
}
.toc-node.toc-h3 .toc-link { font-size: 12.5px; margin-left: 6px; padding-left: 14px; }
.toc-node:last-child .toc-link { border-left-color: transparent; }
.toc-node.toc-h2 .toc-link { font-weight: 600; }

.toc-link:hover { color: #2563eb; border-left-color: #2563eb; background: var(--bg-item); }
.toc-link.active { color: #2563eb; border-left-color: #2563eb; background: var(--bg-active); }

.toc-node.toc-h2::before {
  content: ''; position: absolute; left: 0; top: 8px; width: 6px; height: 6px;
  background: #2563eb; border-radius: 50%; z-index: 1;
}
.toc-node.toc-h3::before {
  content: ''; position: absolute; left: 20px; top: 9px; width: 4px; height: 4px;
  background: var(--text-muted); border-radius: 50%; z-index: 1;
}

/* ── Version timeline ── */
.version-timeline { display: flex; flex-direction: column; gap: 24px; }
.version-item { border-left: 2px solid var(--border-color); padding-left: 16px; position: relative; }
.version-item::after {
  content: ''; position: absolute; left: -5px; top: 5px; width: 8px; height: 8px;
  background: #2563eb; border-radius: 50%;
}
.version-header { display: flex; justify-content: space-between; margin-bottom: 10px; }
.v-num { font-size: 13px; font-weight: 700; color: var(--text-title); font-family: monospace; }
.v-date { font-size: 12px; color: var(--text-muted); }
.v-notes {
  list-style: none; font-size: 12.5px; color: var(--text-main);
  display: flex; flex-direction: column; gap: 6px; padding-left: 0; margin: 0;
}

.empty-state { text-align: center; padding: 80px 0; color: var(--text-muted); }

@media (max-width: 968px) {
  .hero-content { flex-direction: column; text-align: center; }
  .hero-right { justify-content: center; width: 100%; }
  .main-layout { flex-direction: column; padding: 24px 16px 0; }
}
</style>
