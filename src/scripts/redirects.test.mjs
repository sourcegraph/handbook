/* eslint-env jest */

import { cleanupRedirects } from './redirects.mjs'

test('basic', () => {
    expect(cleanupRedirects([])).toEqual([])
})

test('loops', () => {
    const directLoop = [
        { source: '/ops/finance/arr', destination: '/ops/finance/ap' },
        { source: '/ops/finance/ap', destination: '/ops/finance/arr' },
    ]
    expect(cleanupRedirects(directLoop)).toEqual([{ source: '/ops/finance/arr', destination: '/ops/finance/ap' }])

    const indirectLoop = [
        { source: '/b', destination: '/c' },
        { source: '/a', destination: '/b' },
        { source: '/c', destination: '/a' },
    ]
    // Intermediate redirect destinations should be replaced with final ones, and the last
    // link should be dropped to break the cycle.
    expect(cleanupRedirects(indirectLoop)).toEqual([
        { source: '/b', destination: '/c' },
        { source: '/a', destination: '/c' },
    ])

    const directLoop2 = [
        { source: '/b', destination: '/c' },
        { source: '/c', destination: '/a' },
        { source: '/a', destination: '/b' },
    ]
    expect(cleanupRedirects(directLoop2)).toEqual([
        { source: '/b', destination: '/c' },
        { source: '/c', destination: '/a' },
        { source: '/a', destination: '/c' },
    ])

    // In a clean chain of redirects, destinations should be updated, but nothing dropped.
    const chainedRedirects = [
        { source: '/b', destination: '/c' },
        { source: '/a', destination: '/b' },
    ]
    expect(cleanupRedirects(chainedRedirects)).toEqual([
        { source: '/b', destination: '/c' },
        { source: '/a', destination: '/c' },
    ])
})
