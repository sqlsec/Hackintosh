# 欢迎访问 gitbook-plugin-favicon-absolute 官网 👋

[![npm:version](https://img.shields.io/npm/v/gitbook-plugin-favicon-absolute.svg)](https://www.npmjs.com/package/gitbook-plugin-favicon-absolute)
[![npm:download](https://img.shields.io/npm/dt/gitbook-plugin-favicon-absolute.svg)](https://www.npmjs.com/package/gitbook-plugin-favicon-absolute)
[![npm:prerequisite](https://img.shields.io/badge/gitbook-*-blue.svg)](https://www.npmjs.com/package/gitbook-plugin-favicon-absolute)
[![github:documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute#readme)
[![github:maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute/graphs/commit-activity)
[![npm:license](https://img.shields.io/npm/l/gitbook-plugin-favicon-absolute.svg)](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute/blob/master/LICENSE)
[![github:snodreams1006](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![微信公众号:雪之梦技术驿站-brightgreen.svg](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

> favicon-absolute 插件采用绝对路径设置网站 favicon 图标,相对于相对路径来说更加简单方便.

### 🏠 [主页](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute#readme)

- Github : [https://snowdreams1006.github.io/gitbook-plugin-favicon-absolute/](https://snowdreams1006.github.io/gitbook-plugin-favicon-absolute/)
- Gitee : [https://snowdreams1006.gitee.io/gitbook-plugin-favicon-absolute/](https://snowdreams1006.gitee.io/gitbook-plugin-favicon-absolute/)
- GitLab: [https://snowdreams1006.gitlab.io/gitbook-plugin-favicon-absolute/](https://snowdreams1006.gitlab.io/gitbook-plugin-favicon-absolute/)

## 效果

![favicon-absolute-use-preview.png](favicon-absolute-use-preview.png)

## 用法

### Step #1 - 更新 `book.json` 配置文件

1. 在 `book.json` 配置文件中,添加 `favicon-absolute` 到 `plugins` 列表.
2. 在 `book.json` 配置文件中,配置 `pluginsConfig` 节点的 `favicon-absolute` 对象.

```json
{
    "plugins": ["favicon-absolute"],
    "pluginsConfig": {
    	"favicon-absolute":{
            "favicon": "/favicon.ico",
            "appleTouchIconPrecomposed152": "/apple-touch-icon-precomposed-152.png"
        }
    }
}
```

其中,配置参数含义如下: 

```json
"favicon": {
	"type": "string",
	"required": true,
	"default": "/favicon.ico",
	"title": "网页图标",
	"description": "网页打开时显示图标"
},
"bookmark": {
	"type": "string",
	"required": false,
	"title": "收藏夹图标",
	"description": "网页被收藏时显示图标"
},
"appleTouchIcon152": {
	"type": "string",
	"required": false,
	"title": "Apple 设备152*152触摸图标",
	"description": "Apple 设备触摸时152*152触摸显示图标"
},
"appleTouchIconPrecomposed152": {
	"type": "string",
	"required": true,
	"default": "/apple-touch-icon-precomposed-152.png",
	"title": "Apple 设备152*152触摸高亮图标",
	"description": "Apple 设备触摸时152*152高亮显示图标"
},
"appleTouchIconMore": {
	"type": "object",
	"required": false,
	"title": "Apple 设备自定义尺寸触摸图标",
	"description": "Apple 设备触摸时自定义尺寸触摸显示图标"
},
"appleTouchIconPrecomposedMore": {
	"type": "object",
	"required": false,
	"title": "Apple 设备自定义尺寸触摸高亮图标",
	"description": "Apple 设备触摸时自定义尺寸高亮显示图标"
}
```

> 上述图标位置建议直接放在**根目录**下,这样就会以**绝对路径**形式访问,解决相对路径可能设置无效的问题.

### Step #2 - 运行 gitbook 相关命令

- 运行 `gitbook install` 命令安装到本地项目

```bash
$ gitbook install
```

或者

```bash
npm install gitbook-plugin-favicon-absolute
```

- 运行 `gitbook build` 命令构建本地项目或者 `gitbook serve` 启动本地服务.

```bash
$ gitbook build
```

或者

```bash
$ gitbook serve
```

## 示例

不仅 [gitbook-plugin-favicon-absolute](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute) **官方文档**已整合 `favicon-absolute` 版权保护插件,此外还提供了示例项目,详情参考 `example` 目录.

- [官方文档](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute/tree/master/docs)

```json
{
    "title": "favicon-absolute 插件官方文档",
    "author": "snowdreams1006",
    "description": "gitbook-plugin-favicon-absolute 插件官方文档",
    "plugins": [
        "favicon-absolute"
    ],
    "pluginsConfig": {
    	"favicon-absolute":{
            "favicon": "/favicon.ico",
            "bookmark": "/bookmark.ico",
            "appleTouchIcon152": "/apple-touch-icon-152.png",
            "appleTouchIconPrecomposed152": "/apple-touch-icon-precomposed-152.png",
            "appleTouchIconMore": {
                "120x120": "/apple-touch-icon-120.png",
                "180x180": "/apple-touch-icon-180.png"
            },
            "appleTouchIconPrecomposedMore": {
                "120x120": "/apple-touch-icon-precomposed-120.png",
                "180x180": "/apple-touch-icon-precomposed-180.png"
            }
        }
    }
}
```

- [官方示例](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute/tree/master/example)


```json
{
    "title": "favicon-absolute 插件官方简单示例",
    "author": "snowdreams1006",
    "description": "gitbook-plugin-favicon-absolute 插件官方简单示例",
    "plugins": [
        "favicon-absolute"
    ],
    "pluginsConfig":{
        "favicon-absolute":{
            "favicon": "favicon.ico",
            "appleTouchIconPrecomposed152": "apple-touch-icon-precomposed-152.png"
        }
    }
}
```

## 作者

👤 **snowdreams1006**

- Github: [@snowdreams1006](https://github.com/snowdreams1006)
- Email: [snowdreams1006@163.com](mailto:snowdreams1006@163.com)

## 🤝 贡献

如果你想贡献自己的一份力量,欢迎提交 [`Issues`](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute/issues) 或者 `Pull Request` 请求!

## 支持

如果本项目对你有所帮助,欢迎 ⭐️ [gitbook-plugin-favicon-absolute](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute) 项目,感谢你的支持与认可!

## 📝 版权

Copyright © 2019 [snowdreams1006](https://github.com/snowdreams1006).

This project is [MIT](https://github.com/snowdreams1006/gitbook-plugin-favicon-absolute/blob/master/LICENSE) licensed.