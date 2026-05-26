export const pluginsData = [
  {
    id: "panelmaster", // 建议把 ID 改为小写连字符，如 /plugin/panelmaster
    name: "板件大师 (PanelMaster)",
    tagline: "智能对齐、超级拉伸、超级切割",
    version: "V1.2.2",
    updateDate: "2026-03-15",
    icon: "https://placehold.co/120x120/4f46e5/fff?text=PM", // 建议换成彩色的插件图标图片地址
    category: "核心对齐 / 超级拉伸",
    summary: "让 SketchUp 拥有真正的工业灵魂。具备智能对齐（自动穿透组）、高性能 Picking 揀选与生产线无缝对接。",
    bilibiliId: "BV1gP4y1475A", // 核心：替换成您插件在该 ID 上的 BV 号
    rbzUrl: "/downloads/HT_PanelMaster.rbz", // 核心：直接下载该插件包的绝对或相对地址
    
    // 核心参考：版本详尽日志数据
    versionLogs: [
      {
        version: "1.2.2",
        date: "12/24/2025",
        notes: [
          "1. 智能逻辑、精准判断。新增意图识别，根据鼠标点击位置决定拉伸哪个头，彻底解决十字交叉板拉伸反向的问题。",
          "2. 新增：斜面/异形完美贴合。突破垂直限制，现在也支持非平行面延申。自动斜切以完美贴合目标角度，无需二次修整。"
        ]
      },
      {
        version: "1.1.2",
        date: "12/13/2025",
        notes: [
          "1. 性能优化，Deep Picking 深层拣选速度提升 300%。",
          "2. 修复联动模式下特定豁口联动失效的问题。"
        ]
      }
    ]
  },
  // 这里保留你的其他插件数据...
];
