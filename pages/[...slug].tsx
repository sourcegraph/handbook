import React from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
// import Layout from '../../components/layout'
import { getPagesBySlug, loadAllPages, LoadedPage } from '../lib/api'
// import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
import { Toc } from '@stefanprobst/rehype-extract-toc'
import { GetStaticPaths, GetStaticProps } from 'next'
import omitUndefinedFields from '../lib/omitUndefinedFields'

interface PageWithMetadata extends LoadedPage {
    title: string
    toc: Toc

    /** Rendered HTML. */
    content: string
}

interface PageProps {
    page: PageWithMetadata
}

export default function Page({ page }: PageProps) {
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
                <nav id="index">
                    <h4>On this page:</h4>
                    <TableOfContents toc={page.toc} />
                    <a
                        className="page-btn"
                        href={`https://github.com/sourcegraph/handbook/edit/main/_pages/${page.slug}`}
                    >
                        Edit this page
                    </a>{' '}
                    <a
                        className="page-btn"
                        href={`https://github.com/sourcegraph/handbook/commits/main/_pages/${page.slug}`}
                    >
                        History
                    </a>
                </nav>
                <div id="content">
                    {page.content ? (
                        <>
                            <nav id="breadcrumbs" className="breadcrumbs" aria-label="Breadcrumbs">
                                <a href="/">Home</a> /{' '}
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
                            <main className="markdown-body" dangerouslySetInnerHTML={{ __html: page.content }}></main>
                        </>
                    ) : (
                        <h1>Unexpected error</h1>
                    )}
                </div>
            </div>
        </>
    )
}

function TableOfContents({ toc }: { toc: Toc }) {
    return (
        <ul>
            {toc.map(node => (
                <React.Fragment key={node.id}>
                    <li>
                        <a href={'#' + node.id}>{node.value}</a>
                    </li>
                    {node.children && <TableOfContents toc={node.children} />}
                </React.Fragment>
            ))}
        </ul>
    )
}

function getFullSlugPath(slug: string | string[]) {
    if (typeof slug === 'string') {
        return slug
    }
    return slug.join('/')
}

export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
    const fullPath = getFullSlugPath(params.slug)
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
