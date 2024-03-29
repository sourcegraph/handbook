# Creating a new license key walkthrough

This page is a dedicated deep-dive walkthrough for how to create a new license key.

> [!NOTE] CEs should always consult with Sales before creating license keys for prospects (i.e., companies that have not yet officially become customers).

> [!NOTE] Starting with Sourcegraph 5.1+, we require each customer instance to have a unique site_id and license key pair. Each instance should also have it's own subscription created. See [internal licensing FAQ](https://docs.google.com/document/d/1xzlkJd3HXGLzB67N7o-9T1s1YXhc1LeGDdJyKDyqfbI) for more details.

> [!NOTE] The Subscription ID and Opportunity ID used below are **not** the same as the Subscription or Opportunity number. The correct data can be found in the Opportunity under Important Technical Details -> License IDs. It can also be pulled from the URL of the corresponding Subscription or Opportunity page.

The prospect/customer requires a Sourcegraph.com user account. If an account does not already exist, the CE should create one first. The username of the account should have the following format `CompanyName-UniqueId`. This format is described below. The email of the account should be left blank. Once the account is available, follow the steps below.

1. Sign in to [site admin](license_keys.md#accessing-site-admin).
1. Assuming this is the first time creating a license for this account you must first create a user by navigating to the [users page](https://sourcegraph.com/site-admin/users) and create new user account.
   - You can also check if a user already exists by searching for a valid account (the uniqueID should match the Salesforce Account ID).
1. Creating a new user: we no longer create user-level accounts, instead we create a user for the Account itself. The username of the new user should utilize the following naming convention: `Company_Name-SFDC_Unique_Account_ID`.
   - Replace `Company_Name` with the name of the company from Salesforce
   - Separate these components with a hyphen: `-`
   - The `SFDC_Unique_Account_ID` should be taken from the Unique Account ID field on the Account record in Salesforce.
1. Once the user account is created navigate to the [Enterprise subscriptions page](https://sourcegraph.com/site-admin/dotcom/product/subscriptions).
1. Click **Create Enterprise subscriptions**.
   - **Note: You must create a new Enterprise subscriptions for each customer instance as well**.
1. Search for the user account that was created above in step 3 and click **Create new subscription**.
1. From the Enterprise Subscription page for that user account, click **Generate new license manually**.
1. Fill out the license details:
   1. The customer name auto-populates from the user account.
   1. Enter the Salesforce Subscription ID if relevant; new trials will not have a subscription ID.
      1. This is important for automated billing.
      1. Verify if a subscription ID is available from the License IDs field on the Salesforce Opportunity
   1. Fill out the Salesforce Opportunity ID from the License IDs field on the Salesforce Opportunity.
      1. NOTE: Every single license should be associated to an Opportunity ID.
      1. NOTE: This is NOT the Opportunity Number!
   1. Select the license subscription plan from the dropdown. See the [plans](license_keys.md#plans) section for more.
   1. Add additional tags as required
      1. For example: add tags to denote the instance type: eg `instance:test`
      1. You may also need to add `MAU` or `true-up` if a soft cap scenario. See the [feature tags](license_keys.md#feature-tags) section for more.
   1. Select the number of licensed users.
      1. NOTE: if you added the `true-up` tag, the customer **will** be able to exceed this count (soft cap), but administrators will see a warning.
      1. NOTE: If this is a license key for a lower-level environment the user count should not exceed 20.
1. Select the license expiration date. For production keys, this needs to match the end date of the contract itself.
   1. NOTE: Licenses expire at midnight of the date selected based on _the timezone of the browser where the license is being generated from_. It is important to consider this as depending on the teammate location and the customer location you may need to actually set the expiration date to lag by a day.
1. Click **Generate license**.
1. If the customer should have **Cody Access** (either the Cody Enterprise or the Code Intelligence Platform plan) once you generate an active license, from the Enterprise Subscriptions screen, you must toggle on `Access to hosted Cody Services`. Click Enable when the warning shows.
   1. Everything should fill in for you; however if you need to modify the rate limit of chat requests per day or code completions per day, or change the allowable model configuration, you can do so by clicking on the pencil icon.
1. Follow our [key sharing policy](license_keys.md#license-key-sharing-policy) for sharing this license key with your prospect or customer. You can link them to the following docs for instructions on where to add the key: [Updating your license key](https://sourcegraph.com/docs/admin/subscriptions#updating-your-license-key)
1. Finally, if this is a new customer, you must map the license key to the Salesforce instance for usage data tracking following [these directions](https://docs.google.com/document/d/12W85VTKLJg2Os74PWADxwOPfpMozB0mUm4Do6fN9dFs/edit?usp=sharing).
