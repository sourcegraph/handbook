import { GetStaticProps } from 'next'

// import { getPagesBySlug } from '../lib/api'

import markdownToHtml from '../lib/markdownToHtml'
import omitUndefinedFields from '../lib/omitUndefinedFields'

import Page, { PageProps } from './[...slug]'

/**
 * Render the root index page with content from `index.md`. It renders using the
 * same page component as `[...slug].tsx`, and it's a special case simply
 * because `[...slug]` doesn't match the root `/` path.
 */
export const getStaticProps: GetStaticProps<PageProps> = async ({ params }) => {
    const markdown = `
        # Sourcegraph Handbook

        This is a placeholder file for the root index of the handbook.
    `

    const { content, title, toc } = await markdownToHtml(markdown)

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
