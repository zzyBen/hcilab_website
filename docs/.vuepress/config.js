// const { config } = require("vuepress-theme-hope");


module.exports = {
  // globalLayout: '/layouts/Globallayout.vue',
  title: 'Title in config.js',
  description: 'description in config.js',
  dest: "./dist",
  themeConfig: {
    logo: '/logo.png',
    lastUpdated: 'Last Updated ',
    smoothScroll: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'People', link: '/people/' },
      { text: 'Projects', link: '/projects/' },
    ],
    sidebar: 'auto'
    // {
    //   '/people': [
    //     {
    //       title: 'Faculty',
    //       collapsable: false,
    //       sidebarDepth: 1,
    //       children: [
    //         {title:'Robert Jacob', path: '/people/robert_jacob'},
    //       ]
    //     },
    //     {
    //       title: 'Ph.D Students',
    //       collapsable: false,
    //       sidebarDepth: 1,
    //       children: [
    //         {title:'Leon', path: '/people/leon_wang'},
    //         {title: 'Matt', path: '/people/matt_russle'}
    //       ]
    //     }
    //   ],
    //   '/projects': [
    //     {title:'Multimodal Real-time BCI framework', path: '/projects/multimodal_realtime_bci_framework'},
    //   ]
    // }
  }
}