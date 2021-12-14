import { getMovedPagesFromHistory } from './getMovedPagesFromHistory.mjs'

/**
 * Returns all redirects that should be generated.
 *
 * @returns {Promise<{ source: string, destination: string }[]>}
 */
export default async function redirects() {
    return [
        ...await getMovedPagesFromHistory(),

        // Add custom redirects
        {
            source: '/careers',
            destination: 'https://about.sourcegraph.com/jobs'
        },
    ]
};
