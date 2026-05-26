<template>
  <div class="home-container">
    <section class="hero">
      <h1>让 SketchUp 拥有真正的工业级灵魂</h1>
      <p>面向全屋定制、自动化拆单及效率工程的高性能参数化插件集</p>
      <div class="search-box">
        <input type="text" v-model="searchQuery" placeholder="搜索你需要的 SU 插件功能..." />
      </div>
    </section>

    <div class="plugin-grid">
      <div v-for="plugin in filteredPlugins" :key="plugin.id" class="plugin-card">
        <div class="card-header">
          <img :src="plugin.icon" :alt="plugin.name" class="plugin-icon" />
          <div class="card-meta">
            <span class="category-tag">{{ plugin.category }}</span>
            <span class="version-tag">{{ plugin.version }}</span>
          </div>
        </div>
        <h2 class="plugin-title">{{ plugin.name }}</h2>
        <p class="plugin-desc">{{ plugin.summary }}</p>
        <router-link :to="'/plugin/' + plugin.id" class="action-btn">
          查看功能详情 & 接入说明 ➔
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
.hero { text-align: center; margin-bottom: 60px; }
.hero h1 { font-size: 36px; color: #0f172a; margin-bottom: 12px; letter-spacing: -0.5px; }
.hero p { font-size: 16px; color: #64748b; margin-bottom: 24px; }
.search-box input { width: 100%; max-width: 500px; padding: 12px 20px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 15px; outline: none; transition: border 0.2s; }
.search-box input:focus { border-color: #2563eb; box-shadow: 0 0 0 3px rgba(37,99,235,0.1); }

.plugin-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 30px; }
.plugin-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; padding: 24px; display: flex; flex-direction: column; transition: transform 0.2s, box-shadow 0.2s; }
.plugin-card:hover { transform: translateY(-4px); box-shadow: 0 12px 20px -8px rgba(0,0,0,0.05); }

.card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px; }
.plugin-icon { width: 56px; height: 56px; border-radius: 10px; object-fit: cover; }
.card-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 6px; }
.category-tag { font-size: 11px; font-weight: 600; background: #eff6ff; color: #1d4ed8; padding: 2px 8px; border-radius: 4px; }
.version-tag { font-size: 11px; color: #64748b; background: #f1f5f9; padding: 2px 6px; border-radius: 4px; }

.plugin-title { font-size: 20px; color: #0f172a; margin-bottom: 8px; font-weight: 600; }
.plugin-desc { font-size: 14px; color: #475569; margin-bottom: 24px; flex-grow: 1; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

.action-btn { background: #0f172a; color: #fff; text-align: center; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: 500; transition: background 0.2s; }
.action-btn:hover { background: #2563eb; }
</style>