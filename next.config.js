/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
  });
  
  const nextConfig = {
    reactStrictMode: true, 
    swcMinify: true, 

     images: {
       domains: ['wwww.synthi-ai.com'],
     },
     productionBrowserSourceMaps: false 
  };
  
  module.exports = withBundleAnalyzer(nextConfig);