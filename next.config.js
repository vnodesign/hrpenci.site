/** @type {import('next').NextConfig} */

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  staticImage: true,
  flexsearch: {
    codeblocks: false,
  },
});

const withPWA = require("next-pwa");

module.exports = withNextra(
  withPWA({
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      // disable: process.env.NODE_ENV === "development",
    },
    optimization: {
      mergeDuplicateChunks: true,
    },
    images: {
      unoptimized: true
    }
  }),
);
