/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: `${process.env.NEXT_PUBLIC_URL_GITHUB_AVATAR}`,
        port: '',
        pathname: '/u/**'
      },
      {
        protocol: 'http',
        hostname: `${process.env.NEXT_PUBLIC_IP_IMAGES}`,
        port: '3334',
        pathname: '/uploads/**'
      },
    ]
  }
}

module.exports = nextConfig