# Engineering principles and practices

This page documents principles and practices that we follow in engineering.

## We build things incrementally

We reach [high quality](../../../../company-info-and-process/values/index.md#high-quality) outcomes by shipping incrementally, collecting feedback, and learning continuously.

1. **Make it work**: Build the minimal useful thing that we can use to start collecting feedback and validating we are on the right track. Take shortcuts where possible (cut scope, not quality) because this work might get thrown away if we discover we are going in the wrong direction. We can hand-hold first users (internal or external) through a rough experience as long as it works well enough for us to collect feedback and validate that we are solving the right problem.
1. **Make it smooth**: Once we have signal that we are building the right thing, the next goal is to make the experience smooth so we feel good about putting this in front of more users in a more scalable way that doesn't require handholding.
1. **Make it fast**: Now that the experience works smoothly, make sure it is fast for users. There is no benefit to speeding up a fundamentally broken experience.
1. **Make it scale**: Make it work at large scale. It is better to have high demand and need to surge on scalability than to make an infinitely scalable unused feature.

## The person doing the work owns the decision by default

We facilitate [high agency](../../../../company-info-and-process/values/index.md#high-agency) engineers by sharing problems and expecting engineers to plan solutions to those problems.

The default owner of any technical decision is the person or team that owns the work implied by the decision.

If ownership is unclear, ask your manager (or in an appropriate channel) "Do we have a designated owner for X?".

If agreement cannot be reached on a decision, then perform a [clean escalation](../../../../company-info-and-process/communication/conflicts.md).

## Make time to work on things you think are important

We love it when engineers have ideas for things they think would be valuable to do given company and team goals.

If you have an idea for something you want to work on, then you have a few options:

1. **Just do it** if you can timebox or spread out the effort such that it won't impact your ability to deliver on existing plans.
2. If working on your idea would require a non-trivial amount of time or would impact your ability to deliver on existing plans, then have a discussion with your manager to come up with a feasible plan (for example: explicitly schedule time to work on your idea during the next iteration).

## Ownership

Ownership at Sourcegraph, as exercised by the most successful engineering teams and individuals here, is built on _high agency_ and _customer focus_.

High agency because ownership at Sourcegraph doesn't come with a lot of "how"s attached. Instead you get a lot of freedom. Freedom for you to decide how exactly you want to reach your goals.

Customer focus because ownership here (again: as exercised by the most successful teams and individuals) is not solely about code ownership. It's about owning the **responsibility of providing value to customers in the area you own.** It's about outcomes, not output.

It's not this:

> I own X because I work on tickets that are labeled with `team-X`

No. It's this:

> I own X because my goal is to solve problem X for customers and I'll do everything I can as an engineer to make that happen.

And yes, that comes with _responsibility_ -- with high agency and dev-love comes high responsibility. Everything else flows from that:

- It's up to _you_ to make sure your work meets engineering standards.
- It's up to _you_ to make sure it doesn't blow up in production.
- It's up to _you_ to sometimes push back against feature requests or a roadmap, to make sure there's enough time to take care of engineering concerns, like refactoring and testing.
- It's up to _you_ to come up with ideas on how to improve what you're building.
- It's up to _you_ to think about whether what you build actually solves the customer's problem and provides value. You, as an engineer, can see possibilities and options that others can't – it's up to you to make use of that knowledge.
- It's up to _you_ to collaborate with product, design, and analytics to ensure there is a business case for your work, it meets our user experience standards, and that analytics exist to help gauge its value to the customer.
- It's up to _you_ to define a roadmap if one is missing and to then execute on it, to update it, and to share what you learned with others, so they can understand what you're working on and why and how it relates to their work.
- It's up to _you_ to propose decisions that you think should be made, instead of waiting and asking for others to make decisions for you. And if you don't get the feedback on your proposed decisions that you need, it's up to you to let others know that you're going to execute on what you decided and then execute.
- It's up to _you_ to take a step back when you realize that you're just building something because it's fun to build, or because it's new & shiny, but not because it has value to customers.
- It's up to _you_ to do everything you can as an engineer to provide as much value as possible to our customers.

Sometimes that's writing docs, sometimes it's getting deep into the weeds and doing performance optimizations for weeks, sometimes you should jump on a call with a customer to find out exactly what they want or what's bugging them, sometimes you need to record a demo video to make sure what you built actually lands with customers.

Sometimes it means helping out other teams, because they're completely under water, but if they don't manage to pull this off, then your customers are impacted.

Sometimes it means changing code that you don't officially own on paper – because you need the code to be changed in order to fix your customer's problem. You need team A to build FooWidget but team A is busy with something else and said they can't do it at the moment? Forget about the which-teams-owns-which-folder level of ownership and start asking: can _you_ build X? Can you build a prototype and get sign-off from team A and then continue, because your customer is waiting for it? You can expect your collaborators to be open towards contributions, so why not make use of that?

Sometimes it's about civil disobedience. That doesn't mean you should break the law or behave against our values. No, on the contrary. It means that sometimes a process or a convention has outlived its usefulness (or goes against our values) and the only way to demonstrate that is by not doing it, and calling it out even if no one asked you. Other times it means breaking the chain of command, if, for example, you think something's going to happen that will affect a customer in a negative way but you don't think anyone's listening.

True ownership revolves around one thing: "what can I do – with my skills, my expertise, my experience – to provide value to my customers?"

All of that responsibility is daunting because, of course, it's much more comfortable to lean back and say "I'll just work on my tickets, thank you." But that's not what you were hired for.

You need to embrace high agency and customer focus and the responsibility that comes with it. Because what you built, the problems you solve, the value you provide – it's yours. You can be proud of it. You get to demo it, you get to share it, you get to listen to the customer say "this is fantastic! this saves us so much time!", you get to say "yes, I built _that_". Once you get a taste of it, there's no going back.
