// Generates the Netlify _redirects file from the moved files in the Git history.

import fs from 'fs/promises'

import { getMovedPagesFromHistory } from './getMovedPagesFromHistory.mjs'

const movedPages = await getMovedPagesFromHistory()

const lines =
    '\n' +
    '# Generated by generate-redirects.mjs from Git history\n' +
    movedPages.map(({ source, destination }) => `${source} ${destination}`).join('\n') +
    '\n'

console.log('Redirects:\n', lines)

await fs.writeFile(new URL('../../out/_redirects', import.meta.url), lines)
