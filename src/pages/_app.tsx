import '../styles/layout.css'
import '../styles/document.css'
import '../styles/search.css'
import '../styles/content.css'
import { AppProps } from 'next/dist/shared/lib/router/router'
import Head from 'next/head'
import React, { useEffect } from 'react'

import { registerDateTooltips } from '../lib/dateHighlighter'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    useEffect(() => {
        registerDateTooltips()
    }, [])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
            </Head>
            <Component {...pageProps} />
        </>
    )
}
