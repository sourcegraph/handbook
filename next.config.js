/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  redirects: async () => [
    {
      source: '/testredirect',
      destination: '/usage',
    },
  ],
}

module.exports = nextConfig
