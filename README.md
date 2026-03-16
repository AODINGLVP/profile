# Astro Portfolio

一个基于 Astro 的个人作品集站点，适合部署到 GitHub Pages。

## 当前结构

- 首页直接展示全部项目
- 项目卡片支持封面图、简介与技术栈
- 每个项目有独立详情页
- 详情页支持 GitHub 链接、Bilibili 链接与可选嵌入视频
- 项目数据集中维护在 `src/data/projects.json`
- 封面图资源位于 `public/projects`

## 本地启动

```bash
npm install
npm run dev
```

## 需要自定义的地方

- 在 `src/consts.ts` 修改个人名称、简介与链接
- 在 `astro.config.mjs` 修改 GitHub Pages 的站点地址
- 在 `src/data/projects.json` 维护项目数据
