# 🧰 H5 移动端工具箱 · mobile-tools

[![Vue](https://img.shields.io/badge/Vue-3.4-4FC08D?style=flat-square&logo=vue.js)](https://vuejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite)](https://cn.vitejs.dev/)
[![Naive UI](https://img.shields.io/badge/Naive%20UI-2.x-63E2B7?style=flat-square)](https://www.naiveui.com/)
[![Pinia](https://img.shields.io/badge/Pinia-2.x-FFD859?style=flat-square)](https://pinia.vuejs.org/)

面向手机浏览器的轻量工具箱，把查询、娱乐、实时热榜、小工具四类常用功能收在一个 H5 页面里。

## 快速开始

```bash
# 安装依赖（项目使用 yarn）
yarn

# 启动开发服务器
yarn dev

# 打包生产版本
yarn build
```

## 技术栈

| 分类 | 选型 |
| --- | --- |
| 框架 | Vue 3 |
| 构建 | Vite |
| UI | Naive UI |
| 状态 | Pinia + 持久化 |
| 路由 | Vue Router（history 模式） |
| 图标 | Remix Icon |
| 请求 | axios 封装（`src/utils/request`） |

## 功能规划

首页按「查询 / 娱乐 / 实时 / 工具」四类组织，规划中的能力如下：

**查询类**
- 网课题库
- 天气情况（`/weather` 接口已封装）

**娱乐类**
- 摸鱼人日历 ✅ 已实现
- Bing 每日图片、风景图片、二次元图片
- 电脑 / 手机分辨率美图
- 头像精选：推荐、精选、动漫、男生、女生、小众
- 网易云音乐榜单：热歌榜、新歌榜、飙升榜、原创榜
- 一言句子、骚话、情话、笑话、舔狗日记

**实时类**
- 星座运势、每日一句励志英语
- 热搜聚合：微博、今日头条、澎湃新闻、虎扑、知乎（含每日日报）、36氪、哔哩哔哩、百度、抖音、豆瓣小组、IT 资讯、虎嗅、人人都是产品经理、虫族部落

**工具类**
- 二维码生成（`/qr` 接口已封装）
- 书摘生成（`/artText` 接口已封装）

## 实现状态说明

> 这里如实记录代码当前状态，避免误解。

- ✅ **摸鱼人日历**：完整实现，路由 `/moyu`，调用 `/moyu?type=json` 获取图片并渲染
- 🚧 **其余卡片**：首页列表已渲染出 40+ 个入口，但路由表中只注册了 `/home` 与 `/moyu` 两条，**点击其他卡片不会跳转**
- 🚧 **接口层**：`src/api/tools.js` 与 `src/api/fun.js` 已封装部分接口（qr、artText、weather、moyu），对应页面尚未编写

也就是说，本项目当前更像一个**功能清单已成型、逐步补齐实现**的工具箱骨架。

## 目录结构

```text
mobile-tools/
├─ src/
│  ├─ api/
│  │  ├─ fun.js        娱乐类接口（摸鱼日历等）
│  │  ├─ tools.js      工具类接口（二维码、书摘、天气）
│  │  └─ test.js
│  ├─ layout/index.vue 整体布局
│  ├─ router/
│  │  ├─ index.js      路由实例、标题钩子
│  │  └─ routes.js     路由表
│  ├─ store/           Pinia 状态（含持久化）
│  ├─ utils/request.js axios 封装
│  ├─ views/
│  │  ├─ home/index.vue  首页（四类功能卡片）
│  │  └─ fun/moyu.vue    摸鱼人日历
│  ├─ App.vue
│  ├─ main.js
│  └─ pinia.js
└─ package.json
```

## 常见问题

**卡片点了没反应？**
当前版本只有摸鱼人日历注册了路由。要新增页面，在 `src/views` 下建组件，再到 `src/router/routes.js` 的 `layout` children 里补一条路由并绑定点击事件。

**接口报跨域？**
`src/utils/request.js` 的 `baseURL` 指向一个第三方聚合接口服务，浏览器直连通常会被 CORS 拦截。本地开发建议在 `vite.config.js` 中配置 `server.proxy`，把请求转发到代理层。

**路由刷新 404？**
路由用的是 `createWebHistory()`（history 模式），部署到静态服务器后需要配置 fallback 到 `index.html`；若不想配，可改为 `createWebHashHistory()`。

**Pinia 状态刷新丢失？**
项目已装持久化插件，但需在 store 中显式声明 `persist: true` 才生效。

## 相关文档

- Naive UI 组件：[naiveui.com](https://www.naiveui.com/zh-CN/light/components/button)
- Vite 中文文档：[cn.vitejs.dev](https://cn.vitejs.dev/guide/)
- Remix Icon：[remixicon.com](https://remixicon.com/)

## 许可

仅供学习与参考使用。
