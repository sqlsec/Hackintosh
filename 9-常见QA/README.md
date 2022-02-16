# 十、常见 QA

## 使用方法

如何使用本页面呢？电脑端直接 Ctrl/Command + F 快捷键，快速搜索你想查找的关键词即可。

如果你也想来贡献 QA 完善这个页面，欢迎邮件发送给我 **admin@sqlsec.com**，黑苹果非常需要大家一起的贡献努力。

## 问题列表



<!--sec data-title="1. 唤醒黑屏或者开机需要插拔显示器线才可以点亮屏幕进系统。" data-id="section1" data-show=true ces-->

尝试添加在启动项添加 `igfxonln=1` 参数

<!--endsec-->



<!--sec data-title="2. 我的显卡免驱，但是进系统黑屏，没有输出信号。" data-id="section2" data-show=true ces-->

尝试添加在启动项添加 `agdpmod=pikera` 参数，可用于 RX5500/5600/5700/6600/6800/6900 新的免驱系列显卡，防止启动过程中黑屏

<!--endsec-->



<!--sec data-title="3. 笔记本睡眠唤醒黑屏" data-id="section3" data-show=true ces-->

这种情况有很多种可能，有一种可能是没有屏蔽独显的原因，请尝试在启动项添加  `-wegnoegpu`  参数

<!--endsec-->



<!--sec data-title="4. 笔记本睡眠唤醒黑屏" data-id="section4" data-show=true ces-->

这种情况有很多种可能，有一种可能是没有屏蔽独显的原因，请尝试在启动项添加  `-wegnoegpu`  参数

<!--endsec-->
