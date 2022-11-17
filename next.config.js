/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

const withTM = require('next-transpile-modules')(['three'])
module.exports = withTM({
  future: {
    webpack5: true,
  },
})

module.exports = nextConfig
