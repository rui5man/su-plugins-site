<template>
  <div class="site-wrapper">
    <header class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">
          <span class="logo-bold">天工定制</span>
          <span class="logo-sub">SU 插件生态</span>
        </router-link>
        <nav class="nav-links">
          <router-link to="/" class="nav-item">首页群组</router-link>
          <a href="http://su.920789.xyz/" target="_blank" class="nav-item external">原知识库 ↗</a>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <footer class="footer">
      <p>© 2026 天工定制 - 全参数化工业级技术支持</p>
    </footer>
  </div>
</template>

<style>
/* 全局扁平化现代感样式 */
* { box-sizing: border-box; margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }
body { background-color: #f8fafc; color: #1e293b; line-height: 1.6; }
a { text-decoration: none; color: inherit; }

.navbar { background: #ffffff; border-bottom: 1px solid #e2e8f0; position: sticky; top: 0; z-index: 100; }
.nav-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; height: 64px; display: flex; align-items: center; justify-content: space-between; }
.logo { display: flex; align-items: center; gap: 8px; font-size: 18px; }
.logo-bold { font-weight: 700; color: #0f172a; letter-spacing: -0.5px; }
.logo-sub { font-size: 12px; background: #f1f5f9; padding: 2px 8px; border-radius: 4px; color: #64748b; }
.nav-links { display: flex; gap: 24px; }
.nav-item { font-size: 14px; font-weight: 500; color: #475569; transition: color 0.2s; }
.nav-item:hover, .router-link-active { color: #2563eb; }

.main-content { max-width: 1200px; margin: 40px auto; padding: 0 20px; min-height: calc(100vh - 200px); }
.footer { text-align: center; padding: 40px 20px; color: #94a3b8; font-size: 13px; border-top: 1px solid #e2e8f0; margin-top: 60px; }
</style>