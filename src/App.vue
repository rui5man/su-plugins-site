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
          <span class="logo-bold">天工定制</span>
          <span class="logo-divider">/</span>
          <span class="logo-sub">工业级 SU 生态</span>
        </router-link>
        <nav class="nav-links">
          <router-link to="/" class="nav-item">插件中心</router-link>
          <span class="nav-status-badge">Enterprise 5.0</span>
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
        <p class="copyright">© 2026 天工定制（TIANGONG CUSTOM）· 参数化自动化技术中心</p>
        <p class="footer-hint">专为全屋定制工业级拆单及生产流水线打造</p>
      </div>
    </footer>
  </div>
</template>

<style>
/* 全局大厂现代化 UI 规范 */
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; }
body { background-color: #0b0f19; color: #f1f5f9; line-height: 1.6; -webkit-font-smoothing: antialiased; }
a { text-decoration: none; color: inherit; }

/* 导航栏：毛玻璃特效 */
.navbar { background: rgba(15, 23, 42, 0.75); -webkit-backdrop-filter: blur(12px); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255, 255, 255, 0.06); position: sticky; top: 0; z-index: 100; }
.nav-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; height: 72px; display: flex; align-items: center; justify-content: space-between; }

.logo { display: flex; align-items: center; gap: 10px; font-size: 18px; }
.logo-icon { width: 24px; height: 24px; }
.logo-bold { font-weight: 700; color: #ffffff; letter-spacing: -0.5px; }
.logo-divider { color: rgba(255, 255, 255, 0.2); font-size: 14px; }
.logo-sub { font-size: 13px; color: #94a3b8; font-weight: 400; }

.nav-links { display: flex; align-items: center; gap: 24px; }
.nav-item { font-size: 14px; font-weight: 500; color: #94a3b8; transition: color 0.2s; }
.nav-item:hover, .router-link-active { color: #3b82f6; }
.nav-status-badge { font-size: 11px; font-weight: 600; background: linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(29,78,216,0.1) 100%); color: #3b82f6; border: 1px solid rgba(59,130,246,0.2); padding: 2px 10px; border-radius: 99px; }

.main-content { max-width: 1200px; margin: 0 auto; padding: 40px 24px; min-height: calc(100vh - 240px); }

/* 全局动画 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.footer { border-top: 1px solid rgba(255, 255, 255, 0.05); padding: 40px 24px; background: #070a12; text-align: center; margin-top: 80px; }
.footer-content { max-width: 1200px; margin: 0 auto; }
.copyright { color: #64748b; font-size: 13px; font-weight: 500; }
.footer-hint { color: #334155; font-size: 12px; margin-top: 4px; }
</style>
