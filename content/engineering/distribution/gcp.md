# Google Cloud

## [Committed use discounts](https://cloud.google.com/compute/docs/instances/signing-up-committed-use-discounts#how_committed_use_discounts_work)

Compute Engine lets you purchase committed use contracts in return for deeply discounted prices for VM usage. These discounts are referred to as committed use discounts.

### Current commitments

- Period: 1 Year
- End Date: August 1, 2021
- CPU: `1200`
- Memory: `3500`
- Report: [GCP Commitment Proposal July 2020](https://docs.google.com/document/d/1G_p8eiWqmRmnrgA0U-lcJHfKQhAQTGr5ROuLoNeQ59s)

### Assessing commitments

We will review the previous commitments and our billing reports to identify new commitment opportunities. Unless there are interesting cost-saving opportunities, we will keep a single active commitment to simplify its calculation and review.

#### Previous commitment and utilization

Review previous commitments and utilization reports to asses if we can increase or supplement our commitments.

- Sign in to **Cloud Billing** in the Google Cloud Console
- From the Billing navigation menu, select **Commitments**
- Change the `Scope -> Time` range to "Year to date"
- Review VCPU, RAM and other commitments over the last year

#### Billing reports

Review the billing reports and look for cost-saving opportunities by understanding which are the most expensive resources.

- Sign in to **Cloud Billing** in the Google Cloud Console
- From the Billing navigation menu, select **Reports**
- Change the `Filters -> Time range` to "Year to date"
- Change the `Filters -> Group by` to SKU
- Review Predefined Instance Ram
- Review Predefined Instance Core

#### Creating a commitment

Once we have reviewed the current utilization and commitments, we will create a new commitment as required.

- Sign in to **[Commitment List](https://console.cloud.google.com/compute/commitments)**
- Check for any active commitment
- If there is not active commitment, or the current commitment is about to expire select **Purchase commitment**
- Fill in the commitment information, modify the example below as required from your assessment
  - Name: `${month}${year}` (`july2020`)
  - Region: `us-central1`
  - Commitment type: `General-purpose N1`
  - Period: `1 year`
- Select **Purchase** -> **Purchase**
