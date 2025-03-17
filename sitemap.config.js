/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITEMAP_URL,
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    changefreq: 'weekly',
    priority: 0.9,
    sitemapSize: 1000000,
    exclude: [
        '/505', 
        '/404'
    ]
}