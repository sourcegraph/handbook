<!-----

Yay, no errors, warnings, or alerts!

Conversion time: 0.323 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β33
* Wed Sep 28 2022 14:10:02 GMT-0700 (PDT)
* Source doc: Untitled document
* Tables are currently converted to HTML tables.
----->



# Implementation Strategies and Recommendations

There are several potential deployment and implementation strategies that may be used with a customer depending on their deployment type, size, and complexity. Each deployment strategy involves different internal owners and timeline expectations.


### Deployment Strategies


<table>
  <tr>
   <td>
<h3>Deployment Strategy</h3>
   </td>
   <td>
<h3>Description</h3>
   </td>
   <td>
<h3>Owners</h3>
   </td>
  </tr>
  <tr>
   <td><em>Cloud Deployment</em>
   </td>
   <td>
<ul>
<li>Prefered deployment strategy

<li>Once it is determined that the customer qualifies for Cloud, the CE or Sales will submit a <a href="https://handbook.sourcegraph.com/departments/cloud/#managed-instance-requests">Managed Instance Request</a> to the Cloud Team to kick off the process
</li>
</ul>
   </td>
   <td>Cloud
<p>
CE
   </td>
  </tr>
  <tr>
   <td><em>One-Click Deployment</em>
   </td>
   <td>
<ul>
<li>Prefered on-prem deployment method

<li>The production environment for the customer is created by the CE prior to transitioning ownership of the account to the TAM

<li>The production environment could be initiated as part of a trial or POC, or it could be created following contract closure
</li>
</ul>
   </td>
   <td>CE
   </td>
  </tr>
  <tr>
   <td><em>Jointly Managed Deployment</em>
   </td>
   <td>
<ul>
<li>If Cloud and One-Click are not options for the customer, the CE will <a href="https://handbook.sourcegraph.com/departments/ce-support/ce/ie/ce-implementation-handoff/#initiating-an-ie-request">Initiate an IE Request</a>

<li>Upon reviewing the request, the implementation team qualifies the customer for a jointly managed deployment and kicks off the process with the CE and Sales

<li>This method is primarily used for on-prem Kubernetes deployments
</li>
</ul>
   </td>
   <td>CE
<p>
IE
<p>
TPM
   </td>
  </tr>
  <tr>
   <td><em>One-Click Into Jointly Managed Deployment</em>
   </td>
   <td>
<ul>
<li>This method is only used by customers that would like a production environment stood up quickly, their initial user set can be supported by a One-Click Deployment, but a full Kubernetes instance will be needed for expansion to the full set of users

<li>The CE will stand up an initial One-Click production environment and transition the customer to the TAM for continued support

<li>As the deployment reaches scalability or technical limits, the TAM engages the implementation team to coordinate a post-live, jointly managed Kubernetes deployment 
</li>
</ul>
   </td>
   <td>CE
<p>
TAM
<p>
IE
<p>
TPM
   </td>
  </tr>
</table>

