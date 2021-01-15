# Coding exercise

We ask candidates to complete a time bound asynchronous coding exercise so we can evaluate you on certain skills that we think are relevant to being successful at Sourcegraph.

Why? Read the [FAQ](#FAQ).

## TypeScript coding exercise

We designed this exercise to measure your understanding of callbacks and asynchronous execution.

- You will choose a two hour timeframe to independently work on the exercise. You can choose any day and time; we just schedule an email.
- At your chosen date and time, we will send you a zipped TypeScript project that contains instructions and some unit tests.
- TypeScript is a superset of JavaScript, so if you are comfortable with JavaScript and have experience reading any typed language, then you should be fine. We recommend reading through the [TypeScript docs](https://www.typescriptlang.org/docs/handbook/basic-types.html) if you aren't already familiar with TypeScript.
- You should have Node.js (>=8.16.0) installed on your computer.
- You can look up documentation on the Internet while you are coding.
- You may use open-source libraries, but most candidates don't find it necessary. For some parts of the exercise, we'll explicitly require that you not use any.
- After two hours, you will email us your solution as a zip file and we will get back to you on next steps within 2 business days.

If we decide to move forward, we will schedule a 30-minute followup call to discuss your code.

## Frontend coding exercise

We designed this exercise to measure your understanding of building web UIs.

- You will choose a three hour timeframe to independently work on the exercise. You can choose any day and time; we just schedule an email.
- The exercise asks you to implement a UI in a scaffold TypeScript **React** app.
- We provide you with the code of the scaffold app, the URL of a working **backend API** to fetch data from and a link to a **Figma design** for the UI.
- The backend exposes the same data over both a RESTful interface and a GraphQL endpoint. You can chose whichever of the two you are most comfortable with.
- You can use your own development environment and lookup documentation on the internet.
- You should have Node.js (>=14.0.0) installed on your computer.

If you have never worked with React or it's been a long time, we recommend brushing up on their basics a bit before taking the exercise.
There are no "advanced" React features needed to pass the exercise.

We will grade your submission on both the code (implementation) and the result (UI, functionality, etc), so we recommend to not compromise one over the other.
Apply the same standards to your solution you would to any solution you implement in a real-world production-ready app.
If you can't get the whole exercise done in the time box, cut scope and make informed trade-offs the same way you would for a "real" app and note them in your README.
Try to hand in a "well-rounded" submission that demonstrates your skills as well as possible.

If we decide to move forward, we schedule a one hour follow-up call to discuss your submission.

## Go coding exercise

We designed this exercise to measure your understanding of HTTP requests, concurrency, and error handling.

- You will choose a two hour timeframe to independently work on the exercise. You can choose any day and time that works for you; there are no scheduling constraints.
- At your chosen date and time, we will send you detailed instructions. You will be building a simple API server in Go that calls a JSON endpoint of another service and exposes a JSON endpoint of its own.
- You should have a recent version of Go (≥ 1.11) installed on your computer.
- You can look up documentation on the internet while you are coding.
- You are not prohibited from using open-source libraries, but the problem is easily solved using only the Go standard library.
- After two hours, you will email us your solution as a zip file and we will get back to you on next steps within 2 business days.

If we decide to move forward, we will schedule a 30-minute followup call to discuss your code.

## CLI coding exercise

We designed [this synchronous exercise](https://github.com/sourcegraph/interviews/blob/master/engineering/coding/simple-polling/README.md) to measure your approach to coding a small application in a paired setting.

* We will schedule a 90-minute timeframe to work with a Sourcegraph engineer.
* In this exercise you write a command-line application that processes a data file and computes some simple metrics.
* The data file will be emailed to you 10-minutes prior to the interview.
* You may use the language of your choice.
* You can use your own development environment, and look up documentation on the internet.
* You are not prohibited from using open-source libraries.

If we device to move forward, we will schedule interviews with team members.

## Distribution exercise

We designed this exercise to measure your skills at integrating build and deployment workflows into a development lifecycle, as well as your ability to code a simple HTTP service.

- You will choose a three hour timeframe to independently work on the exercise. You can choose any day and time that works for you; there are no scheduling constraints.
- At your chosen date and time, we will send you detailed instructions. You will be building a simple pipeline to build and deploy a set of Go services and create a simple HTTP client in the language of your choice. We prefer to use Go or Typescript, but you can choose the language you feel more comfortable with.
- You should have a recent version of Go (≥ 1.13) installed on your computer.
- You should have a simple Kubernetes local cluster ([kind](https://kind.sigs.k8s.io/), [k3d](https://github.com/rancher/k3d), [minikube](https://minikube.sigs.k8s.io/docs/start/))
- You can look up documentation on the internet while you are coding.
- After three hours, you will email us your solution as a zip file and we will get back to you on next steps within 2 business days.

If we decide to move forward, we will schedule a 30-minute followup call to discuss your code.

## FAQ

### Why do you do a coding exercise?

A significant part of your job as a software engineer is to write code, so we naturally want to measure your ability here during our interview process.

An asynchronous coding exercise provides the most realistic environment for measuring how you would work at Sourcegraph on a daily basis.

- You can use the programming environment that you are most familiar with (i.e. your own laptop with your own editor with all the keyboard shortcuts and extensions/tools that you like, and with access to documentation on the internet).
- You don't have the extra pressure of coding while someone else is watching.
- You can schedule our asynchronous coding exercise for the best time that works for you.

Candidates who have completed our coding exercise regularly tell us that they enjoyed it and/or learned something.

### Why a time limit?

We choose to enforce a finite limit so that we get a consistent signal across all candidates. It wouldn't be fair if candidates could spend as much time as they wanted, because some candidates have more time than others.

The allocated time for each exercise should be long enough that we can ask non-trivial questions that test for relevant skills while also being short enough that it shouldn't be an unreasonable burden for anyone.

### Do I still need to do the coding exercise if I have significant open-source contributions?

Yes, we ask all candidates to complete our coding exercise. Our coding exercise provides a consistent and fair signal across all candidates for skills that we care about. If we just review your open-source code, we have a hard time comparing you to other candidates fairly and we might not get signal on specific skills that we care about.

Even if it is obvious that the coding exercise is a formality for you (e.g., maybe you are a language author), we would still ask you to do it because we would want your feedback on the exercise so we can make it better for future candidates.

Many of our teammates have made significant coding open-source contributions and they had no problems completing our coding exercise.

Go back to the [careers page](../../../company/careers.md) for all open positions.
