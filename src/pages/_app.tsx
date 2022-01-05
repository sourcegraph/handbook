import '../styles/index.scss'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import Script from 'next/script'
import React, { useEffect } from 'react'

import { registerDateTooltips } from '../lib/dateHighlighter'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    useEffect(() => {
        registerDateTooltips()
        window.addEventListener('keydown', event => {
            if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
                document.querySelector<HTMLInputElement>('.search-input')!.focus()
            }
        })
    }, [])

    return (
        <>
            <Script
                strategy="lazyOnload"
                data-domain="handbook.sourcegraph.com"
                src="https://plausible.io/js/plausible.js"
            />

            <Script strategy="lazyOnload">
                {`
                    (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){
                    (w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);
                    e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);
                    })(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

                    _st('install','JAPrEEBxHhYT4SnMJQmX','2.0.0');
                `}
            </Script>

            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            </Head>

            <Component {...pageProps} />
        </>
    )
}
