// const { config } = require("vuepress-theme-hope");


module.exports = {
  // globalLayout: '/layouts/Globallayout.vue',
  title: 'Title in config.js',
  description: 'description in config.js',
  dest: "./docs",
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'Last Updated ',
    // smoothScroll: true,
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'People', link: '/people/' },
      { text: 'Projects', link: '/projects/' },
    ],
    sidebar: 'auto'
  }
}