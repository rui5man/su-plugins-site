export const pluginsData = [
  {
    id: "plugin-1765673208449",
    name: "板件大师 (Panel Master)",
    tagline: "让 SketchUp 工业级参数化建模与拆单速度提升 300%",
    version: "v5.0",
    updateDate: "2026-03-15",
    icon: "https://placehold.co/120x120/4f46e5/fff?text=PM", // 可换成你的本地图片
    category: "参数化拆单 / 生产对接",
    summary: "专为全屋定制打造的工业级拆单与参数化建模插件。支持一键豁口、智能避让、排孔生成以及一键导出生产数据。",
    features: [
      "【智能拉伸与避让】完美解决复杂板件缩放时特征变形的问题，核心逻辑严格闭环。",
      "【一键豁口联动】支持联动深化，自动计算两块板件各自放量，确保最终延长总长完美匹配。",
      "【高性能拣选引擎】Deep Picking 深层穿透选择，跨组件批量精准修改参数。",
      "【生产线无缝对接】自动生成加工排版、孔位信息，完美兼容后端开料设备。"
    ],
    installGuide: "下载 .rbz 文件后，打开 SketchUp -> 扩展程序管理器 -> 安装扩展程序 -> 选择该文件即可完成安装。"
  },
  {
    id: "plugin-opennewer",
    name: "HT_OpenNewer_Plugin",
    tagline: "SketchUp 高版本文件低版本自动降级打开工具",
    version: "v1.1",
    updateDate: "2026-04-02",
    icon: "https://placehold.co/120x120/059669/fff?text=ON",
    category: "版本兼容 / 工具效率",
    summary: "解决 SketchUp 版本不兼容痛点，无需手动转换，双击即可智能降级并调用你指定的本地 SU 版本打开。",
    features: [
      "【智能版本路由】点击高版本 .skp 文件自动识别并调用对应降级后台。",
      "【无感流畅体验】后台全自动处理，保持工作流不中断。",
      "【多版本共存支持】支持本地安装的多个 SketchUp 版本调度。"
    ],
    installGuide: "将插件解压至 SketchUp 的 Plugins 目录下，重启 SketchUp。在全局配置中设定你默认偏好的打开版本即可。"
  }
];