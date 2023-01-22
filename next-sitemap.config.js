/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL,
  changefreq: 'monthly',
  priority: 0.7,
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: '/generate-sitemap.xml',
  robotsTxtOptions: {
    additionalSitemaps: [process.env.SITE_URL + '/generate-sitemap.xml'],
    policies: [
      process.env.ENV === 'production'
        ? { userAgent: '*', allow: '/' }
        : { userAgent: '*', disallow: '/' },
    ],
  },
};
