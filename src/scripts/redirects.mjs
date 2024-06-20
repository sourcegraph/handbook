import { readFile } from 'fs/promises'

import { load } from 'js-yaml'

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
 * Reads Notion specific redirections from data/notion_migration.yaml.
 *
 * @returns {redirections: {source: string, destination: string, force: true}[]}
 */
async function readNotionMigrationRedirects() {
    const data = load(await readFile('data/notion_migration.yaml', 'utf8'))

    // While NextJS is okay if content exists when setting up a redirection,
    // Netlify doesn't: it will skip the redirection entirely if it finds
    // existing content.
    // To go around that, we add a new field 'force' that the script that
    // generate the final _redirects file used by Netlify uses to append
    // 301! on that entry, effectively forcing the redirection.
    for (const entry of data.redirections) {
        entry.force = true
    }
    return data
}

/**
 * Returns all redirects that should be generated.
 *
 * @returns {Promise<{ source: string, destination: string }[]>}
 */
export default async function redirects() {
    const movedPages = await getMovedPagesFromHistory()
    const notionRedirections = await readNotionMigrationRedirects()
    return cleanupRedirects([
        ...movedPages,
        // Add custom redirects
        {
            source: '/careers',
            destination: 'https://about.sourcegraph.com/jobs',
        },
    ]).concat(notionRedirections.redirections) // we skip the cleanup because notion redirects are always going outside.
}
