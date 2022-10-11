# Using relative paths to link handbook pages

When adding a link to another handbook page, it is best practise to use relative paths. A relative path refers to a location that is relative to a current directory. You can take a look at this video of Jean explaining relative paths and how they work.

<video controls crossorigin>
  <source src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/Relative-paths-in-the-handbook.mp4" />
  <track default kind="captions" label="Captions" src="https://cors-anywhere.sgdev.org/https://sourcegraphstatic.com/handbook/Relative-paths-in-the-handbook.vtt" />
</video>

To sum up, the path described the location of the file, naming every directory before the file (called .md). Relative paths are a way of indicating where the file is. The program that reads the relative paths interprets links from where it is at the moment, so we need to make sure to indicate if the directory is different to the one we are at the moment.

Example 1:
If we are linking the Buddy program handbook page (handbook/people-ops/onboarding/buddy-program.md) to the Onboarding for hiring managers page (handbook/people-ops/onboarding/onboarding-for-hiring-managers.md) we will only need to say **buddy-program.md** because they share the same directory.
However, if we want to link the Buddy program handbook page to Engineering onboarding page (handbook/engineering/onboarding.md) we would need to use ../ to go back in the directory and then indicate the correct path: **../../engineering/onboarding.md**

Example 2:
I am on the [Code of conduct](../../company-info-and-process/communication/code_of_conduct.md) (handbook/content/company-info-and-process/communication/code_of_conduct.md). I want to link to a [specific section](../../company-info-and-process/about-sourcegraph/index.md#sourcegraph-open-product-open-company-open-source) of our [About Sourcegraph](../../company-info-and-process/about-sourcegraph/index.md) page. I will use the following path: **../about-sourcegraph/index.md#sourcegraph-open-product-open-company-open-source**. Method:

- I use one set of **../** to go from the **communication** folder (where the Code of conduct is) to the **company-info-and-process** folder (where the About Sourcegraph page is).
- I add **about-sourcegraph/index.md** because that is the file path of the page I want to link to. You can see "index" in the file path when you open or edit the file in GitHub.
- I add **#sourcegraph-open-product-open-company-open-source** using a **#** to indicate the specific section on the page to link to.

**Why do we do this?**
While it is possible to use absolute URLs (ones that include the domain e.g. https://handbook.sourcegraph.com) to link to pages, it makes the handbook not navigatable and self-contained when navigating a different version of the handbook on GitHub or locally.

_Remember that if the .md file name changes or the directory changes (because you’ve moved the file to another team’s page, for example) you will need to update the path._
