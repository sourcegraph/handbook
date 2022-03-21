import { getMovedPagesFromHistory } from './getMovedPagesFromHistory.mjs'

/**
 * Cleans up and filters a list of moved files — removing cycles,
 * resolving redirect chains, etc.
 *
 * @param {{ source: string, destination: string }[]} movedPages
 * @returns {{ source: string, destination: string }[]}
 */
export function cleanupRedirects(movedPages) {
    // Build a map of the redirects, so that we can detect cycles and resolve
    // redirect chains.
    // See https://github.com/sourcegraph/handbook/issues/1403 for a case that
    // is not handled by this logic.
    const redirects = new Map()
    for (const { source, destination } of movedPages) {
        const nextRedirect = redirects.get(destination)
        if (nextRedirect !== source) {
            const finalDestination = nextRedirect || destination
            redirects.set(source, finalDestination)
        }
        // If nextRedirect === source, it's a direct loop — drop it entirely.
    }
    return [...redirects.entries()].map(([source, destination]) => ({ source, destination }))
}

/**
 * Returns all redirects that should be generated.
 *
 * @returns {Promise<{ source: string, destination: string }[]>}
 */
export default async function redirects() {
    const movedPages = await getMovedPagesFromHistory()
    return cleanupRedirects([
        ...movedPages,

        // Add custom redirects
        {
            source: '/careers',
            destination: 'https://about.sourcegraph.com/jobs',
        },
    ])
}
