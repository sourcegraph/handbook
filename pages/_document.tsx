import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
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
                    <link
                        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
                        crossOrigin="anonymous"
                    />
                    {/* <!-- Keep version in sync with tippy.js imports in JS --> */}
                    <link rel="stylesheet" type="text/css" href="https://cdn.skypack.dev/tippy.js@6/dist/tippy.css" />
                    <link rel="stylesheet" type="text/css" href="https://cdn.skypack.dev/tippy.js@6/themes/light.css" />
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
                    ></script>

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
                    ></script>

                    <script
                        id="Cookiebot"
                        src="https://consent.cookiebot.com/uc.js"
                        data-cbid="fb31dc3e-afb3-4be8-ae84-7090bba7797d"
                        data-blockingmode="auto"
                        type="text/javascript"
                    ></script>
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
                            <nav>
                                <form id="search-form" method="get" action="/search">
                                    {/* <input type="search" id="search-input" name="q" value="{{block "query" .}}{{end}}" */}
                                    <input
                                        type="search"
                                        id="search-input"
                                        name="q"
                                        defaultValue=""
                                        placeholder="Search handbook..."
                                        spellCheck="false"
                                        className="st-default-search-input"
                                    />
                                    <button id="search-button" type="submit">
                                        Search
                                    </button>
                                </form>
                                <div>
                                    <a href="https://about.sourcegraph.com">About Sourcegraph</a>
                                    <a href="https://sourcegraph.com">Sourcegraph.com</a>
                                </div>
                            </nav>
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
                    ></script>
                    {/* <script type="module" src="{{asset "dateHighlighter.js"}}"></script> */}
                </body>
            </Html>
        )
    }
}
