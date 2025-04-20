/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  images: {
    domains: ['admin.spadpost.ir', 'api.spadpost.ir'],
  },
}

export default nextConfig
