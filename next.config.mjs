import redirects from './src/scripts/redirects.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // WARNING: Redirects defined only in next.config.js will NOT work when deployed in Netlify.
    // They also need to be added to Netlify's _redirects file.
    // Redirects here are only for `yarn dev`/`yarn start`.
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
}

export default nextConfig
