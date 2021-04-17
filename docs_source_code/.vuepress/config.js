module.exports = {
  title: 'Tufts HCI Lab',
  description: 'description in config.js',
  // base: "/hcilab_website",
  dest: "./docs",
  themeConfig: {
    // logo: '/logo.png',
    lastUpdated: 'Last Updated ',
    search: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'People', link: '/people/' },
      { text: 'Projects', link: '/projects/' },
    ],
    sidebar: 'auto'
  }
}