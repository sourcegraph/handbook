# How we use Loom at Sourcegraph

Loom is a video messaging tool that helps you get your message across through instantly shareable videos. With Loom, you can record your camera, microphone, and desktop simultaneously. Your video is then instantly available to share through Loom.

We consider Loom a great tool to foster our [asynchronous communications](../../../../communication/asynchronous-communication.md) because

It allows users to express thoughts at work in less time, share quick feedback, and communicate across different timezones effectively. Viewers can interact, comment, and respond to videos, to create an instant human connection.

We now have enterprise Loom, which means we have a Sourcegraph workspace. You should use [Okta](../../../../../departments/tech-ops/tools/Okta/main.md) to log in, you can find Loom as one of the apps in your Okta dashboard too.

## Training

Here is a quick video on how to use Loom to record videos: [How to get started](https://www.loom.com/share/7c7ced4911904070a5627374ccd84e8c).

Other trainings:

- [Loom 101](https://www.loom.com/share/c20c683b5e554d9d9969761ab61baaaf?utm_medium=email&_hsmi=215205550&_hsenc=p2ANqtz-9yWjElQi8z-GT6Qoacw4Zx9jEDJCdIHsCJ3QPSIg-NZXffK6Az0GGN5jxp93JYllB-6RTMZmlcmGVWQj5JOvN34Xg0KQ&utm_content=215205550&utm_source=hs_email)

## Guidelines

Please be mindful of sharing any private or personal information when recording Loom videos. We want to avoid having any sensitive information (classification categories restricted and private as per our [Data Management Policy](../../../../policies/data-management-policy.md) leaked or corrupted. Furthermore, we have a legal and moral obligation towards our data subjects in regards to how we handle their personal data.

Best practise:

- Do not reveal any personal information by mentioning or displaying any real life example (i.e. people/customers) information on screen while giving a walkthrough
- Use fictitious names/test data when demonstrating a use case
- If no test examples are available make sure to black out/mask any sensitive information on the screen before recording the session

Please see our [Data Management Policy](../../../../policies/data-management-policy.md) for more details on data classifications.

## Default settings

**Users**

By default, everyone at Sourcegraph is provisioned as a viewer. This means you will be able to watch all Sourcegraph videos but you won’t be able to record. If you want to be a recorder, you can launch the "Loom Creator Access" widget on the Okta dashboard. This will walk you through an automated approval flow, giving you creator access for a given amount of time. (After which you'll go back to a "viewer", but will not lose access to your videos.) Please reach out to [#ask-it-tech-ops](https://sourcegraph.slack.com/archives/C01CSS3TC75) in Slack if you have any questions.

**Videos**

Set the default setting for videos to “Everyone at Sourcegraph”. This means videos will only be viewed by Sourcegraph teammates. As a creator, please take some time to read this page on [Loom’s security setting](https://support.loom.com/hc/en-us/articles/360016527597).

Every creator has the ability to share videos publicly. Please be mindful of the sharing setting you select. Please take some time to review how to [share videos](https://support.loom.com/hc/en-us/articles/360002208157-How-to-share-your-recording).

## Workspace

For current users who have content in a separate “personal” workspace (even if it’s with your Sourcegraph email), you have to transfer videos to the Sourcegraph workspace, make Sourcegraph the default workspace and leave the personal workspace.

Please follow these steps for moving content from personal to Sourcegraph:

1. Settings --> Personal --> My workspace content --> Get Started --> Move from (personal) to Sourcegraph workspace -->Leave personal workspace

You can find a video [here](https://www.loom.com/share/49c91aaa99db47a0bfdf92e0ada8eadb) and a support page [here](https://support.loom.com/hc/en-us/articles/360017747698-How-to-transfer-content-between-Workspaces). If you want both a personal and a Sourcegraph workspace, please at a minimum, default to the Sourcegraph workspace (Settings --> Change default workspace).
