# 快速开始

## 一.本地部署

在项目根目录运行：
```bash
git clone https://github.com/NFr1e/DLSample-Remastered.git
cd DLSample-Remastered
```

## 二.在Unity编辑器中打开

打开UnityHub, 在`项目`页面下，点击`添加 > 从磁盘添加项目` 即可在UnityHub中添加项目。

### Unity版本
::: warning 注意
项目使用 [InputSystem](https://docs.unity3d.com/Manual/com.unity.inputsystem.html), [UI Toolkit](https://docs.unity3d.com/Manual/UIElements.html)等较新特性，不同Unity版本可能出现API不兼容等情况。
:::

- 最低版本 Unity 2019.4

- **推荐使用Unity2022.3 LTS**

### 已知兼容问题
- 在旧版本Unity中打开项目，部分碰撞器会出现大小与预期不一致的问题。
- `LevelRestarter`中使用的`UnityEngine.SceneManagement`中的`SceneManager.loadedSceneCount`API在旧版本中未被加入。

### 付费插件
部分插件可能需要手动安装以保证项目正常运行：
- [Odin Inspector](https://odininspector.com/) 编辑器拓展

## 三.项目结构

项目结构见`Assets/DLSample`

```text
DLSample/
├─ Levels/              # 关卡目录
├─ Resources/           # 资源
└─ Scripts/             # 项目代码
   ├─ Runtime/          # 运行时代码，负责应用入口、Gameplay 流程与基础设施
   ├─ Editor/           # 编辑器拓展
   └─ Shared/           # 共享的数据结构、常量等
```

## 接下来

1. 如果项目不能正常打开或Console存在编译错误，请检查上文`已知兼容问题`以及`付费插件`。
2. 确保项目正常打开且无编译错误后，请进入`Assets/DLSample/Levels/_Sample/SampleLevel`场景，试试运行时是否正常工作。
