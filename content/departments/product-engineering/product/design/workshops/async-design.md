# Async design workshop

If you want to avoid sync meetings and want to have a design workshop activity that can involve a large group of people you can consider an async design workshop.

The activities you do on a given day are flexible with this approach, so you can do problem validation, solution validation, brainstorming, and more; the important part is making it a multi-day activity with offsetting days for content creation and evaluation/voting, with a date boundary in between.

Benefits:

- Supports async work
- More flexibility when people are in lots of time zones
- Can support quite large groups
- Self-documenting
- Allows time for reflection and "shower thoughts" to be included

Drawbacks:

- Plays out slower than if everyone was in a live session together
- Not as engaging for people who are inspired by real-time communication
- Requires lots of written communication

## Scheduling considerations

Because this is an activity that takes a little bit of attention each day over a few days or a week, it's good to avoid scheduling at the same time as the release is wrapping up, or another heavyweight organizational activity like planning is going on.

## Offsetting days

The first thing you should do when planning the workshop is identify the list of activities you want to complete. Then, order them across multiple days with one day doing the activity, and the next day summarizing and voting. This rhythm of having a day for producing information and a day for summarizing it/voting on it keeps the team making forward progress, and supports people participating in all time zones. It also is highly tolerant of people joining late or dropping out early.

See [this example of a complete agenda](#example-agenda) for how you might structure something like this in detail.

## Deliverables

On the non-offset days, it's important to structure your deliverables so that they can be shared easily. Simple is best - letting people share off the cuff thoughts in the Slack channel has the lowest barrier to entry, and will encourage the most participation. Beyond that, written tends to be ideal, but videos are also good. So, if you're planning on doing some problem validation, you might have everyone record a short video of problems they are aware of with the product today.

These are easily watchable by everyone, and it's also easy to organize them into groupings the next day and vote on them.

## Coordination

You can coordinate the activity via a Slack channel. It is recommended to use a new, temporary channel for this purpose to avoid confusion from mixing messages. It can be helpful to have multiple facilitators spread across time zones to ensure someone is always around to answer any questions that come up.

Each day, a summary of the activities and deliverables for that day should be shared by someone in one of the early time zones. This will ensure everyone is always aware of what's expected of them that day.

## Additional options

Some people are inspired by working together sync, and may miss having real-time collaboration with others. An option you can give for people like this is to allow for sub-groups to form within the workshop who are in similar time zones and want to work together; they can then submit their daily deliverables as a group, and can thereby have the option to work on them together live.

## Example agenda

This is an example of a real agenda that was used using this methodology. We ran two concurrent workshops (we were focused on iterating on use cases) and created two Slack channels to run them.

This ended up being a little overcomplicated - a lesson learned was to keep each day as simple and straightforward as possible to encourage participation.

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
