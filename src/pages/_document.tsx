import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import SearchIcon from 'mdi-react/SearchIcon'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    public override render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" type="image/png" href="/static/sourcegraph-mark.png" />
                    <link rel="icon" type="image/svg+xml" href="/static/sourcegraph-mark.svg" />
                    <link rel="apple-touch-icon" href="/static/sourcegraph-mark.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,400;0,600;0,700;1,200;1,400;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,400;0,600;0,700;1,200;1,400;1,600;1,700&display=swap"
                        rel="stylesheet"
                    />
                    <link
                        rel="search"
                        type="application/opensearchdescription+xml"
                        title="Handbook"
                        href="/opensearch.xml"
                    />
                </Head>
                <body>
                    <header id="header">
                        <div className="container">
                            <a href="/" id="logo" aria-label="Handbook home">
                                <img src="/static/sourcegraph-mark.svg" alt="" className="d-inline d-sm-none" />
                                <img src="/static/sourcegraph-logo.svg" alt="" className="d-none d-sm-inline" />
                            </a>
                            <form className="search-field">
                                <SearchIcon size="1.1em" className="text-muted search-icon" />
                                <input
                                    type="search"
                                    placeholder="Quick search for anything"
                                    className="search-input st-default-search-input"
                                />
                                <kbd className="d-xs-none search-shortcut">⌘K</kbd>
                            </form>
                            <div className="header-external-links">
                                <a href="https://about.sourcegraph.com">
                                    About Sourcegraph <ExternalLinkIcon size="1em" className="text-muted" />
                                </a>{' '}
                                <a href="https://sourcegraph.com">
                                    Sourcegraph.com <ExternalLinkIcon size="1em" className="text-muted" />
                                </a>
                            </div>
                        </div>
                    </header>

                    <div id="page">
                        <Main />
                        <NextScript />
                        <footer>
                            <div className="container">
                                <nav className="links external">
                                    <ul>
                                        <li>&copy; {new Date().getFullYear()} Sourcegraph</li>
                                        <li>
                                            <a href="https://about.sourcegraph.com">About Sourcegraph</a>
                                        </li>
                                        <li>
                                            <a href="https://about.sourcegraph.com/terms">Terms</a>
                                        </li>
                                        <li>
                                            <a href="https://about.sourcegraph.com/security">Security</a>
                                        </li>
                                        <li>
                                            <a href="https://about.sourcegraph.com/privacy">Privacy</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </footer>
                    </div>
                </body>
            </Html>
        )
    }
}
