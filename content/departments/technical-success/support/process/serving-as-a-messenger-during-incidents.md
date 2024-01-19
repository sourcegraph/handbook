# Serving as a messenger during incidents

You are here because our engineering teammates need a messenger as they work on addressing [an incident](../../../../departments/engineering/dev/process/incidents/index.md). And you were either asked by SE leadership or proactively jumped in because you saw a request for messenger in #incidents, #team-support-engineering, or some place else.

The messenger is always a member of support (whether a support engineer or leader) and they are responsible for customer-facing communication about/during an incident and coordinating the necessary folks internally to create/sign-off on our communications. Having support be the team to send these communications allows engineering to focus on fixing the issue and customer engineering to be a point of escalation as customers process what an incident may mean for them. It also more easily allows us to keep Zendesk a system of record.

Our responsibilities as the messenger are to…

- Remain calm.
- Ensure we understand impact and validate the necessity of customer communication.
- Ensure we have complete and accurate details to share with our customers.
- Coordinate relevant folks internally to create/sign-off on/be aware of the communication plan.
- Show up for our teammates involved with kindness and perspective … no matter how bad an incident may feel, it’s not grave, and it’s about coming together for what’s next more than how we got here (we retro after an incident is handled).
- Work quickly with attention to detail and an intense focus on the customer experience, remembering speed matters as much as how customers may feel through the process.

To serve as a messenger successfully, follow the steps outlined here in the exact order listed. Sure some things may happen out of order, but go through it all in this order … Doing so will allow you to show up for our teammates and customers with calm and organization.

