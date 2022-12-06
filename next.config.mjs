import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
})

export default withNextra({
   redirects: () => {
    return [
      {
        source: "/start",
        destination: "/fe",
        statusCode: 301,
      },
    ];
  },
  reactStrictMode: true,
})