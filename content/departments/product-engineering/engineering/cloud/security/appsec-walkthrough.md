# Application security walkthrough

This page describes the walkthrough stage of the application security interview
process, which is used instead of a take home exercise.

## The day-to-day experience of an application security engineer

At Sourcegraph, application security engineers:

- Are often reading code that they haven't written.
- Are functioning in an asynchronous environment where clear communication is key.
- Are assisting other members of Sourcegraph's team in understanding complex
  security-related issues, and developing creative solutions to those issues.

## The aims of this interview

- Allow you as a candidate to focus on an area that you are comfortable in.
- Allows a dialogue that simulates a technical discussion between you and your
  future peers.
- Use the discussion as a proxy for assessing your application security skills
- Have a time-efficient process for yourself and Sourcegraph.

## We want to find engineers who are:

- Good communicators.
- Confident in identifying application security weaknesses that stem from
  a variety of sources.
- Creative and pragmatic about finding solutions to these issues.
- Able to advocate for better security practices across the organization.

## The process

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
