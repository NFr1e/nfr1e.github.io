# 关卡踩音
DLSample提供了两种踩音方式：手动踩音和谱面导入。最终踩音结果都会被导入到关卡的`BeatmapData`(见[创建关卡](ch3_createLevel.md))中。

## 一.手动踩音
> 手动踩音是设计师在编辑器中自己游玩一遍以获得节拍时间点的方法。

1. 在场景中新建一个空物体
2. 在创建的物体上挂载`BeatMapCreator`组件,需要填入以下字段：
   - `PlayerMove` : 关卡中的主要角色
   - `Data` : 当前关卡的BeatmapData文件
3. 勾选GameplayPlayerMove中的`ForceGrounded`
4. 开始播放并游玩
5. 踩音完成后**暂停**播放，点击`BeatMapCreator`中的`Save`按钮即可保存节拍数据。
6. 退出播放

踩音完成之后别忘了取消勾选GameplayPlayerMove中的`ForceGrounded`。
   
## 二.谱面导入
::: warning 注意
此项更新在Indev-6041版本加入
:::

> 谱面导入是通过读取音乐游戏谱面文本资产获取节拍时间点的方式，如果你对踩音精度有较高要求或你的关卡节拍较为复杂，推荐使用这种方法。

### 支持的谱面格式:
- osu!

### 操作方法

1. 在Unity顶部工具栏找到DLSample -> ChartReader
2. 出现ChartReader窗口，填入以下参数
    - `ChartFile` : 谱面文件的文本资产
    - `BeatmapData` : 当前关卡的BeatmapData文件
3. 点击`Read`即可读取并保存节拍数据至当前BeatmapData
