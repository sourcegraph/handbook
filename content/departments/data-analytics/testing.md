# A/B testing

## Why A/B testing

A/B testing is a great way to test out which of two or more variants (A or B) of a website or product perform better. It’s frequently used as an experimentation methodology because it allows us to get rid of a number of statistical biases, and isolate the signal (an increase in a metric) from the noise (random fluctuations in the metric). The power of A/B testing comes from randomization: users are allocated randomly to the control group or A (no change) and a proposed improvement (B).

Measuring a metric before/after a change (pre/post) sometimes doesn’t work, because many things are happening at the same time. If we launch a marketing campaign AND a feature to improve retention, and we see retention decrease, how do we know if it’s caused by poorly qualified traffic from the marketing campaign or by the feature not performing? By A/B testing features, we can still measure their impact in this situation as both A/B test variants would have seen, on average, the same amount of traffic from existing marketing channels and the new marketing campaign.

## When to A/B test

A/B testing is a good fit when there are several competing valid options with no clear answer, a clear metric to measure success, and a large enough number of users to test on. Evaluate:

#### Impact

A/B tests take time and resources, and we can only run a few A/B tests at a time to avoid interferences between tests. We should keep A/B testing for high-impact metrics optimization that match the other conditions here.

#### Uncertainty

A/B testing is useful when there are several options to choose from, possibly with competing explanations on why they would work, but no clear winner.

It’s not useful A/B testing versions if we already know the result with high probability. Sometimes though, we will want to use A/B testing for things we know are important just to _quantify_ impact (is it worth maintaining this?), as opposed to just _validate_ (yes/no) impact.

#### Measurement

A/B testing requires a clear quantitative way to measure what is "better". Common advice is to pick a single, clear metric so that there is no ambiguity in deciding if the change `passed` or `failed`.

#### Volume of users to reach statistical significance

A/B testing requires a large enough number of users to get statistically significant results. The smaller the number of users in the A/B testing cohort, the more the change needs to have a big impact on the metric to be measurable. This is because the signal (the impact of the change) needs to be higher than the noise (the random fluctuation in a metric).

If you want to A/B test over a part of the product that does not receive a lot of traffic and therefore needs a much bigger impact on the metric to be statistically significant, the variant tested generally needs to be much more ambitious and thoughtful (e.g. removing 75% of steps in a sign-up flow instead of changing the color of a button).

For example, retention fluctuates week over week for "random" reasons we don't understand. The more users, the smaller those "random" fluctuations will be: this will make it possible to decide whether a change caused by an experiment was likely random, or likely caused by the experiment.

Running A/B tests on a number of users that is too small is inefficient (waste time to setup the A/B test), inconclusive (the result will be that no conclusion can be made) and sometimes counterproductive (miscommunicated, an insignificant A/B test leads teammates to draw conclusions that aren't valid and can be hard to debunk). In that case, it's better to choose another method, such as user interviews.

### Examples

#### Good A/B test candidates

- Evaluating signup flows, or any flow that result in a measurable action
- Evaluating versions of button placement, CTAs, landing pages
- Evaluating different messaging and positioning statements

The higher the initial conversion percentage, the easier it will be to achieve a sample size quickly, but the tougher it could be to see a meaningful increase.

#### Bad A/B test candidates

- Launching a new key feature backed by product and UX research: success can be measured directly with an adoption metric (there is an easier way)
- Fixing a frequently reported bug likely does not require A/B testing (no uncertainty)
- Changing the design to build brand trust (no metric)

## How to run an A/B test

After you identify a good A/B test candidate:

### Communicating an A/B test candidate

Communicate good candidates with any relevant parties. This could include other product/engineering teams that the A/B test could impact, such as but not limited to PMs, designers, BizOps. Posting the proposal in a public channel (#product, #product-led, #analytics) could be a good route to do this.

### Define the A/B test

- Fill out all the following information in an [issue](https://github.com/sourcegraph/sourcegraph/issues/new?assignees=&labels=AB-test&template=ab-test.md&title=A%2FB+test%3A+%3Cname%3E), and add it to the [A/B testing project](https://github.com/orgs/sourcegraph/projects/192).
  - Define the target metric
  - Define the A, B (and more) versions
  - Define the length of the test, depending on the number of users you need, and check for statistical significance with a calculator ([example](https://www.optimizely.com/sample-size-calculator/)). Let BizOps know if you need to understand how much existing traffic there is to determine the expected length of the test
  - Pick a feature flag name for your A/B test (eg. `w0-signup-optimisation`)
  - Set up the exact methodology (write the query, build the chart) for how this will be evaluated before the test launches to not introduce any bias in the evaluation
- Label the parent issue of the test with `AB-test` so anyone can see a list of the A/B tests that have been or are being run
- Label all the issues that will go into the test `AB-test/<flag-name>`. That way anyone can see what changes are in a given A/B test, and what the name of the feature flag is. It will also make it easier to clean up the flag when the test ends. [Example](https://github.com/orgs/sourcegraph/projects/181?card_filter_query=label%3Aab-test%2Fw0-signup-optimisation).
- **_WIP: Follow the naming conventions when adding events_**

### Setup the A/B test

- Post in #product-led to sync with product, marketing and business operations teams so everyone can ensure there are no conflicting A/B tests running
- [Use a feature flag](https://docs.sourcegraph.com/dev/how-to/use_feature_flags) to setup and rollout the A/B test
- Follow the steps to -add the events to Sourcegraph and Amplitude- placeholder for link to amplitude events

### Analyze the A/B test

Analyze, write a report in a source of truth, and link to that in the original A/B test ticket. You can use Amplitude (link to come) or [BigQuery/Sheets](https://docs.google.com/spreadsheets/d/1m31oBnqJKu9JVuHA27pZVA1sdv_tc2Vc36pvXwv6mhI/edit#gid=802294460) to evaluate A/B tests.

We use this [calculator](https://neilpatel.com/ab-testing-calculator/) to evaluate significance.

### Cleanup

Book some time for cleaning up after the A/B test. It's best to create a ticket for cleanup when starting the test. In particular:

- **Remove the feature flag:**
  - In case of a _successful_ experiment, [remove the flag](https://docs.sourcegraph.com/dev/how-to/use_feature_flags#disable-or-delete-the-feature-flag) and roll out the changes.
  - In case of a _failed_ experiment, remove both the changes and the feature flag.
- **Remove data from pings:** if the experiment used data in pings, and it failed, remove the data. We are [very selective](https://docs.sourcegraph.com/dev/background-information/adding_ping_data#ping-philosophy) on what to include in our pings. Remove any data from pings that is not needed anymore.

## Resources

- [How to do A/B testing](https://docs.google.com/document/d/1UheKgsOGSDQRFPjsoYpKismnKeqU_ANX7PRHs8uIQCE/edit#)
- Why you shouldn't call experiments early [video](https://www.youtube.com/watch?v=AJX4W3MwKzU)
