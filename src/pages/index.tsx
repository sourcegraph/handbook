import { GetStaticProps } from 'next'

import { getPagesBySlug } from '../lib/api'
import markdownToHtml from '../lib/markdownToHtml'
import omitUndefinedFields from '../lib/omitUndefinedFields'

import Page, { PageProps } from './[...slug]'

/**
 * Render the root index page with content from `index.md`. It renders using the
 * same page component as `[...slug].tsx`, and it's a special case simply
 * because `[...slug]` doesn't match the root `/` path.
 */
export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
    // This resolves to `index.md` in the root of the content directory.
    const page = await getPagesBySlug('/')

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

export default Page