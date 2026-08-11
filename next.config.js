/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/task-manager',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
