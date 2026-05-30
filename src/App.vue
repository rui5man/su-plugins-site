<template>
  <div class="site-wrapper">
    <header class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">
          <svg class="logo-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="url(#logo-grad)" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 17L12 22L22 17" stroke="#3b82f6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 12L12 17L22 12" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <defs>
              <linearGradient id="logo-grad" x1="2" y1="2" x2="22" y2="12" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stop-color="#3b82f6"/>
                <stop offset="100%" stop-color="#1d4ed8"/>
              </linearGradient>
            </defs>
          </svg>
          <span class="logo-bold">SU插件库</span>
          <span class="logo-divider">/</span>
          <span class="logo-sub">工业级 SU 生态</span>
        </router-link>
        
        <nav class="nav-links">
          <router-link to="/" class="nav-item">插件中心</router-link>
          <span class="nav-status-badge">Enterprise 5.0</span>
          
          <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换到纯净明亮模式' : '切换到科技感暗黑模式'">
            <svg v-if="isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
          </button>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="footer">
      <div class="footer-content">
        <p class="copyright">© 2026 TG（TG CUSTOM）· 解决行业痛点</p>
        <p class="footer-hint">专为全屋定制工业级拆单及生产流水线打造</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(true);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  const theme = isDark.value ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('tg-theme', theme); // 记住用户的选择
};

onMounted(() => {
  // 初始化，优先读取上次记录，默认暗黑高质感
  const savedTheme = localStorage.getItem('tg-theme') || 'dark';
  isDark.value = savedTheme === 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
});
</script>

<style>
/* 核心：黑白双色动态系统参数配置 */
:root[data-theme="dark"] {
  --bg-main: #0b0f19;
  --bg-navbar: rgba(15, 23, 42, 0.75);
  --bg-card: #111827;
  --bg-footer: #070a12;
  --bg-control: rgba(15, 23, 42, 0.4);
  --bg-terminal: #070a12;
  --bg-item: rgba(15, 23, 42, 0.2);
  --bg-code: #1e293b;
  --bg-active: #1e3a5f;
  --bg-hero: #0f1422;
  --text-main: #f1f5f9;
  --text-muted: #94a3b8;
  --text-title: #ffffff;
  --text-code: #e2e8f0;
  --border-color: rgba(255, 255, 255, 0.08);
  --border-card-hover: rgba(59, 130, 246, 0.3);
  --shadow-card: 0 12px 30px rgba(0, 0, 0, 0.4);
}

:root[data-theme="light"] {
  --bg-main: #f8fafc;
  --bg-navbar: rgba(255, 255, 255, 0.8);
  --bg-card: #ffffff;
  --bg-footer: #f1f5f9;
  --bg-control: #ffffff;
  --bg-terminal: #070a12;
  --bg-item: #f1f5f9;
  --bg-code: #f1f5f9;
  --bg-active: #eff6ff;
  --bg-hero: #ffffff;
  --text-main: #334155;
  --text-muted: #64748b;
  --text-title: #0f172a;
  --text-code: #334155;
  --border-color: #e2e8f0;
  --border-card-hover: rgba(37, 99, 235, 0.4);
  --shadow-card: 0 10px 25px rgba(148, 163, 184, 0.12);
}

/* 基础架构自适应渲染 */
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
body { background-color: var(--bg-main); color: var(--text-main); line-height: 1.6; -webkit-font-smoothing: antialiased; transition: background-color 0.1s ease, color 0.1s ease; /* 加快过渡速度，减少残留灰 */ }
a { text-decoration: none; color: inherit; }

/* 导航栏 */
.navbar { background: var(--bg-navbar); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); border-bottom: 1px solid var(--border-color); position: sticky; top: 0; z-index: 100; transition: background-color 0.1s, border-color 0.1s; }
.nav-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 72px; display: flex; align-items: center; justify-content: space-between; }

.logo { display: flex; align-items: center; gap: 10px; font-size: 18px; }
.logo-icon { width: 24px; height: 24px; }
.logo-bold { font-weight: 700; color: var(--text-title); letter-spacing: -0.5px; }
.logo-divider { color: var(--text-muted); opacity: 0.4; font-size: 14px; }
.logo-sub { font-size: 13px; color: var(--text-muted); font-weight: 400; }

.nav-links { display: flex; align-items: center; gap: 20px; }
.nav-item { font-size: 14px; font-weight: 500; color: var(--text-muted); transition: color 0.2s; }
.nav-item:hover, .router-link-active { color: #3b82f6; }
.nav-status-badge { font-size: 11px; font-weight: 600; background: rgba(59,130,246,0.1); color: #3b82f6; border: 1px solid rgba(59,130,246,0.2); padding: 2px 10px; border-radius: 99px; }

/* 皮肤切换专属按钮 */
.theme-toggle { background: transparent; border: 1px solid var(--border-color); color: var(--text-main); padding: 8px; border-radius: 8px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.1s; }
.theme-toggle:hover { background: var(--bg-item); border-color: #3b82f6; color: #3b82f6; }

.main-content { max-width: 1200px; margin: 0 auto; padding: 40px 24px; min-height: calc(100vh - 240px); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.footer { border-top: 1px solid var(--border-color); padding: 40px 24px; background: var(--bg-footer); text-align: center; margin-top: 80px; transition: background-color 0.1s, border-color 0.1s; }
.footer-content { max-width: 1200px; margin: 0 auto; }
.copyright { color: var(--text-muted); font-size: 13px; font-weight: 500; }
.footer-hint { color: var(--text-muted); opacity: 0.6; font-size: 12px; margin-top: 4px; }
</style>
