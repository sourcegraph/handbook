# **Information Security Risk Management Policy**

## **Overview and purpose**

In the course of its operations, Sourcegraph encounters risks which could affect the confidentiality, integrity, or availability of information it holds. This includes information stored for Sourcegraph’s internal functions as well as information stored in order to provide services to customers.

This policy specifies a risk management framework through which:

- Sourcegraph is able to identify information security risks that are pertinent to the organization.
- Sourcegraph has a standardized method of measuring the severity and potential impact of the identified risks.
- Sourcegraph has defined risk acceptance thresholds for information security risks.
- Risks which exceed the specified thresholds are treated according to a defined procedure.
- New risks are added to the risk register and existing risks are reviewed according to a defined schedule.
- Roles and responsibilities for managing the above risks are clearly defined.

This is a high-level policy document that specifies what processes need to occur as part of this framework. For details of how these processes occur in practice, please refer to the accompanying [Information Security Risk Management Process](../../departments/security/security-risk-management-process.md).

## **Scope**

This policy applies to all information handled in the course of Sourcegraph’s business, whether for internal purposes, or as part of services provided to customers. This policy also applies regardless of the technology or medium used to process or store the information.

Risks unrelated to information security are not in scope for this policy; when risk is mentioned in this document, unless explicitly specified, such reference is to information security risks alone. Risks in this context are used to identify high-level areas where a compromise of confidentiality, integrity, or availability might occur. This is distinct from vulnerabilities, which refer to specific technical weaknesses in Sourcegraph’s infrastructure, and are covered by Sourcegraph’s [Vulnerability Management Policy.](../../departments/engineering/dev/policies/vulnerability-management-policy.md)

# **Risk management**

At a high level, the risk management framework at Sourcegraph can be summarized via the following diagram:

Diagram to be added.

The various stages of this process are described in more detail below.

## **Roles and responsibilities**

<table>
  <tr>
   <td><strong>Role</strong>
   </td>
   <td><strong>Responsibilities</strong>
   </td>
  </tr>
  <tr>
   <td>Risk Committee
   </td>
   <td>
<ul>

<li>Understand and approve Sourcegraph’s information security risk appetite

<li>Facilitate the remediation actions/treatment plan for a risk

<li>Sign off on risks assessments for individual risks

<li>Sign off on risk reports (see section Reporting and Review below for more details on risk reporting)

<li>Sign off on risk exceptions
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Compliance Manager
   </td>
   <td>
<ul>

<li>Oversee the development and continuous improvement of the risk management policy and related procedures

<li>Coordinate and offer advice on risk management
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Security Team
   </td>
   <td>
<ul>

<li>Responsible for the identification and assessment of information security risks

<li>Assist in the development of risk treatment plans

<li>Run the reporting and review processes of the risk management policy framework
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Risk Owner
   </td>
   <td>
<ul>

<li>Assist in the assessment of identified risks

<li>Assist in the development of risk treatment plans for specific risks where required

<li>Ensure that risk treatment plans and schedules are adhered to, or that extensions are requested where this is not possible.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Sourcegraph Staff
   </td>
   <td>
<ul>

<li>Assist in the identification of risks when required by the Security Team
</li>
</ul>
   </td>
  </tr>
</table>

## **Risk register**

All identified risks must be recorded in a risk register. At a minimum, the risk register must record:

- Risk name
- Risk description
- Date of creation
- Risk owner
- Risk author
- Inherent risk estimate
- Existing controls (if any)
- Residual risk estimate
- Risk status (treatment/acceptance)
- Review date (where applicable)

For all risks that require treatment, a due date must also be defined.

The ability to change risk estimates must be limited to members of the Security team or the Compliance Manager.

## **Risk estimation**

In order to assess whether a given risk should be treated or accepted, a risk measurement must be carried out. In order to do so, an impact and likelihood assessment must be carried out.

Likelihood should be rated from one to five, depending on the expectation of the event occurring. The following table explains the mapping from ratings to event frequencies:

