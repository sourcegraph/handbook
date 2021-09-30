import { formatDistanceToNow } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { CONTENT_FOLDER } from '../lib/constants'
import { PageWithMetadata } from '../pages/[...slug]'

interface EditSectionProps {
    page: PageWithMetadata
}

const EditSection: React.FunctionComponent<EditSectionProps> = ({ page }) => {
    const LastUpdated: React.FunctionComponent = () =>
        (page.lastUpdated !== '' && (
            <div>
                Updated {formatDistanceToNow(new Date(page.lastUpdated))} ago •{' '}
                <Link href={`https://github.com/sourcegraph/handbook/commits/main/${CONTENT_FOLDER}/${page.slug}.md`}>
                    History
                </Link>
            </div>
        )) ||
        null

    const EditOnGithub: React.FunctionComponent = () => (
        <Link href={`https://github.com/sourcegraph/handbook/edit/main/${CONTENT_FOLDER}/${page.slug}.md`}>
            Edit this page on GitHub
        </Link>
    )

    if (!page.authors) {
        return (
            <section className="edit-section">
                <LastUpdated />

                {page.lastUpdated !== '' && <hr className="edit-seperator" />}

                <EditOnGithub />
            </section>
        )
    }

    const AVATARS_TO_DISPLAY = 3
    const moreAuthors = page.authors.length - AVATARS_TO_DISPLAY
    const authors = page.authors.slice(0, AVATARS_TO_DISPLAY)

    return (
        <section className="edit-section">
            <h5 className="edit-title">Maintained by</h5>
            <div className="avatar-set">
                {authors.map(author => (
                    <Link key={author.username} href={author.url}>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="avatar" title={author.name} target="_blank" rel="noreferrer noopener">
                            <Image alt={`Avatar of ${author.name}`} src={author.avatar} width="36" height="36" />
                        </a>
                    </Link>
                ))}
                {moreAuthors > 0 && <span>+ {moreAuthors} more</span>}
            </div>
            <LastUpdated />

            <hr className="edit-seperator" />

            <EditOnGithub />
        </section>
    )
}

export default EditSection
