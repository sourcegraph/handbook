## Resources for Hiring Managers & Teammates - Engineering Interview Process

Our Hiring Managers work with their assigned Recruiter to create an optimal interview plan for their role. We strive to create a fair and equitable interview process for all candidates and have built out structured types of interviews to best suit the type of role you are looking to fill.

The Source of Truth for all interviews is Greenhouse. If you would like to make a change, please send a message to your Recruiter via the private Slack channel.

[Private interview documentation](https://github.com/sourcegraph/interviews/tree/master/engineering/software-engineer)

### Types of Interviews

#### Architecture

[Internal Documentation - Backend Systems](https://github.com/sourcegraph/interviews/blob/master/engineering/software-engineer/architecture/backend-systems/backend-systems.md)

[Internal Documentation - Source/Repo management](https://github.com/sourcegraph/interviews/blob/master/engineering/software-engineer/architecture/repo-management/README.md)

- **Interviewers:** two members of the team they are interviewing for

- **Duration:** 60-minutes

- **How the candidate will prepare:** They will discuss how they would design a new system from scratch. You will work with them in this collaborative session to think about and design the system together, looking for their natural intuition about building systems and problem-solving as you throw various wrenches into the system. The interview consists of open-ended questions, allowing them to describe your mental model of designing a new system from scratch - you’ll want to understand the decisions they are making when designing system architectures. You will ask clarifying questions as the requirements for the system are purposefully ambiguous.

- **What to look for:**

  - How do they identify and resolve ambiguity?
  - How do they make tradeoffs?
  - How do they communicate their proposal?
  - What is it like to work with them on a problem they haven’t seen before?
  - What is their intuition about solutions that are likely to yield good results?

- We expect them to be designing systems that often need to meet conflicting or ambiguous requirements. For engineers in these roles, a significant part of their journey in Sourcegraph is going to be designing new or improving existing systems to fit these new requirements.

#### Technical Interview: General

- **Interviewers:** two members of the team they are interviewing for

- **Duration:** 45-minutes

- **How the candidate will prepare:** during this stage in the interview process, we will get an understanding of the technical depth of your experience and how you would contribute to our engineering culture. We will ask you about your past work and accomplishments in depth, how you worked with others, decisions you made, and what you’d do differently today.

#### Code Walkthrough

- **Interviewers:** two members of the team they are interviewing for

- **Length:** 45-minutes (5 minutes of introductions, 30-minute walkthrough, 10 minutes of questions about working at Sourcegraph.)

- **How the candidate will prepare:** For this interview, the candidate will drive a walkthrough of either a personal project or library of their choice. Be ready for them to screen share the library in question via the IDE or editor of choice.

- **What to look for:** We want to find engineers who are:

  - Good communicators.
  - Can tailor the technical depth and scope of a conversation dependent on the audience.
  - Can effectively teach and share their knowledge.

- **During the interview:** You will guide the candidate to areas of the code that seem ripe for discussion. You may ask the candidate to zoom in or out of layers of abstraction (into/out of functions, classes, and packages) in order to help you build a shared understanding of the code under review. You may ask to explain how particular parts of the code under review work. The level of explanation will vary (but will not be a mystery): you may ask how high-level components interact, or you may ask how an individual function works in detail. Try to ask both! You should ask follow-up questions about performance, usage ergonomics, code complexity, and ideas for improvements. You should also ask clarifying questions about how the code under review reacts to certain input or usage conditions. You can ask the candidate to explain potential trade-offs given different hypothetical design constraints (what in the code would need to change).

#### Pairing Exercise

- **Interviewers:** two engineers on the team they are interviewing for. All pairing sessions should include a third engineer in the room as an observer. As such, they can stay muted for the bulk of the interview. Having another person in the room provides a more complete picture of the candidate and helps to reduce bias. All candidates applying for the same position should pair on the same exercise with the same people. Important: If the engineer leading the interview has not led a pairing interview with the chosen exercise before, they must do a dry run with the hiring manager first. This is to ensure that any wrinkles are ironed out before we meet with a candidate.

- **Length:** 60-minutes

- **How the candidate will prepare:** We ask candidates to spend an hour pairing with an engineer on the team they are applying to. The pairing exercise is not used for technical evaluation. The assumption is that any candidate who gets to this stage meets the technical requirements for the job in question.

- **What to look for:** At a high level, this is what we are evaluating our candidates for:

  - Clear explanations of ideas and decisions.
  - Frequent communication while pairing.
  - Keeping the other engineer in the loop while driving.
  - Flexibility in considering other ideas and approaches, and in making changes to the code.
  - Ability to break down a problem and decide on an approach as a pair.
  - Healthy responses to feedback.

- **Before the interview:** The engineer leading the pairing exercise should choose a task to work on from [this list](https://docs.google.com/document/d/1CRrR9ujgTesi3ZDVNSRcUo3ZFAAaPBt5nY7enHGkwTg/edit). An ideal exercise should:

  - be easy to explain
  - be language agnostic, so the candidate can use whatever language/tools they are most comfortable with
  - require no specialized knowledge
  - take 30-60 minutes to complete
  - have multiple ways to extend it: more features, add tests, etc.

- **During the interview**: Having ways to extend the exercise is important if you finish the exercise before the interview is over. Finishing the exercise is not a goal; the goal is to pair for as much of the interview as possible since that provides the signal we are looking for. (This implies not finishing the exercise.) For the engineer leading this interview: Pair as if you are working with a colleague, not evaluating a candidate. Work together. Offer help if the candidate gets stuck. It’s totally fine if a candidate doesn’t know something or wants to look something up. In short: if it’s cool for a teammate to do, it’s cool for the candidate to do. Finally, save the last 10 minutes of the interview for any Q&A the candidate might have. (No need to finish up that last task; just stop coding.) For the engineer observing: Pay close attention to the items, we are looking for, listed above. Don’t get sucked into the exercise itself, or offer ideas/solutions/feedback. The observer should be as invisible as possible outside of the initial introductions and the final 10 minutes.

#### Pair Coding Skills

- **Interviewers:** two members of the team they are interviewing for

- **Duration:** 60-minutes

- **Details:** You will pair with the candidate to work on an API Client implementation. The goal is to work on the problem together like you would with a fellow engineer. You should use this interview to determine the candidate’s coding ability and technical communication.

#### Complex Problem Deep Dive

- **Interviewers:** two members of the team they are interviewing for

- **Duration:** 60-minutes

- **Details:** You will discuss the most complex problem the candidate has solved with code or the most complex codebases they have worked with.

#### Frontend live-coding exercise interview

- **Interviewers:** two members of the team they are interviewing for

- **Duration:** 60-minutes

- **Details:** This is a live interview to assess the candidate's approach to Code and the UI/UX. One interviewer will lead the interview and one interviewer will shadow. The exercise currently requires the candidate to have a CodeSandbox account and a Figma account.

- **Before the interview** [Instruction](https://github.com/sourcegraph/interviews/edit/master/engineering/coding/commit-header/README.md)
- Note: The instructions are for both 60min and 90min. In this case it is a 60min interview.

- **What to look for:**
  How did the candidate approach the code? Think about CSS, React, error handling, tests. If there was anything they struggled with, did they communicate their intentions well?
  How did the candidate approach the UI/UX. Did they generally follow what the design specified? Did they consider loading and error states? Did they consider accessibility?
  Follow up questions based on the candidates implementation

#### Delivery: Pairing Exercise

- **Interviewers:** one engineer on the Delivery team

- **Length:** 60-minutes

- **Details:** This interview consists of two activities that are designed to understand how the candidate works within a collaborative technical environment. The interviewer will play the role of a customer and provide information to the candidate so they can effectively troubleshoot a problem with an application running in Kubernetes, then collaborate with the candidate to add a new feature to the deployment.

- **What to look for:** At a high level, this is what we are evaluating our candidates for:

  - How the candidate approaches troubleshooting - where do they get stuck, what avenues do they explore?
  - Clear explanations of ideas and decisions.
  - Frequent communication while pairing.
  - Keeping the other engineer in the loop while driving.
  - Healthy responses to feedback.

- **Before the interview:** The engineer leading the pairing exercise should carefully review the full interview instructions [here](https://docs.google.com/document/d/1Gn7oF4N8okjWdUJL_csNAeDpq3IbMSGuu0kvZqA6dC8/edit?usp=sharing) - this is a collaborative interview and will need to provide some information detailed in the prompt. The engineer should also set up a local Kubernetes cluster and deploy the broken manifest from the first activity so they can be prepared to run troubleshooting commands provided by the candidate.
