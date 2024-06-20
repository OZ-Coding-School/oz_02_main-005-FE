/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  async rewrites() {
    const baseUrl = 'https://52.78.66.160:8000';
    return [
      {
        source: '/api/cards/:path*',
        destination: `${baseUrl}/cards/:path*`,
      },
      {
        source: '/api/cardset/:path*',
        destination: `${baseUrl}/cardset/:path*`,
      },
      {
        source: '/api/comments/:path*',
        destination: `${baseUrl}/comments/:path*`,
      },
      {
        source: '/api/community/:path*',
        destination: `${baseUrl}/community/:path*`,
      },
      {
        source: '/api/folders/:path*',
        destination: `${baseUrl}/folders/:path*`,
      },
      {
        source: '/api/member/:path*',
        destination: `${baseUrl}/member/:path*`,
      },
    ];
  },
};

export default nextConfig;
