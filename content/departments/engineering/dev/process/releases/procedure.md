# Major / minor release procedures

## Code freeze

The goal of code freeze is to stabilize the release for the final build, and to mitigate risk with each change by fixing bugs caught during the QA process, or making improvements that increase stability and quality in the final build.

During the code freeze we will typically cut a new candidate each day and deploy it to the test instance for additional QA. If additional candidates are necessary, reach out to the releases team.

There are 3 distinct sections of code freeze:

1. open code freeze
2. closed code freeze
3. final build freeze

### Open code freeze

During open code freeze, the release branch is open to changes and will require changes to be backported from `main` using our backport tooling. It is up to the individuals discretion to determine whether a change should be included in the final build. Release captains may monitor the backported changes for anything that seems risky and may reach out to understand more about the requirements. It is not a given that every change can be backported during this period. Substantial changes should be completed and merged **before** the code freeze period has started.

### Closed code freeze

A few days before the release the branch will be closed to changes and will require a member of the releases team to merge backports. The goal of this step is to stabalize a final build. During this period release captains will exercise discretion whether a change warrants backport. Some guidelines for things that are eligible:

1. Documentation
2. Bug fixes
3. Release infrastructure (lint, generate fixup, etc)
4. Low risk changes (copy, colors, etc)

### Final build freeze

A short time before the release the branch will be closed entirely for the final build freeze. At this point we will apply standard patch principles to determine if a change should warrant a backport. This is done so that the final build has an opportunity to be deployed to the test instance, security scanners can be run for a final time, and we can ensure the final build is ready to ship on time for release day. During this period backporting has a significant impact on our ability to ship stable releases on time, so we will exercise increased discretion and may not include your change unless absolutely necessary.

- Minor and moderate issues should be bundled and included in the next upcoming patch releases
- Severe issues should be evaluated as if warranting an out of band for eligibility to backport into the release. If we would otherwise release an out of band patch, we should backport the change into the release.

The code freeze will end once the final build is released, at which point the release tooling will be updated and changes can freely merge into `main` until the next release.

### Code freeze schedule

For a quarterly release, a recommended schedule looks like this:

1. Open freeze 7-14 days before release
2. Closed freeze 2-3 days before release
3. Final build freeze 1 day before release

### Releases team responsibilities

The releases team is responsible for monitoring and ensuring the release branch is healthy for the duration of code freeze. This may require some manual intervention to resolve minor issues on the branch, such as lint or running go generate.

The release captain is responsible for orchestrating and directing as necessary anything required to achieve the outcome of a stable release at the end of code freeze. In general the release captain should be the individual to monitor and keep the release branch healthy, but may need to delegate tasks to others during unavailable days and hours.

The release captain for a feature release should assume a substantial amount of their time will be allocated to managing the release and should not plan to be involved in last minute work included in the release.

In general, the releases team will strive to ensure release responsibilities don't interfere with PTO and other OOO requirements for release captains by finding backup captains as necessary. However, it **is the responsibility** of the captain to ensure there is a backup captain available for any extended periods of unavailability, even if this requires reaching out to the wider engineering group.

#### Common release tasks

1. Cutting candidate builds
2. Unblocking the release branch
3. Answering questions and supporting teammates that are interacting with the release
4. Coordinating with engineering leadership, marketing, and any other groups necessary to ensure a successful release
5. Communicating release progress and status to the engineering org and wider company

#### Communication

The period of code freeze can be a high stress time and requires extra care with communication. Assume that over-communicating will yield a better result than under-communicating. Additionally, assume you will need multiple channels of communication and repetition to reach the full audience. As a good practice, coordinate with the internal comms team to ensure messaging is reaching everyone as necessary.

Any material changes (procedure, tooling, policy, etc.) to the release process should be communicated ahead of the code freeze to engineering and engineering leadership to ensure there are no contradictions in messaging as we enter the code freeze period.

If there is any doubt that you should communicate something, prefer sending a communication.
