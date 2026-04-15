<script setup>
const downloadCards = [
  {
    title: "百度网盘",
    description: "从网盘获取",
    icon: "/assets/icons/pan.baidu.png",
    iconType: "url",
    href: "https://pan.baidu.com/s/1o-Nqk8O_V3uG5BaeovfJiQ?pwd=dlsp"
  },
  {
    title: "QQ群获取",
    description: "371788944",
    icon: "/assets/icons/qq.png",
    iconType: "url",
  }
]

const tutorialCards = [
    {
        title: "哔哩哔哩",
        description: "视频教程",
        icon: "/assets/icons/bilibili.png",
        iconType: "url",
        href: "https://www.bilibili.com/video/BV1Y1fBBGEux"
    }
]
</script>

# PathGrapher

PathGrapher是DLSample提供的路径可视化编辑工具，它依据：

- 初始状态信息
- Beatmap 节拍点
- 路径事件

推导出关卡路径，并在编辑阶段辅助设计者进行可视化调整。
这使得节拍时间轴与角色移动路径之间建立了直观映射，能显著降低节奏关卡的制作成本。

## 使用教程
为保证PathGrapher的完整体验，请确保项目中安装了必要的插件(见[快速开始](ch1_start.md))

### 路径可视化与编辑
1. 在Project面板下右键，找到Create>DLSample>Level创建(如果之前没有)BeatmapData和PathGrapherAsset。
2. 在PathGrapherAsset中填入BeatmapData以及其他初始值。
3. 在场景中创建一个空物体，或直接在一个物体上挂载`PathGrapherBehaviour`组件，填入创建的`PathGrapherAsset`，此时会在场景中绘制出基础路径。
4. 路径编辑请在Inspector面板中开启`EnableEventCreator`，鼠标在路径上滑动时会出现一个“小球”，此时单击鼠标右键，即可创建路径事件。

### 路径事件的运行时同步
在挂载了PathGrapherBehaviour组件的物体或一个空物体上添加`PathGrapherEventsSyncer`组件，填入当前关卡的`PathGrapherAsset`，即可在运行时自动将PathGrapher上创建的事件注册到`GameplayTimer`中。

### PathBuilder
DLSample基于PathGrapher提供了路径生成器，可以一键铺设路径和引导线。
使用方法: 在Unity顶部工具栏找到DLSample -> PathBuilder，填入PathGrapherAsset以及对应预制体等参数，点击按钮即可生成。

### 工具组件
#### PathGrapherTransformMover
在物体上挂载`PathGrapherTransformMover`工具组件，即可：
1. 根据物体位置获得当前物体在路径上对应的时间点
2. 根据填入的时间点调整物体位置至路径上的标准位置

### 视频教程
*视频中内容可能与现版本有不同，以上方文字说明为准。
<SideLinkCard :cards="tutorialCards" />

## PathGrapher 通用移植版
PathGrapher提供了与DLSample模板解耦的通用移植版，适用于所有项目。为保证通用性和非侵入性，删去了PathEvent与Gameplay事件同步等定制功能，仅包含基础功能。

### 获取

<FlexLinkCard :cards="downloadCards" />

## PathGrapher文档

### 一.核心架构：时间驱动的模拟

PG 的本质是一个基于时间轴的确定性物理推演引擎。它将时间作为唯一自变量，推导出空间坐标。

#### 1.数据结构
PathGrapherAsset:
- 存储初始数据: BeatMapData、初始速度、初始重力、初始位置。
- 缓存生成数据: 存储计算出的 Waypoints 和 Segments。
- Waypoint: 由 BeatMapData 的 Beat 触发，代表路径的转向点。
- PathSegment: 两个 Waypoint 之间的完整路程。
- PathSection: Segment 内部由 PathEvent 切分出的物理恒定区间。

#### 2.物理模拟
采用时间切片步进法：
- 关键点收集：将所有 Beat、Event 的开始与结束时间点进行全局排序。
- 步进迭代：在每两个相邻时间点之间，根据当前状态（Speed, Gravity, isJumping）执行物理位移计算。
- 线性坍缩优化：若 Section 内无跳跃，仅存储起点与终点；若处于跳跃状态，则根据 samplingInterval 进行高频采样

### 二.路径事件系统

所有路径事件基于IPathEvent接口实现，在此基础上分为两类:

- PointEvent (点事件)：
如 SpeedChangeEvent、GravityChangeEvent。在特定时刻改变物理状态，影响后续所有路径。

- SegmentEvent (段事件)：
如 JumpEvent：赋予角色向上初速度（相对于角色局部坐标系），产生抛物线。
TeleportEvent：切断当前连续路径，在目标位置重新生成坐标起点。
