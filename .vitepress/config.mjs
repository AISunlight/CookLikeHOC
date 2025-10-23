import { defineConfig } from 'vitepress'
import { generateNavAndSidebar } from './navSidebar.mjs'

const { nav, sidebar } = generateNavAndSidebar(process.cwd())

export default defineConfig({
  lang: 'zh-CN',
  title: 'CookLikeHOC',
  description: '像老乡鸡那样做饭',
  lastUpdated: true,
  cleanUrls: true,
  base: '/CookLikeHOC/',
  ignoreDeadLinks: true,
  srcExclude: ['**/README.md'],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      ...nav,
    ],
    sidebar,
    search: { provider: 'local' },
    outline: [2, 3],
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '上次更新',
  },
  head: [
    ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['meta', { name: 'google-adsense-account', content: 'ca-pub-5382979479604904' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-862FZEE6QC' }],
    ['script', { async: '', src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5382979479604904' }],
    ['script', {  }, `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config', 'G-862FZEE6QC');`],
  ],
  vite: { server: { host: true } },
})
