import { defineConfig } from "vitepress";

const pagesLink = {
  home: "/",

  dlsample: "/guide/dl-sample",
  dlsample_ch1: "/guide/dl-sample/ch1_start",
  dlsample_ch2: "/guide/dl-sample/ch2_sampleScene",
  dlsample_ch3: "/guide/dl-sample/ch3_createLevel",
  dlsample_ch4: "/guide/dl-sample/ch4_collectables",
  dlsample_ch5: "/guide/dl-sample/ch5_beatmapData",
  dlsample_ch6: "/guide/dl-sample/ch6_pathGrapher",

  notes: "/notes/"
} as const;

export default defineConfig({
  title: "NFr1e's Docs",
  description: "NFr1e 的静态文档与笔记站点",
  lang: "zh-CN",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: 
  {
    siteTitle: "NFr1e's Docs",
    nav: [
      { text: "首页", link: pagesLink.home },
      { text: "文档", link: pagesLink.dlsample },
      { text: "笔记", link: pagesLink.notes }
    ],
    sidebar: [
      {
        text: "文档",
        items: [
          { text: "DLSample", link: pagesLink.dlsample },
          { text: "快速开始", link: pagesLink.dlsample_ch1 },
          { text: "示例场景", link: pagesLink.dlsample_ch2 },
          { text: "创建关卡", link: pagesLink.dlsample_ch3 },
          { text: "收集物", link: pagesLink.dlsample_ch4 },
          { text: "关卡踩音", link: pagesLink.dlsample_ch5 },
          { text: "PathGrapher", link: pagesLink.dlsample_ch6 }
        ]
      },
      {
        text: "笔记",
        items: [
          { text: "首页", link: pagesLink.notes },
        ]
      }
    ],
    footer: {
      message: "Powered by VitePress",
      copyright: "Copyright (c) 2026 NFr1e"
    },
    search: {
      provider: 'local'
    }
  }
});
