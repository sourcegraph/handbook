# Cloud Maintenance Window Process

From time to time we will need to run a production change on Sourcegraph Cloud that requires downtime, affecting paying and trial Cloud customers. This section covers how to successfully manage communications in these types of situations.

Note: These planned maintenance windows do not impact Self-Hosted Sourcegraph customers.

## Process

1. Once a maintenance window with downtime has been scheduled, reach out to [Alex Isken](mailto:alex.isken@sourcegraph.com) (PMM for Cloud), and [Ryan Phillips](mailto:ryphil@sourcegraph.com) (PM for Cloud). By this time, you should have an idea of:
   - The time, date, and duration of the planned outage
   - The impact on the experience for customers (i.e. “New changes to repositories will not be represented during this time)
   - The breadth of impact (all customers or a subset of customers)
2. Using the above information, marketing and support will draft an email for customer communications. An example of this is provided below.
3. **Two weeks before** the maintenance window:
   - Support will notify customer engineers via #ce Slack Channel that a maintenance window with downtime will occur. At this point, each customer engineer is responsible for notifying individual customers via the mode of communication most relevant for that customer.
   - Support adds a maintenance window notification to [Sourcegraph Cloud’s status page](https://sourcegraphstatus.com/#).
   - The responsible engineering team nominates a point of contact to coordinate with support and CE.
4. **One Week Before:** Remind customers about the upcoming maintenance window 1 week, 3 days and 1 day before the change time via
5. On the day of the maintenance window: Support updates [Sourcegraph Cloud’s status page](https://sourcegraphstatus.com/#) to reflect the downtime
6. Upon completion of the maintenance:
   - The engineering point of contact will update the support team when the maintenance is complete and systems are operational.
   - Support will update the status page and notify Customer Engineering via #ce slack channel.
   - Each customer engineer will communicate the maintenance completion to customers via the appropriate communication channels.

## Sample Customer Email

**Subject:** Sourcegraph Cloud Update
**Body:**
Hello CUSTOMER -

In an effort to be as open and transparent as possible, we have an important notification to let you know about.

On Tuesday, March 15th, our team will be performing an infrastructure upgrade. While Sourcegraph Cloud should remain operational, we are notifying you of this maintenance in case Sourcegraph Cloud becomes unavailable. We will be performing this update between 3PM and 5PM UTC on March 15th.

We will post to [our status page](https://sourcegraphstatus.com/#) when we start and upon completion of the upgrade. Please subscribe to stay informed.

Do not hesitate to hit reply and let me know if you have any questions.

Thanks,
YOUR NAME
