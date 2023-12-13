# Resources for Candidates - Engineering Interview Process

The purpose of this handbook page is to help candidates prepare for each step of the interview. This section of the handbook documents the hiring process for roles on the engineering team.

We know that interviewing can be stressful, so we want to provide you with as much information as possible to help you feel prepared!

What is the day-to-day engineering experience at Sourcegraph?

- We’re often reading code we haven’t written.
- We’re functioning in an asynchronous environment where clear communication is key.
- We need to help our team understand areas where we are the domain expert.

What do we want to be true about these interviews?

- Allow you as the candidate to focus on an area that you are comfortable in.
- Allow a dialogue that simulates a technical discussion between your potential future peers.
- Use these discussions as a proxy for technical aptitude and programming skills.
- Have a time-efficient process for yourself and Sourcegraph.

We want to find engineers who are:

- Team-oriented.
- Good communicators.
- Can tailor the technical depth and scope of a conversation dependent on the audience.
- Can effectively teach and share their knowledge.

### Standard Interview Process

- (30m) [Recruiter Screen](types_of_interviews.md#recruiter-screen)
- (30m-60m) [Hiring Manager Screen](types_of_interviews.md#hiring-manager-screen)
- (60m) [Resume Deep Dive](types_of_interviews.md#resume-deep-dive)
- Team Interview
  - (45-60m) Technical Interview (examples below)
  - (45-60m) Technical Interview (examples below)
  - (60m) [Cross-functional Team Collaboration](types_of_interviews.md#cross-functional-team-collaboration-interview) with 1 Product Manager + 1 Designer
- (30m) [Values Interview](types_of_interviews.md#values-interview)
- (30m) [Leadership Interview](types_of_interviews.md#leadership-interview)
- References check
- Offer

### Types of Technical Interviews

#### Architecture

- **Interviewers:** two members of the team you are interviewing for

- **Duration:** 60-minutes

- **How to prepare:** Two engineers from the team will work with you by verbally discussing how you would design a new system from scratch. We will work with you in this collaborative session to think about and design the system together, looking for your natural intuition about building systems and problem-solving as we throw various wrenches into the system. The interview consists of open-ended questions, allowing you to describe your mental model of designing a new system from scratch - we want to understand the decisions you are making when designing system architectures. We expect you to ask clarifying questions as the requirements for the system are purposefully ambiguous. We expect you to be designing systems that often need to meet conflicting or ambiguous requirements. For engineers in these roles, a significant part of their journey in Sourcegraph is going to be designing new or improving existing systems to fit these new requirements. Being open-ended allows us to dive into multiple different problem areas, based on your responses, skills, and abilities. It allows a bidirectional conversation, which lets us identify the strengths and weaknesses in the design you propose.

#### Technical Screen / Resume Deep Dive

- **Interviewers:** A member of the team for which you're interviewing

- **Duration:** 30-60 minutes

- **Details:** A Sourcegraph teammate will ask technical and behavioral based questions about your skills, values, and work history in order to gauge whether they're aligned with the requirements of the role. The goal of the interview is to:

  1. Get an understanding of your technical depth and how you would contribute to and/or collaborate with our engineering team
  2. Take a [deep dive](types_of_interviews.md#resume-deep-dive) into your background from past to present with the goal of uncovering the motivation behind your decision making, strengths, weaknesses, and accomplishments in past roles.
  3. Get a high level understanding of how your views and experiences align with [our values](../../../../company-info-and-process/values/index.md).

The interviewer will leave time at the end to answer any questions that you have. This stage is meant to be conversational and informative for both you and us.

#### Technical Interview

- **Interviewers:** two members of the engineering department

- **Duration:** 45-minutes.

- **Details:** During this stage in the interview process, we will get an understanding of the technical depth of your experience and how you would contribute to our engineering culture. We will ask you about your past work and accomplishments in depth, how you worked with others, decisions you made, and what you’d do differently today.

#### Code Walkthrough

- **Interviewers:** two engineers on the team you are interviewing for

- **Length:** 45-minutes

- **How to prepare:** For this interview, you’ll drive a walkthrough of either a personal project or library of your choice. Be ready to screen share the library in question via your IDE or editor of choice. The following are sample ideas; the most important thing is you choose something that you are comfortable and familiar with. Walkthroughs can be done in any language, we do have a preference if possible that they are close to the domain you’d be working in. If you’re choosing a library, feel free to show us its usage contextually within other projects (these may be your personal projects too) and what problems you’ve solved with it historically.

  - For a full-stack position, you may choose a library that you’ve used heavily, for example [DateJs](https://github.com/datejs/Datejs) or [Redux](https://github.com/reduxjs/redux). With a smaller library like DateJs you can walk us through its usage in other projects, what problems you’ve solved, how you’d approach testing it. With Redux perhaps you want to dive into the internals and compare its technical proposition versus other solutions.

  - For a backend position, you may choose a library that you’ve used heavily, for example [Mux](https://github.com/gorilla/mux) or [Ristretto](https://github.com/dgraph-io/ristretto). As an example, with Mux you could compare what problems it solves or introduces versus the Go standard library. As an example for Ristretto perhaps you’d highlight its usage in other projects and some of the underlying caching mechanisms.

  - With whatever you choose to walk us through, if you’re stuck where to start, choose a test case or how the project/library is initialized. We’ll take it from there!

  - During the interview, we will guide you to areas of the code that seem ripe for discussion. We may ask you to zoom in or out of layers of abstraction (into/out of functions, classes, and packages) in order to help us build a shared understanding of the code under review. You will be asked to explain how particular parts of the code under review work.

  - The level of explanation will vary (but will not be a mystery): we may ask how high-level components interact, or we may ask how an individual function works in detail. We will try to ask both!

  - We will ask follow-up questions about performance, usage ergonomics, code complexity, and ideas for improvements. We’ll also ask clarifying questions about how the code under review reacts to certain input or usage conditions. You will be asked to explain potential trade-offs given different hypothetical design constraints (what in the code would need to change).

#### Pairing Exercise

- **Interviewers:** two engineers on the team you are interviewing for

- **Length:** 60-minutes

- **How to prepare:** We ask candidates to spend an hour pairing with an engineer on the team they are applying to. All pairing sessions will include a 2nd engineer on the team as an observer who may stay muted for the bulk of the interview. Having another person in the room provides a more complete picture of the candidate and helps to reduce bias.

#### Coding Skills

- **Interviewers:** two members of the team you are interviewing for

- **Length:** 60-minutes

- **How to prepare:** An engineer from the team will pair with you to work on an API Client implementation. The goal is to work on the problem together like you would with a fellow engineer. We plan to use this interview to determine your coding ability and technical communication.

#### Complex Problem Deep Dive

- **Interviewers:** two members of the team you are interviewing for

- **Length:** 60-minutes

- **How to prepare:** We will discuss the the most complex problems you have solved with code, or the most complex codebases you have worked on.

#### Frontend live-coding exercise interview

- **Interviewers:** two frontend engineers from the Sourcegraph team

- **Duration:** 60-minutes

- **Details:** This is a live interview to assess your approach to Code and to the UI/UX design. One interviewer will lead the interview and one interviewer will shadow. The exercise will use CodeSandbox and Figma, and will be done in React. If you prefer not to use your accounts we have it set up so you don't have to.

- **Preparation:** Not Mandatory, since we can set up the exercise without it - Create (free) accounts on https://www.figma.com/ and https://codesandbox.io/.

#### Release / Tooling Engineer Take-Home Assignment Walkthrough

- **Interviewers:** two engineers from the Sourcegraph team

- **Duration:** 60-minutes

- **Details:** Two engineers will have you walk them through your take-home exercise. Please be prepared to discuss your results and answer any follow up questions that they have.

#### Delivery: Pairing Exercise

- **Interviewers:** one engineer on the Delivery team

- **Length:** 60-minutes

- **Details:** This interview consists of two activities that are designed to understand how you work within a collaborative technical environment. They are representative of the types of activities that are found in the day-to-day of the Delivery team.

  During the pairing session, we will ask you to troubleshoot an issue a customer reported when they deployed an application to Kubernetes. Next, you will extend the deployment to accommodate a feature request in a collaborative pairing session environment. The deployment manifest used for both scenarios is referenced below.

  Expert Kubernetes knowledge is not a requirement! We place focus on your ability to troubleshoot and collaborate with teammates.

- **How to prepare:**
  This exercise is designed to explore your approach to troubleshooting and does not require any advance preparation. You may wish to set up a test Kubernetes cluster and run the application yourself. This step is not required but can be useful during both stages of the interview. Options for a local cluster include: [kind](https://kind.sigs.k8s.io/), [k3d](https://github.com/rancher/k3d) or [minikube](https://minikube.sigs.k8s.io/docs/start/).

  The application used for this exercise is below:
  <details>
    <summary>deployment.yaml</summary>

  ```yaml
  apiVersion: apps/v1
  kind: Deployment
  metadata:
    name: webserver
  spec:
    replicas: 1
    selector:
      matchLabels:
        app: www-server
    template:
      metadata:
        labels:
          app: www-server
      spec:
        containers:
          - name: webserver
            image: docker.io/library/nginx:alpine
            imagePullPolicy: 'IfNotPresent'
            ports:
              - name: http
                containerPort: 80
                protocol: TCP
            livenessProbe:
              httpGet:
                path: /
                port: http
            readinessProbe:
              httpGet:
                path: /
                port: http
            resources: {}
  ```

  </details>

### Security Interviews

#### Application security walkthrough

- **Interviewers:** two Security Engineers

- **Duration:** 45-minutes

- **How to prepare:** This describes the walkthrough stage of the application security interview
  process, which is used instead of a take home exercise.

**The day-to-day experience of an application security engineer**

At Sourcegraph, application security engineers:

- Are often reading code that they haven't written.
- Are functioning in an asynchronous environment where clear communication is key.
- Are assisting other members of Sourcegraph's team in understanding complex
  security-related issues, and developing creative solutions to those issues.

**The aims of this interview**

- Allow you as a candidate to focus on an area that you are comfortable in.
- Allows a dialogue that simulates a technical discussion between you and your
  future peers.
- Use the discussion as a proxy for assessing your application security skills
- Have a time-efficient process for yourself and Sourcegraph.

**We want to find engineers who are:**

- Good communicators.
- Confident in identifying application security weaknesses that stem from
  a variety of sources.
- Creative and pragmatic about finding solutions to these issues.
- Able to advocate for better security practices across the organization.

**The process**

During the interview, you will guide us through a project or library of your
choice.

It is important that you choose a project or a library that you are comfortable
with. You don't have to choose a project with known vulnerabilities – we're more
interested in understanding your thought process and the way you would work your
way through an application during a security assessment. If you aren't sure about
the application you wish to use, the [Sourcegraph](https://github.com/sourcegraph/sourcegraph)
platform might be a good choice!

- Interview length: 45 minutes
  - 5 minutes of introductions
  - 30 minute walkthrough
  - 10 minutes of questions that you have for us about working at Sourcegraph

Be prepared to share your screen and walk us through the code.

For the interview, we will expect you to carry out an application security
assessment of the project's code. We do not expect you to carry out any live
testing against the project. Instead, by examining code, we would like to work
through:

- The purpose of the project and any logic-based security concerns that might
  arise
- Technical security concerns, for example those deriving from the OWASP Top 10
- The use of dependencies within the project and how you would assess them
  for security issues
- Tooling or processes you would put in place to assess the application on an
  ongoing basis

We do not have to assess every part of the application during the call – it is
preferable to focus on a single area of functionality and cover it from a
variety of security perspectives. If there are areas that we are particularly
interested in, we might ask you to dive further into them and assess how
specific aspects of functionality might work.

For any security concerns identified we are also interested in knowing how you
would solve them, both in the immediate case and on an ongoing basis. How would
you automatically catch vulnerabilities which might be introduced in the future?
How would you ensure that developers are aware of the potential risks when they
are working on this piece of code?

#### Security Operations Case Study

- **Interviewers:** two Security Engineers

- **Duration:** 45-minutes

- **How to prepare:** The aim of this exercise is to gauge your general, non-AppSec security skills, in areas that a junior security engineer might be exposed to on a regular basis. This case study covers generic phishing attempts and discusses how you would identify and protect against them.

### AI/ML Interviews

#### Hiring Manager Screen / ML Breadth

- **Interviewers:** Head of AI

- **Duration:** 60-minutes

- **How to prepare:** During this stage in the interview process, the Hiring Manager will introduce themself, get to know you, share details on the AI team and answer any initial questions you may have. They will then discuss few science questions around end to end ML formulation, modelling, deployment & experimentation to gauge your experience in productionizing ML systems in the industry.

#### Technical Background

- **Interviewers:** Beyang Liu, co-founder and CTO

- **Duration:** 45-minutes

- **How to prepare:** During this interview, we will focus on systems you've built and dive into your views on machine learning and its potential. Please come prepared to share your vision for AI at Sourcegraph.

#### Technical Deep Dive

- **Interviewers:** two engineers

- **Duration:** 45-minutes

- **How to prepare:** The goal of the technical deep dive interview is to assess both theoretical understanding and practical application skills in machine learning. This interview will focus on ranking specific ML knowledge (e.g. models, loss functions, experimentation) as well as orchestration tools and strategies for developing end to end ML systems in production.

#### Pairing Exercise

- **Interviewers:** Beyang Liu, CTO/Co-founder

- **Duration:** 30-minute kick-off session + up to 2 hours to work on your own:

  - The first 15 minutes will be live, where we'll ensure that the dev environment is setup.
  - For the next 15 minutes, as you get started on the project, the interviewer will be actively online to answer any questions that you have via Slack.
  - Then, the expectation is that you finish the project within 2 hours.

- **How to prepare:** Please complete these steps prior to the interview:

  - Create sourcegraph.com account and an access token for it, so you can start using Cody in VSCode
  - Have a working VS Code installation on your local machine
  - git clone the Sourcegraph Cody repository: https://github.com/sourcegraph/cody
  - Try to get as far as you can setting up the Cody dev environment: https://github.com/sourcegraph/cody/blob/main/vscode/CONTRIBUTING.md
  - If you get stuck, we will go over it on the meeting
  - During the meeting, you'll get invited by the interviewer to a shared Slack channel in which you can ask questions

- **Details:** In the 15min setup call, we'll make sure your development environment is correctly setup. You can ask questions about it too.

  Then we'll ask you to add a hypothetical feature to Cody.

  You can ask questions in a shared Slack chat for 15 minutes after your meeting.

  When you are finished, please share your final results as a pull request in the Slack channel.

#### AI Coding Exercise

This exercise is designed to provide us a snapshot of your approach to designing and implementing AI-based systems. It covers a range of the essential skills such as problem selection, design and architecture of AI systems, understanding and selecting appropriate metrics, working with large datasets, and implementing scalable solutions.

Your task is to create a framework for evaluating a critical aspect of Cody's response quality. Cody, which you are free to download and try, assists developers by conversing about their code, generating code, and offering completions. The specific aspect of Cody response quality you focus on is up to you.

Here are the main phases of the exercise:

**Design the Evaluation:** Define the objectives and evaluation rubric, and decide on what factors you're seeking to measure. Choose a dataset, or design one by creatively reusing resources like commit history, the code graph, bug databases, documentation, etc. Finally, decide on effective metrics.

**Implementation:** Create a prototype of the framework that is as close as possible to a production-level solution, demonstrating good coding practices, error handling, and efficiency. We encourage you to use a data parallel framework you're comfortable with, ensuring the solution is scalable to large benchmarks and automated evaluations. If your framework needs to invoke Cody, use a mock or a stub at that point. Example JSON of a Cody response “completion” is included below.

While crafting your solution, consider the following:

- How the system handles large-scale data

- How it ensures reliable and consistent results across different runs

- How the system could be extended for different types of evaluations in the future

- How the system could be integrated with other systems/processes

We will provide you with a modest budget for cloud compute services if needed to exercise your prototype. Please remember not to use equipment, proprietary tools or designs that you can’t share with Sourcegraph.

In order to evaluate all candidates fairly, we request you to limit the time spent on this exercise to a few hours. If there are areas you wish to improve but couldn't due to time constraints, feel free to discuss potential improvements during the follow-up interview.

Finally, you'll walk us through your solution in a 45-minute review session. Begin with a high-level overview of your approach and then delve into specific technical details by screen sharing your code live.

### Leadership Interview Process

#### Hiring Manager Interview

- **Interviewers:** Steve Yegge, Head of Engineering

- **Duration:** 30-minutes.

- **Details:** During this stage in the interview process, Steve will introduce himself, get to know you, and answer any initial questions you may have. This stage is meant to be conversational and informative for both us and you.

#### Interview with Beyang Liu

- **Interviewers:** Beyang Liu, co-founder and CTO

- **Duration:** 60-minutes.

- **Details:** During this stage in the interview process, Beyang will dig into your leadership skills and get an understanding of how you'd run the team.

#### Peer Interview

- **Interviewers:** Two Engineering Managers

- **Duration:** 60-minutes.

- **Details:** The purpose of this interview is to assess whether the candidate’s leadership style will align with our expectations and add value to our team.

#### Technical Interview

- **Interviewers:** Two engineers on the team/org they would manage

- **Duration:** 45-60-minutes.

- **Details:** The purpose of this interview is to assess whether the candidate has the necessary technical depth to effectively lead a high quality engineering team.

#### Cross-functional Team Collaboration

- **Interviewers:** Two cross-functional peers

- **Duration:** 30-60-minutes.

- **Details:** This interview will be focused on domain knowledge, functionally-specific depth, and breadth. The purpose of this interview is to assess whether the candidate will work well with teammates outside of engineering to achieve what is in the best interest of Sourcegraph and our customers.
