# **General and Helpful How To's**

## Linking to customer or prospect names in public places

It's often useful to include a customer or prospect name in a public RFC, GitHub issue, or other publicly-viewable place. In order to do so without leaking this information to the public, we use a [private GitHub repository](https://github.com/sourcegraph/accounts/issues) with issues representing customers. We don't use links to the salesforce account page because not all Sourcegraph team members have access to salesforce, whereas everybody has access to GitHub.

To use it, copy a link to the issue that represents the customer you want to reference. For example, if the customer was "Sourcegraph", you might write: "We heard from [this customer](https://github.com/sourcegraph/accounts/issues/8194) that...".

This list of account is automatically populated from salesforce by Zapier [automation](https://zapier.com/app/zaps/folder/1166872). @malomarrec maintains this, please reach out if you notice an issue.
