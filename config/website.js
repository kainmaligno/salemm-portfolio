const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Salemm Portfolio', // Navigation and Site Title
  siteTitleAlt: 'Salemm IronHack', // Alternative Site title for SEO
  siteTitleShort: 'Salemm', // short_name for manifest
  siteHeadline: 'Personal Portfolio creating web apps', // Headline for schema.org JSONLD
  siteUrl: 'https://silly-booth-772d66.netlify.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'One-Page website with Parallax effect; personal portfolio',
  author: 'salemm / LekoArts', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@drakarzamael', // Twitter Username
  ogSiteName: 'tylerkain.nomine', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-47519312-5',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
