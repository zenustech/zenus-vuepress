module.exports = {
    title: 'Zenus Doc',
    description: 'Just playing around',
    themeConfig: {
        logo: '/logo.png',
        search: true,
        searchMaxSuggestions: 10,
        // displayAllHeaders: true,
        sidebarDepth: 2,
        nav: [
            { text: '首页', link: '/' },
            { text: 'Github', link: 'https://www.github.com' },
          ],
        sidebar: [
            ['/','首页'],
            '/title1/',
            '/title2/'
          ]
      }
  }