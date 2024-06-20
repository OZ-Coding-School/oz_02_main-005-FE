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
    //const baseUrl = 'https://52.78.66.160:8000';
    return [
      {
        source: '/:path*',
        destination: 'https://52.78.66.160:8000/:path*',
      },
      // {
      //   source: '/api/member/create/:path*',
      //   destination: `${baseUrl}/member/create/:path*`,
      // },
    ];
  },
};

export default nextConfig;
