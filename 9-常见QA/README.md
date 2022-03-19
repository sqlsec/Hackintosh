# 十、常见 QA

## 使用方法

如何使用本页面呢？电脑端直接 Ctrl/Command + F 快捷键，快速搜索你想查找的关键词即可。

如果你也想来贡献 QA 完善这个页面，欢迎邮件发送给我 **admin@sqlsec.com**，黑苹果非常需要大家一起的贡献努力。

## 问题列表



<!--sec data-title="1. 唤醒黑屏或者开机需要插拔显示器线才可以点亮屏幕进系统。" data-id="section1" data-show=true ces-->

尝试添加在启动项添加 `igfxonln=1` 参数，还可与尝试启动项添加`gfxrst=1` 参数

<!--endsec-->



<!--sec data-title="2. 我的显卡免驱，但是进系统黑屏，没有输出信号。" data-id="section2" data-show=true ces-->

尝试添加在启动项添加 `agdpmod=pikera` 参数，可用于 RX5500/5600/5700/6600/6800/6900 新的免驱系列显卡，防止启动过程中黑屏

<!--endsec-->



<!--sec data-title="3. 笔记本睡眠唤醒黑屏" data-id="section3" data-show=true ces-->

这种情况有很多种可能，有一种可能是没有屏蔽独显的原因，请尝试在启动项添加  `-wegnoegpu`  参数

<!--endsec-->



<!--sec data-title="4. 安装系统提示 An Internet connection is required to install macOS（需要互联网连接才能安装macOS）" data-id="section4" data-show=true ces-->

群里有小伙伴遇到这个问题了，解决方法就是：连接网线就行了，真的是顾名思义呀。

<!--endsec-->



<!--sec data-title="5. macOS 老是检测不到系统更新怎么办" data-id="section5" data-show=true ces-->

打开 OCC，在「Misc-其他设置」-「Security」标签下面，将 **SecureBootMode** 改为 **Default** 即可。

<!--endsec-->



<!--sec data-title="6. 笔记本核显打完缓冲帧后，HEVC 解码不能用，以及 REQ 最高只有 0.35Ghz" data-id="section6" data-show=true ces-->

DeviceProperties 设备属性设置里面的核显设备，删除 `AAPL,slot-name` 即可。

<!--endsec-->



<!--sec data-title="7. 启动的时候 若提示【oc grabbed zero systm-id for sb. this is not allowed halting on critlcal error 】" data-id="section7" data-show=true ces-->

基本就是【Misc】-->【security】下的【SecureBootModel 】的问题，默认【Default 】可以改为【Disabled 】或其他。

<!--endsec-->



<!--sec data-title="8. 启动的时候 若开在 【End SetConsoleMode】这个报错" data-id="section8" data-show=true ces-->

基本就是【Misc】-->【security】下的【SecureBootModel 】的问题，默认【Default 】可以改为【Disabled 】或其他。

<!--endsec-->



<!--sec data-title="9. 睡眠唤醒后出现莫名其妙的花屏现象" data-id="section9" data-show=true ces-->

尝试核显属性里面注入更大的显存，比如 2048MB framebuffer-unifiedmem 00000080 data 类型

<!--endsec-->

## 打个广告

目前已经有的资料和教程足够动手能力强的网友自己去安装黑苹果了，但是也有一些网友没有时间学习完教程，或者设备比较复杂遇到的问题
都很奇葩难以靠已有的知识去解决，

所以铛铛铛，国光我就抓住了这个用户痛点，咸鱼上挂了这个宝贝，嘿嘿嘿（手动狗头）

我这个服务适合什么样的人群呢？

1. 自己了解基本的黑苹果原理，最起码知道给你 EFI 自己如何替换安装
2. 掌握基本的 Windows 安装技巧，这个应该都懂的吧，否则也不会想折腾黑苹果了
3. 对黑苹果感兴趣，想体验黑苹果但是没有时间系统学习教程的
4. 手上的设备太过小众冷门的，网上没有相关的资料可以解决
5. 强迫症患者，对黑苹果完美度要求比较高，忍受不了各种小毛病
....

![](https://image.3001.net/images/20220319/16476611133376.png) 

感兴趣可以去咸鱼看看哦：

![](https://image.3001.net/images/20220319/16476612238377.jpg) 
