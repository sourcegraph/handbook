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
- Team Interview
  - (60m) Technical Interview
  - (60m) Technical Interview
  - (60m) [Cross-functional Team Collaboration](types_of_interviews.md#cross-functional-team-collaboration-interview) with 1 Product Manager + 1 Designer
- (30m) [Values Interview](types_of_interviews.md#values-interview)
- (30m) [Leadership Interview](types_of_interviews.md#leadership-interview)

### Types of Technical Interviews

#### Architecture

- **Interviewers:** two members of the team you are interviewing for

- **Duration:** 60-minutes

- **How to prepare:** Two engineers from the team will work with you by verbally discussing how you would design a new system from scratch. We will work with you in this collaborative session to think about and design the system together, looking for your natural intuition about building systems and problem-solving as we throw various wrenches into the system. The interview consists of open-ended questions, allowing you to describe your mental model of designing a new system from scratch - we want to understand the decisions you are making when designing system architectures. We expect you to ask clarifying questions as the requirements for the system are purposefully ambiguous. We expect you to be designing systems that often need to meet conflicting or ambiguous requirements. For engineers in these roles, a significant part of their journey in Sourcegraph is going to be designing new or improving existing systems to fit these new requirements. Being open-ended allows us to dive into multiple different problem areas, based on your responses, skills, and abilities. It allows a bidirectional conversation, which lets us identify the strengths and weaknesses in the design you propose.

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

### Leadership Interview Process

#### Hiring Manager Interview

- **Interviewers:** Quinn Slack, co-founder and CEO

- **Duration:** 60-minutes.

- **Details:** During this stage in the interview process, Quinn will introduce himself, get to know you, and answer any initial questions you may have. This stage is meant to be conversational and informative for both us and you.

#### Interview with Beyang Liu

- **Interviewers:** Beyang Liu, co-founder and CTO

- **Duration:** 60-minutes.

- **Details:** During this stage in the interview process, Beyang will dig into your leadership skills and get an understanding of how you'd run the team.

#### Peer Interview

- **Interviewers:** Aimee Menne, VP Customer Engineering & Customer Support

- **Duration:** 60-minutes.

- **Details:** During this stage in the interview process, Aimee will dig into your vision, execution history, decision-making, and collaboration with adjacent teams.

#### Technical Interview

- **Interviewers:** Two IC5 Engineers

- **Duration:** 90-minutes.

- **Details:** This interview will be a focused assessment of technical skills and requires work to be done prior to the interview.

#### Cross-functional Team Collaboration

- **Interviewers:** Two cross-functional peers

- **Duration:** 60-minutes.

- **Details:** This interview will be focused on domain knowledge, functionally-specific depth, and breadth.

#### Team Interview

Interviewers: Two Engineering Managers

Duration: 60-minutes.

Details: This interview will be focused on leadership.
