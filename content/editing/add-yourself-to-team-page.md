# Add Yourself to the Team Page

### Steps:

1. Accept GitHub's email invite to the Sourcegraph org (you should be a member of [the `Everyone` group](https://github.com/orgs/sourcegraph/teams/everyone) in Sourcegraph's GitHub organization).
1. Add yourself to the end of the [team.yml](https://github.com/sourcegraph/handbook/blob/main/data/team.yml) file by pasting the sample below and modifying it. You could consider including sites your LinkedIn, Twitter, or anything else in the links section. For pronunciation, you can record an audio file from your phone using [name-coach.com](https://www.name-coach.com/)). Feel free to include info on hobbies, work experience, family, pets, etc. in the description.
1. In the edit view, copy the example below, paste it at the end of the edit view, and make it about yourself! Look at others' bios for more examples.
1. Under "Commit changes" at the bottom of the page, replace the "Update team.yml" text with a summary of your change, e.g., Add Marie to team page.
1. Click the green "Commit changes" button. If you do not see the green "Commit Changes" button, refer to step 1. Successful changes will become visible shortly (but not immediately).
1. Consider adding yourself to the [team members locations map](../company/team/locations.md).

You can find an example template below that uses all available features.

All fields except name are optional, and you can use markdown and emojis inside all the fields except `name`, `github`, and `email`. The order of fields doesn't matter. If you aren't comfortable with markdown, you can check out our [tips and tricks page](markdown-resources.md). If you receive errors during the build, check the [handbook check failures page](handbook-check-failures.md).

Indentation is also important with YAML, there should be two spaces before every line with a field. Quoting is also important, if you use a single quote inside your description you should use a double quote outside (i.e., `description: "this is Marie's bio"`, or a single quote outside if you want to use double quotes inside (i.e., `description: 'This is the "best" bio'`). If you get stuck on YAML parsing errors check in the #handbook channel and lots of people can help.

```yaml
marie_curie:
  name: 'Marie Curie'
  email: 'marie_curie@sourcegraph.com'
  github: 'marie_curie'
  pronouns: 'she/her'
  role: 'Staff Scientist'
  location: 'Passy, Haute-Savoie, France 🇫🇷'
  links: '[Wikipedia](https://en.wikipedia.org/wiki/Marie_Curie)'
  pronunciation: 'https://forvo.com/word/marie_curie/'
  description: 'I am a Polish and naturalized-French physicist and chemist who conducted pioneering research on radioactivity. I was the first woman to win a Nobel Prize, the first person and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two scientific fields. My husband, Pierre Curie, was a co-winner on her first Nobel Prize, making us the first ever married couple to win the Nobel Prize and launching the Curie family legacy of five Nobel Prizes. I was, in 1906, the first woman to become a professor at the University of Paris.'
```
