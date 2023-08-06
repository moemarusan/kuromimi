
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/johnny/Documents/kuromimi/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/johnny/Documents/kuromimi/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/johnny/Documents/kuromimi/src/pages/index.js")),
  "component---src-templates-blog-post-js": preferDefault(require("/Users/johnny/Documents/kuromimi/src/templates/blog-post.js"))
}

