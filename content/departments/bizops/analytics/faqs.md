# Data & Analytics FAQs

Below are answers to common questions teammates at Sourcegraph have.

### ARR, company type, and more are outdated on the [Server Instances Overview](https://sourcegraph.looker.com/dashboards/167). How can we get this updated?

Looker only populates this information from Salesforce for customers, and Looker and Salesforce both are not connected to our licensing system, so trials as a `Company Type` can't be picked up. The Data & Analytics team can't update any of this information - instead, please update the relevant information in Salesforce and it'll be updated in Looker within 24 hours.

### My account's [insert metric] went from really high to really low week over week. What happened?

It's likely they have multiple instances (such as a separate instances for staging and production) and our data pipelines picked up the low data point from their staging instance. Unfortunately fixing this is very difficult and not among our top priorities, so please reach out in #analytics to confirm specific pieces of information.

### I can't find a customer's instance anywhere in Looker. What's going on?

It's possible that the customer has an offline (or air-gapped) instance. Check this [document](https://docs.google.com/spreadsheets/d/17zh57kElBPCr71d2gIjao773u_ZNt7JgjIlv7wLKYhY/edit#gid=1979843091), which lists all customers we know to be offline, to see if the customer you're looking for is on there. If not, reach out to #analytics to determine what might be the cause.

### I'm not seeing any telemetry/data on my account except for MAUs and total user accounts. What's going on?

Assuming you know there are users on the instance, there's a chance they've disabled non-critical telemetry (in which case we only get a few necessary pieces of data for billing and administration, such as total user accounts and MAUs) or fully turned off all telemetry (in which we won't get anything). It's up to the individual AE/CE for how they want to proceed with their account's contacts in this case.

### I want to know which users did this action in Amplitude. Can I pull their email addresses?

If you're looking for signed-in users, we can do this. There are no emails available directly in Amplitude but we could use the user ID and manually tie it back to emails. Just let us know which set of users you're interested in.

### Do we collect [insert event]?

1. Enable Developer mode
2. Show JavaScript Console
3. Go to sourcegraph.com
4. Enter `localStorage.eventLogDebug = "true"` in the JS console
5. You can just use Sourcegraph normally and in the side or bottom bar it'll show all the events being triggered!

Alternatively, you can always search in Amplitude when creating a chart for what you think the event might be (e.g. submitting a search is `Search Submitted`) and hopefully it pops up. If you can't find what you're looking for, feel free to reach out in #analytics and we'll take a look!

### Are there plans to help Sourcegraph admins understand how their users use Sourcegraph?

This should be a product request - please submit your feedback to #feedback and it'll get sent to the product team to prioritize. We can trigger automated PDFs of Looker dashboards to any AE/CE to send off to your contact for a short-term fix! Reach out in #analytics if you'd like to do this.
