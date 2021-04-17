module.exports = {
  title: 'Tufts HCI Lab',
  description: 'description in config.js',
  base: "/hcilab_website/",      // If the website is deployed to a specific GitHub repo, set the base path to the repo name. If it's deployed to the root GitHub Page, comment this line or use:      base: "/",
  dest: "./docs/",               // Generate the website app into docs folder, for GitHub Page deployment
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