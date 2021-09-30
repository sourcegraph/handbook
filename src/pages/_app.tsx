import '../styles/layout.scss'
import '../styles/document.scss'
import '../styles/search.scss'
import '../styles/content.scss'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import Script from 'next/script';
import React, { useEffect } from 'react'

import { registerDateTooltips } from '../lib/dateHighlighter'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    useEffect(() => {
        registerDateTooltips()
    }, [])

    return (
        <>
            <Script
                strategy="lazyOnload"
                src="https://www.googletagmanager.com/gtag/js?id=G-KVVCR189Q6"
            />
            <Script strategy="lazyOnload">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-KVVCR189Q6', {
                        page_path: window.location.pathname,
                    });
                `}
            </Script>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
