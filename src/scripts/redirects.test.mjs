/* eslint-env jest */

import { cleanupRedirectsForTesting as cleanupRedirects } from './redirects.mjs'

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

    const outOfOrderLoop = [
        { source: '/c', destination: '/a' },
        { source: '/b', destination: '/c' },
        { source: '/a', destination: '/b' },
    ]
    // The loop should still be detected and the last redirect dropped.
    expect(cleanupRedirects(outOfOrderLoop)).toEqual([
        { source: '/c', destination: '/a' },
        { source: '/b', destination: '/a' },
    ])

    // In a clean chain of redirects, destinations should be updated, but nothing dropped.
    const chainedRedirects = [
        { source: '/b', destination: '/c' },
        { source: '/a', destination: '/c' },
    ]
    expect(cleanupRedirects(chainedRedirects)).toEqual(chainedRedirects)
})
