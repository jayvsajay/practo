/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodburl : 'mongodb://localhost:27017/practo1',
    saltRounds : 10,
    jwtSecret: 'fedlkrfq;ferf'
  }
}

module.exports = nextConfig