<table>
  <tr>
   <td><strong>Likelihood</strong>
   </td>
   <td><strong>Definition</strong>
   </td>
   <td><strong>Rating</strong>
   </td>
  </tr>
  <tr>
   <td>Highly likely
   </td>
   <td>Expected to happen within the next 12 months
   </td>
   <td>5
   </td>
  </tr>
  <tr>
   <td>Likely
   </td>
   <td>Expected to happen within the next 2 years
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>Possible
   </td>
   <td>Expected to happen within the next 5 years
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>Unlikely
   </td>
   <td>Expected to happen within the next 5 to 10 years
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>Rare
   </td>
   <td>Expected to happen less than once in the next 10 years
   </td>
   <td>1
   </td>
  </tr>
</table>

Impact should also be rated from 1 to 5, using the following table as a guide:

<table>
  <tr>
   <td><strong>Impact</strong>
   </td>
   <td><strong>Example scenarios</strong>
   </td>
   <td><strong>Rating</strong>
   </td>
  </tr>
  <tr>
   <td>Major
   </td>
   <td>
<ul>

<li>Regulatory or compliance violations

<li>Inability to provide services to a significant proportion of clients

<li>Future of business in doubt

<li>Significant media exposure

<li>Loss of confidential customer data across multiple clients

<li>Complete disruption of internal business for any amount of time
</li>
</ul>
   </td>
   <td>5
   </td>
  </tr>
  <tr>
   <td>High
   </td>
   <td>
<ul>

<li>Inability to provide services to a number of clients

<li>Potential for significant job losses

<li>Negative media exposure across multiple outlets

<li>Loss of confidential customer data for a single client

<li>Disruption of a significant amount of internal business for any amount of time
</li>
</ul>
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>Moderate
   </td>
   <td>
<ul>

<li>Inability to provide services to a single client

<li>Potential for some job losses

<li>Loss of some future business and some current business

<li>Loss of confidential non-customer data

<li>Disruption of some internal business for less than two working days
</li>
</ul>
   </td>
   <td>3
   </td>
  </tr>
  <tr>
   <td>Minor
   </td>
   <td>
<ul>

<li>Some reputational impact to the company

<li>Loss of some future business alone

<li>Breach of non-confidential systems

<li>Disruption of internal business for less than ten employees, for less than a single working day
</li>
</ul>
   </td>
   <td>2
   </td>
  </tr>
  <tr>
   <td>Insignificant
   </td>
   <td>
<ul>

<li>Minor internal disruption
</li>
</ul>
   </td>
   <td>1
   </td>
  </tr>
</table>

Once the impact and the likelihood has been estimated, a final risk score can be arrived at by multiplying the two values. This gives a minimum risk score of 1 and a maximum score of 25.

For ease of reference, the risk scores are categorized as follows:

<table>
  <tr>
   <td><strong>Categorisation</strong>
   </td>
   <td><strong>Score</strong>
   </td>
  </tr>
  <tr>
   <td>High
   </td>
   <td>>= 15
   </td>
  </tr>
  <tr>
   <td>Medium
   </td>
   <td>>=8 and &lt; 12
   </td>
  </tr>
  <tr>
   <td>Low
   </td>
   <td>&lt; 8
   </td>
  </tr>
</table>

## **Risk identification and assessment**

The process of risk identification should take place on a rolling basis by all Sourcegraph employees. The Risk Management Process must enable this to occur, and communication on risk management responsibilities must emphasize this aspect of Sourcegraph’s risk management policy.

However, in order to ensure that any new key risks are identified from all business areas, a regular information security risk identification exercise must be carried out at least annually. This risk identification exercise must include senior members of any team that handles data at Sourcegraph; the specifics of the parties involved are left to the Risk Management Process.

Once these exercises have been carried out and new risks have been identified, these must be added to the risk register as described above. They must then be assessed using the risk estimation technique described above. Estimates of both the inherent risk and the residual risk (the latter taking into account the mitigating effects of any existing security controls) must be created.