1.  Confirm in all of the places necessary that you are on it and state that you need a few minutes to catch up on this. Typically, you’ll confirm this in a thread in #discuss-support-engineering and/or a thread in #team-support-engineering and/or a thread in #incidents and or the #inc channel created for this particular incident. The point here is to just let folks know you are on it, don’t do anything yet … proceed with the steps as outlined.
2.  Count to 10.
3.  Take a deep breath and let that breath out.
4.  Take a sip of water.
5.  Post in ##team-support-engineering, @ mention @support-engineering, and ask for a member of the team (it can be anyone … an SE, or leader) to serve as your buddy. As you get caught up in the energy of the incident, their job is to maintain distance and double check with you that you have done all of the steps in this precise order and serve as a copy editor on the communications.
6.  Together with your buddy, read the rest of the steps before starting step 7. No matter how many incidents for which you serve as messenger (or buddy to the messenger), the next 5-8 minutes will go far in helping you remain calm. When you are done reading, then proceed to do the next step. If at any point you feel unsure or stuck, that’s okay! Incidents can be unsettling, chaotic, and hard to navigate. Just enga leadership and they will show up for you and help however you need.
7.  Create a folder for the incident [here](https://drive.google.com/drive/u/0/folders/1dh0awFMzdo7rQlFgJhocGt_9bNzM8MmY) either with the inc-## number and a descriptive name or just a descriptive name if there is not yet a inc-## number (we can change it to the inc-## number later)
8.  Make a copy of [the incident communication plan template](https://docs.google.com/document/d/163TYrBZVsRRDJsZvZTpl2yKQfVnojH4gsxvLl1RlQvQ/edit) [TEMPLATE] Inc-## communication plan and save it in the folder (renaming it to reflect this incident) and filling in the details at the top in yellow highlight.
9.  Read the incident thread and channel and start filling in the details in the gather information section of the communication plan. If you are not seeing these details as you read the threads/channel, ask in the channel (or the thread if there isn’t a channel yet). As you read up, if it’s a security incident, STOP!
    -     It is critical that we follow [our security disclosure process](../../../admin-exp/security/reporting-vulnerabilities.md#how-we-disclose-security-vulnerabilities). Is a security engineer already involved? If not, post in #security and @ mention @security-team and ask who is available to assess an incident and lead from the security side. It is critical that we act in deference to the security team from this point forward in terms of assessing the issue, impact, severity, etc. You will still gather information, but we need to be sure it’s coming with security sign-off.
    - Now, get a member of the SE leadership team. We want to be extra careful during security incidents since these can hurt our reputation the most. Post in #team-support-engineering and @ mention @cs-leadership and let the leadership team know you need one of them for eyes on a security incident. Their role will be to double check communications and think through business implications. Normally we wait for the communications review to involve SE leadership, but for security incidents, the earlier the better. You can use the same thread you created to get a buddy or a new one – your choice!
10. Generate the impacted customer contact list and link it in the designated section of the communication plan. Your end goal of this step is to have a Google sheet that you can link here that lists which customers/users need to be informed and has the related email address, in addition to the relevant CE, TA and AE for each customer. This list comes from two primary sources:
    -     Either engineering provides a list of customers/users
    - Or, we have to manually back into a list based on key data. If this needs to be the source, first generate a Salesforce report that lists all customers and shows whether their CE has listed incident contacts. If possible, mark customers as impacted or not yourself. If you need CEs/TAs to help identify, post in #discuss-ce, #discuss-technical-advisors and ask for their help using [this template](#requesting-help-from-CE-team-to-complete-impacted-customer-contact-list) (be sure to prep the Google Sheet first). You may need to follow-up with CE and TAs individually to be sure you end up with a complete and accurate list.
    - _Note_: As of 2022-01-14 this is the desired future state (having a list in Salesforce). Check-in with Aimee on the best way to start this if they haven’t already shared this with you.
11. Based on the details you have gathered and using [these templates](#customer-communication), create the draft communications in the designated section of the communication plan.
12. Fill out the timeline in the communication plan with planned dates. Incident work can span multiple days. In some cases we may have a legal requirement for disclosure of 72 hours. Either way, we want to be expedient but ensure we have accurate information. Generally, planned dates might span today’s date and tomorrow so there is enough time to let folks review communications, prepare the impacted customer list, etc. If an event is not necessary, mark the planned and completed dates as n/a (not applicable).
13. As you continue with the next steps, fill out the timeline in the communication plan with completed dates and relevant links (to Slack threads, the status page post, etc). You want that timeline table to be a quick reference overview that collates your work as you go.
14. Solicit review of the draft customer communications from your buddy, SE leadership, the incident lead, security lead (if relevant), marketing, legal (if relevant – this is decided between you and SE leadership), and simultaneously inform your SE teammates and the CE/TA team using [these templates](#draft-communication-review-requests). Note that you will put forth a recommendation to CS leadership on whether to use the status page, so think through that for that review request.
    - Seek review from your buddy and SE leadership via a post in #team-support-engineering
    - Seek review from the incident lead and (if relevant) the security lead in the incident channel/thread
    - Seek review from marketing by posting in #discuss-marketing and @ mentioning @marketing-team, @Amie Rotherham
    - Seek review from legal (if agreed this is necessary with SE leadership) by posting in #discuss-legal and @ mentioning @legal-team
    - Inform your CE and TA teammates by posting in #discuss-ce and #discuss-technical-advisors
15. Incorporate edits and finalize the customer communications. There may be lots of comments and changes. That’s okay! The template was just a starting point and this is the step where we capture all of the nuance – what if this is the 3rd incident for this customer, etc.
16. Post/send customer communications.
    -     We don’t always post to the status page. For example, we will never post about a security incident on the status page. During a security incident, it’s critical that we limit information so as to not create avenues of awareness that could make the situation worse. We also try to limit the status page for wide-reach issues, when the majority (somewhere between 50% and 80%) of self-hosted or Cloud customers are impacted. When we do post to the status page, we often post just one update as “resolved,” but we have templates ready [here](#status-page) for if we need to post a sequence of updates (if we do go with a sequence, we have two posts for “investigating” that can be posted after each 30 minutes until both are posted). [Here](#how-to-update-the-status-page) are the instructions for updating the status page.
    - In order to honor our customers, we take the time and care to reach out to customers in a direct one-to-one email. You will send these emails from your work Gmail (not Zendesk) with the relevant CE, relevant TA, and relevant AE, and support@sourcegraph.com in copy. While this takes more time, it ensures emails don’t get lost in spam and helps maintain trust with the customer who will appreciate this level of care. It is also very important to remember to copy support@sourcegraph.com so that you can work from Zendesk for any follow-up with customers.
17. Help triage put all of the cases generated by sending emails into your queue and prep them for customer follow-up. Change the requestor to the customer and set the case to pending so it’s easy to tell if a customer replies (the case will flip to open).
18. Double check that you have filled out the timeline to reflect when things were completed and add relevant links (ie, add links to Slack posts, status page posts, etc). Again, you want that timeline table to be a quick reference overview that collates your work as you go.
19. It’s probably best that you be super careful of taking cases for the next few days so you can focus on being super responsive to customers who require follow-up.
20. Keep a sharp eye out for any follow-up responses/questions from customers. Post questions in the relevant inc-## channel and work with your engineering teammates to confirm the correct answer before answering the customer’s question. Capture the questions and answers in the FAQ section of the communication plan.
21. Make note of customers who would like you to send them our post-mortem in the relevant section of the communication plan and be sure to follow through on those requests. It can take a couple of weeks sometimes for our product teammate for that part of the product to complete the post-mortem, but that is usually who makes sure they get done. If a customer wants it, be sure to let the relevant PM and incident lead know so they can commence work sooner than later.
22. After 3 days, you can close all tickets that don’t require follow-up. If a customer writes back later, it will open a new ticket so nothing will fall through the cracks.
23. Either to create the customer-facing post mortem or after, engineering/product also lead a retro. Participate! Don’t try to change the process in the middle of an incident. Make notes and save it all for the retro. Changes are good and healthy, but the timing has to be right. And mid-incident changes create unnecessary confusion and stress … and remember, we want to show up and bring calm. We definitely want to iterate and improve, too, just with super thoughtful timing.
24. Celebrate! You have successfully served as a messenger on an incident and your work was integral to helping us maintain trust with our customers!

## A few notes for whomever serves as buddy to the messenger

As a buddy to the messenger, your primary responsibility is to help keep the messenger feeling calm. Incidents have a way of turning chaotic and stressful and chaos and stress aren’t exactly helpful ingredients for thoughtful work. Just you being there is a lot since it makes the work feel less lonely and ultimately easier as a result. Sometimes, when things are particularly chaotic and stressful, it can also help to remind the messenger and others involved that things happen and now it’s about how we handle it … and that putting it all into perspective, this isn’t a huge deal and we got this!

A few other super helpful things you can do:
Keep track of where the messenger is at in the steps listed above and make sure they are following the steps.
Rigorously proofread the draft communications for typos and grammatical errors – remember, we are trying to build trust and we don’t want to give customers any more reason than they have to be disappointed in us … and it’s okay to have typos, etc … we just wanna try to catch them all.
Also consider how succinct, thoughtful, thorough, well organized, etc the draft communications are make suggestions to help in these areas (writing those drafts can be hard and an editor is a gift to take it to the next level).

## A quick note on templates

The templates for this practice are intended to make this practice easier and also help folks across the organization connect dots faster. It can feel boring using a template, but if a message is the same every time, it helps the recipient recognize it faster and get into the mode they need to be in faster, too. Similarly, if our communications to customers are consistent, it helps them in a similar way. We also save a lot of time on review because we proactively agreed to the overall structure. We may deviate from time to time, but hopefully this note adds clarity to why there are all of the templates.

## Templates

### Customer communication

#### Status page

##### Resolved-only post

We have identified an issue in our **\_\_\_\_\_\_** release that can cause **\_\_\_\_\_\_**. You are impacted if **\_\_\_\_\_\_**, otherwise you are not impacted.

If you are impacted, you can remediate this by **\_\_\_\_\_\_**.

If you have any questions, please email support@sourcegraph.com.

##### Sequenced posts

_Investigating_
We are aware there is an issue with **\_\_\_\_\_\_**. You are impacted if **\_\_\_\_\_\_**, otherwise you are not impacted. We are investigating a resolution. If you have any questions, email support@sourcegraph.com.

_Identified (first post 30 minutes after posting identified post)_
We are continuing to investigate a resolution. We want to resolve this as quickly as possible!

_Identified (second post 30 minutes after posting first investigating post)_
This is taking longer than we want it to, but we are still working to find a resolution as quickly as possible and we will share that when we have it. In the meantime, if you have any questions, email support@sourcegraph.com.

_Resolved (option one: customer does not need to take action)_
We have resolved the issue and will conduct a postmortem to see how we can learn and grow. If you would like to know more, please email support@sourcegraph.com.

_Resolved (option two: customer needs to take action)_
We have identified a resolution. You can remediate this by **\_\_\_\_\_\_**.

We will also conduct a postmortem to see how we can learn and grow. If you would like to know more or have any questions, please email support@sourcegraph.com.

#### Direct email

##### When we know for sure which customers are impacted

We have identified an issue in our **\_\_\_\_\_\_** release that can cause **\_\_\_\_\_\_**.

You can remediate this by **\_\_\_\_\_\_** [or if there is also a status page post, then …] you can see the details for remediation here [and link to the status page post]. Let me know if you have any questions.

##### When need a customer to take action to determine impact

We have identified an issue in our **\_\_\_\_\_\_** release that can cause **\_\_\_\_\_\_**. You are impacted if **\_\_\_\_\_\_**, otherwise you are not impacted.

To determine if you are impacted, **\_\_\_\_\_\_**.

If you are impacted, you can remediate this by **\_\_\_\_\_\_** [or if there is also a status page post, then …] you can see the details for remediation here [and link to the status page post]. Let me know if you have any questions.

### Requesting help from CE/TA team to complete impacted customer contact list

Hey @ce-team, @technical-advisors. I am working on our plan to inform customers about incident #inc-##. I’ll share the draft communication when it’s ready, but for now I need your help identifying customers who are impacted. A customer is impacted if **\_\_\_\_\_\_**. In this Google Sheet (link), can you please write yes or not in Column **\_\_\_** if this customer meets that requirement. Now would also be a good time to double check if our contact list is up-to-date. If you have any changes, please make them in the sheet AND in Salesforce for next time. We are aiming to start communication at **\_\_\_** UTC tomorrow and need this information from you by then. Thank you!

### Draft communication review requests/inform teammates

#### Informing SE teammates and triage and solicit reviews from your buddy and leadership

@support-engineering I am messenger for #inc-##[slack channel]. You can see the details in the communication plan[link to it]. For this incident, I propose **\_\_\_\_\_\_** regarding the status page. @ [buddy] and @cs-leadership can you please review the draft customer communications, let me know your thoughts about the status page, and whether we need to have legal review. @cs-triage please route all cases related to this to me. Thanks!

#### Seeking review from incident lead and/or security lead

##### Non-security related

@ [incident lead] Can you please review the draft customer communications to make sure they are accurate? Feel free to share any other feedback you have, too. Thanks!

##### Security-related

@ [incident lead] @ [security lead] Can you please review the draft customer communications to make sure they are accurate? Feel free to share any other feedback you have, too. Thanks!

#### Seeking review from marketing

@marketing-team @Amie Rotherham I am messenger for #inc-##[slack channel]. You can see the details in the communication plan[link to it]. If you would like to review the draft communications or have any questions, let me know. As always, your review/participation is at your discretion. Thank you!

#### Seeking review from legal

@legal-team I am messenger for #inc-##[slack channel]. You can see the details in the communication plan[link to it]. @cs-leadership and I believe it would be good to get a legal review on our communications. Can one of you help us out? Thank you!

#### Informing CE/TA teammates

##### When you requested help generating the impacted customer list

Hi again @ce-team, @technical-advisors ! Me again regarding #inc-##[slack channel]. First, thank you again for helping me generate the impacted customer list. No review required, but if you want to see a preview of the communications, the draft is ready in the communication plan[link to it]. I plan to start notifying customers at **\_\_\_** UTC on yyyy-mm-dd. Let me know if you have any questions. Thanks!

##### When you did not need help generating the impacted customer list

Hi @ce-team, @technical-advisors! Just here to give you a heads-up regarding #inc-##[slack channel]. No review required, but if you want to see a preview of the communications, the draft is ready in the communication plan[link to it]; where you can also see the list of which customers are impacted. I plan to start notifying customers at **\_\_\_** UTC on yyyy-mm-dd. Let me know if you have any questions. Thanks!

## How to update the status page

Our status page, [sourcegraphstatus.com](https://sourcegraphstatus.com/#), is updated via incident.io Slack commands (`/incident statuspage`) in the inc-## channel. The channel must exist to be able to update the status page and the channel had to be created via the incident.io commands. Typically this is done by the incident lead, but you can do it too for the purpose of updating the status page, you may just have to let folks know that’s why you are doing it if someone created a channel another way. If you need any help using incident<unlink>.io, go to their help center at [docs.incident.io](https://docs.incident.io/).
