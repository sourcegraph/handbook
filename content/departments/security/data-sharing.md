# General Data Sharing Best Practise

It is essential for Sourcegraph to establish clear data sharing guidelines to protect our and our customerslient’s sensitive information. We understand that sometimes sharing information externally is necessary for the smooth functioning of our business operations and hence we want to provide the following data sharing guidelines to help do so securely and responsibility:

- Our Policy:

  - Familiarise yourself with our [data classifications](../../company-info-and-process/policies/data-management-policy.md#data-classification) and the type of data that falls into each so you can make better decisions on the [data handling](../../company-info-and-process/policies/data-management-policy.md#data-handling) of each piece of information that you interact with.

- Necessity:

  - Sensitive data may be shared with third parties only when it is necessary to perform a specific business function, such as providing a cloud instance to clients in GCP that will hold customer information.
  - For any research and testing purposes, use test data (i.e. no personal or customer data should be used for queries in AI chatbots or similar 3rd parties).

- Legitimacy:
  - Our approved vendors undergo a rigorous [review process]() before onboarding and must be legitimate and reputable organizations that have agreed to abide by the same data privacy and security standards as our organization.
  - Hence, no sensitive information (like customer and personal data) should be shared with any 3rd party that has not been approved by this process.




# AI third party data sharing 

In today's era of advancing AI, the use of LLM and chatbots has become widespread. As an innovative company, we want to empower our teams with the latest technology to maximize productivity, including enabling them to utilize AI tools responsibly and legally.

Below you can find a matrix to help you make informed decisions about what data is appropriate to share with AI-powered tools: 




>**NOTE** - Do **NOT** submit any **credentials** to a 3rd party




<table>
  <tr>
   <td>
   </td>
   <td><strong>Cody</strong>
   </td>
   <td><strong>AI Chatbot (Claude on Slack, ChatGPT)</strong>
   </td>
   <td><strong>Example Data</strong>
   </td>
  </tr>
  <tr>
   <td><strong>PII</strong>
   </td>
   <td>No
   </td>
   <td>No
   </td>
   <td>Full Name, Phone Number, Email, Address, Social Security Number, DOB, Credit Card Details
   </td>
  </tr>
  <tr>
   <td><strong>Restricted Data</strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Customer private source code
   </td>
  </tr>
  <tr>
   <td><strong>Private </strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>private repository names, legal contracts, company financials, incident reports for security issues 
   </td>
  </tr>
  <tr>
   <td><strong>Internal </strong>
   </td>
   <td>Yes
   </td>
   <td>No
   </td>
   <td>Sourcegraph private code, Private RFCs, slack channel content discussing internal matters, SOC 2 report
   </td>
  </tr>
  <tr>
   <td><strong>Public </strong>
   </td>
   <td>Yes
   </td>
   <td>Yes
   </td>
   <td>Handbook, externally facing documentation, security portal general information
   </td>
  </tr>
</table>



#### Reasoning: 
- Contract governing Cody queries to Anthropic and OpenAI include zero retention policy & exclusion of data for training of LLMs 
- PII is governed by legal obligations and therefore should never be processed without consent
- Empowering you to be productive is important, so we trust that you will make sound judgements using these guidelines on what to share 
- Customers are using Cody for their sensitive information, so it is only right if we showcase them that we do too!  

---
**NOTE**

When using **third-party AI chatbots** such as ChatGPT, Claude, or others:

- Do **not** submit any customer information
- Do **not** submit any personal data. This includes individual users, teammates, candidates, etc.
- Do **not** submit submit any “restricted” or “private” or "internal" information per the [Data Classification Categories](../../company-info-and-process/policies/data-management-policy.md#data-classification)
- **Opt out of data use by filling out [this form](https://docs.google.com/forms/d/e/1FAIpQLScrnC-_A7JFs4LbIuzevQ_78hVERlNqqCPCt3d8XqnKOfdRdQ/viewform).**


