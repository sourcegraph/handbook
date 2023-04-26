# Sourcegraph Cloud Custom Domain Support

> WARNING: This is work in progress and not supported yet. Please reach out to #ask-cloud if you have any questions.

On Sourcegraph Cloud, customers may choose to bring their own domain in favour of the sourcegraph-managed domain name. For example, they can use `src.company.com` instead of `company.sourcegraph.com`.

## How does it work?

Custom domain support is implemented by using [Cloudflare for SaaS].
This allows us to use Cloudflare to handle the TLS certificate issuance and renewal automatically, and to proxy the traffic to the Sourcegraph instance on the Cloud.

For example, for customer `acme` and they want to use the custom domain of `src.acme.com`:

The following DNS record will be created by us:

- `acme.sourcegraph.com` (A record) -> `x.y.z.w` (IP address of the Application Load Balancer)

Then, we will add `src.acme.com` as a custom hostname on Cloudflare for SaaS using the [Delegated DCV] validation method. Cloudflare will then provide us with some DNS records that we need customer to create on their side, and note that this is an one-time setup:

- `src.acme.com` (CNAME record) -> `acme.sourcegraph.com`: This allows the customer to access the Sourcegraph instance via `src.acme.com`.
- `_cf-custom-hostname.src.acme.com` (TXT record) -> `$token` (provided by Cloudflare): This allows Cloudflare to verify the ownership of the customer domain.
- `_acme-challenge.src.acme.com` (CNAME record) -> `src.acme.com.$token.dcv.cloudflare.com` (provided by Cloudflare): This allows us the delegate [DCV process] to Cloudflare so certificate can be issued and automatically renewed in the future.

Once above DNS records are created by the customer, Cloudflare will automatically issue certificate for `src.acme.com` and renew it automatically. The certificate renewal process is transparent to the customer. The [delegated dcv] method allows customer to delegate the ACME DNS challenge of the custom domain to Cloudflare, and Cloudflare will handle the rest.

## How to set up a custom domain?

### Prerequisites

Before setting up a custom domain, the customer has to satisfy the following requirements:

- [ ] The customer has decided on the custom domain name, e.g., `src.acme.com`.
- [ ] The customer has the ability to create records at their authoritative DNS.

### Steps

> NOTE: For the exact steps, refer to the operation dashboard at go/cloud-ops

1. CE/AE will create a GitHub issue with Cloud and provide us some neccessary information.
1. Cloud will perform the initial setup and provide the customer with the DNS records that they need to create.
1. CE/AE will inform the customer to create the DNS records.
1. Upon successful validation by Cloudflare, everything will be ready for the customer to access the Sourcegraph instance via the custom domain.

[cloudflare for saas]: https://developers.cloudflare.com/cloudflare-for-platforms
[dcv process]: https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/security/certificate-management/issue-and-validate/validate-certificates/delegated-dcv/
[delegated dcv]: https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas/security/certificate-management/issue-and-validate/validate-certificates/delegated-dcv/

## FAQ

### How much does it cost?

$0.10/mo per custom domain on Cloudflare end. On Cloud provider end, no changes.

### What happens to existing Sourcegraph Cloud instances?

No changes will be made to existing instances.

### Why Cloudflare for SaaS?

The hard part of supporting customer-controlled domain is TLS certificate issuance and renewal. Cloudflare for SaaS is a managed solution that handles both isssuance and renewal automatically. It also provides features such as customer-specific WAF rulesets, which is really nice-to-have.

Learn more about why we choose Cloudflare for SaaS from [how does it work](#how-does-cloudflare-for-saas-issue-and-renw-certificates).

#### Why not Let's Encrypt?

Community solution such as [cert-manager](https://cert-manager.io/docs/configuration/acme/) is difficult to run and error prone. We will be on the hook for ensuring the control plane is healthy and actually renewing certificates. Additionally, you most likely want to use http-01 challenge but it does not work well with our Cloudflare WAF proxy where it always redirects HTTP to HTTPS traffic.

#### Why not GCP managed certificates?

Again. It doesn't work well with our Cloudflare WAF proxy.

### How does Cloudflare for SaaS issue and renw certificates?

Cloudflare for SaaS functions as an ACME client and uses the Delegated DCV method to issue and renew certificates from upstream providers such as Let's Encrypt and Google Trust Services.

This only requires an one-time setup from customers to make it work by creating a few DNS records on their end. Once those DNS records are up, it allows the customer to delegate the ACME DNS challenge of the custom domain to Cloudflare, and Cloudflare will handle the challenge dynamically. Otherwise, we would have to imlement such protocol ourselves and manually upload those certificates to Cloudflare to continue benefit from WAF.

You can learn more about it from [cloudflare blog post](https://blog.cloudflare.com/introducing-dcv-delegation)

### Are traffic between Cloudflare and Sourcegraph encrypted?

Yes. As of today, our TLS configuration on Cloudflare enforces the use of TLS traffic between Cloudflare (the edge server) and Sourcegraph (the origin server). Learn more about different [encryption modes](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/).

Cloudflare for SaaS only offers the custom domain TLS certificate on the edge server, and it does not provide the ceritificate to be installed on the origin server.
Cloudflare can issue origin TLS certificates for the domain we own (e.g., `sourcegraph.com`, `sgdev.org`), but not for custom domains. Therefore, it is impossible that our origin server can present a TLS certificate that is valid for the custom hostname. Valid means the certificate has to either be issued by a public CA or Cloudflare Origin CA, and the CN value must match the custom hostnames.
Therefore, we currently only use [Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/) mode where the traffic between Cloudflare and Sourcegraph is encrypted with TLS but it is not using a certificate that is valid for the custom hostname. We are exploring options to use [Full (strict)](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full-strict/) mode in the future.

It is worth nothing it does not make us any less secure. Our origin server still **ONLY** accepts traffic from Cloudflare edge servers, and traffic are encrypted with TLS.

### Does it cost any downtime when setting up a custom domain on an existing Sourcegraph Cloud instance?

No. Certificate issuance and renewal is DNS-based, so we can ask customers to create the DNS records at any time. Meanwhile, the previous `*.sourcegraph.com` domain will continue to work as it is. Once the DNS records are created and confirmed by Cloudflare, the customer can start accessing the Sourcegraph instance via the custom domain.

In fact, the `*.sourcegraph.com` domain will continue to work even after custom domain is switched over. However, due to the application limitation, we only recommend customers to use custom domain to access the Sourcegraph instance once it has been turned on.
