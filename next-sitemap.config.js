/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://t20ficha.vercel.app',
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  changefreq: 'monthly'
  // ...other options
}