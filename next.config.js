const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    trailingSlash: true,
    webpack: (config, { dev }) => {
        // Tell webpack to ignore watching content files in the content folder.
        // Otherwise webpack recompiles the app and refreshes the whole page.
        // function to update the content on the page without refreshing the
        // whole page
        config.watchOptions.ignored.push('/page/');
        if (dev) {
            // enable tree shaking for development mode, on production it is on by default
            config.optimization.usedExports = true;
        }

        return config;
    }
});

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})

module.exports = withNextra()

module.exports = withBundleAnalyzer()
