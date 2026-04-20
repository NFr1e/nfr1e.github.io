export const pagesLink = {
  //—————————— 主页 ——————————
  home: "/",

  //—————————— 文档 ——————————
  docs: "/docs/",

  dlsample: "/docs/dl-sample",
  dlsample_ch1: "/docs/dl-sample/ch1_start",
  dlsample_ch2: "/docs/dl-sample/ch2_sampleScene",
  dlsample_ch3: "/docs/dl-sample/ch3_createLevel",
  dlsample_ch4: "/docs/dl-sample/ch4_collectables",
  dlsample_ch5: "/docs/dl-sample/ch5_beatmapData",
  dlsample_ch6: "/docs/dl-sample/ch6_pathGrapher",
  dlsample_ch8: "/docs/dl-sample/ch8_advanced",

  mvzick: "/docs/mvzick",

  //—————————— 笔记 ——————————
  notes: "/notes/"
} as const;

//—————————— 导航栏 ——————————
export var navLinks = [
  { text: "首页", link: pagesLink.home },
  { text: "文档", link: pagesLink.docs },
  { text: "笔记", link: pagesLink.notes }
];

//—————————— 侧边栏 ——————————
export var docsSidebar = [
  {
    text: "文档",
    items: [
      { 
        text: "首页", link: pagesLink.docs
      },
      {
        text: "DLSample",
        collapsed: false,
        items: [
          { text: "主页", link: pagesLink.dlsample },
          { text: "快速开始", link: pagesLink.dlsample_ch1 },
          { text: "示例场景", link: pagesLink.dlsample_ch2 },
          { text: "创建关卡", link: pagesLink.dlsample_ch3 },
          { text: "收集物", link: pagesLink.dlsample_ch4 },
          { text: "关卡踩音", link: pagesLink.dlsample_ch5 },
          { text: "PathGrapher", link: pagesLink.dlsample_ch6 },
          { text: "进阶", link: pagesLink.dlsample_ch8 }
        ]
      },
      {
        text: "MvzickPlayer",
        collapsed: false,
        items:[
            { text: "主页", link: pagesLink.mvzick }
        ]
      }
    ]
  },
  {
    text: "笔记",
    items: [{ text: "首页", link: pagesLink.notes }]
  }
];

export type PagesLink = typeof pagesLink;
export type DocsSidebar = typeof docsSidebar;
export type NavLink = typeof navLinks;
