/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'github.com',
            port: '',
            pathname: '/AllysonAlves1.png',
          },
        ],
      },
};

export default nextConfig;
