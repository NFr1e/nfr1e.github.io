---
layout: home

hero:
  name: "DLSample"
  tagline: "这里是DLSample文档站"
  actions:
    - theme: brand
      text: 开始阅读
      link: /guide/dl-sample/ch1_start.md

features:
  - title: 节拍驱动的关卡组织方式
    details: 节拍时间轴与角色移动路径之间建立了直观映射，显著降低关卡的制作成本，使创作者专注于关卡设计。
  - title: 完善的编辑器工具链
    details: 包含LevelCreator, PathGrapher, PathBuilder等编辑器工具
  - title: 模块化 Gameplay 生命周期管理
    details: 模块解耦，适合后续扩展新玩法或替换某个子系统。
---

<script setup>
const openSourceCards = [
  {
    title: "GitHub开源地址",
    description: "GitHub仓库",
    icon: "/assets/icons/github.png",
    iconType: "url",
    href: "https://github.com/NFr1e/DLSample-Remastered.git"
  }
]

const downloadCards = [
  {
    title: "DLRS官网",
    description: "模板发布页",
    icon: "/assets/icons/dlrs.png",
    iconType: "url",
    href: "https://www.chinadlrs.com/app/84"
  },
  {
    title: "GitHub 发布页",
    description: "从release获取",
    icon: "/assets/icons/github.png",
    iconType: "url",
    href: "https://github.com/NFr1e/DLSample-Remastered/releases"
  },
  {
    title: "百度网盘",
    description: "从网盘获取",
    icon: "/assets/icons/pan.baidu.png",
    iconType: "url",
    href: "https://pan.baidu.com/s/1o-Nqk8O_V3uG5BaeovfJiQ?pwd=dlsp"
  }
];
</script>

## 📥 模板获取
<DLSampleCards :cards="downloadCards" />

## 💾 项目仓库
<DLSampleCards :cards="openSourceCards"/>
