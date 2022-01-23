module.exports = {
  siteName: "Pcode Store",
  siteDescription: "A starter project for Gridsome with Bootstrap and some other useful tools.",
  siteUrl: "https://gridsome-starter-bootstrap.loke.dev",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }, 
    {
      use: "gridsome-plugin-gtag",
      options: {
        config: {
          id: process.env.GOOGLE_ANALYTICS_ID
        }
      }
    }, 
    {
      use: "@gridsome/plugin-sitemap",
      options: {
        cacheTime: 600000
      }
    }, 
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
        modulePath: `src/admin/index.js`
      }
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  },
  devServer: {
    host: "0.0.0.0",
    port: 8080
  }
};
