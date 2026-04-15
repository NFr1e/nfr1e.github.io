# 收集物
DLSample提供了`宝石`和`皇冠`两种基础收集物。

## 一.宝石
在`DLSample/Resources/Prefabs`下找到`Gem`预制体，直接拖入场景即可使用。

如果出现**无法拾取**的情况，请检查角色是否添加了`TriggeryCollector`组件和`Rigidbody`组件(详见第二节“[示例场景](ch2_sampleScene.md)”)。

## 二.皇冠
DLSample中，皇冠默认只能通过**检查点**拾取。在`DLSample/Resources/Prefabs`下找到`CrownCheckpoint`预制体，拖入场景中。

### 皇冠检查点
皇冠检查点上挂载了`CrownCheckpoint`组件，可能还有`PathGrapherTransformMover`组件(详见[PathGrapher](ch6_pathGrapher.md))。此处仅介绍`CrownCheckpoint`组件。

#### 字段说明
- `CheckTime` : DLSample中，为保证时间对齐，检查点被设计为**基于时间**触发。CheckTime即为触发检查点的时间。时间数据可以通过上文提到的`PathGrapherTransformMover`组件获取，也可以自行计算。
- `MainPlayerRespawnTransform` : 复活时，主要角色复活时的位置和方向即为`MainPlayerRespawnTransform`的位置和方向。
- `Visualize` : 勾选即可预览`MainPlayerRespawnTransform`的位置以及朝向。
- `Crown` : 当前皇冠检查点所属的皇冠。

### 皇冠

如果你的关卡**不需要检查点**，也可以通过给挂载了`Crown`组件的对象添加`Collider`组件来使得`TriggeryCollector`可以直接拾取皇冠。

## 三.自定义收集物
可以通过实现`ICollectable`接口自定义收集物。见`DLSample/Scripts/Runtime/Gameplay/Behaviours/Collectables/ICollectable.cs`

```csharp
public interface ICollectable
{
    string TypeId { get; }
    bool IsCollected { get; }
    void Collect();

    event Action OnCollect;
}
```