# Escalation Engineering (EE)

Escalation Engineers (EE) work on our Customer Support team to solve the most complex and technical customer issues. This is not an on-call role. Rather, EEs work closely with Application Engineers (AER) who are the directly responsible responsible for front-line, day-to-day customer communication on reactive needs. EEs help identify customer-reported bugs and gaps in our product and docs: some we fix ourselves (through coding, updating docs, or instructing the customer) and some we triage/forward to the appropriate engineering team. EE's also help train customer-facing teams like Customer Engineering (CE) & Support on complex parts of the product so we can better serve our customers. The support load is always variable - that is, it's impossible to predict when and how customer needs arise - and when EEs have availability to do so, they'll contribute to overall reliability fixes.

## Team Composition

There will be 3 software engineers (SWEs) from the Engineering department filling this role at any given time. Each engineer serves a temporary, 10-week rotation. While this is voluntary for any given engineer, it's important work for our customers and business. As such, performing a support rotation is necessary for engineering promotions (e.g., from IC3 to IC4). For any engineer that chooses to do a support rotation, we'll make sure your Eng team is supported and has their scope of work reduced proportionally. It's preferred for us to have broad timezone coverage (and not have all current EEs in/near the same timezone) in order to best serve our customers and our teams.

## FAQ

- What is the EE role relative to AER role?
  - AERs are the first and primary responders to reactive customer issues and that is unchanged. Whereas today, when an AER needs additional guidance on a customer issue they request help from the respective Eng team, they’ll now elevate to an EE who will engage on the issue. If the EE is unable to resolve the issue, they will follow standard procedures for requesting help from the appropriate Eng team. Our goal is to only engage Engineering on 10% or less of issues.
- When will engineering teams get pulled in to respond to support issues?
  - As the final escalation point within Support before engaging Engineering, if the EE is unable to resolve the issue, they will follow standard procedures for requesting help from the appropriate Eng team. Our goal is to only engage Engineering on 10% or less of issues.
- We want engineering teams to own their stuff running in production. Doesn't the EE role violate that principle?
  - Engineering teams should be improving observability and alerts for their product area and owning how it runs in production on our Cloud managed instances. But automatic monitoring and alerting doesn't (and won't ever) cover all customer issues, and that's where our Customer Support team comes in.
- What’s the interaction of EE with Implementation Engineers (IEs)?
  - During initial implementation:
    - Implementation Engineer leads efforts to get customer to GA (+ x days of buffer for stability)
    - If IE experiences issues and can't resolve, EE is there to help
  - Post GA:
    - Assigned AERs are the first response to customer-reported issues
    - If AERs experiences issues and can't resolve, EE is there to help
- Will escalation engineers fix bugs?
  - Yes, sometimes (time permitting and when it makes sense). Sometimes it will make sense for the appropriate eng team to fix the bug instead. We can define clearer boundaries here if it's needed.
