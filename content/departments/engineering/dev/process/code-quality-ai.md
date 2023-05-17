# Code quality in the age of AI assistants

[go/code-quality-ai](http://go/code-quality-ai)

# TLDR

The expectation for the code we submit for peer reviews is that it has to meet the same quality bar irrespective of the way you produced it, and more specifically (in the age of Cody): **You should not ever be able to tell a piece of code was auto-generated.**

# Long version

We have a lot of freedom to choose the way we write code at Sourcegraph (arguably more freedom than many other companies):

- We get to develop on our physical, local, powerful computers
  - As opposed to companies with “code in the cloud” environments
- (For OSS code) we can use any operating system we want
- We can use any editor or IDE we choose
- We can use AI assistants (like Cody) that are banned elsewhere
- We can follow any testing methodology (TDD, test-after, sometimes no tests at all)
- We can decide if we want to work independently or pair with other engineers
- We have great dev tooling (_sg)_ that allows us to modify the way our dev environment works
  - No “run 10 VMs on your laptop” or “only test with remote services updated 1/day”

To be able **to benefit from this freedom, we need to be responsible** and make sure we don’t overuse it / don’t cause the quality of our shared codebase to deteriorate. That means all code should:

- Follow our [language](https://docs.sourcegraph.com/dev/background-information/languages)-specific guidelines and follow general Sourcegraph style
- Meet our [security standards](https://handbook.sourcegraph.com/departments/security/secure-code-training/)
- Be tested

For generated code, you should follow the guidelines you would follow when [reviewing PRs](https://handbook.sourcegraph.com/departments/engineering/dev/process/pull-requests/) so that **the person reviewing your code can’t tell how it was created.**

Explanations from non-exhaustive list below are not accepted as an excuse for submitting poor quality / untested code:

- Cody generated this code
- Copilot/… generated this code
- IntelliJ/VSCode/… suggested this variable name
- I don’t believe in testing, so I didn’t test this
- I don’t like using a UI, so I never checked if this API works end-to-end

This applies both to the author, and to the PR reviewer - reviewers share the responsibility for the code they approved. If you’re not sure what to do, err on the side of caution.
