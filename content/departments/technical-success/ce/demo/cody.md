# Cody Demos

Cody is fun to demo! Customer engineers are encouraged to use Cody as much as possible in order to figure out demo paths that work best for them. Below are some suggested demo paths. The intended audience here is the Customer Engineering team. The intended purpose of these examples and videos is to teach a customer engineer to effectively show Cody's value to an individual Sourcegraph user. If and when Cody hallucinates, roll with it! The vast majority of the time, Cody gives actionable and valuable information which accelerates developer productivity. Cody's accuracy and precision will improve as LLM's improve and as we continue to optimize Cody.

If you're looking for some tips on where to start in a demo, here are some ways that you can show what Cody can do. Add items to this page when you find new and impactful ways to demonstrate Cody's value, and please remove any items that become stale or outdated. Add short recordings of examples to the [Cody demo tips folder](https://www.loom.com/spaces/All-Sourcegraph-1226947/folders/Cody-demo-tips-3a47365ea79e4e089d8495cc8fb2e0f7) on Loom.

## Help with writing shell scripts

- [Link to Loom](https://www.loom.com/share/5c01ebcb032f406a8ce2b82aae6b486d)
- Prompt: `write a shell script that traverses each folder and sub-folder and runs "git pull" in each sub-folder`
- Follow-up prompt: `how do i schedule that script as a cron job`

## Asking about caching strategies in a code base

- [Link to Loom](https://www.loom.com/share/85747012c0f34e808f9143a665b9b840)
- Prompt: `where do we use caching in {codebase}` i.e. `where do we use caching in sourcegraph`
- Follow-up prompt: `show me how we use {example from Cody's response}` i.e. `show me how we use redis to cache search results`
- _watch out for hallucinations - sometimes Cody's responses contain filenames or code that doesn't exist in the codebase, but it's often close enough to be actionable and useful_

## Adding a component to a web UI

- [Link to Loom](https://www.loom.com/share/19ea873ba8b64073ae1a68df3384869a)
- Prompt: `how do i add a nav component to the sourcegraph ui`
- _watch out for hallucinations - sometimes Cody's responses contain filenames or code that doesn't exist in the codebase, but it's often close enough to be actionable and useful_
- Follow-up prompt in case of a hallucination: `the {x} file doesn't exist - can you try again`

## Recipes on open files

- [Link to Loom](https://www.loom.com/share/60fc98555e7b4e2f9a5ae18158f8457c)
- Useful recipes to show in a demo:
  - Explain selected code
  - Generate unit test
  - Generate docstring
  - Smell code

## Querying API data

- [Link to Loom](https://www.loom.com/share/76b61988b4004a77bd0eb2e48be3c573)
- Prompt: `how do i query the {codebase} api for {topic}` i.e. `how do i query the sourcegraph api for a list of active users`
- _watch out for hallucinations - sometimes Cody's responses contain filenames or code that doesn't exist in the codebase, but it's often close enough to be actionable and useful_
- Follow-up prompt in case of a hallucination: `the {thing} isn't valid - can you try again`

## Demo Chat Predictions

- [Link to video](https://sourcegraph.slack.com/files/U01P83L3CDT/F055BRT4RLJ/screen_recording_2023-04-27_at_15.51.29.mov)
- Enable chat predictions in cody config

## Demo Auto Completion

- [Link to video](https://sourcegraph.slack.com/files/U02STMJDCKF/F0565QHM885/suggestions-dogfooding.mov)
- Add the following to your Visual Studio Config:

`// Use Cody with the S2 endpoint to avoid rate limiting issues for now`

`"cody.serverEndpoint": "https://sourcegraph.sourcegraph.com",`

`"cody.experimental.suggestions": true,`

## Customising Cody demo

Add embeddings for customer's public repo on Github/Gitlab

- Go to [Soucegraph Site Admin -> Cody](https://sourcegraph.com/site-admin/cody) page and add customer repo as embeddings (Make sure the repo is actually indexed in Sourcegraph, Cody lets you add embeddings even when a repo is not indexed in Sourcegraph)
- You can demo Cody working with customers repo in 2 ways
  - Go to Customer opensource Github repo in Sourcegraph (`https://sourcegraph.com/github.com/<org>/<repo>`) and ask questions about the repo.
  - Or update the VS Code plugin extension config and update the _Cody: Codebase_ to point to customer repo on Github
  - Useful prompts:
    - What is this repo for and who owns it?
    - How do I get started with this repo?
    - Generally speaking, understand what the repo does - for instance if its a Go library repo, then ask it generate some examples on how to write code to do XYZ
