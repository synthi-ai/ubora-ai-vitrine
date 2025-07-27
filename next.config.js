/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {

  reactStrictMode: true,

  images: {
    // Use remotePatterns for more secure and flexible image host configuration
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

    styledComponents: false, // Set to `true` if you are using styled-components and want SWC transform
  },

  // Custom webpack configuration.
  webpack: (config, { dev, isServer }) => {
   
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);