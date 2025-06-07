/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // GitHub Pages 部署配置
  basePath: process.env.NODE_ENV === 'production' ? '/conflictResolution' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/conflictResolution/' : '',
}

export default nextConfig
