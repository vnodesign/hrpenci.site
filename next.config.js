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

const nextConfig = {
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
}

module.exports = {
  ...withNextra(),
  ...withPWA,
  ...nextConfig,
};
