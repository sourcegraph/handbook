# Responding to Customer Security Reviews

Often during a customer’s technical validation process for our product, they will have security-related questions about either Sourcegraph or the manner in which Sourcegraph is deployed (Cloud, Managed Instance, Self-Hosted). In many cases, these questions are part of a larger security compliance process the customer runs to ensure they meet legal or regulatory requirements. As the primary owners of the technical win, CEs are responsible for collecting, researching and answering these questions on behalf of Sourcegraph.

Some questions posed by customers and their security or compliance teams are outside of the CEs level of expertise or knowledge. In those instances, CEs must rely on members of the Security Engineering team to assist in answering them. This process outlines how CEs should handle responding to customer security reviews and questionnaires and how to engage with CE Security SMEs and Engineering in that effort.

## Definitions

**Opportunity CE**

The person assigned as the Customer Engineer to the customer account and/or opportunity.

**CE Security SME**

One or more CEs designated as an escalation point for customer security questions. They assist in providing answers to questions and escalating questions to the Sourcegraph Engineering Security team for input.

## Overview

The Customer Engineering organization will lead the coordination of and response to all customer security and compliance questionnaires. As the primary owner of the technical win for any opportunity, the Opportunity CE is responsible for working with a customer to understand their security review process, requirements and timelines. It is also their responsibility, with the assistance of others as outlined here, to coordinate the formal response to the customer and in advance of any deadlines that might have been established.

The Engineering Security team will assist the CE organization by helping to answer questions which are not common knowledge, not publically or internally documented, or which need technical expertise outside of the scope of a typical CE. Work with the Engineering Security team will be coordinated through Slack and the team is committed to a five (5) day SLA for responding to questions escalated to them in this way. All communication around questions and responses for a specific customer escalation will be maintained in Slack as part of a single thread. This makes it easier to keep track of the status of an escalation and also for multiple people to engage around a customer response if necessary.

All coordination with the Engineering Security team needed to respond to customer questions should be done via Slack by the CE Security SME who is working with the Opportunity CE on the request. There should be one security request made via Slack for each customer questionnaire. Any discussion around questions from that customer questionnaire or follow-up questions from the customer should take place in the same thread as the original request.

The Engineering Security team will capture their responses in a centralized repository set up and maintained by the CE Security SMEs. Once the Opportunity CE aggregates all of the necessary responses to a customer’s questionnaire, a copy will be saved in a central location for future reference by CEs.

## Step-by-Step Process

