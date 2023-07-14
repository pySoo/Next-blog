const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  swcMinify: false,
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
});
