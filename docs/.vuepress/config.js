module.exports = {
    title: 'Claude食用指南',
    description: '文档副标题',
    themeConfig: {
      nav: [
        { text: '指南', link: '/guide/basic.html' },
        { 
          text: 'GitHub', 
          link: 'https://github.com/f14XuanLv/Claude-Use-Vue' 
        }
      ],
      sidebar: {
        '/guide/': [
          {
            title: '指南',
            path: '/guide/',
            collapsable: true,
            children: [
              'basic',          // basic.md
              'models',         // models.md
              'features',       // features.md
              'advanced',       // advanced.md
              'best-practices'  // best-practices.md
            ]
          }
        ]
      }
    }
  }