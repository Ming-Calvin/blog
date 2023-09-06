module.exports = {
    title: 'My VuePress Site', // 网站的标题
    description: 'A VuePress powered website', // 网站的描述
    base: '/', // 基础路径
    head: [
        // 在页面的 <head> 中添加标签
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    themeConfig: {
        // 主题配置
        nav: [
            // 导航栏配置
            { text: 'Home', link: '/' },
            { text: 'es6', link: '/es6/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: 'auto', // 侧边栏配置
        search: true, // 启用搜索
        lastUpdated: 'Last Updated', // 显示文件最后更新时间
    },
    plugins: [
        // 插件配置
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
    ],
    markdown: {
        // Markdown 配置
        lineNumbers: true // 显示行号
    }
}
