# Async design workshop

If you want to avoid sync meetings you can consider an async design workshop. This is where you use a Slack channel to run a workshop over a period of several days, with no sync time required.

Benefits:

- Supports working async
- More flexibility across time zones
- Works with quite large groups
- Allows time for reflection and "shower thoughts"

Drawbacks:

- Plays out slower than if everyone was in a live session together
- Not as engaging for people who are motivated by real-time communication
- Requires more written communication

## Concept

The first thing you should do when planning the workshop is identify the list of activities you want to complete. Then, start the first activity on the first day, use the next day for summarizing and voting on the results so far, then repeat with the second activity (and so on). This rhythm of having a day for producing information and a day for summarizing it keeps the team making forward progress without needing sync time. It's also highly tolerant of people joining late or dropping out early.

See [this example of a complete agenda](#example-agenda) for how you might structure something like this in detail.

## Coordination

You can coordinate the activity via a Slack channel. GitHub Discussions are also a good tool channel for discussion as it makes ideas public, and provides a better support for having long-running conversations and voting on topics than Slack. If you use Slack, it is recommended to use a new, temporary channel for this purpose to avoid confusion. It can be helpful to have multiple facilitators spread across time zones to ensure someone is always around to answer any questions that come up.

Each day, a summary of the activities and deliverables for that day should be shared by someone as a reminder for the participants of what to expect.

## Deliverables

It's important to clearly define the deliverables each day so that they can be shared easily. As simple as possible (i.e., comments in Slack) is often best since it will encourage more contributions. Beyond that more structured writing works well, but videos are also good. In cases where you want a specifically formatted output (for example, detailed solution specifications) you should include a template that you want everyone to use; just be mindful that this increases the barrier for entry and may reduce the number of submissions, although sometimes it is necessary.

## Scheduling considerations

Because this is an activity that takes a little bit of attention each day over a few days or a week, it's good to avoid scheduling at the same time as the release is wrapping up, or another heavyweight organizational activity like planning or a hackathon is going on.

## Additional options

Some people are inspired by working together sync, and may miss having real-time collaboration with others. An option you can give for people like this is to allow for sub-groups to form within the workshop who are in similar time zones and want to work together; they can then submit their daily deliverables as a group, and can thereby have the option to work on them together live.

## Example agenda

This is an example of a real agenda that was used using this methodology. We ran two concurrent workshops (we were focused on iterating on use cases) and created two Slack channels to run them. This ended up being a little overcomplicated - a lesson learned was to keep each day as simple and straightforward as possible to encourage participation - but it is here as an example.

> If you’re interested in participating in this workshop, the first step is to choose which use cases you'd like to work on; you can sign up for one or both. You can participate individually, or as a group if you’d like to collaborate with a few others; in that case, you’ll prepare each day as a group and can have live sessions if you like. To join, head over to #workshop-use-case-onboarding #workshop-use-case-code-health (or both).
>
> From there, starting on Monday we’ll have several days of creativity and sharing; there’s a lot of flexibility here, so if you feel stuck and are unsure how to approach the work for the day just reach out in the Slack channel.
>
> - Monday: Write a few paragraphs or record a video explaining the perspective of a user who may be experiencing the problems that each use case isn’t solving very well in the product today. Focus on the current state and how users are doing things now, and don’t worry about team boundaries - think about the goals people are trying to achieve. Cross-reference with existing customer insights to check assumptions, and then share your notes in the Slack channel. After you’ve shared yours, read other people’s ideas.
> - Tuesday: Jason, Marisa, and Alicja will review all the notes from Monday and summarize back the common themes we saw. Then, everyone votes on the ones that make sense to focus on.
> - Wednesday: From the selected themes, document a flow through the product that seems like it is important and might be straightforward to fix. There are a lot of different ways you can approach this; visually in a tool like Miro, record a video, as a text list of actions performed in order, or as a user story. The important thing is that you clearly communicate the problematic flow and why. You can share your result in the Slack channel, and read what others have done once you finish yours.
> - Thursday: Once again, Jason, Marisa, and Alicja will summarize the common threads and we’ll vote on the most promising flows to fix.
> - Friday: Now that we have a clear understanding of the problem, let's propose some solutions. Everyone should use the outputs from the rest of the week and come up with a simple but powerful solution that addresses the problem and makes the use case better. As before, you can communicate this in different ways; storyboard(s), text-based, record a video, or whatever comes naturally to you. Share your idea in the Slack channel and check out what everyone else has done.
> - Monday: Jason, Alicja, and Marisa will group any solutions that are similar, and we’ll have one last vote to pick the solutions we want to implement. Those solutions will get moved to GitHub issues, and everyone will have one last chance to review/add any additional context that they think is important.
> - Tuesday: The final issues will be shared with all the teams that have a role in building them and we’ll do a wrap-up discussion in Slack to see how this went, and what we could improve if we did it again in the future.
