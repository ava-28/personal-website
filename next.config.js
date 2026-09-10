/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      { source: '/neurospace', destination: '/neurospace/index.html' },
    ]
  },
}

module.exports = nextConfig