All risks must have a defined risk owner, whose responsibilities are defined above.

## **Risk treatment, risk acceptance, and exceptions**

Once risk estimates have been created for a specific risk, a decision must be made on whether to accept or treat the residual risk.

Any risk with a High or Medium score should be treated until it is of Low risk. On the identification of such a risk, the Security team must work with the risk owner to identify acceptable risk treatments as well as a schedule for the treatments to be implemented. A valid treatment is any solution that will reduce the impact or the likelihood of the identified risk.

For ease of reference, the cells in red within the following matrix show the points at which treatment of a risk is mandated:

<table>
  <tr>
   <td rowspan="7" >Impact
   </td>
   <td>Major
   </td>
   <td>5
   </td>
   <td>10
   </td>
   <td>15
   </td>
   <td>20
   </td>
   <td>25
   </td>
  </tr>
  <tr>
   <td>High
   </td>
   <td>4
   </td>
   <td>8
   </td>
   <td>12
   </td>
   <td>16
   </td>
   <td>20
   </td>
  </tr>
  <tr>
   <td>Moderate
   </td>
   <td>3
   </td>
   <td>6
   </td>
   <td>9
   </td>
   <td>12
   </td>
   <td>15
   </td>
  </tr>
  <tr>
   <td>Minor
   </td>
   <td>2
   </td>
   <td>4
   </td>
   <td>6
   </td>
   <td>8
   </td>
   <td>10
   </td>
  </tr>
  <tr>
   <td>Insignificant
   </td>
   <td>1
   </td>
   <td>2
   </td>
   <td>3
   </td>
   <td>4
   </td>
   <td>5
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>Rare
   </td>
   <td>Unlikely
   </td>
   <td>Possible
   </td>
   <td>Likely
   </td>
   <td>Highly likely
   </td>
  </tr>
  <tr>
   <td colspan="6" >Likelihood
   </td>
  </tr>
</table>

It is then the responsibility of the risk owner to ensure the treatment of the risk within the schedule agreed. In cases where the risk treatments cannot be delivered on time, it is the responsibility of the risk owner to raise this with the Compliance Manager at the earliest opportunity. Once a treatment has been successfully implemented, it is the responsibility of the Compliance Manager to update the risk register to reflect the new likelihood or impact of the risk. Where a risk now meets the acceptance threshold, the risk status should also be updated.

In cases where a High or Medium risk has no treatment that can be reasonably applied, an exception can be granted. Granting an exception will mean that Sourcegraph will consciously carry this risk with no treatment until a point where the facts of the risk or its possible treatments fundamentally change. Exceptions must have the signoff from the risk committee on an individual basis.

## **Reporting and review**

The Compliance Manager must send out overviews of Sourcegraph’s information security risks to a relevant audience, consisting of senior leadership at minimum, at least annually. These reports must contain at least:

- A summary of new risks added to the risk register
- A summary of risks that have exceeded or are likely to exceed their allotted treatment time

All existing risks must be reviewed at least annually, and any necessary updates made to their status; the Compliance Manager is responsible for directing this process. Evidence of this review occurring (meeting notes, ticket comments, or similar) must be gathered at the time of review.

**Policy Owner: Compliance Manager** \

<table>
  <tr>
   <td><strong>Version</strong>
   </td>
   <td><strong>Date</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Author</strong>
   </td>
   <td><strong>Approved by</strong>
   </td>
  </tr>
  <tr>
   <td>1.0
   </td>
   <td>23-Jan-2022
   </td>
   <td>First Version
   </td>
   <td>Feroz Salam
   </td>
   <td>Diego Comas
   </td>
  </tr>
  <tr>
   <td>1.1
   </td>
   <td>27-Jul-2022
   </td>
   <td>Review and amendments
   </td>
   <td>Dora Neumeier
   </td>
   <td>Dora Neumeier
   </td>
  </tr>
</table>
