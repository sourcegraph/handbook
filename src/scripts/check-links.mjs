import * as fs from 'fs/promises'
import * as path from 'path'
import { fileURLToPath, pathToFileURL } from 'url'
import { promisify } from 'util'

import * as githubAction from '@actions/core'
import chalk from 'chalk'
import glob from 'globby'
import lineColumn from 'line-column'
import _checkMarkdownLinks from 'markdown-link-check'
import RelateUrl from 'relateurl'
import stripAnsi from 'strip-ansi'

const checkMarkdownLinks = promisify(_checkMarkdownLinks)

const absoluteHandbookUrlPrefixPattern =
    /^https?:\/\/(handbook\.sourcegraph\.com\/|about\.sourcegraph\.com\/(handbook|company)\/)/

const repoBasePath = path.resolve(fileURLToPath(import.meta.url), '../../..')
const contentFolderPath = path.join(repoBasePath, 'content')
const contentFolderFileUrl = pathToFileURL(contentFolderPath)

const filePaths = await glob('**/*.md', { cwd: contentFolderPath })

const allLinkDestinations = new Set()

let errorsReported = false

for (const filePath of filePaths) {
    const absoluteFilePath = path.join(contentFolderPath, filePath)
    const filePathFromRepoRoot = path.relative(repoBasePath, absoluteFilePath)
    const fileUrl = pathToFileURL(absoluteFilePath)

    const content = await fs.readFile(absoluteFilePath, 'utf-8')

    const results = await checkMarkdownLinks(content, {
        baseUrl: pathToFileURL(path.dirname(absoluteFilePath)).href,
        ignorePatterns: [
            {
                // Ignore external links as they would cause irreproducable builds
                // Exception: our Google Cloud Storage URLs, as only admins are allowed to delete files so the chance of builds breaking is low.
                pattern:
                    /^https?:\/\/(?!(cors-anywhere.sgdev.org\/https?:\/\/)?sourcegraphstatic.com\/|storage.googleapis.com\/sourcegraph-assets\/)/,
            },
        ],
    })

    const lineColumnFinder = lineColumn(content, { origin: 1 })

    for (const { link, err } of results) {
        const absoluteDestination = new URL(link, fileUrl)
        allLinkDestinations.add(absoluteDestination.href)

        const index = content.indexOf(link)
        /** @type {githubAction.AnnotationProperties} */
        const location = {
            file: filePathFromRepoRoot,
        }
        if (index !== -1) {
            const position = lineColumnFinder.fromIndex(index) // Hacky, but works as long as it's only linked once
            location.startLine = position.line
            location.startColumn = position.col
        }

        if (err) {
            let message = `Link destination not found: ${chalk.underline(link)}. `
            if (isRelativeLink(link)) {
                const resolvedPath = path.relative(contentFolderPath, fileURLToPath(absoluteDestination))
                if (resolvedPath !== path.normalize(link)) {
                    message += `The full resolved path would be ${chalk.italic(resolvedPath)}, which doesn't exist. `
                }
            }
            message +=
                'For help on how linking in the handbook works, see https://handbook.sourcegraph.com/editing/linking-within-handbook'
            reportError(message, location)
        }

        // Check links are absolute

        if (absoluteHandbookUrlPrefixPattern.test(link)) {
            const destinationFileUrl = new URL(
                link.replace(absoluteHandbookUrlPrefixPattern, contentFolderFileUrl.href + '/')
            )
            try {
                // Should the URL point to an index file?
                if ((await fs.stat(destinationFileUrl)).isDirectory()) {
                    destinationFileUrl.pathname += '/index.md'
                }
            } catch (error) {
                if (error.code !== 'ENOENT') {
                    throw error
                }
                // If there was no directory with that name, it should point to a .md file
                destinationFileUrl.pathname += '.md'
            }
            const relativeUrl = RelateUrl.relate(fileUrl.href, destinationFileUrl.href, {
                output: RelateUrl.PATH_RELATIVE,
                removeDirectoryIndexes: false,
            })
            reportError(
                `Absolute handbook link found: ${chalk.underline(link)}. ` +
                    `Handbook links must always be ${chalk.italic('relative')}. ` +
                    `Replace this URL with "${chalk.underline(relativeUrl)}". ` +
                    'For more help, see https://handbook.sourcegraph.com/editing/linking-within-handbook.',
                location
            )
        }
    }
}

// Check all pages are linked to

// console.log('\n')

// for (const filePath of filePaths) {
//     const absoluteFilePath = path.join(contentFolderPath, filePath)
//     if (!allLinkDestinations.has(pathToFileURL(absoluteFilePath).href)) {
//         const filePathFromRepoRoot = path.relative(repoBasePath, absoluteFilePath)
//         reportError('This page is not linked to from any other page', {
//             file: filePathFromRepoRoot,
//         })
//     }
// }

if (!errorsReported) {
    console.log('✅  No problems found')
}

/**
 * @param {string} errorMessage
 * @param {githubAction.AnnotationProperties} location
 */
function reportError(errorMessage, location) {
    if (process.env.GITHUB_ACTION) {
        githubAction.error(stripAnsi(errorMessage), location)
    } else {
        console.log(`❌ ${chalk.red.bold(formatLocation(location))} ${chalk.red(errorMessage)}`)
    }
    process.exitCode = 1
    errorsReported = true
}

/**
 * @param {githubAction.AnnotationProperties} location
 */
function formatLocation(location) {
    return [location.file, location.startLine, location.startColumn].filter(Boolean).join(':')
}

/**
 * @param {string} link
 */
function isRelativeLink(link) {
    return !link.includes(':') && !link.startsWith('/')
}
