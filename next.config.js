/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,

  env: {
    API_BACKEND: 'https://hirejob-be-production-2b96.up.railway.app/',
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
}


module.exports = nextConfig
