import { Toc } from '@stefanprobst/rehype-extract-toc'
import { GetStaticPaths, GetStaticProps } from 'next'
import ErrorPage from 'next/error'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'

import { TableOfContents } from '../components/TableOfContents'
import { getPagesBySlug, loadAllPages, LoadedPage } from '../lib/api'
import { CONTENT_FOLDER } from '../lib/constants'
import markdownToHtml from '../lib/markdownToHtml'
import omitUndefinedFields from '../lib/omitUndefinedFields'

interface PageWithMetadata extends LoadedPage {
    title?: string
    toc: Toc

    /** Rendered HTML. */
    content: string
}

export interface PageProps {
    page: PageWithMetadata
}

export default function Page({ page }: PageProps): JSX.Element {
    const router = useRouter()
    if (!router.isFallback && !page?.slug) {
        return <ErrorPage statusCode={404} />
    }
    const slugParts = page.slug.split('/')
    return (
        <>
            <Head>
                <title>{page.title}</title>
            </Head>
            <div className="container">
                <nav id="right-sidebar">
                    <h4 className="sidebar-heading">On this page</h4>
                    <TableOfContents toc={page.toc} className="table-of-contents" />
                    <a
                        className="d-block py-1"
                        href={`https://github.com/sourcegraph/handbook/edit/main/${CONTENT_FOLDER}/${page.slug}`}
                    >
                        Edit this page
                    </a>{' '}
                    <a
                        className="d-block py-1"
                        href={`https://github.com/sourcegraph/handbook/commits/main/${CONTENT_FOLDER}/${page.slug}`}
                    >
                        History
                    </a>
                </nav>
                <div id="content">
                    {page.content ? (
                        <>
                            <nav id="breadcrumbs" className="breadcrumbs" aria-label="Breadcrumbs">
                                <a href="/">Handbook</a> /{' '}
                                {slugParts.map((part, index) => {
                                    const href = '/' + slugParts.slice(0, index + 1).join('/')
                                    const isActive = index === slugParts.length - 1
                                    return (
                                        <React.Fragment key={href}>
                                            <a
                                                href={href}
                                                className={isActive ? 'active' : undefined}
                                                aria-current={isActive ? 'page' : undefined}
                                            >
                                                {part}
                                            </a>{' '}
                                            {!isActive && '/ '}
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
    const fullPath = getFullSlugPath(params!.slug!)
    const page = await getPagesBySlug(fullPath, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])

    const { content, title, toc } = await markdownToHtml(page.body || '')

    return {
        props: omitUndefinedFields({
            page: {
                ...page,
                title,
                content,
                toc,
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
