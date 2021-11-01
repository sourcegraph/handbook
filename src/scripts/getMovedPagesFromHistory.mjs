import exec from 'execa'

import { encodeURIPathComponent } from './uri.mjs'

/**
 * @returns {Promise<{ source: string, destination: string }[]>}
 */
export async function getMovedPagesFromHistory() {
    const result = await exec('git', ['log', '--name-status', '--pretty=', '--diff-filter=R', 'content'])

    const movedFilesFromHistory = result.stdout
        .split('\n')
        .map(line => {
            const [source, destination] = line
                .split('\t')
                .slice(1)
                .map(path =>
                    path
                        .replace(/^content/, '')
                        .replace(/\.md$/, '')
                        .replace(/\/index/, '')
                )
                .map(encodeURIPathComponent)
            return { source, destination }
        })
        .filter(({ source, destination }) => destination.toLowerCase() !== source.toLowerCase())
        // Make sure to filter out all redirects that lead to a destination that has ANOTHER redirect EARLIER in the list.
        // Else it would create a redirect loop.
        // This way, the top-most (most recent) entries win.
        // Other redirect chains, that don't lead to loops, are fine.
        .filter(({ destination }, index, list) => {
            const otherIndex = list.findIndex(({ source }) => source === destination)
            return otherIndex === -1 || otherIndex > index
        })

    return movedFilesFromHistory
}
