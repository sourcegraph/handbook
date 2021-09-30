import { Toc } from '@stefanprobst/rehype-extract-toc'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import EditSection from '../components/EditSection'
import { TableOfContents } from '../components/TableOfContents'
import { getPagesBySlug, loadAllPages, LoadedPage } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import omitUndefinedFields from '../lib/omitUndefinedFields'

export interface Author {
    name: string
    username: string
    avatar: string
    url: string
}

export interface PageWithMetadata extends LoadedPage {
    title?: string
    toc: Toc

    /** Rendered HTML. */
    content: string
    authors?: Author[]
    lastUpdated: string
}

export interface PageProps {
    page: PageWithMetadata
}

export default function Page({ page }: PageProps): JSX.Element {
    const router = useRouter()
    if (!router.isFallback && !page?.slug) {
        return <ErrorPage statusCode={404} />
    }
    const slugParts = page.slug.split('/').filter(Boolean)
    return (
        <>
            <Head>
                <title>{page.title}</title>
            </Head>
            <div className="container">
                <nav id="right-sidebar">
                    <h4 className="sidebar-heading">On this page</h4>
                    <TableOfContents toc={page.toc} className="table-of-contents" />
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

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
    if (!params || !params.slug) {
        throw new Error('Missing slug')
    }

    const fullPath = getFullSlugPath(params.slug)
    const page = await getPagesBySlug(fullPath, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])
    let lastUpdated = ''
    const authors = await fetch(
        `https://api.github.com/repos/sourcegraph/handbook/commits?path=content/${page.path}`
    ).then(async response => {
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

        const commitData = (await response.json()) as GitHubCommitData[]

        // GitHub returns most recent commit first, so just grab the first date
        lastUpdated = commitData[0].commit.author.date

        return (
            commitData
                // filter for unique authors
                .filter(
                    (data, index, self) => index === self.findIndex(({ author }) => author.login === data.author.login)
                )
                .map(
                    ({ commit, author }): Author => ({
                        name: commit.author.name,
                        username: author.login,
                        avatar: author.avatar_url,
                        url: author.html_url,
                    })
                )
        )
    })

    const { content, title, toc } = await markdownToHtml(page.body || '', fullPath, page.isIndexPage)

    return {
        props: omitUndefinedFields({
            page: {
                ...page,
                title,
                content,
                toc,
                authors,
                lastUpdated,
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
                slug: post.slug.split('/'),
            },
        })),
        fallback: false,
    }

    return paths
}
