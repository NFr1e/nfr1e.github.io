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
      copyright: "© 2026 NFr1e"
    },
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3],
      label: '页面导航',
    },
    docFooter: {
      prev: '上一节',
      next: '下一节'
    }
  }
});
