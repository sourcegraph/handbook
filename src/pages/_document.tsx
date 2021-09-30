import ExternalLinkIcon from 'mdi-react/ExternalLinkIcon'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

export default class MyDocument extends Document {
    public override render(): JSX.Element {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" type="image/png" href="/static/sourcegraph-mark.png" />
                    <link rel="icon" type="image/svg+xml" href="/static/sourcegraph-mark.svg" />
                    <link rel="apple-touch-icon" href="sourcegraph-mark.png" />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200;0,400;0,600;0,700;1,200;1,400;1,600;1,700&family=Source+Sans+Pro:ital,wght@0,200;0,400;0,600;0,700;1,200;1,400;1,600;1,700&display=swap"
                        rel="stylesheet"
                    />
                    {/* <script type="text/javascript" src="{{asset "scripts.js"}}"></script> */}

                    {/* Google Consent Mode and Cookiebot */}
                    <script
                        data-cookieconsent="ignore"
                        dangerouslySetInnerHTML={{
                            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("consent", "default", {
              ad_storage: "denied",
              analytics_storage: "denied",
              wait_for_update: 500
            });
            gtag("set", "ads_data_redaction", true);`,
                        }}
                    />

                    {/* Google Tag Manager */}
                    <script
                        data-cookieconsent="ignore"
                        dangerouslySetInnerHTML={{
                            __html: `(function (w, d, s, l, i) {
              w[l] = w[l] || []; w[l].push({
                'gtm.start':
                  new Date().getTime(), event: 'gtm.js'
              });
              var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
              j.async = true;
              j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-TB4NLS7');`,
                        }}
                    />

                    <script
                        id="Cookiebot"
                        src="https://consent.cookiebot.com/uc.js"
                        data-cbid="fb31dc3e-afb3-4be8-ae84-7090bba7797d"
                        data-blockingmode="auto"
                        type="text/javascript"
                    />
                </Head>
                <body>
                    {/* Google Tag Manager (noscript) */}
                    {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TB4NLS7" height="0" width="0"
                    style="display:none;visibility:hidden"></iframe></noscript> */}
                    <header id="header">
                        <div className="container">
                            <a href="/" id="logo">
                                <img src="/static/sourcegraph-logo.svg" alt="Sourcegraph logo" />
                            </a>
                            <form id="search-form" method="get" action="/search">
                                <input
                                    type="search"
                                    id="search-input"
                                    name="q"
                                    defaultValue=""
                                    placeholder="Quick search for anything"
                                    spellCheck="false"
                                    className="st-default-search-input"
                                />
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
                                        <li>© 2021 Sourcegraph</li>
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
                    <script
                        type="text/javascript"
                        dangerouslySetInnerHTML={{
                            __html: `
            (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
            (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
            e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
            })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

            _st('install','JAPrEEBxHhYT4SnMJQmX','2.0.0');`,
                        }}
                    />
                    {/* <script type="module" src="{{asset "dateHighlighter.js"}}"></script> */}
                </body>
            </Html>
        )
    }
}
