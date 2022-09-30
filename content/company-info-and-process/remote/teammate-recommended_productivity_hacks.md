# Teammate-recommended productivity hacks

Because Sourcegraph is all-remote, we actively share tips + tricks for using all our digital tools effectively. Take what works for you and ignore what doesn't, and please do add your own.

You might think of this page as a remote version of "the clever workflows and shortcuts you'd notice by looking over someone's shoulder as they worked."

## GSuite

- **Search across all GSuite content with Google Cloud Search.** You can use https://cloudsearch.google.com/cloudsearch to search across Mail, Drive, Groups and Calendar, as an additional tip, you can create a custom search for it as recommended in the [Chrome](#chrome) section using `https://cloudsearch.google.com/cloudsearch/search?q=%s`.
- Use the shortcut URLs [docs.new](http://docs.new), [sheets.new](http://sheets.new), and [slides.new](http://slides.new) for a super fast way to create new docs!
  - Consider installing [Google Docs Quick Create](https://chrome.google.com/webstore/detail/google-docs-quick-create/bldgenmjegcnjebiongilahhcjldgmlm) browser extension for Chromium based browsers.
- **Keep your Gmail Inbox sane**. You can use the recommended [Gmail filters](../onboarding/git-intro/github-notifications/index.md#gmail-filters)

## Slack

- **Set up [custom channel sections](https://slack.com/help/articles/360043207674-Organize-your-sidebar-with-custom-sections) in your sidebar to organize all your channels.** You can expand/collapse groups of channels. For example, you might make a group called "Social" that contains channels like #random, #pets-of-sourcegraph, and #cooking.
- **Automatically add links to your slack posts by copying a url, highlighting the text you want to link in the Slack message, and then pasting.** This way you can use `cmd`+`v` instead of the Slack "add link" button or the slack keyboard shortcut of `cmd`+`shift`+`U`.
- **Disable their WYSIWYG editor if you prefer markdown.** Go to Preferences > Advanced > Check "Format messages with markup."
- **Show only unread channels in your channel sections.** Right-click on a channel section or the "Channels" header, then select "Show" > "Unread channels only."
- **Set up [Slack keywords](https://slack.com/slack-tips/get-notified-when-someone-mentions-a-topic-you-care-about) to get notified about relevant threads you aren't tagged in.** Go to Preferences > Notifications > My keywords and add your list of keywords separated by commas. You'll get notified whenever someone uses them.
- **Use [Slackbot's reminder feature](https://slack.com/help/articles/208423427-Set-a-reminder#set-a-reminder-for-a-message) to get reminded of threads later on without leaving them as unread** Hover on any Slack message > Select "More actions" in the toolbar > Select "Remind me about this" and choose when you'd like to be reminded. Slackbot will keep your pending messages backlog, you can mark items as Complete when you've gone through them.
- **Search for Slack channel.** Anyone else got too many Slack channels and can't find the one you want? `cmd`+`k` lets you search for a Slack channel by name.

### Popular app integrations

- **[Connect your Google calendar](https://slack.com/app-pages/google-calendar)** to get reminders and show when you're in a meeting.
- **[Connect Zoom](https://sourcegraph.slack.com/apps/A5GE9BMQC-zoom)** so you can type `/zoom` and quickly start zoom calls.
- **[Connect Clockwise](https://www.getclockwise.com/)** if you use it to schedule meetings; use the GCal integration to send you reminders and the Clockwise integration to handle detailed Slack status updates.
- **[Connect Google Drive](https://sourcegraph.slack.com/services/B0250C3EWQ5)** to get notifications on comments and shares on Google Drive files. Note: after you add this Slack integration, you have to go to the Google drive app in the "Apps" section of Slack and message it `on` ([full docs on managing notifications](https://slack.com/help/articles/205875058-Google-Drive-for-Slack#manage-notifications)). If the integration still doesn't respond, [removing it from the entire slack workspace](https://sourcegraph.slack.com/services/B026KBZJGJC) and then re-adding it might work, but you should first verify with others via Slacking #it-tech-ops that it's stopped working for them. After you remove and re-add, you should notify the same channel that you've done so, because everyone might need to re-message `on` to their drive app channel.

## Web Browsers

### Chrome

- **Create lots of custom search shortcuts**: You can create these for any website, and we recommend setting up the [handbook search shortcut](../../handbook/handbook-tips.md#searching-the-handbook) and the [Sourcegraph.com search shortcut](https://docs.sourcegraph.com/integration/browser_search_engine#google-chrome). Other popular search shortcuts are Google Drive, GitHub issues search, or Salesforce.
- **Use a tab manager** like [Tabbs](https://chrome.google.com/webstore/detail/tabbs/cicnbbdlbjaoioilpbdioeeaockgbhfi) or [Tabli](https://chrome.google.com/webstore/detail/tabli/igeehkedfibbnhbfponhjjplpkeomghi).
- **Set up a separate [Chrome profile](https://support.google.com/chrome/answer/2364824?co=GENIE.Platform%3DDesktop&hl=en)** so you can keep your work and personal bookmarks and autocompletes/shortcuts separate.

## Zoom

- **Log in to be let into meetings.** Generally if you've been stuck in a waiting room, it's because you're not logged in to Zoom, even if Zoom is displaying your name. Go to Zoom.us in the menu bar > Sign in to sign in and see if you're allowed in to the meeting.
- **Set a personal meeting link.** By default, your Zoom link is long and hard to remember. Set a human-memorable one on the Zoom site, by going to [your profile](https://zoom.us/profile) and updating the "personal link" field.
- **Set a profile picture in your Zoom account.** That way, even when your video is off, teammates can see the avatar they recognize you from from Slack. Set it [on your profile page](https://zoom.us/profile).
- **Connect your Google calendar** so that your Zoom client displays all your upcoming meetings. To do this, go to your [web profile](https://zoom.us/profile), scroll down to `Calendar and Contacts Integration` and follow the steps there.

## Other tools

- [Loom](https://loom.com) for quick videos for demos or bugs.
- [Textexpander](https://textexpander.com) or [aText](https://www.trankynam.com/atext/) for text expansions and abbreviations. Use it to store things like your Zoom URL, Calendly URL, and our ISO date format in a way that can be easily populated into other documents.
- [Kap](https://getkap.co/) open source screen recorder for macOS
- [CleanShot X](https://cleanshot.com/) is a paid but incredibly good screenshot/GIF/video recording tool for macOS.
- [Screenflow](http://www.telestream.net/screenflow/overview.htm) is a paid video recording product that allows you to record your screen and webcam at the same time.
- [Clocker](https://apps.apple.com/us/app/clocker/id1056643111?mt=12) for Mac makes it easy to see multiple time zones from your clock.
- [Alfred](https://www.alfredapp.com/) is a macOS productivity tool that allows you to set up shortcuts via hotkeys or keywords, create reusable text snippets, build workflows for things you commonly do on your laptop, and offers a multi-day clipboard history.

## Miscellaneous

- **Learn the keyboard shortcut to pull up your emoji keyboard:** now you can emoji-react places beyond Slack, or use emojis for visual distinction in titles/comments in all your other tools. On Mac it's `command`+`control`+`space`.
- **Use Lattice to quiz yourself on teammate faces and names.** Log in to [Lattice](https://sourcegraph.latticehq.com/) and scroll to the bottom of the page; on the left, click [Play Office Party](https://sourcegraph.latticehq.com/office-party) to run through a quiz to see how many faces you can match to names.
- **Use these keyboard shortcuts to reduce mouse clicks. Quickly close tabs or programs, and open new tabs in a program.** On Mac `command`+`t` will open a new tab in web browsers, many IDE's, and Mac terminal. On Mac `command`+`w` will close the current existing tab.
