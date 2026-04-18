---
layout: home

hero:
  name: "你好👋"
  text: "这里是NFr1e's Docs"
  tagline: "在这里整理学习记录、项目说明等"
  actions:
    - theme: brand
      text: 文档
      link: /docs/
    - theme: brand
      text: 笔记
      link: /notes/
    - theme: alt
      text: 关于
      link: https://github.com/NFr1e/nfr1e.github.io
---

## 📫社交帐号
<script setup>
const socialCards = [
  {
    title: "GitHub",
    description: "@NFr1e",
    icon: "/assets/icons/github.png",
    iconType: "url",
    href: "https://github.com/NFr1e/"
  },
  {
    title: "哔哩哔哩",
    description: "@NFr1e",
    icon: "/assets/icons/bilibili.png",
    iconType: "url",
    href: "https://space.bilibili.com/291841883"
  },
  {
    title: "Steam",
    description: "w3aver",
    icon: "/assets/icons/steam.png",
    iconType: "url",
    href: "https://steamcommunity.com/id/nfr1e"
  },
  {
    title: "邮箱",
    description: "3162205763@qq.com",
    icon: "/assets/icons/mail.png",
    iconType: "url"
  }
];
</script>

<SideLinkCard :cards="socialCards" />