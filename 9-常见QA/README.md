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



<!--sec data-title="10. 发现不了已经安装好 macOS 的磁盘分区" data-id="section10" data-show=true ces-->

使用 OCC在 ACPI 选项中打一个 `Fix RTC _STA bug` 补丁即可，或者是你的 OCC 版本高于已安装系统的版本，在「UEFI设置」-「嵌入式 APFS」-「MinVersion」改为「-1」无限制即可。

<!--endsec-->



<!--sec data-title="11. 安装系统的时候，提示：「安装无法继续，因为安装器已损坏」" data-id="section11" data-show=true ces-->

两种可能

1. 顾名思义，安装镜像真的损坏了，解决方法就是换个镜像重新刻录安装。（这种可能性不高）
2. 当前的时间不太对，打开终端输入 date 看看时间是否正确，不正确的话使用 date 命令改下时间就 OK 了

<!--endsec-->

<!--sec data-title="12. 我进系统几分钟之后就死机黑屏重启，不插网线就正常，1225V 网卡无法正常工作" data-id="section12" data-show=true ces-->

首先确保你的网卡路径正确，然后驱动的姿势正确，下面两个是关键的参数：

![image-20220328001930240](imgs/image-20220328001930240.png) 

然后从 macOS12.3 开始，启动项参数也由之前的`dk.e1000=0`参数变为了添加`e1000=0`参数 ，所以如果不对就替换或者添加一下。

<!--endsec-->



<!--sec data-title="13. USB 不定制就正常，使用 USBToolBox 定制了就会直接卡 APFS 无法进操作系统" data-id="section13" data-show=true ces-->

在部分 USB3.1 的设备比如 ASMedia ASM1142 上可能出现过，定制 USB的时候不要插这个接口，然后到下面这一步的时候选择「I」忽略即可：

![](https://image.3001.net/images/20220409/16494854148280.png)  

<!--endsec-->



<!--sec data-title="14. macOS 10.13.6 的应用商店无法使用，下载提示「使用已购页面再试一次」" data-id="section14" data-show=true ces-->

其实就是  10.13.6 的应用商店太老了，更新一下浏览器和 iTunes ，这些玄学问题即可解决：

  ![](https://image.3001.net/images/20220409/1649485644685.png)

<!--endsec-->



<!--sec data-title="15. ASMedia ASM1142 USB 3.1 Type-A 和 Type-C 一体的接口无法工作" data-id="section15" data-show=true ces-->

使用这个 [SSDT-USB3-1-XHC2.aml](https://sqlsec.lanzoub.com/iWZDt02w295g) SSDT 即可解决。

<!--endsec-->



<!--sec data-title="16. 这个安装 macOS XXXX 应用程序副本已损坏，不能用来安装 macOS" data-id="section16" data-show=true ces-->

![](https://image.3001.net/images/20220409/16494864391246.png) 

原因就是当前的时间太新了，我们安装的系统已经不维护了 ，直接改时间为 2015 年就可以了，详细操作参考网上的一篇文章：[这个安装macOS Mojave 应用程序副本已损坏，不能用来安装Mac OS](https://zhuanlan.zhihu.com/p/88597219)

<!--endsec-->



<!--sec data-title="17. 笔记本 Type-C 没有视频输出" data-id="section17" data-show=true ces-->

如果确认你的  Type-C 走的是核显的话，那么多半和机型有关，如果是16寸笔记本型号 改成13寸的，确保核显 ID 正确的情况下，多半就可以 Type-C 输出信号了。

<!--endsec-->



<!--sec data-title="18. 拷贝 EFI 提示 EFI 上的可用空间不足" data-id="section18" data-show=true ces-->

更多的是 U 盘问题，macOS 下记得清除回收站，Windows 下可以手动删除 .Trashes 垃圾文件：

![](https://image.3001.net/images/20220409/16495143059696.png) 

或者在 macOS 下，挂载 EFI 分区后使用命令行手动删除垃圾文件：

```shell
cd /Volumes/EFI && rm -rf .Trashes 
```

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
