# SMB Hand-Off Process

This page outlines the steps for preparing and handing off an SMB customer to our post-sales [Digital Success Program](../../technical-success/ta/digital-success/team-culture/digital-success-program.md#1-customer-onboarding). The hand-off process begins starting from Stage 6 - Contract Negotiation and should be completed prior to the new business opportunity being closed / won.

## Hand-off process steps

1. Populate segmentation on the Salesforce Account (this triggers the account to be created in Vitally).
2. Complete role mappings on Salesforce Contact records (this is required to enroll the customer in the onboarding program).
3. Once closed, generate and apply the [Production license key](../../technical-success/ce/process/license_keys.md#converting-a-prospect-to-a-new-customer).

### Populate Account Segmentation

No later than during Stage 6, there are two key fields that need to be populated on the Salesforce account record for a new business opportunity:

- `FY25 Segmentation` - this value should reflect SMB in accordance with our market segmentation definitions.
- `TA Segmentation` - this value should reflect Digital as any SMB customer will be enrolled in our Digital program.

Once both of these values are set an Account will be created in Vitally, our post-sales success tool that we use to manage our customers.

### Complete Role Mapping

During Stage 6, it is also important to map key roles on Contact records in Salesforce. We use the value of the `role` field to send tailored communications to customers as part of our Digital Success Program. This is a multi-select value so an individual can hold multiple functional roles.

NOTE: It is imperative that, at minimum, we have an `Instance Admin`, `Program Contact`, and `Champion` role defined.

The potential roles and definitions are as follows:

| Role            | Definition                                                                                                                                                                                            |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Champion        | An individual with: 1) Power and influence, 2) willing and actively selling on our behalf, 3) view our success as their success                                                                       |
| Deal Contact    | A contact or owner who is helping to navigate the deal. This would be someone specific to the transaction not necessarily ongoing contact outside of the transaction (either initial deal or renewal) |
| Instance Admin  | Someone who is more about the technical logistics and management of the solution, manages the instance                                                                                                |
| Executive       | Exec-level sponsor who supports the deal/relationship                                                                                                                                                 |
| Economic Buyer  | The ultimate decision maker to sign off on any deal                                                                                                                                                   |
| End User        | End user of the Sourcegraph product                                                                                                                                                                   |
| Program Contact | Someone focused on the use case(s), adoption and value of SG within the company.                                                                                                                      |

### Create and apply Production license

When a customer closes, create and apply a production license key as per the instructions outlined [here](cloud_instances.md).
