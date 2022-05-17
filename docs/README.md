---
home: true
heroImage: /assets/img/logo.png
heroText: Zenus Doc
# tagline: 副标题
actionText: 快速上手 →
actionLink: /title1/
features:
- title: 简洁至上
  details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
- title: Vue驱动
  details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
- title: 高性能
  details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
# footer: MIT Licensed | Copyright © 2018-present Evan You
---
## 本地启动
请确保本地有nodejs环境

    yarn install
    yarn docs:dev
    
访问 http://localhost:8080

## 修改路由
请打开/doc/.vuepress/config.js
编辑sidebar部分内容

## 静态文件
请放置在/doc/.vuepress/public
/public 目录下内容引用请使用 /xxx
或使用相对路径，放置于md文件相同目录./

## 目录结构
[目录结构](https://vuepress.vuejs.org/zh/guide/directory-structure.html)

## 更多使用及配置说明请参考
[VuePress](https://vuepress.vuejs.org/)

::: slot footer
Copyright © 2022 [ZenusTech](https://zenustech.com)
:::