/** @type {import('next').NextConfig} */
const withBundleAnalyzer = process.env.ANALYZE === 'true' 
  ? require('@next/bundle-analyzer')({
      enabled: true,
    })
  : (config) => config;

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image configuration
  images: {
    domains: ['ubora.synthi-ai.com'], // Fixed typo: wwww -> www
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ubora.synthi-ai.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  productionBrowserSourceMaps: false,
  
  output: 'standalone',
  
  experimental: {
    // Enable if using app directory
    // appDir: true,
  },
  
  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }
    
    return config;
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Compression
  compress: true,
  
  // Power by header
  poweredByHeader: false,
};

module.exports = withBundleAnalyzer(nextConfig);
