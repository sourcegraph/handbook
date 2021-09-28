// import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
// import Layout from '../components/layout'
import { getAllPages } from '../lib/api'
// import Head from 'next/head'
// import { CMS_NAME } from '../lib/constants'

export default function Index({ allPages }) {
  const heroPost = allPages[0]
  const morePosts = allPages.slice(1)
  return (
    <>
      foo
      {/* <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout> */}
    </>
  )
}

export async function getStaticProps() {
  const allPages = getAllPages(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPages },
  }
}
