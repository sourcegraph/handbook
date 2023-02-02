import redirects from './src/scripts/redirects.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // WARNING: Redirects defined only in next.config.js will NOT work when deployed in Netlify.
    // They also need to be added to Netlify's _redirects file.
    // Redirects here are only for `pnpm dev`/`pnpm start`.
    // See src/scripts/generate-redirects.js
    redirects: async () =>
        (await redirects()).map(({ source, destination }) => ({
            source,
            destination,
            permanent: false,
        })),

    generateBuildId: () => 'build',
    images: {
        domains: ['avatars.githubusercontent.com'],
    },
    swcMinify: true,
    trailingSlash: true,
    eslint: {
        // We don't rely on linting errors to break to stop the Neltify build
        ignoreDuringBuilds: true,
    },
}

export default nextConfig
