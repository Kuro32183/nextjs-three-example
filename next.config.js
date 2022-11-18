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

module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      use: {
        loader: 'file-loader',
      },
    })
    return config
  },
}

module.exports = nextConfig
