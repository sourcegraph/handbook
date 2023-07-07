# Source Team

The Source team owns everything related to

- licensing
- IAM
- code host connections
- gitserver
- repo-updater

We provide value to Sourcegraph by ensuring Sourcegraph can reliably index code from any code hosts, with the proper authentication and authorization in place. For more details, read our [Source Department strategy](strategy.md)

## Members

{{generator:product_team.source}}

## Contact

- #ask-source channel or @source-support in Slack.

## Emergency Contact

We run an internal support rotation (see [Support Rotation in Team Source](support_rotation.md)]).

You can page the person on support (and possibly wake them up in the middle of the night).

But here are the rules:

- If the issue is caused by an upgrade, the guidance is to downgrade first. (Cloud handled by Cloud team, self-hosted handled by CS, Delivery, and customer)
- If the issue is caused by new setup with existing customer, wait until next business day.
- If the issue is caused by new setup with prospect, wait until next business day.

If you still think it's an emergency and the rules above won't be broken by contacting the person on support rotation:

In Slack, use:

```
/genie alert "your emergency message" for source-support
```

## Internal Processes

- [Support rotation](support_rotation.md)
