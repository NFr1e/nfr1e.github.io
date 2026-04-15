# 示例场景

打开项目中的示例场景(```Assets/DLSample/Levels/_Sample/SampleLevel```)，可以看到以下关卡基础结构。

```text
LevelRoot
└─ Gameplay         #Gameplay控制器
   ├─ Player        #主角
   ├─ CameraRoot    #摄像机控制器
   └─ ...           #其余杂项
└─ LevelHolder      #关卡容器
```

## 一.Gameplay
关卡中与Gameplay相关的控制器，角色等均在Gameplay及其子物体上。

查看Gameplay对象，挂载了以下组件：

### 1.GameplayEntry
Gameplay的入口，通过MonoBehaviour控制ModulesManager代理场景中所有模块的生命周期

GameplayEntry是整个Gameplay中的**唯一单例**，可通过`GameplayEntry.Instance`访问其实例。
如果场景中不存在GameplayEntry对象，会在运行时懒加载。

### 2.GameplayManagerComponent
Gameplay中的**必要模块**组件。处理状态机、计时器、输入、音频、玩家控制等模块的创建和注册等。

*项目中以`Component`命名的组件仅作为游戏模块的**创建工厂**，用于创建和初始化模块，并注册模块到ServiceLocator和ModulesManager。

#### 字段说明：
- `LevelData` : 关卡数据文件(见第三节"[创建关卡](ch3_createLevel.md)")
- `MainPlayer` : 游戏主角，默认为Gameplay下的Player对象
- `AudioSource`  : 游戏中的音频播放器
- `AudoClip` : 关卡音乐的音频文件

### 3.GameplayUIComponent
Gameplay中的**UI模块**组件。

#### 字段说明：
- `PanelsConfig` : UI界面配置文件。见`DLSample/Resources/Datas/Configs/UIPanelConfig`
- `UiCamera` : 当前场景的UI相机
- `GameplayUIMapper` : PanelsConfig中配置的界面id与游戏界面的id映射
  - `ParparePanelId` : 准备界面id
  - `PausePanelId` : 暂停界面id
  - `OverPanelId` : 结算界面id
  - `RespawnPanelId` :复活界面id

### 4.GameplaySkinSystemComponent
Gameplay中的**皮肤模块**组件。

#### 字段说明：
- `SkinsData` : 皮肤配置文件。见`DLSample/Resources/Datas/Configs/SkinData`
- `SkinsContainer` : 运行时用于存放实例化的SkinBehaviour对象的容器
## 二.Player
关卡中的主角对象

查看Player对象, 挂载了以下组件：

### 1.GameplayPlayerMove
**角色运动逻辑**组件，用于处理角色移动，转向，滑翔等。

*为保证角色正常运动，使用该组件的对象需要挂载`BoxCollider`和`Rigidbody`组件

#### 字段说明：
- `MoveSpeed` : 角色移动速度
- `ForceGrounded` : 是否强制角色为处于地面状态
- `UseGravity` : 是否应用重力
- `LocalGravity` : 角色本地重力
- `GroundLayer` : 地板层级。角色仅会在下落到此LayerMask下包含的层级对象上时才会被判定为落地。
- `CheckGroundDist` : 地面射线检测距离
- `Directions` : 角色转向序列参数，所有方向通过方向向量表示。
  - `Upwards` : 当前方向序列的上方方向向量
  - `DirectionsSequence` : 方向序列列表。游戏开始时会将角色方向应用为该序列最后一个元素(索引为^1)，并在角色转向时依次循环。

### 2.PlayerDamager
**角色死亡判定**组件，用于检测死亡相关碰撞。

#### 字段说明：
- `Player` : 当前角色的GameplayPlayerMove组件
- `ObstacleLayer` : 障碍物层级
- `DrownLayer` : 溺水层级
- `BorderLayer` : 边界层级

### 3.SkinAdapterComponent
**皮肤应用**组件，用于将SkinBehaviour应用于角色上。

#### 字段说明：
- `PlayerMove` : 当前角色的GameplayPlayerMove组件
- `PlayerDamager` : 当前角色的PlayerDamager组件
- `HeadContainer` : 作为皮肤实例化角色头部的容器。见Player下的HeadContainer对象

### 4.TriggeryCollector
基于**触发器**的**收集收集物**组件。

*使用该组件应该确保收集物或挂载该组件的对象**至少一个**需要包含`Rigidbody`组件。

#### 字段说明：
- `ExcludeLayers` : 排除该LayerMask下的收集物

## 三.CameraRoot
相机控制对象，默认为平滑跟随相机。挂载了以下组件：

### 1.CameraFollower
相机**平滑跟随逻辑**组件。采用[Max冰焰](https://maxiceflame.github.io/)提供的[跳舞的线官方相机跟随在直角坐标系的实现](https://maxiceflame.github.io/following/)方式，与[冰焰模板](https://www.chinadlrs.com/app/41)类似，此处省略。

### 2.CameraFollowerControllerComponent
**相机跟随控制器**组件。

#### 字段说明：
`Follower` : 当前CameraFollower组件。

## 接下来
在了解了关卡的基础结构后，可以进入下一节“创建关卡”。
