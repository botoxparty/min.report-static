/** @type {import('next-sitemap').IConfig} */

module.exports = {
    siteUrl: process.env.SITE_URL || 'https://min.report',
    generateRobotsTxt: true, // (optional)
    // ...other options
  }