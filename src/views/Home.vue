<template>
  <div class="home-container">
    <section class="hero-section">
      <h1 class="hero-title">SU 插件市场</h1>
      <p class="hero-subtitle">严选工业级 SketchUp 插件，为全屋定制与生产线提供专业工具链</p>
      <div class="search-wrapper">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        <input v-model="searchQuery" type="text" placeholder="搜索插件名称、功能描述..." />
      </div>
    </section>

    <div class="plugin-grid">
      <router-link
        v-for="plugin in filteredPlugins"
        :key="plugin.id"
        :to="'/plugin/' + plugin.id"
        class="plugin-card"
      >
        <div class="card-cover">
          <img :src="plugin.coverImage" :alt="plugin.name" loading="lazy" />
          <span v-if="plugin.category" class="cover-badge">{{ plugin.category }}</span>
        </div>

        <div class="card-body">
          <h2 class="card-title">{{ plugin.name }}</h2>
          <p class="card-tagline">{{ plugin.tagline }}</p>
          <p class="card-desc">{{ plugin.summary }}</p>
        </div>

        <div class="card-footer">
          <span class="meta-item version">{{ plugin.version }}</span>
          <span class="meta-sep">|</span>
          <span class="meta-item views">
            <svg class="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            {{ formatViews(plugin.views) }}
          </span>
          <span class="meta-sep">|</span>
          <span class="meta-item date">{{ plugin.updateDate }}</span>
        </div>
      </router-link>
    </div>

    <div v-if="filteredPlugins.length === 0" class="empty-state">
      <p>未找到匹配的插件</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { pluginsData } from '../data/plugins.js';

const searchQuery = ref('');

const filteredPlugins = computed(() => {
  const q = searchQuery.value.toLowerCase();
  if (!q) return pluginsData;
  return pluginsData.filter(p =>
    p.name.toLowerCase().includes(q) ||
    p.summary.toLowerCase().includes(q) ||
    p.tagline.toLowerCase().includes(q) ||
    (p.category && p.category.toLowerCase().includes(q))
  );
});

function formatViews(n) {
  if (n >= 10000) return (n / 10000).toFixed(1) + 'w';
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k';
  return String(n);
}
</script>

<style scoped>
.home-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }

/* ---- Hero ---- */
.hero-section { text-align: center; padding: 56px 0 48px; }
.hero-title {
  font-size: 32px; font-weight: 800; color: var(--text-title, #0f172a);
  letter-spacing: -0.5px; margin-bottom: 10px;
}
.hero-subtitle { font-size: 15px; color: var(--text-muted, #64748b); margin-bottom: 32px; }

.search-wrapper { max-width: 480px; margin: 0 auto; position: relative; }
.search-icon { position: absolute; left: 14px; top: 50%; transform: translateY(-50%); width: 17px; height: 17px; color: var(--text-muted, #94a3b8); }
.search-wrapper input {
  width: 100%; background: var(--bg-card, #fff); border: 1px solid var(--border-color, #e2e8f0);
  padding: 11px 18px 11px 42px; border-radius: 8px; font-size: 13.5px;
  color: var(--text-title, #0f172a); outline: none; transition: border-color 0.2s, box-shadow 0.2s;
}
.search-wrapper input:focus { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.1); }

/* ---- Grid ---- */
.plugin-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding-bottom: 60px;
}

/* ---- Card ---- */
.plugin-card {
  background: var(--bg-card, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03);
}
.plugin-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 28px rgba(0,0,0,0.08), 0 4px 10px rgba(0,0,0,0.04);
  border-color: var(--border-card-hover, rgba(59,130,246,0.25));
}

/* ---- Cover ---- */
.card-cover {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  background: var(--bg-main, #f1f5f9);
}
.card-cover img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.35s ease;
}
.plugin-card:hover .card-cover img { transform: scale(1.04); }

.cover-badge {
  position: absolute; top: 10px; left: 10px;
  font-size: 11px; font-weight: 600;
  background: rgba(0,0,0,0.55); color: #fff;
  padding: 3px 10px; border-radius: 4px;
  letter-spacing: 0.3px;
  backdrop-filter: blur(4px);
}

/* ---- Body ---- */
.card-body { padding: 16px 18px 0; flex: 1; display: flex; flex-direction: column; }
.card-title {
  font-size: 16px; font-weight: 700; color: var(--text-title, #0f172a);
  margin-bottom: 4px; letter-spacing: -0.2px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
}
.card-tagline {
  font-size: 12.5px; color: #3b82f6; font-weight: 500;
  margin-bottom: 8px;
}
.card-desc {
  font-size: 13px; color: var(--text-muted, #64748b); line-height: 1.55;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
  overflow: hidden; margin-bottom: 4px;
}

/* ---- Footer ---- */
.card-footer {
  display: flex; align-items: center; gap: 0;
  padding: 12px 18px 14px; margin-top: auto;
  border-top: 1px solid var(--border-color, #f1f5f9);
  font-size: 12px; color: var(--text-muted, #94a3b8);
}
.meta-item { display: inline-flex; align-items: center; gap: 4px; white-space: nowrap; }
.meta-item.version { font-family: "SF Mono", "Consolas", monospace; font-weight: 600; color: var(--text-muted, #64748b); }
.meta-sep { margin: 0 8px; color: var(--border-color, #e2e8f0); font-size: 11px; user-select: none; }
.eye-icon { width: 13px; height: 13px; flex-shrink: 0; opacity: 0.6; }
.meta-item.views { gap: 3px; }

/* ---- Empty ---- */
.empty-state { text-align: center; padding: 60px 0; color: var(--text-muted, #94a3b8); font-size: 14px; }

/* ---- Responsive ---- */
@media (max-width: 900px) {
  .plugin-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
  .card-body { padding: 14px 14px 0; }
  .card-footer { padding: 10px 14px 12px; }
}
@media (max-width: 560px) {
  .plugin-grid { grid-template-columns: 1fr; }
  .hero-title { font-size: 26px; }
}
</style>
