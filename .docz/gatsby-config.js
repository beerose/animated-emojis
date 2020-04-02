const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Animated Emojis',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/aleksandra/workspace/emojis/emojis-lib/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Animated Emojis',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/aleksandra/workspace/emojis/emojis-lib',
          templates:
            '/Users/aleksandra/workspace/emojis/emojis-lib/node_modules/docz-core/dist/templates',
          docz: '/Users/aleksandra/workspace/emojis/emojis-lib/.docz',
          cache: '/Users/aleksandra/workspace/emojis/emojis-lib/.docz/.cache',
          app: '/Users/aleksandra/workspace/emojis/emojis-lib/.docz/app',
          appPackageJson:
            '/Users/aleksandra/workspace/emojis/emojis-lib/package.json',
          gatsbyConfig:
            '/Users/aleksandra/workspace/emojis/emojis-lib/gatsby-config.js',
          gatsbyBrowser:
            '/Users/aleksandra/workspace/emojis/emojis-lib/gatsby-browser.js',
          gatsbyNode:
            '/Users/aleksandra/workspace/emojis/emojis-lib/gatsby-node.js',
          gatsbySSR:
            '/Users/aleksandra/workspace/emojis/emojis-lib/gatsby-ssr.js',
          importsJs:
            '/Users/aleksandra/workspace/emojis/emojis-lib/.docz/app/imports.js',
          rootJs:
            '/Users/aleksandra/workspace/emojis/emojis-lib/.docz/app/root.jsx',
          indexJs:
            '/Users/aleksandra/workspace/emojis/emojis-lib/.docz/app/index.jsx',
          indexHtml:
            '/Users/aleksandra/workspace/emojis/emojis-lib/.docz/app/index.html',
          db: '/Users/aleksandra/workspace/emojis/emojis-lib/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
