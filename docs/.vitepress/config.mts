import { defineConfig } from "vitepress";

const pagesLink = {
  home: "/",

  dlsample: "/guide/dl-sample",
  dlsample_ch1: "/guide/dl-sample/ch1_start",
  dlsample_ch2: "/guide/dl-sample/ch2_createLevel",

  notes: "/notes/"
} as const;

export default defineConfig({
  title: "NFr1e's Docs",
  description: "NFr1e 的静态文档与笔记站点",
  lang: "zh-CN",
  base: "/nfr1e.github.io/",
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
          { text: "创建关卡", link: pagesLink.dlsample_ch2 }
        ]
      },
      {
        text: "笔记",
        items: [
          { text: "首页", link: pagesLink.notes },
        ]
      }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/NFr1e/nfr1e.github.io" }
    ],
    footer: {
      message: "Powered by VitePress",
      copyright: "Copyright (c) 2026 NFr1e"
    }
  }
});
