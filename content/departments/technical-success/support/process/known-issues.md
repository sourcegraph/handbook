# Updating the Known Issues Page

## Overview

The [Known Issues page](https://docs.sourcegraph.com/KNOWN-ISSUES) on our docs site serves as a central hub for our users and teammates to gain insights into any outstanding or previously identified problems with Sourcegraph. Given that this page is manually updated, it is crucial to maintain its accuracy and timeliness to provide transparency to our users.

Below is a step-by-step guide on how to update this page.

## Update Process

### 1. **Prepare Issue Details**

Before updating the page, compile all the information about the new known issue:

- The Sourcegraph version where the issue was first identified. For example, if the issue was first identified in Sourcegraph 4.0.0, add the issue under that version. Add the version section if the version is not in the doc already.
- A concise description of the issue. This should be a couple of sentences that describes the problem and its impact.
- The current status of the issue (e.g., 'Open', 'Fixed in x.y.z'). If there is a GitHub issue or PR associated with this issue, link to it.

### 2. **Insert the New Issue**

Follow the format provided. If the version is not in the doc already, add it in chronological order. If the version is already in the doc, insert the new issue at the top of the list.

```
v[Version Number] - [Release Date]
[Issue Description]
Status: [Current Status with link to GitHub issue or PR]
```

For example:

```
v5.0.0 - March 22, 2023
Structural Search Insight shows 0 for most recent data point
Status: Fixed in 5.0.3
```

### 3. **Maintain Chronological Order**

To keep the page organized, always insert the newest known issue at the top, just below the most recent entry. This ensures that users first see the most relevant and up-to-date issues per version.

### 4. **Major Issues and Changelog**

If the issue is major, it should also be added to the changelog under the Known Issues header for the corresponding version. Make sure to link the Known Issues header in the changelog to the Known Issues page for comprehensive coverage.

### 5. **Review & Save**

Before publishing the changes, review the update for accuracy and consistency with the rest of the page. Once satisfied, create the PR and tag reviewers.

### 6. **Publish & Verify**

Publish the updated page to the docs site. After publishing, view the Known Issues page to ensure the update is visible and properly formatted.

## Conclusion

Regular updates to the Known Issues page enhance user trust by offering transparency about our Sourcegraph's state. By following this process systematically, we ensure that users are consistently informed about issues and their resolutions. Always maintain open communication channels with the team to stay updated on known issues and their progress.
