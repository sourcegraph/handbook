import { readdirSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'

import { Toc } from '@stefanprobst/rehype-extract-toc'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import { EditSection } from '../components/EditSection'
import { TableOfContents } from '../components/TableOfContents'
import { getPageBySlugPath, loadAllPages, LoadedPage } from '../lib/api'
import { CONTENT_FOLDER } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'
import omitUndefinedFields from '../lib/omitUndefinedFields'

export interface Author {
    name: string
    username: string
    avatar: string
    url: string
}

interface GitHubCommitData {
    commit: {
        author: {
            name: string
            date: string
        }
    }
    author: {
        login: string
        avatar_url: string
        html_url: string
    }
}

interface LeftNav {
    title: string
    path: string
    children?: LeftNav[]
}

export interface PageWithMetadata extends LoadedPage {
    title?: string
    toc: Toc
    leftNav: LeftNav[]

    /** Rendered HTML. */
    content: string
    authors?: Author[]
    lastUpdated?: string
}

export interface PageProps {
    page: PageWithMetadata
}

export default function Page({ page }: PageProps): JSX.Element {
    const router = useRouter()
    if (!router.isFallback && !page?.slugPath) {
        return <ErrorPage statusCode={404} />
    }
    const slugParts = page.slugPath.split('/').filter(Boolean)

    const isCurrentPath = (nav: LeftNav): boolean => nav.path === router.asPath
    return (
        <>
            <Head>
                <title>{page.title}</title>
            </Head>
            <div className="container">
                <nav id="right-sidebar">
                    <section className="right-sidebar-section">
                        <h4 className="sidebar-heading">On this page</h4>
                        <TableOfContents toc={page.toc} className="table-of-contents" />
                    </section>
                    <EditSection page={page} />
                </nav>
                <div id="content">
                    {page.content ? (
                        <>
                            <nav id="breadcrumbs" className="breadcrumbs" aria-label="Breadcrumbs">
                                <a href="/">Handbook</a>
                                {slugParts.map((part, index) => {
                                    const href = '/' + slugParts.slice(0, index + 1).join('/')
                                    const isActive = index === slugParts.length - 1
                                    return (
                                        <React.Fragment key={href}>
                                            {' '}
                                            /{' '}
                                            <a
                                                href={href}
                                                className={isActive ? 'active' : undefined}
                                                aria-current={isActive ? 'page' : undefined}
                                            >
                                                {part}
                                            </a>
                                        </React.Fragment>
                                    )
                                })}
                            </nav>
                            <main className="markdown-body" dangerouslySetInnerHTML={{ __html: page.content }} />
                        </>
                    ) : (
                        <h1>Unexpected error</h1>
                    )}
                </div>
                <nav id="left-sidebar">
                    <ul>
                        {page.leftNav.map(nav => (
                            <>
                                <li key={nav.path} className={isCurrentPath(nav) ? 'open' : undefined}>
                                    <Link href={nav.path}>{nav.title}</Link>
                                </li>
                                {nav.children && isCurrentPath(nav) && (
                                    <ul>
                                        {nav.children.map(child => (
                                            <li key={child.path}>
                                                <Link href={child.path}>{child.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    )
}

function getFullSlugPath(slug: string | string[]): string {
    if (typeof slug === 'string') {
        return slug
    }
    return slug.join('/')
}

async function getGitHubCommitData(pagePath: string): Promise<{ lastUpdated: string; authors: Author[] } | null> {
    if (!process.env.GITHUB_TOKEN) {
        console.warn('No GITHUB_TOKEN env var set, performing unauthenticated API request')
    }
    const response = await fetch(`https://api.github.com/repos/sourcegraph/handbook/commits?path=content/${pagePath}`, {
        headers: process.env.GITHUB_TOKEN ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` } : {},
    })
    const commitData = (await response.json()) as GitHubCommitData[]

    if (!commitData || response.status !== 200) {
        console.error('Erro fetching contributors from GitHub', commitData)
        return null
    }

    return {
        // GitHub returns most recent commit first, so just grab the first date
        lastUpdated: commitData?.[0]?.commit?.author?.date,
        authors: commitData
            // Filter out occasional null authors (not sure if it's a GitHub API
            // bug, it only seems to happen in authenticated requests)
            ?.filter(data => !!data.author)
            ?.filter(
                // filter for unique authors
                (data, index, self) => index === self.findIndex(({ author }) => author.login === data.author.login)
            )
            .map(
                ({ commit, author }): Author => ({
                    name: commit.author.name,
                    username: author.login,
                    avatar: author.avatar_url,
                    url: author.html_url,
                })
            ),
    }
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
    if (!params || !params.slug) {
        throw new Error('Missing slug')
    }

    const topLevelPaths = readdirSync(join(process.cwd(), CONTENT_FOLDER), { withFileTypes: true })
        .filter(directory => directory.isDirectory())
        .map(directory => directory.name)

    const leftNav: LeftNav[] = topLevelPaths
        .map(path => {
            const pathToIndex = join(process.cwd(), CONTENT_FOLDER, path, 'index.md')

            if (!existsSync(pathToIndex)) {
                return
            }

            const contents = readFileSync(pathToIndex, 'utf8')
            const heading = contents.match(/^# (.*)$/m)?.[1]

            if (!heading) {
                return
            }

            const h2Headings = contents
                .match(/^## (.*)$/gm)
                ?.map(h2Heading => h2Heading.replace(/^## /, '').replace(/\[(.*)]/m, '$1'))
            const children: LeftNav[] | undefined = h2Headings?.map(h2Heading => ({
                title: h2Heading,
                path: `/${path}#${h2Heading.replace(/[\s_]+/g, '-').toLocaleLowerCase()}`,
            }))

            return {
                title: heading,
                path: `/${path}`,
                children,
            }
        })
        .filter(Boolean) as LeftNav[]

    const fullPath = getFullSlugPath(params.slug)
    const page = await getPageBySlugPath(fullPath)
    const commitData = await getGitHubCommitData(fullPath)

    const { content, title, toc } = await markdownToHtml(page.body || '', fullPath, page.isIndexPage)

    return {
        props: omitUndefinedFields({
            page: {
                ...page,
                title,
                content,
                toc,
                authors: commitData?.authors,
                lastUpdated: commitData?.lastUpdated,
                leftNav,
            },
        }),
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await loadAllPages(['slug'])

    const paths = {
        paths: pages.map(post => ({
            params: {
                // The slug is an array of directories in the path.
                slug: post.slugPath.split('/'),
            },
        })),
        fallback: false,
    }

    return paths
}
