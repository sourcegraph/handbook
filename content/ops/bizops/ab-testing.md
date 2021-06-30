# A/B testing

## Why A/B testing
A/B testing is a great way to test out which of two variants (A or B) of a website or product perform better. It’s frequently used as an experimentation methodology because it allows us to get rid of a number of statistical biases, and isolate the signal (an increase in a metric) from the noise (random fluctuations in the metric). The power of A/B testing comes from randomization: users are allocated randomly to version A or B.


### Example
When improving the experience on sourcegraph.com, we are faced with several challenges:
The number and diversity of users renders UX research costly for some features (homepage, CTAs, onboarding).
Measuring a metric before/after a change (pre/post) doesn’t work, because many things are happening at the same time. If we launch a marketing campaign AND feature X to improve retention, and we see retention decrease, how do we know if it’s caused by poorly qualified traffic from the marketing campaign or feature X not performing?
Recently, retention was cut by half, for a yet unknown reason that we guess is a change in the nature of the traffic. If we had A/B tested that week, we could have measured the impact of new features, since both cohorts would have seen, on average, the same amount of “normal” and “weird” traffic.
We have working assumptions and good intuition for the direction thanks to product research, but we don’t completely understand the mechanisms of search UX. We need to experiment.


## When to A/B testing

A/B testing is a good fit when there is:
the right kind of uncertainty - it’s no use A/B testing versions if we already know the result with high probability.
For example, fixing a frequently reported bug likely does not require A/B testing.
For example, launching a new key feature backed by product and UX research does not require A/B testing, and success can be measured directly with an adoption metric.
But evaluating versions of button placement, CTAs, landing pages, onboarding flows, features with complex interactions with other features, is a good fit.
Sometimes though, we will want to use A/B testing for things we know are important just to quantify impact, as opposed to just validating (yes/no) impact.
a large number of users - some changes touch a large number of users, with heterogeneous behaviours: they are great fit for A/B testing. On the contrary, if the change affects a small number of users, in-depth user interviews will yield deeper insights.
a testable hypothesis - A/B testing requires a testable hypothesis,impacting a measurable metric, such as “we believe that this UX change will significantly impact conversion”
New features, or having a design that creates trust are likely not good candidates


## How to run an A/B test

## Resources

- [How to do A/B testing](https://docs.google.com/document/d/1UheKgsOGSDQRFPjsoYpKismnKeqU_ANX7PRHs8uIQCE/edit#)
- Why you shouldn't call experiments early [video](https://www.youtube.com/watch?v=AJX4W3MwKzU)
