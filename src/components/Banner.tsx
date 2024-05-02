import React from 'react'

/**
 * Banner generates the appropriate banner(s) for the given slug paths. Banners are
 * hardcoded in this component.
 */
export function Banner({ path }: { path: string }): JSX.Element {
    // Banners should each be an <aside> with the appropriate className to indicate the
    // admonition type.

    const banners: React.ReactElement[] = [
        // Deprecation notice
        <aside className="warning" key="deprecation-banner">
            <div>
                ⚠️ We are in the process of migrating to Notion as Sourcegraph's handbook platform.{' '}
                <b>
                    This content may represent incomplete, or out-of-date processes - please look for the equivalent
                    page in the new site at <a href="https://sourcegraph.notion.site">sourcegraph.notion.site</a>.
                </b>
                <br />
                <br />
                The contents of this page will only be retained until <b>end of May 2024</b>. If you own this page,
                please maintain an equivalent in the new{' '}
                <a href="https://www.notion.so/sourcegraph">Notion-based handbook</a>. You can set up a redirection to
                the corresponding Notion page by making a pull request against{' '}
                <a href="https://github.com/sourcegraph/handbook/blob/main/data/notion_migration.yaml">this file</a> to
                match the handbook path with the new Notion page.
            </div>
        </aside>,
    ]

    // Inject warning banners to pages with cloud in the path - this helps us communicate
    // to customers that for finalized documentation, they should refer elsewhere.
    if (path.includes('/cloud')) {
        banners.push(
            <aside className="warning">
                <div>
                    <b>
                        To learn more about the{' '}
                        <a href="https://about.sourcegraph.com/cloud">Sourcegraph Cloud product</a>, please refer to our{' '}
                        <a href="https://docs.sourcegraph.com/cloud">user-facing documentation</a>.
                    </b>{' '}
                    The documentation here is meant for internal Sourcegraph use, and may represent unreleased,
                    incomplete, or out-of-date processes and functionality - it is made public to align with{' '}
                    <a href="/company-info-and-process/values/#open-and-transparent">our values</a>.
                </div>
            </aside>
        )
    }

    return banners ? (
        <div className="markdown-body">
            <br />
            {banners}
        </div>
    ) : (
        <></>
    )
}
