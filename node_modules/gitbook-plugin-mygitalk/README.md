# gitbook-plugin-mygitalk

[![npm version](https://img.shields.io/npm/v/gitbook-plugin-mygitalk.svg)](https://www.npmjs.com/package/gitbook-plugin-mygitalk)
[![npm-download](https://img.shields.io/npm/dt/gitbook-plugin-mygitalk.svg)](https://www.npmjs.com/package/gitbook-plugin-mygitalk)
[![npm-license](https://img.shields.io/npm/l/gitbook-plugin-mygitalk.svg)](https://www.npmjs.com/package/gitbook-plugin-mygitalk)
[![github](https://img.shields.io/badge/github-snowdreams1006-brightgreen.svg)](https://github.com/snowdreams1006)
[![微信公众号](https://img.shields.io/badge/%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7-%E9%9B%AA%E4%B9%8B%E6%A2%A6%E6%8A%80%E6%9C%AF%E9%A9%BF%E7%AB%99-brightgreen.svg)](https://snowdreams1006.github.io/snowdreams1006-wechat-public.jpeg)

`Mygitalk` is a **gitbook comment plugin** based on `gitalk`.

If you want to know the story behind `mygitalk`, please visit [gitbook-plugin-mygitalk](https://snowdreams1006.github.io/gitbook-plugin-mygitalk/).

![mygitalk-use-preview.png](https://github.com/snowdreams1006/gitbook-plugin-mygitalk/raw/master/docs/images/mygitalk-use-preview.png)

## Feature

- Authentication with github account
- Serverless, all comments will be stored as github issues
- Both personal and organization github projects can be used to store comments 
- Localization, support multiple languages [en, zh-CN, zh-TW, es-ES, fr, ru]
- Facebook-like distraction free mode (Can be enabled via the `distractionFreeMode` option)
- Hotkey submit comment (cmd|ctrl + enter)

## Usage

- Install this plugin

Add `mygitalk` to `plugins` in `book.json` configuration file.

```json
{
    "plugins" : ["mygitalk"]
}
```

Install `mygitalk` via `npm` or `gitbook` .

```bash
$ npm install gitbook-plugin-mygitalk
```

or 

```bash
$ gitbook install
```

- Configure this plugin

Prepare a `GitHub application` , if you don't have one, [Click here](https://github.com/settings/applications/new) to register a new one.

Add it to your `book.json` with a basic configuration

```json
{
  "pluginsConfig": {
    "mygitalk": {
        "clientID": "GitHub Application Client ID",
        "clientSecret": "GitHub Application Client Secret",
        "repo": "GitHub repo",
        "owner": "GitHub repo owner",
        "admin": ["GitHub repo owner and collaborators, only these guys can initialize github issues"],
        "distractionFreeMode": false
    }
  }
}
```

- Run `gitbook` locally

Run `gitbook build` or `gitbook serve` to verify this plugin is in effect and should not have been initialized yet.

- Release `gitbook` officially

Publish to the production environment to implement the comment function really.

- `Star` this plugin

If you feel this plugin is helpful, feel free to `star` [gitbook-plugin-mygitalk](https://github.com/snowdreams1006/gitbook-plugin-mygitalk).

## Example

The [gitbook-plugin-mygitalk](https://github.com/snowdreams1006/gitbook-plugin-mygitalk) project has been integrated with the plugin itself or you can refer to the [sample project](https://github.com/snowdreams1006/gitbook-plugin-mygitalk/tree/master/example).

## Feedback

I am very happy to help out with your books or any other questions you might have. see [snowdreams1006](https://github.com/snowdreams1006)

You can email [me](mailto:snowdreams1006@163.com) or [new issue](https://github.com/snowdreams1006/gitbook-plugin-mygitalk/issues) on github.

## License

`gitbook-plugin-mygitalk` is licensed under `Apache-2.0` License. See [LICENSE](LICENSE) for the full license text.