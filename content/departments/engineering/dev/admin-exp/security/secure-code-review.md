# Requesting a security review

Security code reviews differ from [peer code reviews](https://docs.sourcegraph.com/dev/background-information/code_reviews), as they are usually on large blocks of code, and after the fact. Architectural reviews should occur prior to a merge to main. These reviews bring a second set of eyes, with dedicated focus to the problem.

## Conducting a review

To request a review from the security team:

1. Create a GitHub issue in the [security repository](https://www.github.com/sourcegraph/security-issues), and add the _securityreview_ label.

   - Provide a clear description, and links to the code, using Sourcegraph.
   - Provide as much detail as possible for the specifics of what has changed, and where we should focus.
   - Share usage scenarios, data flows, and any reference material

1. Share the issue in the Security team slack channel, asking for a review. If you have a deadline, share it. By default, we target reviews for the upcoming iteration. Ideally two weeks notice is preferred.

1. Someone from the [security team](mailto:security@sourcegraph.com) will schedule and record a meeting with you, for an in-person code-tour.
   - During this code-tour, you will walk a Security team member through parts of the code, and answer questions they might have.
   - After the review, the meeting recording will be shared in Slack, in the security channel.

For the purposes of SOC compliance, the Security team member will document the days this review was conducted, and the total amount of time (in half-day measures) the review took.

## What we look for

1. We formally document the [Threat Model](https://owasp.org/www-community/Application_Threat_Modeling) used in the review.

   - We will document an [Attack Tree](https://insights.sei.cmu.edu/sei_blog/2018/12/threat-modeling-12-available-methods.html), as part of another model.

1. Security reviews begin with the [OWASP guidelines](https://owasp.org/www-pdf-archive/OWASP_Code_Review_Guide_v2.pdf) and branch throughout the code base. We start by focusing on seven key areas:

   - Authentication
   - Authorization
   - Session management
   - Data validation
   - Error handling
   - Logging
   - Encryption

1. We pay specific attention to data validation, conversions, inputs, and outputs.

## Review outputs

The GitHub issue will contain the conversation around Security. We are responsible for sharing a link and comment to each block of code, so that they can be clearly discussed.
