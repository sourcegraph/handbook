# Using OpenID Connect for Site Admin Access

Sourcegraph employees access to managed instances application interface (Web UI) is restricted to essential personnel only. This ensures Sourcegraph is able to help customers troubleshoot issues and deliver a smooth experience. We utilize OpenID Connect to enable Sourcegraph employees access to customer instance to make sure there is an audit trail for every access.

## Implementation

[RFC 576: Allow disabling sign-up for OpenID Connect auth providers](https://docs.google.com/document/d/1Op6jum_SQJSU5KeJlJJEED1QYFdXOO30botb3BgEO6U/edit) provided the necessary changes to allow Sourcegraph to use their Google Workspace account (federated by internal Okta Auth provider) as a way to grant Site Admin access to managed instances. Okta provides 2FA enforcement and audit logs which help improve the security posture of Managed Instance access which is significantly more secure comparing to the default basic auth provider.

## FAQ

### Does it affect the number of seats customers pay for in the license?

Every essential Sourcegraph personnel will effectively be an actual user in the customer instance, so they will be counted toward in the license seat count. However, we allocated addition 10 seats in the license to accommodate the seats used by internal Sourcegraph teammates with Site Admin access.
