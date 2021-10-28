# Add Yourself to the Team Page

### Steps:

1. Accept GitHub's email invite to the Sourcegraph org (you should be a member of [the `Everyone` group](https://github.com/orgs/sourcegraph/teams/everyone) in Sourcegraph's GitHub organization).
1. Add yourself to the end of the [team.yml](https://github.com/sourcegraph/handbook/blob/main/data/team.yml) file by pasting the sample below and modifying it. You could consider including sites your LinkedIn, Twitter, or anything else in the links section. If you aren't comfortable with markdown, you can check out our [tips and tricks page](markdown-resources.md)
1. In the edit view, copy the example below, paste it at the end of the edit view, and make it about yourself! Look at others' bios for more examples.
1. Under "Commit changes" at the bottom of the page, replace the "Update team.yml" text with a summary of your change, e.g., Add Marie to team page.
1. Click the green "Commit changes" button. If you do not see the green "Commit Changes" button, refer to step 1. Successful changes will become visible shortly (but not immediately).

**You can find an example template below that uses all available features. All fields except name are optional, and you can use markdown and emojis inside all the non-name fields.**

```yaml
marie_curie:
  name: 'Marie Curie'
  pronouns: 'she/her'
  role: 'Staff Scientist'
  location: 'Passy, Haute-Savoie, France 🇫🇷'
  github: 'marie_curie'
  links: '[marie_curie@sourcegraph.com](mailto:marie_curie@sourcegraph.com)'
  pronunciation: 'https://forvo.com/word/marie_curie/'
  description: "I am a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. I was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two scientific fields. My husband, Pierre Curie, was a co-winner on her first Nobel Prize, making us the first ever married couple to win the Nobel Prize and launching the Curie family legacy of five Nobel Prizes. I was, in 1906, the first woman to become a professor at the University of Paris."
```
