import { formatDistanceToNow } from 'date-fns'
import Link from 'next/link'
import React from 'react'

import { CONTENT_FOLDER } from '../lib/constants'
import { PageWithMetadata } from '../pages/[...slug]'

interface EditSectionProps {
    page: PageWithMetadata
}

const AVATARS_TO_DISPLAY = 8

const GENERATED_PAGE_DATA = {
    'company/team/index.md': 'team.yml',
    'product/feature_maturity.md': 'features.yml',
    'product/product_teams.md': 'product_teams.yml',
    'product/feature_compatibility.md': 'features.yml',
}

export const EditSection: React.FunctionComponent<EditSectionProps> = ({ page }) => (
    <section className="right-sidebar-section edit-section">
        {page.authors && page.authors.length > 0 && (
            <>
                <h4 className="sidebar-heading mb-0">Contributors</h4>
                <div className="avatar-set">
                    {page.authors.slice(0, AVATARS_TO_DISPLAY).map(author => (
                        <a
                            href={author.url}
                            className="avatar"
                            title={author.name}
                            target="_blank"
                            rel="noreferrer noopener"
                            key={author.username}
                        >
                            <img
                                alt={`Avatar of ${author.name}`}
                                src={`${author.avatar}&s=72`}
                                width="36"
                                height="36"
                            />
                        </a>
                    ))}
                    {page.authors.length - AVATARS_TO_DISPLAY > 0 && (
                        <span>+ {page.authors.length - AVATARS_TO_DISPLAY} more</span>
                    )}
                </div>
            </>
        )}
        {page.lastUpdated && (
            <div>
                Updated <time dateTime={page.lastUpdated}>{formatDistanceToNow(new Date(page.lastUpdated))} ago</time>{' '}
                <span className="text-muted mx-1" aria-hidden="true">
                    •
                </span>{' '}
                <Link
                    href={`https://github.com/sourcegraph/handbook/commits/main/${CONTENT_FOLDER}/${page.path.replace(
                        /^\//,
                        ''
                    )}`}
                >
                    History
                </Link>
            </div>
        )}
        <div className="sidebar-bottom-links">
            {Object.entries(GENERATED_PAGE_DATA).map(([pagePath, yamlFile]) => {
                if (page.path === pagePath) {
                    return (
                        <Link
                            href={`https://github.com/sourcegraph/handbook/edit/main/data/${yamlFile}`}
                        >
                            Edit this page
                        </Link>
                    )
                }
                return null
            })}

            {!Object.prototype.hasOwnProperty.call(GENERATED_PAGE_DATA, page.path) && (
                <Link
                    href={`https://github.com/sourcegraph/handbook/edit/main/${CONTENT_FOLDER}/${page.path.replace(
                        /^\//,
                        ''
                    )}`}
                >
                    Edit this page
                </Link>
            )}
        </div>
    </section>
)
