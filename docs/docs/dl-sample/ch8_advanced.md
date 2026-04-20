# 进阶

面向希望在 DLSample 基础上进行二次开发、功能扩展和工具增强的开发者。

## 一.基础设施

### 1.事件总线
#### 事件定义

项目中事件参数需要实现`IEventArg`接口，例如：

```csharp
public struct ComboChangedEvent : IEventArg
{
    public int Combo { get; set; }
}
```

#### 订阅与派发
  
模块A派发事件：
```csharp
_eventBus.Invoke(this, new ComboChangedEvent { Combo = 12 });
```

模块B订阅事件：
```csharp
_eventBus.Subscribe<ComboChangedEvent>(OnComboChanged);
_eventBus.Unsubscribe<ComboChangedEvent>(OnComboChanged);
```

### 2.输入系统
项目当前使用 InputSystem + InputManager + InputTaskPool 组织输入。

#### 输入系统架构
- `GameInput` :由 Input Action 资源生成的代码包装
- `InputManager`: 负责把输入动作映射到任务池
- `InputLayer`: 控制输入优先级
- `InputTask`:表示具体输入回调任务

#### 拓展与使用
1. 在GameInput中增加InputAction
2. 重新生成 GameInput.cs
3. 为该输入规划所属InputLayer
4. 用 `InputManager.RegisterInputTask()` 注册任务

### 3.UI系统
UI系统由Data,Service,Controller三层组成。项目目前仅实现了UI面板（`Panel`）元素。

`UIPanelsDataScriptable`为Data层，负责以资产形式统一管理UI面板。

`UIElementManager`为Service层，负责：
- UI根节点和容器组织
- 全屏面板栈管理
- 常驻面板缓存
- 提供面板打开与关闭函数

`GameplayUIController`为Controller层，持有游戏状态，决定在什么状态加载/卸载UI面板

#### Panel
项目中的UI面板分为两类：

- `Fullscreen`: 在新的面板被加载时会失焦，形成栈式结构。
- `Persistent`: 常驻存在，不受其他面板影响。


## 二.运行时架构

### 1.App 层

`AppEntry` 负责初始化并管理**全局**基础设施，包含：

- `EventBus` 全局事件总线
- `AsyncEventBus` 全局异步事件总线
- `GameInput`输入
- `InputManager`输入管理器
- `UIElementManager`UI管理器
- `ScenesManager` 场景管理器

静态对象访问:
```csharp
var eventBus = AppEntry.EventBus;
```

### 2.Gameplay 层

每个关卡进入运行时后，核心入口是 `GameplayEntry`。它负责：

- 创建**Gameplay层**基础设施，包含：
  - `EventBus` Gameplay事件总线
  - `ModulesManager` Gameplay模块管理器
  - `ServiceLocator` Gameplay服务定位器
- 管理 `GameplayObject`
- 通过MonoBehaviour生命周期桥接`ModulesManager`，推进模块生命周期

### 3.GameplayObject 机制

`GameplayObject` 继承自MonoBehaviour，对其生命周期进行轻量封装，便于GameplayEntry管理。它提供了三个虚函数：

- `OnInit()`
- `OnStart()`
- `OnExit()`

#### `OnInit()`：
  
  可以在这里做自身模块初始化并注册到ServiceLocator，但**不要访问其他模块**。

  例如:
  ```csharp
  protected override void OnInit()
  {
    var fsm = new GameplayFSM();
    GameplayEntry.Instance.ServiceLocator.Register(fsm);
  }
  ```

#### `OnStart()`
  
  此时 `GameplayEntry` 已准备好，可以注册模块到`ModulesMannager`、访问其他模块等。


#### `OnExit()`
  
  做注销与清理等。

### 4.模块接口约定

模块需要实现`IModule`接口，见`Scripts/Runtime/Framework/IModule.cs`：

```csharp
public interface IModule
{
    int Priority { get; }

    void OnInit();
    void OnUpdate(float deltaTime);
    void OnShutdown();
}
```

游戏中的模块统一通过`ModulesManager`进行管理，通过`Priority`显式决定其逻辑执行顺序，数值小的优先执行。

项目中已经在`DLSampleConsts.Gameplay`中集中定义了模块优先级。新增模块时，建议：

- 不要随手写魔法数字
- 在常量表中追加新的优先级定义
- 明确它依赖谁、又应该早于谁执行

### 5.模块间访问
游戏中的模块一般通过上面提到的`GameplayObject`创建。如果一个模块类需要另一个模块类实例，可以通过其构造函数或其他方法注入，也可通过实现`IModuleRequire<T>`实现自动注入。

*如果依赖的是普通服务对象，更适合使用`ServiceLocator`直接获取；如果一个系统只想“发出消息”，而不关心谁来处理，优先使用事件系统，减少模块间耦合。

实现了`IModuleRequire<T>`的模块在`ModulesManager`执行初始化逻辑时，会通过反射自动将其所需要的且**已注册**的模块注入到该模块中，未注册的模块不会被自动创建。

示例：
```csharp
public class ComboViewHandler : IModule, IModuleRequire<ComboSystem>
{
    private ComboSystem _comboSystem;

    public int Priority => DLSampleConsts.Gameplay.PRIORITY_UI_HANDLER;

    void IModuleRequire<ComboSystem>.SetModule(ComboSystem module)
    {
        _comboSystem = module;
    }
}
```
