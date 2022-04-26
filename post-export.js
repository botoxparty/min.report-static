// post-export.js
// require('dotenv').config();
const fs = require('fs');
const { generateSitemap } = require('./generate-sitemap');
// Copy redirects to the root of deployment folder
fs.copyFile('_redirects', './out/_redirects', err => {
  if (err) throw err;
  console.log('_redirects was copied to ./out/_redirects');
});
// Generate the sitemap and define the target folder
// Don't forget to set the PUBLIC_DOMAIN secret in Netlify! 🕵️‍♀️
generateSitemap('https://min.report', './out/static/');