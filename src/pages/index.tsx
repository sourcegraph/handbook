import { GetStaticProps } from 'next'

import Page, { PageProps, getStaticProps as getStaticPropsForSlug } from './[...slug]'

/**
 * Render the root index page with content from `index.md`. It renders using the
 * same page component as `[...slug].tsx`, and it's a special case simply
 * because `[...slug]` doesn't match the root `/` path.
 */
export const getStaticProps: GetStaticProps<PageProps> = async context =>
    getStaticPropsForSlug({ ...context, params: { slug: '/' } })

export default Page
