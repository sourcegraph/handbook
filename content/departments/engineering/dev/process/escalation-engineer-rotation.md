# Escalation engineer rotation

The escalation engineers (EEs) temporarily rotate onto our Customer Engineering & Support team for a fixed period of time to help solve the most complex and technical customer issues.

## Contact

Tag @escalation-engineers on Slack for help.

Discuss escalation engineering rotation in #escalation-engineering.

## Rotations

| Rotation                 | Engineers                                                                                                                                     |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| 2022-08-10 to 2022-09-06 | [@keegancsmith](https://github.com/keegancsmith), [@BolajiOlajide](https://github.com/BolajiOlajide)                                          |
| 2022-09-07 to 2022-10-09 | [@keegancsmith](https://github.com/keegancsmith), [@valerybugakov](https://github.com/valerybugakov)                                          |
| 2022-10-10 to 2022-11-07 | [@tbliu98](https://github.com/tbliu98), [Thorsten Ball](https://github.com/mrnugget)                                                          |
| 2022-11-08 to 2022-12-05 | [@jhchabran](https://github.com/jhchabran)                                                                                                    |
| 2022-12-06 to 2023-01-03 | [William Bezuidenhout](https://github.com/burmudar)                                                                                           |
| 2022-01-03 to 2023-02-03 | [Camden Cheek](https://github.com/camdencheek), [Julie Tibshirani](https://github.com/jtibshirani) ,[Manuel Ucles](https://github.com/mucles) |

## Benefits

- EEs provide extra engineering capacity dedicated to solving important customer issues to speed up resolution.
- EEs get exposure to people on other teams, broader business priorities, and the broader service of our product and codebase.
- EEs share their knowledge of the product and our codebase with all members of Technical Success (CE, IE, TA, SE) so we are continuously upleveling our ability to support all customers.
- EEs directly experience customer pain and gratitude, and they can bring that valuable perspective back to their team to uplevel engineering.

## How it works

This is a new program, so any and all of these points are flexible, but here is what the initial sketch is.

- ~3 software engineers are on the escalation engineer rotation at any given time.
  - It's preferred for us to have broad timezone coverage (and not have all current EEs in/near the same timezone).
- Rotations are 4-10 weeks (negotiable depending on business/team/individual circumstances)
- Becoming an EE is voluntary for any given engineer at any given time; however, it's imperative to our customers and business so performing a support rotation (or current/future equivalents) will become a periodic expectation for all engineers and necessary for promotions (e.g., from IC3 to IC4) in the future.
  - We won't let the number of opportunities to perform a support rotation limit the throughput of promotions.
  - We'll formalize this expectation in the future as we learn about what works best.
- If you choose to do a support rotation, we'll make sure your eng team is supported and has their scope of work reduced proportionally.

## How to participate

If you have questions or want to participate, please post in #escalation-engineering.

## Tips for new escalation engineers

- Ask around, nobody is expecting that you come up with the answer or context entirely on your own.
- Asking what happens if the request is not addressed is a good way of getting to the importance of an ask. It will help you to delegate the task if you need to, because you'll be able to convey that context to the new owners.
- When you do, precise that you're wearing the esc-eng hat, and link back to the original ask, this will help others to understand that what you're asking is important
- Post some updates in the thread where the original ask came from (like got in touch with X, we think we may have a solution, etc..)
- You own team is your primary circle, so don't hesitate to sollicitate them for help / feedback, but don't limit to it. Anyone can help you.
- The request coming from execs does not mean you can't say "no", actually that's often one of the biggest mistake that can be made with them, i.e saying yes to everything just because of their position. They're expecting to be said no if something is not possible, like anyone else.
- Don't overthink it, even if you're finding yourself in a position where you can't implement the solution for a request because it's out of your reach technically, you can still be the one coordinating others into solving it. And that's very very helpful: it means you're owning the problem, but getting help for the solution.

## FAQ

### How are EEs different than Support Engineers?

Support Engineers (SE) are the first and primary responders to reactive customer issues and that is unchanged. Whereas today, when an SE needs additional guidance on a customer issue they request help from the respective Eng team, they’ll now elevate to an EE who will engage on the issue. If the EE is unable to resolve the issue, they will follow standard procedures for requesting help from the appropriate Eng team. Our goal is to only engage Engineering on 10% or less of issues.

### When will engineering teams get pulled in to respond to support issues?

If EEs are unable to resolve an issue, then they will use standard procedures to ask for help from engineering.

### We want engineering teams to own their stuff running in production. Doesn't the EE role violate that principle?

Engineering teams should be improving observability and alerts for their product area and owning how it runs in production on our Cloud managed instances. But automatic monitoring and alerting doesn't (and won't ever) cover all customer issues, and that's where our Customer Support team comes in.

Examples:

- When the customer is "doing the wrong thing" despite the docs and product working correctly (and our front-line support isn't able to diagnose/explain the problem/solution).
- When the problem overlaps multiple eng teams' ownership areas, the EE can split up the issues and file them on the relevant teams, and then ensure follow-through on the overall solution.
- When the source of the problem is unclear, the EE can diagnose and repro the problem before handing it off to the correct team they've identified.
- When the problem is a quick fix (to code or docs), the EE can prevent an eng team from needing to context switch.
  The EEs can help build better automation and debugging tools for Customer Support.

### What’s the interaction of EE with Implementation Engineers (IEs)?

During initial implementation:

- Implementation Engineer leads efforts to get customer to GA (+ x days of buffer for stability)
- If IE experiences issues and can't resolve, EE is there to help

Post GA:

- Assigned SEs are the first response to customer-reported issues
- If SEs experiences issues and can't resolve, EE is there to help

### Will escalation engineers fix bugs?

Yes, sometimes (time permitting and when it makes sense). Sometimes it will make sense for the appropriate eng team to fix the bug instead. If the EE fixes a bug, the owning eng team should review the PR. We can define clearer boundaries here if it's needed.

### Who do EEs report to?

This is a temporary rotation so EEs continue to report to their existing engineering manager.

### As an escalation engineer, what happens when I'm not on rotation anymore to the things I did?

The standard approach to ownership applies here: you're owning the solution and if you don't want to or can't anymore, you're expected to find a new owner.
