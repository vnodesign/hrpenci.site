/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://hrpenci.site',
  generateRobotsTxt: true,
  exclude: ['/cdn-cgi'],
  generateIndexSitemap: true,
  sitemapSize: 500,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  }
}
