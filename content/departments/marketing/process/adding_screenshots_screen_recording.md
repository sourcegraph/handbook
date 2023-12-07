# Adding a screenshot or screen recording ("GIF" or video)

> [!NOTE] This guide presumes macOS.

## TL;DR

- Favor capturing only the part of the screen that’s required
- Keep GIF-like videos 15 seconds or less
- Do not actually use real GIF images. Record a GIF-like video and embed it in a way that it behaves like a GIF. Only use GIFs where this is not possible, e.g. on social media or in Google slides.
- GIF-like videos are typically great for short "check this out" recordings, where videos are better at "how-to" or promotional style content
- Keep GIF-like videos and images as small as possible with no retina sizes (ratio of image size to intended display size is 1:1)
- If doing a full-screen recording, 1280x720 (720p) will produce easy to read results at default settings
- If you’re producing visual content regularly, invest in paid apps (you can expense them too):
  - Choose [Cleanshot](https://getcleanshot.com/) if just doing screenshots and GIF-like videos.
  - Add ScreenFlow to your list if you plan on doing videos frequently, as you will appreciate editing and clip speed-up capabilities.

## Don't add title slides to videos

We almost never use title slides. Title slides are slides at the start of your video that have a Sourcegraph logo, a background, a title (like "Batch Changes demo"), and maybe a nice visual effect.

Why do we not use title slides?

1. They make the video seem less authentic, which makes it less compelling. Developers already love watching videos of other developers showing things off.
1. It takes a lot of work, and involves other people, to get it right. This means wasted time (since we don't perceive a benefit to a title slide) and, on the margin, it means that our videos will be older, more stale, and more mediocre (more cooks in the kitchen).
1. Title slides delay the "time to a wow moment".
1. It likely leads to inconsistencies. All title slides that we're currently showing on our site should be the same, if we are showing title slides. So, they'd all need to have the same layout, tone/voice of copy, timing, etc. It adds a large burden of maintenance that we don't want to take on.

If you _really_ think your video needs one, ask for help in the #marketing channel (and cite this handbook section and explain why you need one).

## Adding a screenshot

### Screenshot apps

Whether you need a dedicated screenshot application or not depends on how often you plan to contribute visual content, and if you need things like annotations. Sourcegraph always encourages you to purchase the software you need to be successful, and this certainly applies to screenshots and screen recordings. Here is a brief overview of screenshot tools:

- [Screen Studio](https://www.screen.studio/)<br/>
  High-quality videos and GIFs. Automatic and manual zoom, easy editing. Designed for macOS.
- [Native macOS](https://support.apple.com/en-au/HT201361)<br/>
  Great for simple screenshots

- [Snagit](https://www.techsmith.com/screen-capture.html)<br/>
  Great annotation tools

- [Cleanshot](https://getcleanshot.com/)<br/>
  Nice workflow, great screenshot annotations (also does basic GIF and video recordings)

### Screenshot tips

- Only capture the part of the screen that is necessary
- Maximum width should be 750px
- Do not use retina sizes as screenshots look fine at 1x (ratio of image size to intended display size is 1:1)
- If needed, use screenshot annotations to further contextualize visual elements
- Consider adding a caption below the image for additional context and information
- Export as a PNG if the color palette is limited, else JPEG compression at 70–80% quality
- The total file size should be less than 100Kb (faster loading time = better UX). If larger, it should be uploaded to [sourcegraph-assets](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true) on Google Cloud storage and linked to

## Adding a screen recording (screencast)

A screen recording (screencast) is a great way to see a feature or flow in action, and we want everyone at Sourcegraph to feel capable of creating GIF-like videos and/or longer videos. If you need assistance of any kind, including something created entirely for you, just reach out to your mates on the marketing team and we’ll help you get it sorted!

### Screen recording apps

The reason to use a paid tool is more settings, export quality controls, and a nicer workflow for producing assets. If you’re planning on doing this more than once, it’s worth investing in a professional tool.

- [QuickTime (videos and GIF-like videos)](https://support.apple.com/en-au/guide/quicktime-player/qtp97b08e666/mac)<br/>
  Can capture a window, a selection of, or the entire screen, and in conjunction with the "Split Clip" functionality makes trimming the start and end easy. It’s a great tool, free on macOS.

- [Cleanshot](https://getcleanshot.com/)<br/>
  Export screen recordings to video and nice features such as hiding desktop icons and notifications during recordings automatically. It does not have any editing or annotation tools for screen recordings.

- [ScreenFlow](https://www.telestream.net/screenflow/overview.htm)<br/>
  Simply the best screen recording, editing, and production tool available. Designed primarily for video work (e.g. editing).

### Screen recording tips

Recording a great screencast is a large topic, but here are some essentials to keep in mind:

- Ensure it has an easy to demonstrate and clear purpose, e.g. show smart search field autocomplete, syntax highlighting, and error handling
- Make it as short and simple as possible, but enough to show what you're demonstrating
- Only capture the part of the screen that is necessary. If the output is video, then aim for 16:9 ratio for YouTube
- If the entire screen needs to be captured, then your resolution should be 1280x720 (720p), as that will make on-screen elements easy to read
- Decide whether it should be standalone, or if it only makes sense when embedded with content
- Ideally, GIF-like videos should be less than 15–20 seconds. Otherwise, it’s most likely better as a video.
- Invest in learning a tool such as ScreenFlow if you need to annotate and/or edit your recordings
- Does your video make sense without an accompanying explanation? If not, then a voice-over or text annotations can help a lot

Like most things, practice makes perfect, but if you’re wanting to get some advice before taking the plunge, Thorsten, and Quinn (sqs), have all created screencasts and can help you get started, so just reach out on Slack.

### Adding audio or voice-overs

How to add a great voice-over is a huge topic that encompasses things such as:

- Voice technique
- Creating a compelling script and storytelling
- Having a pleasant-sounding voice
- Audio recording quality
- Mixing voice-overs concerns such as equalization, compression, noise gates, and loudness metering
- Adding captions to make the voice-over accessible to everyone, including people who are deaf or with hearing loss, people who can't use their speakers or headphones in the moment, or people who have too much background noise.

But to get you started, here are some essential tips:

- Ensure you have a consistently quiet space. There's nothing wrong with going into your closet to record your voice-over if you have to.
- Speak like you would as if you just met someone in person and wanted to show them something.
- Smile when you talk. It sounds ridiculous, but it works as it helps you relax.
- If you don't have a dedicated microphone, favor the one in your laptop over earbuds or headphones as they're built with phone calls in mind.
- Record your video first, then record your voice-over as you watch your video. But, try to narrate your video when you record it so you know if you need to pause for a few seconds to explain something.
- Ensure your voice over is loud enough by comparing the audio level in your video against a professionally produced video on YouTube. You can adjust the microphone input level in **System Preferences** > **Sound**.
- Research what makes a great voice-over and takes notes on videos you think have fantastic voice-overs.

More tips and recommendations are in our [podcasting guide](https://docs.google.com/document/d/1pHvSvLCjFiVoKZF3l27EBsCLjBNFTY6k_TEMAqSqiZ4).

#### Adding captions for your voice-over to your video

If you're adding voice-over to your video, you probably already have a script you're reading from.
All you need to do to add captions to your video is convert that script into a specific text format with timestamps, upload that file to [sourcegraph-assets](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true) too and reference it as a captions track when embedding.
Do **not** "burn" the captions onto the video itself (also known as "open captions"), as those cannot be turned off by the user and cannot scale dynamically with the screen size to ensure readability.

See our [content guidelines](../../../company-info-and-process/communication/content_guidelines/style_and_mechanics.md#caption-tracks-and-transcripts) for how to write great captions.

You can use a free online caption editor like [HappyScribe](https://www.happyscribe.com/subtitle-tools/online-subtitle-editor) to manually add the captions at the right timeframes for your video.
After you're done, click "Download" and select "WebVTT (.vtt)" as the format to download.
HappyScribe also offers automatic and human-transcribed subtitles as a paid service.

Another option is to use an automatic transcription service like [Otter.ai](https://otter.ai/).
Otter offers a download in `.SRT` format, which can be easily [converted to WebVTT](https://www.happyscribe.com/subtitle-tools/convert-srt-to-vtt).
You may need to edit the captions afterwards to correct any mistakes, which you can do in [HappyScribe](https://www.happyscribe.com/subtitle-tools/online-subtitle-editor/free) (click "New subtitles" at the top → "OK" → "Select file") or by editing the WebVTT file in a text editor (it's just a text file).

Zoom Cloud recordings give you an automatically-transcribed WebVTT file when you click "Download" in the top right as one of the files being downloaded, which you can use directly as well.

Once you have your `.vtt` file, upload it to [sourcegraph-assets](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true) next to the video with the same file name (but with a `.vtt` ending).

Once the file is uploaded, click the three dots menu on the right of the `.vtt` file's row, click "Edit metadata", paste `text/vtt; charset=UTF-8` into the "Content-Type" field (replacing any content was in the field before) and click "SAVE".
The "Type" column should now say `text/vtt; charset=UTF-8` for the `.vtt` file.

Now you can embed your video with a **captions track** that references the `.vtt` file, like so:

<!-- prettier-ignore -->
```html
<video controls crossorigin>
  <source src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/my_video.mp4" />
  <track default kind="captions" label="Captions" src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/my_video.vtt" />
</video>
```

Note that the `crossorigin` attribute needs to be added and the URLs are prefixed with `https://cors-anywhere.sgdev.org/` to work correctly in all browsers.

You can choose to keep or remove the `default` attribute on the `<track>` to control whether the captions should be shown by default or not.
It is recommended to show them by default, as many people even with good hearing like captions.

### Recording your voiceover

- If using ScreenFlow 9, you can record audio using the narration feature which can be accessed from the menu bar: **Insert** > **Narration**
- Use your phone to record your voice-over, then import the audio file into ScreenFlow (produces a better sounding result than using your laptop microphone)

## Embedding videos

The video should be uploaded to the [sourcegraph-assets](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true) Google Cloud storage and linked to from the URL `https://sourcegraphstatic.com/path/to/file`.
Use or create subfolders as appropiate, e.g. the `handbook` or `blog` folder.

Videos are embedded in Markdown and HTML using the `<video>` tag:

```html
<video controls src="https://sourcegraphstatic.com/my-funny-video.mp4"></video>
```

The `controls` attribute makes sure video player controls are rendered by the browser.

### Embedding GIF-like videos

> [!NOTE] [Do not use actual `.gif` images](https://www.sohamkamani.com/blog/2016/04/09/stop-using-gifs/).
> The GIF format takes extremely long to load on web pages while providing a lower quality, which makes a bad impression.
> Instead, use videos that are embedded in a way to behave just like real GIFs as explained below.

GIF-like videos are embedded in Markdown and HTML like longer videos using the `<video>` tag, but using the special attributes `loop autoplay muted playsinline` and without using the `controls` attribute.
These ensure the video will appear GIF-like, i.e. automatically play, without sound, loop once they reach the end, and not display video player controls.

For the fastest loading time in all browsers, convert your `.mp4` to a `.webm` using a [free online converter](https://www.freeconvert.com/mp4-to-webm), upload both to [sourcegraph-assets](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true), and specify them both as alternative sources like below (with `.webm` coming first):

```html
<video loop autoplay muted playsinline>
  <source src="https://sourcegraphstatic.com/my-funny-and-efficient-video.webm" type="video/webm" />
  <source src="https://sourcegraphstatic.com/my-funny-and-efficient-video.mp4" type="video/mp4" />
</video>
```

## YouTube videos

### Uploading your video to YouTube

> [!NOTE] If you just want to **embed** a video somewhere (in the handbook, on our marketing page, in our product, etc), prefer uploading the video to [sourcegraph-assets](https://console.cloud.google.com/storage/browser/sourcegraph-assets/?project=sourcegraph-de&folder=true&organizationId=true) on Google Cloud storage and [embedding it from there](#embedding-videos).
> Self-hosted embedded videos make a better impression by providing higher quality, having no YouTube branding, and giving us greater control over how they are displayed.
> Use YouTube for distribution benefits, e.g. when a video is intended to be shared on social media.

Before you go to upload your video, ensure someone from the marketing team has added you as an owner for the Sourcegraph brand account (shown below) as we want all Sourcegraph videos to be owned by the brand account.

<div class="text-center">
  <video loop autoplay muted playsinline class="drop-shadow" style="max-width: 500px; aspect-ratio: 556 / 416">
    <source src="https://sourcegraphstatic.com/handbook/make-sourcegraph-brand-owner.webm" type="video/webm">
    <source src="https://sourcegraphstatic.com/handbook/make-sourcegraph-brand-owner.mp4" type="video/mp4">
  </video>
</div>

Once you’ve been added as an owner, switch to the Sourcegraph user account.

<div class="text-center">
  <video loop autoplay muted playsinline class="drop-shadow" style="max-width: 200px; aspect-ratio: 226 / 270">
    <source src="https://sourcegraphstatic.com/handbook/youtube-switch-account.webm" type="video/webm">
    <source src="https://sourcegraphstatic.com/handbook/youtube-switch-account.mp4" type="video/mp4">
  </video>
</div>

Export your video in 16:9 ratio (should probably be 720p), then [upload your video to YouTube](https://studio.youtube.com/channel/UCOy2N25-AHqE43XupT9mwZQ):

1. Click on the **CREATE** button
2. Select your video to begin uploading
3. Add a title that has key words someone is likely to use in a search
4. Add a 1–2 sentence description of your video that contains a call-to-action for the user to learn more, activate the feature, or at least, install Sourcegraph. See other Sourcegraph videos that may have description content you can re-use
5. For thumbnail, either select the best option presented or generate your own by viewing the video fullscreen, taking a screenshot, then uploading it
6. Select "No, it's not made for kids"
7. Expand "MORE OPTIONS" to add the tags: "sourcegraph", "codesearch", "universalcodesearch"
8. Click NEXT, then NEXT again
9. Under Visibility, select **Unlisted** if the video only makes sense if embedded in content, or **Public**. If you think the video would benefit from approval first, leave set as **Unlisted** or **Draft**.
10. Click **SAVE**

Then give the marketing team the heads-up that a new video has been published, letting them know what visibility state the video is currently in.

### Embedding your YouTube video

Uses Bootstrap for responsive sizing and adequate whitespace between adjacent elements, and that only Sourcegraph videos are shown on the end screen.

```html
<div class="container my-4 video-embed embed-responsive embed-responsive-16by9">
  <iframe
    class="embed-responsive-item"
    src="https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?autoplay=0&amp;cc_load_policy=0&amp;start=0&amp;end=0&amp;loop=0&amp;controls=1&amp;modestbranding=0&amp;rel=0"
    allowfullscreen=""
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameborder="0"
  ></iframe>
</div>
```
