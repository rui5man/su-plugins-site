<template>
  <div v-if="plugin" class="detail-container">
    <router-link to="/" class="back-link">➔ 返回插件市场首页</router-link>

    <div class="detail-header">
      <img :src="plugin.icon" :alt="plugin.name" class="detail-large-icon" />
      <div class="header-main">
        <div class="badge-row">
          <span class="category-badge">{{ plugin.category }}</span>
          <span class="version-badge">当前稳定版：{{ plugin.version }}</span>
          <span class="date-badge">更新于 {{ plugin.updateDate }}</span>
        </div>
        <h1>{{ plugin.name }}</h1>
        <p class="tagline">{{ plugin.tagline }}</p>
      </div>
    </div>

    <hr class="divider" />

    <div class="content-layout">
      <div class="content-left">
        <section class="section">
          <h3>核心算法与核心功能</h3>
          <ul class="feature-list">
            <li v-for="(feature, idx) in plugin.features" :key="idx">
              {{ feature }}
            </li>
          </ul>
        </section>

        <section class="section">
          <h3>快速安装与环境配置</h3>
          <div class="guide-box">
            <p>{{ plugin.installGuide }}</p>
          </div>
        </section>
      </div>

      <div class="content-right">
        <div class="sticky-sidebar">
          <h4>天工定制技术交付</h4>
          <div class="status-item">
            <span>交付状态</span>
            <span class="status-ok">● 运行稳定</span>
          </div>
          <div class="status-item">
            <span>核心架构</span>
            <span>Ruby API / 全参数化</span>
          </div>
          <button class="download-button" @click="handleDownload">获取/更新此扩展插件</button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>未找到指定的插件文档</h2>
    <p>该插件可能已被整合或编码已变更。</p>
    <router-link to="/">返回首页查看全部</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { pluginsData } from '../data/plugins.js';

const route = useRoute();
// 动态根据 URL 中的 id 匹配对应数据
const plugin = computed(() => {
  return pluginsData.find(p => p.id === route.params.id);
});

const handleDownload = () => {
  alert('您好！如需获取对应的系统安装包 (.rbz) 或授权激活码，请通过天工定制内部渠道取得授权。');
};
</script>

<style scoped>
.back-link { display: inline-block; transform: rotate(180deg); font-size: 14px; color: #64748b; margin-bottom: 24px; transition: color 0.2s; }
.back-link:hover { color: #2563eb; }

.detail-header { display: flex; gap: 24px; align-items: center; margin-top: 12px; }
.detail-large-icon { width: 80px; height: 80px; border-radius: 14px; }
.header-main h1 { font-size: 30px; color: #0f172a; margin: 6px 0; font-weight: 700; }
.tagline { font-size: 16px; color: #475569; }

.badge-row { display: flex; gap: 10px; font-size: 12px; }
.category-badge { background: #eff6ff; color: #1d4ed8; padding: 2px 8px; border-radius: 4px; font-weight: 500; }
.version-badge { background: #f1f5f9; color: #475569; padding: 2px 8px; border-radius: 4px; }
.date-badge { color: #94a3b8; padding: 2px 0; }

.divider { border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0; }

.content-layout { display: flex; gap: 40px; }
.content-left { flex: 2; }
.content-right { flex: 1; }

.section { margin-bottom: 36px; }
.section h3 { font-size: 18px; color: #0f172a; margin-bottom: 16px; font-weight: 600; }
.feature-list { list-style: none; }
.feature-list li { background: #fff; border: 1px solid #e2e8f0; padding: 14px 18px; border-radius: 8px; margin-bottom: 10px; font-size: 14px; color: #334155; }

.guide-box { background: #f8fafc; border-left: 4px solid #64748b; padding: 16px; border-radius: 0 8px 8px 0; font-size: 14px; }

.sticky-sidebar { background: #fff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 12px; position: sticky; top: 100px; }
.sticky-sidebar h4 { font-size: 15px; margin-bottom: 16px; color: #0f172a; }
.status-item { display: flex; justify-content: space-between; font-size: 13px; margin-bottom: 12px; padding-bottom: 12px; border-bottom: 1px dashed #e2e8f0; }
.status-ok { color: #10b981; font-weight: 600; }
.download-button { width: 100%; background: #2563eb; color: #fff; border: none; padding: 12px; border-radius: 6px; font-weight: 500; cursor: pointer; margin-top: 10px; transition: background 0.2s; }
.download-button:hover { background: #1d4ed8; }

.not-found { text-align: center; padding: 60px 20px; }
.not-found h2 { color: #0f172a; margin-bottom: 10px; }
.not-found a { color: #2563eb; text-decoration: underline; }

@media (max-width: 768px) {
  .content-layout { flex-direction: column; }
  .detail-header { flex-direction: column; text-align: center; }
  .badge-row { justify-content: center; flex-wrap: wrap; }
}
</style>