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

export default function Post({ post }: { post: PageWithMetadata }) {
    const router = useRouter()
    console.log(post)
    const slugParts = post.slug.split('/')
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <>
            <Head>
                <title>{post.title}</title>
            </Head>
            <div className="container">
                <nav id="index">
                    <h4>On this page:</h4>
                    <TableOfContents toc={post.toc} />
                </nav>
                <div id="content">
                    {post.content ? (
                        <>
                            <nav id="breadcrumbs" className="breadcrumbs" aria-label="Breadcrumbs">
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
                            <main className="markdown-body" dangerouslySetInnerHTML={{ __html: post.content }}></main>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const fullPath = getFullSlugPath(params.slug)
    const post = await getPagesBySlug(fullPath, ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])

    const { content, title, toc } = await markdownToHtml(post.body || '')

    return {
        props: omitUndefinedFields({
            post: {
                ...post,
                title,
                content,
                toc,
            },
        }),
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const posts = await loadAllPages(['slug'])

    const paths = {
        paths: posts.map(post => ({
            params: {
                // The slug is an array of directories in the path.
                slug: post.slug.split('/'),
            },
        })),
        fallback: false,
    }

    return paths
}
