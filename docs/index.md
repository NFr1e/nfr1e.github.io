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

<script setup>
const skillsCards ={

}

const swuCard = {
  schoolName: "西南大学",
  major: "软件工程",
  period: "Sep 2024 - Present",
  logoUrl: 'assets/icons/swu.png'
}

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

const skillTags = [
  {
    title: 'Fronted',
    items:[
      'HTML','CSS','JavaScript','Vue'
    ]
  },
  {
    title: 'Programming',
    items:[
      '.NET','JavaSE'
    ]
  },
  {
    title: 'GameEngine',
    items:[
      'Unity','Godot'
    ]
  },
  {
    title: 'Tools',
    items:[
      'VisualStudio','VSCode','Git'
    ]
  }
];
</script>

## Edu
<EduCard v-bind="swuCard" />

## Skills
<TagList :tags="skillTags"/>

## Links
<FlexLinkCard :cards="socialCards" />