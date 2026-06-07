/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,

  turbopack: {},

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'wwww.synthi-ai.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  productionBrowserSourceMaps: false,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

module.exports = nextConfig;
