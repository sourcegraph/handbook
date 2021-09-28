import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
// import Layout from '../../components/layout'
import { getPagesBySlug, getAllPages } from '../lib/api'
// import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../lib/markdownToHtml'
import { Toc } from '@stefanprobst/rehype-extract-toc'

export default function Post({ post, morePosts, preview }) {
    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <div className="container">
            <nav id="index">
                <h4>On this page:</h4>
                <TableOfContents toc={post.toc} />
            </nav>
            <section id="content">
                {post.content ? (
                    <>
                        <nav id="breadcrumbs" className="breadcrumbs">
                            {/* {{range $index, $e := .Breadcrumbs}}
                  <a href="{{$e.URL}}" class="{{if $e.IsActive}}active{{end}}">
                    {{if eq $index 0}}
                      Home
                    {{else}}
                      {{$e.Label}}
                    {{end}}
                  </a> {{if not $e.IsActive}}/{{end}}
                {{end}} */}
                        </nav>
                        <div className="markdown-body" dangerouslySetInnerHTML={{ __html: post.content }}></div>
                    </>
                ) : (
                    <>
                        {/* {{if .ContentVersionNotFoundError}}
                <h1>Version not found</h1>
                <p>The version <code>{{.ContentVersion}}</code> was not found.</p>
              {{else if .ContentPageNotFoundError}}
                <h1>Page not found</h1>
                <p>The page <code>{{.ContentPagePath}}</code> was not found.</p>
              {{else}}<h1>Unexpected error</h1>
              {{end}} */}
                        <h1>Unexpected error</h1>
                    </>
                )}
            </section>
        </div>
    )
}

function TableOfContents({ toc }: { toc: Toc }) {
    return (
        <ul>
            {toc.map(node => (
                <>
                    <li>
                        <a href={'#' + node.id}>{node.value}</a>
                    </li>
                    {node.children && <TableOfContents toc={node.children} />}
                </>
            ))}
        </ul>
    )
}

export async function getStaticProps({ params }) {
    // make this work w folders
    const post = getPagesBySlug(params.slug[0], ['title', 'date', 'slug', 'author', 'content', 'ogImage', 'coverImage'])

    const { content, toc } = await markdownToHtml(post.content || '')

    return {
        props: {
            post: {
                ...post,
                content,
                toc,
            },
        },
    }
}

export async function getStaticPaths() {
    const posts = getAllPages(['slug'])

    const paths = {
        paths: posts.map(post => {
            return {
                params: {
                    slug: [post.slug],
                },
            }
        }),
        fallback: false,
    }

    return paths
}
