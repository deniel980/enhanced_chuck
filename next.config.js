/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ibb.co',
        port: '',
        pathname: '/xmWhkH2/**',
      },
    ],
  },
}

module.exports = nextConfig
