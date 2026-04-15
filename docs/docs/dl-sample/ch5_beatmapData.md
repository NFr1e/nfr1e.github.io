# 关卡踩音
DLSample提供了两种踩音方式：手动踩音和OSU!谱面导入。最终踩音结果都会被导入到关卡的`BeatmapData`(见[创建关卡](ch3_createLevel.md))中。

## 一.手动踩音
手动踩音是设计师在编辑器中自己游玩一遍以获得节拍时间点的方法。

1. 在场景中新建一个空物体
2. 在创建的物体上挂载`BeatMapCreator`组件,需要填入以下字段：
   - `PlayerMove` : 关卡中的主要角色
   - `Data` : 当前关卡的BeatmapData文件
3. 勾选GameplayPlayerMove中的`ForceGrounded`
4. 开始播放并游玩
5. 踩音完成后**暂停**播放，点击`BeatMapCreator`中的`Save`按钮即可保存节拍数据。
6. 退出播放

踩音完成之后别忘了取消勾选GameplayPlayerMove中的`ForceGrounded`。
   
## 二.OSU!谱面导入
::: warning 注意
此项更新尚未在Indev-6033-b中发布
:::

OSU谱面导入是通过读取OSU!谱面文本资产获取节拍时间点的方式，如果你对踩音精度有较高要求或你的关卡节拍较为复杂，推荐使用这种方法。

1. 在Unity顶部工具栏找到DLSample -> BeatmapReader
2. 出现BeatmapReader窗口，填入以下参数
    - `BeatmapFile` : OSU谱面文件的文本资产
    - `BeatmapData` : 当前关卡的BeatmapData文件
3. 点击`Read&Save`即可保存节拍数据
