# Engineering talent review process

## Definitions

<dl>
  <dt>Group</dt>
  <dd>The set of ICs under consideration, plus their managers and directors (at first, this will be all of engineering; as we grow, we will eventually need to split this up at the director-org level).</dd>

  <dt>Talent review</dt>
  <dd>This entire process.</dd>

  <dt>Calibration meeting</dt>
  <dd>Meeting with EMs and directors of a group to evaluate each IC for the purposes of determining promotions and ensuring we are all well-calibrated to the engineering levels.</dd>
</dl>

## Cadence

**Talent review is performed in the first month of each fiscal quarter (February, May, August, November).** More frequent than quarterly is not enough time for significant growth to occur for most ICs, and is thus not a good use of <a href="../roles#engineering-manager"><abbr title="Engineering Manager">EM</abbr></a> effort: too much cost for not enough benefit.
Less frequent than quarterly raises the stakes too high: “I just started this new role right before Talent Review. If it’s not enough time for me to demonstrate my increased impact, I’ll have to wait another 6 months before I’m considered again!”

## Pre-work

Prior to the calibration meeting, each <a href="../roles#engineering-manager"><abbr title="Engineering Manager">EM</abbr></a> should evaluate each <a href="../roles#software-engineer"><abbr title="Individual Contributor">IC</abbr></a> reporting to them using the [level descriptions](framework.md#levels) and determine if they are meeting/exceeding/struggling-to-meet the expectations of their given level. EMs should prepare a _short_ statement to justify this, which they will share during the calibration meeting. If they believe the IC to be performing at a higher level, they should also ensure that the IC is meeting the expectations for that higher level, as well as write up a brief promotion pitch. (Note that compensation increases within a level, such as from the start of the compensation band to the midpoint, do not need to go through this process; those can happen any time and are between the EM and their <a href="../roles#director-of-engineering">director</a> to decide.)

This pre-work is greatly aided by [Impact review cycles](../../../people-ops/impact-reviews.md), so we schedule the talent review accordingly. (Since we do 360º feedback every 6 months, it would only be available for every other talent review.)

Because of the quarterly cadence, it’s important that this be as light-weight as possible. The pre-work should take an EM less than an hour per IC not being pitched for a promotion. (For ICs being pitched, the cadence isn’t a consideration: an EM will have the same number of promotion pitches to make regardless of cadence. More frequent evaluations means fewer pitches per talent review.)

Prior to the calibration meeting, EMs in a Group will share their evaluations and any promotion pitches for async review/commenting, and for supporting or challenging promotions.

## Calibration meeting

The calibration meeting is a several-hour meeting (possibly spread out over two days, depending on logistics) with all of the EMs and directors of the Group, plus an observer from [People Ops](../../../../people-ops/index.md) for the purpose of reducing unconscious bias. (If the Group is not all of engineering, then at least one other director is invited as well, to help ensure that all Groups are well-calibrated with each other.) Upper management may be invited, but are not required and have no official role.

All ICs at a given level are reviewed together, starting with level 1. Every EM with an IC at level 1 places their ICs into one of these categories: struggling/meeting/exceeding expectations. Then, one at a time, each IC’s placement is explained by their EM. (Note that in the interests of time, the Group might decide to focus conversation on ICs who are under- or over-performing, especially given the async prework described above.) If they are being pitched for a promotion, that is also shared. Other EMs then provide additional feedback/insight they might have, either to challenge or to further justify the IC’s placement. _This is not adversarial:_ the EMs are working together to best establish where each IC is, and to help prepare the EM to provide meaningful feedback to the IC.

During the discussion, there is a rotating _moderator_ whose job it is to ensure that a fair, balanced, and productive conversation is happening. This can include asking questions of the other participants, calling out potential biases, and calling “time” when things are going in circles.

After all level 1 ICs have been discussed, we move on to level 2 ICs. For any IC being pitched for a promotion to level 2, they are evaluated along with their prospective cohort. (They are not discussed again in the same way, but after discussing other ICs with the same meeting/exceeding evaluation, a quick check is done to validate that they are performing similarly to those folks at level 2.)

This is done for each of our engineering levels.

## After the meeting

Any qualitative feedback for an IC that came out of talent review is shared with them in their next one-on-one (if not sooner).

For ICs being considered for promotion their manager will complete a [promotion request](#promotion-requests).
It’s important that this process moves quickly! If we leave people wondering for a month or more if they will be getting a promotion, we’re creating needless anxiety and uncertainty.

Finally, we should have a [retrospective](../../../retrospectives/index.md) after each of these, so we can continue iterating and improving upon this process. We should also consider changes/clarifications to the [level descriptions](framework.md#levels) at this time, in case any of the existing definitions were cause for confusion.

## Levels

Our [career development framework](framework.md) defines the levels that exist at Sourcegraph. Compensation for each of these levels is derived from Option Impact, a startup compensation tool that Sourcegraph and many other companies use to determine their compensation bands.

## Promotion requests

Promotion requests are made immediately following the [talent review callibration meeting](#calibration-meeting).

The Engineering Manager will complete a promotion request using the [promotion request template](https://docs.google.com/document/d/1DHyPtIooi0J2426iemzzTqLle9UBasrqLZPGET1O7Sc/edit) and submit it for approval.

Following approval from the relevant decision-makers (EM, Director, VP), the promotion request is forwarded to the relevant teammates in PeopleOps (refer to [People Ops Communications Matrix](https://docs.google.com/spreadsheets/d/1JItBWbfKV9lr-LAmE19I0JMvu3Cvh0AdrEHDv-r1E2w/edit#gid=0)) for confirmation. Once confirmed by PeopleOps the promotion can be communicated to the teammate using the [promotion confirmation template](https://docs.google.com/document/d/1mkdJI6cSXWIHthSN_KQKBFSfxs9RQUg_4VCvwmk8FJQ/edit).

Decisions regarding promotions are prioritized by the decision-makers, and made quickly. Promotions are communicated back to the ICs in a timely manner.

### Considerations for promotion

Teammates are considered for promotion to a new level when their manager can make the case that they have had at least one quarter of high performance at their current level, and one quarter performing at the next level. We want to avoid situations where someone is promoted to a level in which they struggle to meet expectations.

The [engineering levels](framework.md#levels) describe performance expectations in 3 categories. It will be extremely rare for an engineer to be exactly at the same level in all of these categories. Since the levels describe the minimum expectations for each level, an engineer must meet the expectations for all categories before they can be considered for promotion.

This does imply a distinction between _high performance at current level_ vs. _ready for promotion_. A level N engineer who is consistently exceeding level N expectations in some areas, but whom we do not feel would be able to meet level N+1 expectations, should not be promoted (despite their high performance in some areas).

## Compensation increase requests

An in-band compensation increase (while staying at the same level) can happen at any time, in recognition of a teammate exceeding expectations in their current level.

The Engineering Manager will complete a compensation increase request using the [compensation increase request template](https://docs.google.com/document/d/1nWFcPjCNALww3kwzl_1l6Gjhrpsl1QGZCHb0hTEkQxk/edit) and submit it for approval.

After approval from the relevant decision-makers (EM, Director, VP), the compensation increase request is submitted to PeopleOps using the [compensation change form](https://docs.google.com/forms/d/e/1FAIpQLSfeY2P0Fw0vc8HlIa6wDJNKV8AckSLFdKVFdtsS3b2Lw7dPcA/viewform). PeopleOps will confirm to the manager once the compensation increase has been processed and the manager can then proceed with communicating the increase to the teammate using the [compensation increase confirmation template](https://docs.google.com/document/d/1o_jRRe7VYDUERz49lwcJxQQYUaNORkme3GMDaI04Fhw/edit).
