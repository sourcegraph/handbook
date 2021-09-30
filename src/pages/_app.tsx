import '../styles/layout.scss'
import '../styles/document.scss'
import '../styles/search.scss'
import '../styles/content.scss'
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
