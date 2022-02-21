<blockquote style="background-color: #f7f7f7; border-left-color: #777777;border-radius: 3px; padding: 5px 15px 15px 15px;">
<b style="color: #777777; padding-left: 0px; line-height:40px">>&nbsp;Overview</b><br/>
<div style="padding-left: 0px; color: #000000; word-wrap: break-word;">
The plugin is a comment system using valine for gitbook.<br/>
<a href="https://valine.js.org/">https://valine.js.org/</a><br/>
</div></blockquote>

<blockquote style="background-color: #eef7fa; border-left-color: #428bca;border-radius: 3px; padding: 5px 15px 15px 15px;">
<b style="color: #428bca; padding-left: 0px; line-height:40px">▲&nbsp;Important</b><br/>
<div style="padding-left: 0px; color: #000000; word-wrap: break-word;">
Require GitBook >=3.0.0.<br/>
</div></blockquote>

# Quick Start

- First of all, you should learn about how to get appId and appKey.
  - You can see https://valine.js.org/quickstart.html

- Add it to your `book.json` configuration:

```json
{
    "plugins": ["valine"],
    "pluginsConfig": {
        "valine": {
			"appId": "your appId",
			"appKey": "your appKey"
		}
    }
}
```

- Install your plugins using:

```bash
gitbook install ./
```

After that, you can use the valine comment system.

# Configuration

| value       | type    | default    | required | description                                                  |
| ----------- | ------- | ---------- | -------- | ------------------------------------------------------------ |
| appId       | string  |            | yes      | Application `<APP_ID>` from `Leancloud`.                     |
| appKey      | string  |            | yes      | Application `<APP_KEY>` from `Leancloud`.                    |
| placeholder | string  | Just go go | no       | Comment box placeholders.                                    |
| avatar      | string  | ''         | no       | `Gravatar` type.<br/>Optional value:<br/>- `''`(Empty string) <br/>- `mp`<br/>- `identicon`<br/>- `monsterid`<br/>- `wavatar`<br/>- `retro` <br/>- `robohash`<br/>- `hide` |
| pageSize    | number  | 10         | no       | Number of pages per page.                                    |
| lang        | string  | zh-CN      | no       | Multilingual support.<br/>Optional value:<br/>- `zh-CN` <br/>- `zh-TW`<br/>- `en`<br/>- `ja` |
| recordIP    | boolean | false      | no       | Record reviewer IP.                                          |

# Advanced E-mail Alert

If you want to config the e-mail alert, you can see

https://github.com/DesertsP/Valine-Admin