/* eslint-disable @typescript-eslint/explicit-function-return-type */
import Script from 'next/script'
import React from 'react'

declare const netlifyIdentity: any
declare const window: { netlifyIdentity: any }

export default function LoginPage(): JSX.Element {
    return (
        <>
            <Script
                id="netlify-identity-widget"
                src="https://identity.netlify.com/v1/netlify-identity-widget.js"
                onLoad={() => {
                    const compareDate = (exp: number) => {
                        const currentTime = Date.now()
                        if (currentTime > exp) {
                            console.log('Your identity session has expired')
                            netlifyIdentity.logout();
                        } else {
                            console.log("the token hasn't expired, yet")
                            // redirect()
                        }
                    }
                    if (window.netlifyIdentity) {
                        // Check if the JWT token is expired, if so log out the user
                        netlifyIdentity.on('login', (user: { token: { expires_at: any } }) => {
                            console.log(user.token.expires_at);
                            compareDate(user.token.expires_at);
                        });
                        // after a new, successful login, Redirect to the main page
                        window.netlifyIdentity.on('init', (user: any) => {
                            console.log('window.netlifyIdentity.on(init)', user)
                            if (!user) {
                                window.netlifyIdentity.on('login', () => {
                                    console.log('just got a new login');
                                    // redirect()
                                });
                            }
                        });
                    }
                }}
            />

            <div className="container">
                <section id="content">
                    <h1>Restricted Content</h1>
                    <p>The content you are trying to view is restricted to Sourcegraph teammates.</p>
                    <div data-netlify-identity-menu={true} />
                </section>
            </div>



        </>
    )
}
