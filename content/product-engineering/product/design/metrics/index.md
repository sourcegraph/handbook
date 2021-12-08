# Analytics and product design

Analytics is an important part of two critical phases of the design process: discovery and measurement.

By reviewing analytics at the beginning of a project, we can discover areas of the product our design can impact goals.

Measurement plays a role in design because decisions we make every day can be subjective. Additionally, user testing with smaller sets of users is often not sufficient to surface issues. By setting goals and reviewing how our designs perform against those goals, we can remove some of this uncertainty and spot problems early.

A practical example of using discovery and measurement to improve an OKR:

> Improving retention is a key OKR. The search product team included a video in a recent homepage update. While reviewing the events correlated with high retention, it is discovered that users who view the video are more likely to retain, but that the overall views of the video (and thus retained users) are small.

From this discovery, a designer could place greater importance on the video or include it in various segments of the onboarding flow to elicit more views and thus improve retention.

## Analytics tooling

Sourcegraph currently uses three solutions for product analytics:

### Amplitude

Amplitude provides session-based event data of Sourcegraph Cloud features. Designers can use Amplitude for both discovery and measurement of user retention, usage metrics, funnels, path journeys, and other quantitative analysis requirements.

[Learn more about using Amplitude as a designer](./amplitude-for-designers.md)

### Looker

Looker provides access to all event log data across both on-premise installations and cloud products from a single interface. Because Looker data is provided primarily from ‘ping’ data, it can answer cumulative questions about events but does not provide events related to individual user sessions.
[Learn more about when to use Looker versus Amplitude](../../../../bizops/amplitude.md#what-is-in-looker-vs-amplitude)

### Google Analytics

Google Analytics provides session-based data that is useful for reviewing how users interact with the cloud product. Useful information which can be derived from Google Analytics includes frequency, technology (browser, mobile device, etc.), conversion against goals and behavior (content, flows, and events). Data is only available for users who have accepted the Sourcegraph cookies.

Google Analytics access can be provided by #it-tech-ops

## Defining events

Sourcegraph events are typically defined by product designers in design files. See the [defining metrics](./defining-metrics.md) page for more information.
