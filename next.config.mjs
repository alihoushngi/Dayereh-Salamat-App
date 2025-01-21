/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    PRODUCTION: process.env.API_HOST,
    DEVELOPMENT: process.env.API_HOST,
    STAGING: 'https://staging.api.dayereh-salamat.ir/api/v1/',
  },
  images: {
    domains: ['admin.spadpost.ir', 'api.spadpost.ir'],
  },
}

export default nextConfig
