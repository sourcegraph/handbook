# MI 1.1 Managed SMTP

See [managed SMTP](../managed-smtp/index.md) for more details.

## Enabling managed SMTP

1. Set `disableManagedSMTP: false` in the instance configuration.
2. Run `mi sync smtp -test-send`.
   1. If any errors arise, follow remediation steps that get raised and re-run `mi sync smtp -test-send`.
3. Test emails are sent to `cloud-team+test_emails@sourcegraph.com` from `noreply+$INSTANCE@cloud.sourcegraph.com` by default - check your inbox to verify that the test email has been received.

## Disabling managed SMTP

1. Set `disableManagedSMTP: true`
2. Run `mi sync smtp` (as above, this is safe to re-run)

The customer may also disable managed SMTP by simply applying their own non-empty [email configuration](https://docs.sourcegraph.com/admin/config/email).
Note that in this case, an engineer should still set `disableManagedSMTP: true` to correctly terminate the provisioned account and avoid unnecessary API calls to the vendor.

## Health check

14-day vendor-side deliverability statistics are reported by `mi check`.

For more details, see [managed SMTP: monitoring](../managed-smtp/index.md#monitoring).
