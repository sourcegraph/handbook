# Site-admin access to internal instances

Site-admin access to internal instances (dotcom, s2, rctest, demo, k8s) is provided through an auto-approved Entitle workflow. It will create a short-lived admin account that lasts 1h. Removing long-lived admin accounts largely reduces the risk of compromised credentials across our instances.

> [!NOTE]
> This is currently deployed only in the dotcom instance. Other instances are unchanged for the moment.

## How it works

### New direct method

Site-admin access can now be granted instantly using our new Entitler service. You can request the bundle by typing `/access_request` in Slack and in the 'Search permission' box type 'dotcom'. You will see the set 'Dotcom direct site-admin'. Set your desired duration, make sure you add a nice justification and you're good to go! Access should be granted in less than a minute and will be granted to your normal Dotcom account. Just refresh your session and you're good to go!

Click here to [request access now.](https://app.entitle.io/request?data=eyJkdXJhdGlvbiI6IjE4MDAiLCJqdXN0aWZpY2F0aW9uIjoiW0VudGVyIGp1c3RpZmljYXRpb25dIiwiYnVuZGxlSWRzIjpbIjMwNzBjZWYxLTZlNGItNDEwYS05ODU2LTc0YTM0ZTliODZmNSJdfQ%3D%3D)

> [!NOTE]
> This requires users to have a _verified_ @Sourcegraph.com email account as their primary email.

If you have any issues with the integration, please drop a message in [#discuss-security](https://sourcegraph.slack.com/archives/C1JH2BEHZ).
