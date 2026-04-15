import { defineConfig } from "vitepress";
import { navLinks, docsSidebar } from "./paths";

export default defineConfig({
  title: "NFr1e's Docs",
  description: "NFr1e 的静态文档与笔记站点",
  lang: "zh-CN",
  base: "/",
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    siteTitle: "NFr1e's Docs",
    nav: navLinks,
    sidebar: docsSidebar,
    footer: {
      message: "Powered by VitePress",
      copyright: "Copyright (c) 2026 NFr1e"
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],        // 显示 <h2> 到 <h4> 的标题（常用）
      label: '页面导航',     // 大纲标题文本（默认是 "On this page" 或中文 "在本页"）
    },
  }
});
