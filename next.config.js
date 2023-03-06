/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: process.env.NEXT_PUBLIC_AWS_S3_PROTOCOL || 'https',
        hostname: process.env.NEXT_PUBLIC_AWS_S3_LINK || '/',
      },
    ],
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: `${process.env.NEXT_PUBLIC_DEFAULT_API_URL || ''}/:slug*`,
      },
      {
        source: '/about',
        destination: 'https://google.com',
      },
    ]
  },
}

module.exports = nextConfig
