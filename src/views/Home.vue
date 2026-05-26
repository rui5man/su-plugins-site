<style scoped>
/* 保持您原本的首页所有基础 CSS 结构不变 */
.home-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
  color: #1e293b;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* ==========================================================================
   🎯 核心修复：大标题在亮色模式下绝不隐形，字号大小适中不换行变形
   ========================================================================== */
.hero-slogan-wrapper {
  text-align: center;
  padding: 40px 20px 10px 20px;
}

.main-industrial-title {
  font-size: 32px;          /* 优化字号，防止死撑变形折行 */
  font-weight: 850;
  color: #0f172a !important; /* 亮色模式下绝对是清晰的深黑蓝色！ */
  letter-spacing: -0.5px;
  margin-bottom: 12px;
  line-height: 1.3;
}

.sub-industrial-desc {
  font-size: 14px;
  color: #64748b !important;
}

/* ==========================================================================
   🌓 完美的暗黑模式底层穿透，完美咬合您原本的漂亮卡片
   ========================================================================== */
:global(.dark) .home-container {
  background-color: #0b0f19 !important; /* 恢复您最满意的深邃黑蓝底 */
}

:global(.dark) .main-industrial-title {
  color: #ffffff !important; /* 暗黑模式下自动翻转为无瑕纯白大字 */
}

:global(.dark) .sub-industrial-desc {
  color: #94a3b8 !important;
}

/* 确保暗黑模式下原本的卡片有质感 */
:global(.dark) .plugin-card {
  background-color: #111827 !important;
  border-color: #1f2937 !important;
}
:global(.dark) .card-title {
  color: #ffffff !important;
}
</style>
