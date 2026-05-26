<template>
  <div v-if="plugin" class="detail-wrapper">
    <router-link to="/" class="back-nav">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
      <span>返回产品集群控制台</span>
    </router-link>

    <div class="panel-header">
      <div class="panel-header-left">
        <div class="icon-shield">
          <img :src="plugin.icon" :alt="plugin.name" />
        </div>
        <div class="title-area">
          <div class="badge-group">
            <span class="badge-core">{{ plugin.category }}</span>
            <span class="badge-ver">PRO {{ plugin.version }}</span>
          </div>
          <h1>{{ plugin.name }}</h1>
          <p class="sub-specs">{{ plugin.tagline }}</p>
        </div>
      </div>
      <div class="panel-header-right">
        <span class="timestamp">最后编译：{{ plugin.updateDate }}</span>
      </div>
    </div>

    <div class="dashboard-grid">
      <div class="dashboard-main">
        <section class="doc-section">
          <h3 class="section-title">
            <span class="indicator"></span>核心驱动特征与底层逻辑
          </h3>
          <div class="features-block">
            <div v-for="(feature, idx) in plugin.features" :key="idx" class="feature-item-row">
              <div class="row-num">0{{ idx + 1 }}</div>
              <div class="row-content">{{ feature }}</div>
            </div>
          </div>
        </section>

        <section class="doc-section">
          <h3 class="section-title">
            <span class="indicator"></span>运行环境与安装交付规范
          </h3>
          <div class="code-terminal">
            <div class="terminal-header">
              <span class="dot red"></span><span class="dot yellow"></span><span class="dot green"></span>
              <span class="terminal-title">Deployment Guide</span>
            </div>
            <div class="terminal-body">
              <p class="comment"># 工业参数化插件安装规范说明</p>
              <p class="code-text">{{ plugin.installGuide }}</p>
            </div>
          </div>
        </section>
      </div>

      <div class="dashboard-sidebar">
        <div class="control-box">
          <h3>天工定制交付节点</h3>
          <div class="meta-list">
            <div class="meta-item">
              <span class="lbl">底层驱动</span>
              <span class="val monospace">Ruby API 核心</span>
            </div>
            <div class="meta-item">
              <span class="lbl">编译形态</span>
              <span class="val security">🔒 已全代码加密保护</span>
            </div>
            <div class="meta-item">
              <span class="lbl">运行授权</span>
              <span class="val ok-status">● 节点正常</span>
            </div>
          </div>
          <button class="primary-action" @click="triggerSecureRequest">
            索取商用授权安装包 (.rbz)
          </button>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="empty-state">
    <h3>未检索到相关生产节点描述</h3>
    <router-link to="/">返回系统控制中心</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { pluginsData } from '../data/plugins.js';

const route = useRoute();
const plugin = computed(() => {
  return pluginsData.find(p => p.id === route.params.id);
});

const triggerSecureRequest = () => {
  alert('【系统安全提示】天工定制全线插件已启动全代码加密。如需获取最新稳定版企业安装包(.rbz)或申请生产线绑定许可，请通过工厂内部对接通道联系开发团队获取凭证。');
};
</script>

<style scoped>
.back-nav { display: inline-flex; align-items: center; gap: 8px; font-size: 13px; color: #64748b; margin-bottom: 32px; transition: color 0.2s; }
.back-nav:hover { color: #3b82f6; }

/* 头部主面板 */
.panel-header { background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 14px; padding: 32px; display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 32px; }
.panel-header-left { display: flex; gap: 24px; align-items: center; }
.icon-shield { background: #0f172a; border: 1px solid rgba(255, 255, 255, 0.08); padding: 14px; border-radius: 14px; }
.icon-shield img { width: 56px; height: 56px; object-fit: cover; border-radius: 6px; }

.badge-group { display: flex; gap: 8px; margin-bottom: 8px; }
.badge-core { font-size: 11px; font-weight: 600; background: #1e3a8a; color: #93c5fd; padding: 2px 8px; border-radius: 4px; }
.badge-ver { font-size: 11px; font-weight: 600; background: rgba(255,255,255,0.06); color: #cbd5e1; padding: 2px 8px; border-radius: 4px; font-family: monospace; }

.title-area h1 { font-size: 28px; font-weight: 700; color: #ffffff; letter-spacing: -0.5px; margin-bottom: 4px; }
.sub-specs { font-size: 14px; color: #94a3b8; }
.timestamp { font-size: 12px; color: #475569; font-family: monospace; }

/* 仪表盘分栏布局 */
.dashboard-grid { display: flex; gap: 32px; }
.dashboard-main { flex: 2; }
.dashboard-sidebar { flex: 1; }

.doc-section { margin-bottom: 40px; }
.section-title { font-size: 16px; font-weight: 600; color: #ffffff; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
.indicator { width: 3px; height: 14px; background: #3b82f6; border-radius: 2px; }

/* 列表美化 */
.features-block { display: flex; flex-direction: column; gap: 12px; }
.feature-item-row { background: rgba(15,23,42,0.2); border: 1px solid rgba(255,255,255,0.03); border-radius: 8px; padding: 16px 20px; display: flex; gap: 16px; align-items: flex-start; }
.row-num { font-family: monospace; font-weight: 700; color: #3b82f6; font-size: 14px; padding-top: 1px; }
.row-content { font-size: 13.5px; color: #cbd5e1; line-height: 1.6; }

/* 伪终端模拟器 */
.code-terminal { background: #070a12; border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 10px; overflow: hidden; }
.terminal-header { background: rgba(15,23,42,0.6); padding: 10px 16px; display: flex; align-items: center; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.03); }
.dot { width: 10px; height: 10px; border-radius: 50%; }
.dot.red { background: #ef4444; }
.dot.yellow { background: #f59e0b; }
.dot.green { background: #10b981; }
.terminal-title { color: #475569; font-size: 11px; font-family: monospace; margin-left: 10px; }
.terminal-body { padding: 20px; font-family: monospace; font-size: 13px; line-height: 1.7; }
.comment { color: #475569; }
.code-text { color: #a1a1aa; white-space: pre-line; }

/* 右侧控制栏 */
.control-box { background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 14px; padding: 24px; position: sticky; top: 100px; }
.control-box h3 { font-size: 15px; font-weight: 600; color: #ffffff; margin-bottom: 20px; }
.meta-list { display: flex; flex-direction: column; gap: 14px; margin-bottom: 24px; }
.meta-item { display: flex; justify-content: space-between; font-size: 12.5px; }
.lbl { color: #64748b; }
.val { color: #cbd5e1; font-weight: 500; }
.val.monospace { font-family: monospace; }
.val.security { color: #fbbf24; }
.val.ok-status { color: #10b981; font-weight: 600; }

.primary-action { width: 100%; background: #3b82f6; color: #ffffff; border: none; padding: 14px; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: background 0.2s; box-shadow: 0 4px 12px rgba(59, 130, 246, 0.2); }
.primary-action:hover { background: #2563eb; }

.empty-state { text-align: center; padding: 80px 0; color: #64748b; }
.empty-state a { color: #3b82f6; text-decoration: underline; margin-top: 10px; display: inline-block; }

@media (max-width: 868px) {
  .dashboard-grid { flex-direction: column; }
  .panel-header { flex-direction: column; gap: 16px; }
}
</style>
