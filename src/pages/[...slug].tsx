import { Toc } from '@stefanprobst/rehype-extract-toc'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import React, { useEffect, useRef } from 'react'

import { Banner } from '../components/Banner'
import { EditSection } from '../components/EditSection'
import { TableOfContents } from '../components/TableOfContents'
import { getPageBySlugPath, loadAllPages, LoadedPage } from '../lib/api'
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

export interface PageWithMetadata extends LoadedPage {
    title?: string
    toc: Toc

    /** Rendered HTML. */
    content: string
    authors?: Author[]
    lastUpdated?: string
}

export interface PageProps {
    page: PageWithMetadata
}

const HEADING_SELECTOR = 'h1, h2, h3, h4, h5, h6'

export default function Page({ page }: PageProps): JSX.Element {
    const markdownBodyReference = useRef<HTMLElement>(null)
    const tocReference = useRef<HTMLElement>(null)
    const router = useRouter()
    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                for (const entry of entries) {
                    const tocLink = tocReference.current?.querySelector<HTMLAnchorElement>(
                        `a[href="#${entry.target.querySelector(HEADING_SELECTOR)!.id}"]`
                    )
                    const listItem = tocLink?.parentElement
                    if (entry.intersectionRatio > 0) {
                        // Visible: Mark <li> item and all ancestors (<li>s, <ul>s) as active
                        for (
                            let parent = listItem;
                            parent && parent !== tocReference.current;
                            parent = parent.parentElement
                        ) {
                            parent.classList.add('active')
                        }
                    } else {
                        // Not visible: Mark <li> item and all children as inactive
                        listItem?.classList.toggle('active', false)
                        for (const descendentItem of listItem?.querySelectorAll('ul, li') ?? []) {
                            descendentItem.classList.remove('active')
                        }
                    }
                }
            },
            {
                // Header height
                rootMargin: '-72px 0px 0px 0px',
            }
        )
        const headings = markdownBodyReference.current?.querySelectorAll(HEADING_SELECTOR)
        for (const heading of headings ?? []) {
            const section = heading.parentElement!
            observer.observe(section)
        }
        return () => observer.disconnect()
    })

    if (!router.isFallback && !page?.slugPath) {
        return <ErrorPage statusCode={404} />
    }

    const slugParts = page.slugPath.split('/').filter(Boolean)

    return (
        <>
            <NextSeo title={page.frontMatter?.title || page.title} description={page.frontMatter?.description} />
            <div className="container">
                {!page.frontMatter?.hide_sidebar && (
                    <nav id="right-sidebar">
                        <section className="right-sidebar-section" ref={tocReference}>
                            <h4 className="sidebar-heading">On this page</h4>
                            <TableOfContents toc={page.toc} className="table-of-contents" />
                        </section>

                        <EditSection page={page} />
                    </nav>
                )}
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
                            <Banner path={page.path} />
                            <main
                                className="markdown-body"
                                data-swiftype-name="body"
                                data-swiftype-type="text"
                                dangerouslySetInnerHTML={{ __html: page.content }}
                                ref={markdownBodyReference}
                            />
                            {/* Related content */}
                            <script
                                data-st-module="em_uRFPahAtp2Z--FzaaYyq"
                                src="//s.swiftypecdn.com/modules/v1/embed.js"
                                async={true}
                                defer={true}
                            />
                        </>
                    ) : (
                        <h1>Unexpected error</h1>
                    )}
                    {page.frontMatter?.hide_sidebar && <EditSection page={page} />}
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

    const fullPath = getFullSlugPath(params.slug)
    const page = await getPageBySlugPath(fullPath)
    let commitData = null
    if (process.env.CONTEXT === 'production') {
        // Only fetch real commit data for production builds
        commitData = await getGitHubCommitData(fullPath)
    }

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
            },
        }),
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const pages = await loadAllPages(['slug'])

    // Omit the root index path because it's rendered by `index.tsx`.
    const pagesWithoutRootIndex = pages.filter(page => page.slugPath !== '')

    const paths = {
        paths: pagesWithoutRootIndex.map(post => ({
            params: {
                // The slug is an array of directories in the path.
                slug: post.slugPath.split('/'),
            },
        })),
        fallback: false,
    }

    return paths
}