1. The Opportunity CE receives the security questionnaire from the customer.
2. The Opportunity CE reviews the [Security Question Repository](https://docs.google.com/spreadsheets/d/1B7ddN-tB__FoS-zOyU3W1OtYcWrFMSNBNW7Ljcp4yJ4/edit?usp=sharing), the Sourcegrah handbook, and external Sourcegraph Documentation to answer any questions they are able to answer independently.
3. Any questions that the Opportunity CE is unsure about, they should leave blank on the customer questionnaire for the time being.
4. For questions that can’t be answered independently, the Opportunity CE shoudl add them to the [Security Question Repository](https://docs.google.com/spreadsheets/d/1B7ddN-tB__FoS-zOyU3W1OtYcWrFMSNBNW7Ljcp4yJ4/edit?usp=sharing).
   1. Open the [Security Question Repository](https://docs.google.com/spreadsheets/d/1B7ddN-tB__FoS-zOyU3W1OtYcWrFMSNBNW7Ljcp4yJ4/edit?usp=sharing).
   2. Confirm there are no active filters (Click the Data dropdown menu. If you see Remove Filter, click it. If you see Create Filter, continue.)
   3. Sort the Sheet A -> Z on Column 1, UID (unique identifier).
   4. Scroll down to the first blank row.
   5. For each question on your security review that you don’t know the answer to: Cut and paste the question into the column labelled Question. If the question is multiple choice or the answer format is not a simple paragraph of text, indicate available answer choices by typing them after the question’s text in this same cell.
   6. When finished adding questions, increment the UID for the first row of your newly added questions, then click and drag to increment the id for each question that you added. Do the same for Company, Deployment, and Requested Date. The Requested Date should reflect the date when the question was received from the customer. If applicable, also provide the SFDC Opportunity as a URL in Column K.
   7. Send a Slack message to #ce-internal, tagging the CE Security SMEs (currently Max Wiederholt and Shawn King) and let them know that you’ve received a new security questionnaire, answered the questions that you could find answers to, and added questions that you need help with to the Security Question Repository. Max or Shawn should confirm that they will take over the process, and your next step will be to wait for them to find answers, then message you on Slack that your answers are ready to cut and paste into the original questionnaire document and send back to the customer.
5. The CE Security SME opens a Security Support request in the #Security channel via Slack, asking for assistance with the unanswered questions and providing a link to the [Security Question Repository](https://docs.google.com/spreadsheets/d/1B7ddN-tB__FoS-zOyU3W1OtYcWrFMSNBNW7Ljcp4yJ4/edit?usp=sharing) along with the UIDs of the questions needing a response.
6. The CE Security SME tags the Opportunity CE in the thread created by the Security Support request workflow for visibility and in case the Engineering Security team needs any further context.
7. The CE Security SME records the date and time of the submission in the [Security Question Repository](https://docs.google.com/spreadsheets/d/1B7ddN-tB__FoS-zOyU3W1OtYcWrFMSNBNW7Ljcp4yJ4/edit?usp=sharing) (**Sent to #security Date column**)
8. When the Engineering Security team completes the request, the CE Security SME records the date and time of the response in the [Security Question Repository](https://docs.google.com/spreadsheets/d/1B7ddN-tB__FoS-zOyU3W1OtYcWrFMSNBNW7Ljcp4yJ4/edit?usp=sharing) (**Answered by Security Date column**) for each question that was part of the request.
9. The Opportunity CE collects all of the responses to all of the unanswered questions, completes the customer’s questionnaire and returns it to the customer.
10. The Opportunity CE records the date and time of the final submission in the [Security Question Repository](https://docs.google.com/spreadsheets/d/1B7ddN-tB__FoS-zOyU3W1OtYcWrFMSNBNW7Ljcp4yJ4/edit?usp=sharing) (**Submission Date column**) for each question that was part of the request.
11. The Opportunity CE places a copy of the completed customer security questionnaire in a [Google Drive folder](https://drive.google.com/drive/folders/1qM2PO8o5SmC3vYORTFNl1m2_oaIW-2S1) for future reference.

## Reporting

The Customer Engineering organization leverages Google Sheets to track all of the questions being escalated by Opportunity CEs for assistance from either the CE Security SMEs or the Engineering Security Team. Along with each question and the response, the CE Security SMEs will also be maintaining the date when the question was sent to #security in Slack and the date when a response was received. Likewise, the Opportunity CE will be recording the date the customer submitted the question via their questionnaire and when a response was submitted. This will allow for tracking the following metrics:

<table>
  <tr>
   <td><strong>Metric</strong>
   </td>
   <td><strong>Calculation</strong>
   </td>
  </tr>
  <tr>
   <td>Questions Submitted to Engineering Security Team
   </td>
   <td>Record count between two selected dates.
   </td>
  </tr>
  <tr>
   <td>Number of Security Questionnaires Received
   </td>
   <td>Calculated based on the data provided by Opportunity CEs based on Company Name and SFDC Opportunity.
   </td>
  </tr>
  <tr>
   <td>Total Customer Response Time
   </td>
   <td>Calculated using the <strong>Requested Date</strong> and <strong>Submission Date</strong> which represents the total amount of time (in days) between when the customer questionnaire was received and when a first response was provided.
   </td>
  </tr>
  <tr>
   <td>Security Team Response Time
   </td>
   <td>Calculated using the <strong>Sent to #security Date</strong> and <strong>Answered by Security Date</strong> which represents the total amount of time (in days) between when the question(s) were escalated to the Security Team and when a response was received.
   </td>
  </tr>
  <tr>
   <td>Average Total Customer Response Time
   </td>
   <td>Average of Total Customer Response Time as calculated across two selected dates.
   </td>
  </tr>
  <tr>
   <td>Average Security Team Response Time
   </td>
   <td>Average of Security Team Response Time as calculated across two selected dates.
   </td>
  </tr>
</table>

CE Security SMEs will periodically review the data and the results of this data collection will be shared with CE Leadership and Security Team leadership. CE Security SMEs will produce and share a report with the appropriate teams going forward on a quarterly basis, covering the prior quarter’s data.

## Sharing Evidence of Attestations or Certifications

When a customer, prospect or business partner requests a copy of our attestations or certification the CE will check if an NDA has been signed with the requesting party. If no NDA is in place the CE will reach out to Sourcegraph’s legal team via their slack channel #legal and obtain the appropriate NDA template (Please do not share the attestation or certification reports without an NDA in place as they hold sensitive information about Sourcegraph). Once the NDA is signed, the CE will make an entry into the [dissemination tracker](https://docs.google.com/spreadsheets/d/1nAC1zg3W8hy39gn2C4PLFXMpNbe72_7g3-zZYjD3Mnk/edit#gid=0) providing all the necessary information. Subsequently, a copy of the attestation or certification [(which can be found here)](https://drive.google.com/drive/folders/1QGw5vJphiRgcY2-nufd_723e-z_0RwYf) can be shared with the requestor.
