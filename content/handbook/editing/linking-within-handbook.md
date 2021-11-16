# Using relative paths to link handbook pages

When adding a link to another handbook page, it is best practise to use relative paths. A relative path refers to a location that is relative to a current directory. You can take a look at this video of Jean explaining relative paths and how they work.

<video controls crossorigin>
  <source src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/Relative-paths-in-the-handbook.mp4" />
  <track default kind="captions" label="Captions" src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/Relative-paths-in-the-handbook.vtt" />
</video>

To sum up, the path described the location of the file, naming every directory before the file (called .md). Relative paths are a way of indicating where the file is. The program that reads the relative paths interprets links from where it is at the moment, so we need to make sure to indicate if the directory is different to the one we are at the moment.

Example:
If we are linking the Buddy program handbook page (handbook/people-ops/onboarding/buddy-program.md) to the Onboarding for hiring managers page (handbook/people-ops/onboarding/onboarding-for-hiring-managers.md) we will only need to say **buddy-program.md** because they share the same directory.
However, if we want to link the Buddy program handbook page to Engineering onboarding page (handbook/engineering/onboarding.md) we would need to use ../ to go back in the directory and then indicate the correct path: **../../engineering/onboarding.md**

**Why do we do this?**
While it is possible to use absolute URLs (ones that include the domain e.g. https://handbook.sourcegraph.com) to link to pages, if the domain changes, it is more difficult to update the URLs compared to using relative URLs.

_Remember that if the .md file name changes or the directory changes (because you’ve moved the file to another team’s page, for example) you will need to update the path._
