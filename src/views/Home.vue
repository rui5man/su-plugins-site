<template>
  <div class="home-container">
    <section class="hero-section">
      <div class="glow-effect"></div>
      <h1 class="gradient-title">让 SketchUp 拥有全参数化工业灵魂</h1>
      <p class="hero-subtitle">面向全屋定制、数字化拆单及高性能效率工程的闭环控制系统</p>
      
      <div class="search-wrapper">
        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        <input type="text" v-model="searchQuery" placeholder="搜索工业级全参数化生产插件功能..." />
      </div>
    </section>

    <div class="plugin-grid">
      <div v-for="plugin in filteredPlugins" :key="plugin.id" class="glass-card">
        <div class="card-glow"></div>
        <div class="card-header">
          <div class="icon-wrapper">
            <img :src="plugin.icon" :alt="plugin.name" />
          </div>
          <div class="meta-zone">
            <span class="category-tag">{{ plugin.category }}</span>
            <span class="version-tag">{{ plugin.version }}</span>
          </div>
        </div>
        <h2 class="card-title">{{ plugin.name }}</h2>
        <p class="card-desc">{{ plugin.summary }}</p>
        
        <router-link :to="'/plugin/' + plugin.id" class="neon-btn">
          <span>进入技术规格专页</span>
          <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { pluginsData } from '../data/plugins.js';

const searchQuery = ref('');
const filteredPlugins = computed(() => {
  return pluginsData.filter(p => 
    p.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    p.summary.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});
</script>

<style scoped>
.home-container { position: relative; }

/* 头部背光效果 */
.hero-section { text-align: center; position: relative; padding: 60px 0 80px; }
.glow-effect { position: absolute; top: -100px; left: 50%; transform: translateX(-50%); width: 600px; height: 260px; background: radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%); filter: blur(40px); pointer-events: none; }

.gradient-title { font-size: 44px; font-weight: 800; background: linear-gradient(135deg, #ffffff 30%, #94a3b8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; letter-spacing: -1px; margin-bottom: 16px; }
.hero-subtitle { font-size: 16px; color: #94a3b8; max-width: 600px; margin: 0 auto 36px; font-weight: 400; }

/* 搜索框高级渲染 */
.search-wrapper { max-width: 520px; margin: 0 auto; position: relative; }
.search-icon { position: absolute; left: 16px; top: 50%; transform: translateY(-50%); width: 18px; height: 18px; color: #475569; }
.search-wrapper input { width: 100%; background: rgba(15, 23, 42, 0.6); border: 1px solid rgba(255, 255, 255, 0.08); padding: 14px 20px 14px 48px; border-radius: 10px; font-size: 14px; color: #ffffff; outline: none; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.search-wrapper input:focus { border-color: #3b82f6; box-shadow: 0 0 20px rgba(59, 130, 246, 0.15); background: rgba(15, 23, 42, 0.9); }

/* 高级精致卡片 */
.plugin-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(380px, 1fr)); gap: 24px; }
.glass-card { background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 14px; padding: 28px; display: flex; flex-direction: column; position: relative; overflow: hidden; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.glass-card:hover { transform: translateY(-5px); border-color: rgba(59, 130, 246, 0.3); box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4); }

.card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; }
.icon-wrapper { background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%); border: 1px solid rgba(255, 255, 255, 0.08); padding: 10px; border-radius: 12px; }
.icon-wrapper img { width: 44px; height: 44px; border-radius: 6px; object-fit: cover; }

.meta-zone { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
.category-tag { font-size: 11px; font-weight: 600; background: rgba(59,130,246,0.1); color: #60a5fa; padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(59,130,246,0.15); }
.version-tag { font-size: 11px; color: #64748b; font-family: monospace; }

.card-title { font-size: 20px; font-weight: 600; color: #ffffff; margin-bottom: 10px; letter-spacing: -0.3px; }
.card-desc { font-size: 13.5px; color: #94a3b8; line-height: 1.6; margin-bottom: 28px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

/* 炫酷大厂按钮微交互 */
.neon-btn { display: flex; align-items: center; justify-content: space-between; background: #1e293b; color: #f1f5f9; padding: 12px 16px; border-radius: 8px; font-size: 13px; font-weight: 600; border: 1px solid rgba(255, 255, 255, 0.05); transition: all 0.2s; }
.neon-btn:hover { background: #3b82f6; color: #ffffff; border-color: #3b82f6; }
.arrow-icon { width: 14px; height: 14px; transition: transform 0.2s; }
.neon-btn:hover .arrow-icon { transform: translateX(4px); }
</style>
