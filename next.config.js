const path = require("path")
const withSvgr = require("next-svgr")
require("dotenv").config()

module.exports = withSvgr({
  webpack: (config) => {
    config.node = {
      fs: "empty",
    }
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    })

    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "./components"),
      "@utils": path.resolve(__dirname, "./utils"),
      "@handbook": path.resolve(__dirname, "./handbook"),
      "@hooks": path.resolve(__dirname, "./hooks"),
    }

    return config
  },
  env: {
    GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
    REPO_FULL_NAME: process.env.REPO_FULL_NAME,
    BASE_BRANCH: process.env.BASE_BRANCH,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
    FEEDBACK_ENDPOINT: process.env.FEEDBACK_ENDPOINT,
  },
})
