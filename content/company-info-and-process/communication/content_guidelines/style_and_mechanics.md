# Style and mechanics

We have an editorial style to help us keep our copy clear and consistent, and specific guidelines to write and structure content to make it easy for users to understand and act on.

Remember, we strive for [effectiveness over correctness](../content_guidelines/index.md#effectiveness-over-correctness). Use these guidelines as a reference, not an authority, and always prioritize what's most effective for our target users.

## Spelling

Use the most popular US English spelling and phrasing.

## Abbreviations, acronyms, latinisms, jargon

Avoid abbreviations, acronyms, latinisms, and jargon when possible. Use complete English words for clarity.

<div class="usage">
<div class="item yes">

##### Yes

- for example
- that is
- as opposed to
- through
- Salesforce

</div>
<div class="item no">

##### No

- e.g.
- i.e.
- v.
- via
- SF

</div>
</div>

**Further reading:**

- "[Acronyms Seriously Suck](https://gist.github.com/klaaspieter/12cd68f54bb71a3940eae5cdd4ea1764)" from Elon Musk.

## Adverbs and adjectives

Try to avoid adjectives and adverbs. Using adjectives and adverbs (for example, it’s “easy” to get started with Sourcegraph) shapes perception and sets expectations, and can inadvertently lead to a negative emotional experience for our users.

Instead, look for opportunities to capture the same meaning through other forms. What makes an “easy” book easy relative to other books? Can that be used as a scale of relative difficulty?

## Active voice vs. passive voice

Generally, use active voice and avoid passive voice. In active voice, the subject of the sentence does the action. In passive voice, the subject of the sentence has the action done to it.

<div class="usage">
<div class="item yes">

##### Yes

- Added repository.

</div>
<div class="item no">

##### No

- Repository was added.

</div>
</div>

Use passive voice when you don’t want to assign responsibility for an action. This can reduce tension in a message.

<div class="usage">
<div class="item yes">

##### Yes

- Your access token was invalid.

</div>
<div class="item no">

##### No

- Invalid access token.

</div>
</div>

The best way to determine if you’ve gone passive is to [check for zombies](https://twitter.com/johnsonr/status/259012668298506240?lang=en).

## Present tense

Use present tense to describe the result of actions.

<div class="usage">
<div class="item yes">

##### Yes

- Batch change created

</div>
<div class="item no">

##### No

- Batch change has been created

</div>
</div>

## Capitalization

Use _Sentence case_, not _Title Case_, everywhere. This includes:

- [Headings and subheadings](./actionable_language.md#headings-and-subheadings)
- [UI copy](./actionable_language.md#sentences)
- [Buttons](./actionable_language.md#buttons)
- [Links](./actionable_language.md#links)
- [Error messages](./actionable_language.md#error-messages)
- [Confirmation messages](./actionable_language.md#confirmation-messages)
- [Success messages](./actionable_language.md#success-messages)
- [Placeholders](./actionable_language.md#placeholders)
- [Input labels](./actionable_language.md#)

All-caps should be used sparingly and only for specific purposes (all-caps copy is less accessible and harder to read). Never use all-caps within a sentence.

Render proper nouns as their creators/trademarks prefer: Docker, Bitbucket, GitLab, GitHub, React, Git, JavaScript, TypeScript.

If it's displayed within another product (e.g. a VS Code extension or Slack App) match the capitalization norms of that product.

## Contractions

Use contractions like “we’ll” or “there’s!” They make our writing more conversational.

However, don’t rely on contractions alone for a conversational voice.

## Conversational writing

Our voice is conversational. When we’re talking, we connect words with articles like “the,” “for,” “these,” and “an.” If we remove these from our writing, it makes our copy feel stiff and complicated. We can be flexible, though. If space is a limitation, the article can be omitted.

<div class="usage">
<div class="item yes">

##### Yes

- Create a new batch change
- Save your changes

</div>
<div class="item no">

##### When necessary

- Create batch change
- Save changes

</div>
</div>

Write without rigidity.

<div class="usage">
<div class="item yes">

##### Yes

- Create an account to manage extensions.

</div>
<div class="item no">

##### No

- An account is required to manage extensions.

</div>
</div>

## Avoid directional language

Avoid any instructions or language that requires the user to see the layout or design of a page or element. This assumes ability and may not reflect the actual layout of the page at a given moment in time.

<div class="usage">
<div class="item yes">

##### Yes

- Choose a repository group.

</div>
<div class="item no">

##### No

- Choose a repository group at the bottom right of this page.

</div>
</div>

## Numbers

- Spell out numbers 1–9 except for percentages and ranges.
- Use numerals for 10 upwards.
- Always use the numeral for ordinals (numbers that tell the position of something in a list).

<div class="usage">
<div class="item yes">

##### Yes

- 30+ results
- Last updated two days ago
- Only 5% of developers prefer working in an office.
- More than 6 out of 10 software professionals reported a significant increase...

</div>
<div class="item no">

##### No

- Thirty or more results
- Last updated 2 days ago
- Only five % of developers prefer working in an office.
- More than six out of ten software professionals reported a significant increase...

</div>
</div>

Numbers over three digits get commas.

<div class="usage">
<div class="item yes">

##### Yes

- 144
- 1,200

</div>
</div>

### Dates

Spell out the day of the week and the month whenever possible. Abbreviate when space is a limitation. When abbreviated in interface headings and labels, do not use a period.

<div class="usage">
<div class="item yes">

##### Yes

- Thursday, April 16
- April 16
- Apr 16

</div>
</div>

When possible, use natural language to describe dates.

<div class="usage">
<div class="item yes">

##### Yes

- Today
- Yesterday
- Tomorrow
- This week
- Next week
- Two weeks from now

</div>
</div>

When date is written in numerals, the standard format is `YYYY-MM-DD`.

<div class="usage">
<div class="item yes">

##### Yes

- 2020-09-08

</div>
<div class="item no">

##### No

- 08.09.2020
- 08-09-2020

</div>
</div>

### Percentages

Use the % symbol instead of spelling out “percent.”

<div class="usage">
<div class="item yes">

##### Yes

- 2%

</div>
<div class="item no">

##### No

- Two percent

</div>
</div>

### Ranges and spans

Use an en dash (–) to indicate a range or span of numbers. Do not use spaces before and after the en dash.

<div class="usage">
<div class="item yes">

##### Yes

- Viewing results 100–150

</div>
</div>

An en dash is slightly wider than a hyphen (-) but narrower than an em dash (—).

### Money

When writing about US currency, use the dollar sign ($) before the amount. Prefer to omit the cents. Use commas to separate thousands, and when unavoidable, a period to separate the cents. Do not insert a space between the dollar sign and the number.

<div class="usage">
<div class="item yes">

##### Yes

- $10
- $42
- $1,500
- $149.99

</div>
<div class="item no">

##### No

- $10.00
- $ 42
- $1500
- $149,99

</div>
</div>

When writing about monthly pricing, follow the convention: $0/mo. Do not use spaces.

<div class="usage">
<div class="item yes">

##### Yes

- $150/mo

</div>
<div class="item no">

##### No

- $150 / month
- $150/month
- $150/pm

</div>
</div>

Use shorthand suffixes for shortening numbers in the thousands (`k`), millions (`m`), billions (`b`), and above. Prefer lower case suffixes.

<div class="usage">
<div class="item yes">

##### Yes

- $100b

</div>
<div class="item no">

##### No

- $100,000
- $100B
- $100Bn
- $100 billion

</div>
</div>

### Telephone numbers

Use the country code, prefixed with `+`, without a space. Use spaces between sets of numbers for readability. The number of digits in each set of numbers may [differ by country](https://en.wikipedia.org/wiki/National_conventions_for_writing_telephone_numbers).

<div class="usage">
<div class="item yes">

##### Yes

- +1 123 456 7890

</div>
<div class="item no">

##### No

- 123 456 870
- 1-123-456-789

</div>
</div>

### Time

When writing about a time of the day, use numerals and lowercase am or pm, with a space in between. Use 12-hour time.

<div class="usage">
<div class="item yes">

##### Yes

- 5 pm
- 8:30 pm

</div>
<div class="item no">

##### No

- 5pm
- 8:30PM

</div>
</div>

Use an en dash (–) between times to indicate a time period. Don’t insert spaces before and after the en dash.

<div class="usage">
<div class="item yes">

##### Yes

- 8 am–12 pm
- 6:30 am–18:00 pm

</div>
</div>

When referring to an amount of time, use numerals and the full word, with a space in between.

<div class="usage">
<div class="item yes">

##### Yes

- Saved 20 minutes ago
- 30 seconds ago

</div>
</div>

## Punctuation

### Apostrophes

Apostrophes are usually used to make a word possessive. If the word already ends in an s and it’s singular, you also add an’s. If the word ends in an s and is plural, just add an apostrophe.

Watch out for dumb apostrophes (`'`). These are a relic of typewriters, and can be identified by how they’re straight rather than curly. Always use typographic apostrophes (`‘`).

In Markdown content in our handbook you don't need to worry about this rule: dumb apostrophes are automatically replaced with typographic quotation marks.

<div class="usage">
<div class="item yes">

##### Yes

- This batch change’s results are now available
- This batch change is Jen’s favourite
- Chris’s favourite batch change

</div>
</div>

### Colons

Use a colon to offset a list.

<div class="usage">
<div class="item yes">

##### Yes

- Saved searches support three filters: diffs, commits, and repositories.

When a list begins with an interface label, capitalize the first word of the list.

<li>
Supported filters: Diffs, commits, and repositories.</li>

</div>
</div>

### Commas

Prefer the Oxford or serial comma when writing a list.

<div class="usage">
<div class="item yes">

##### Yes

- Saved searches support three filters: diffs, commits, and repositories.

</div>
<div class="item no">

##### No

- Saved searches support three filters: diffs, commits and repositories

</div>
</div>

### Dashes and hyphens

Use a hyphen (-) without spaces before and after to link words into a single phrase. This is only necessary where the phrase appears in front of a noun to describe it (acting as an adjective).

<div class="usage">
<div class="item yes">

##### Yes

<li>Our short-term plan is to...
</li>

</div>
<div class="item no">

##### No

- In the short-term, we will work on...

</div>
</div>

Use an en dash (–) to indicate a [range or span](#ranges-and-spans), without spaces.

<div class="usage">
<div class="item yes">

##### Yes

- 2–6 possible results

</div>
</div>

Use an em dash (—) without spaces to separate clauses in paragraph copy.

<div class="usage">
<div class="item yes">

##### Yes

- This new feature—a first in advanced workflow tooling—will empower developers around the world.

</div>
</div>

### Ellipses

Use ellipses to indicate that a line of copy has been clipped before the end. This is typically used when only a single line of copy will fit, but the content itself is too long. Avoid this when possible.

When ellipses are used to clip a line of copy, clip after at least 2 characters.

<div class="usage">
<div class="item yes">

##### Yes

- Provides basic code intelligence for Java usi…

</div>
<div class="item no">

##### No

- Provides basic code intelligence for Java u…

</div>
</div>

### Periods

Use periods in complete sentences. Don’t use periods in headlines or labels. Periods go inside quotation marks. They go outside parentheses ( ) when the contained text is part of a larger sentence, and inside when the contained text stands alone.

<div class="usage">
<div class="item yes">

##### Yes

- Updated to only show included filters (diffs, commits).

</div>
<div class="item no">

##### No

- Updated to only show included filters (diffs, commits.)

</div>
</div>

### Quotation marks

When quoting content, use double quotation marks. Use single quotation marks to quote content within an existing quote.

In HTML, using `<q></q>` will automatically apply the correct quotation marks for nested `<q>` tags.

<div class="usage">
<div class="item yes">

##### Yes

- Add an insight to “Test Dashboard”
- “When quoting inside existing quotes, ‘Single quotes’ are the way to go”

</div>
<div class="item no">

##### No

- Add an insight to ‘Test Dashboard’
- “When quoting inside existing quotes, avoid “double quoting””

</div>
</div>

Watch out for dumb quotation marks (`'` and `"`). These are a relic of typewriters, and can be identified by how they’re straight rather than curly. Always use typographic quotation marks (`‘` and `’`, `“` and `”`).<br>

In Markdown content in our handbook and blog you don't need to worry about this rule: dumb quotation marks are automatically replaced with typographic quotation marks.
In HTML, the easiest way to add the appropriate typographic quotation marks is to wrap the quote in `<q></q>` instead of manually quoting.

<div class="usage">
<div class="item yes">

##### Yes

- ‘Example’
- “Example Two”

</div>
<div class="item no">

##### No

- 'Example'
- "Example two"

</div>
</div>

### Slashes

Don't use spaces between two terms separated by a slash.

<div class="usage">
<div class="item yes">

##### Yes

- tool/editor

</div>
<div class="item no">

##### No

- tool / editor

</div>
</div>

## Places

Spell out all city names.

When written in paragraph copy, write out country, state, and province names on the first mention. On subsequent mentions, abbreviating is fine.

<div class="usage">
<div class="item yes">

##### Yes

- Now available in Winnipeg.

</div>
<div class="item no">

##### No

- Now available in WPG.

</div>
</div>

## Positive vs. negative

Use positive language rather than negative language. Positives are easier to read and process than negatives. One way to detect negative language is to look for words like “can’t,” “don’t,” etc.

<div class="usage">
<div class="item yes">

##### Yes

- Add a repo to start searching your code.

</div>
<div class="item no">

##### No

- If you don’t add a repo, you won’t be able to search your code.

</div>
</div>

## Use positive words when talking about positive things

If a sentence begins with a negative word, the sentence’s implication can be misinterpreted as negative.

<div class="usage">
<div class="item yes">

##### Yes

- Remember to add a search filter

</div>
<div class="item no">

##### No

- Don’t forget to add a search filter

</div>
</div>

## Writing questions

A common error when writing questions is not constructing the sentence as a question. Usually, this can be fixed by changing the word order.

<div class="usage">
<div class="item yes">

##### Yes

- Why are search scopes useful?

</div>
<div class="item no">

##### No

- Why search scopes are useful?

</div>
</div>

## Writing about ourselves

We describe ourselves with a few different names depending on context, and we should use the right term at the right time.

- **Sourcegraph**: Main product. This name is always preferred unless you need to clarify between the 3 deployment methods for Sourcegraph below.
- **Sourcegraph self-hosted**: On-premises and self-managed version of Sourcegraph.
- **Sourcegraph Cloud** Dedicated, single-tenant Sourcegraph instances managed and provisioned by the Sourcegraph team. This was previously referred to as "managed instances."
- **Sourcegraph.com / "dotcom"**: This is the service publicly available at [sourcegraph.com](https://sourcegraph.com). It can be used to search top open source repositories.
- **Sourcegraph App**: This is the single-user app version of Sourcegraph.
- **Sourcegraph OSS**: When referring to the build result of the open source repository.
- **Sourcegraph integrations**: The general term for our integrations. When referencing specific integrations:
  - Sourcegraph(’s) Phabricator integration
  - Sourcegraph(’s) GitHub integration
  - Sourcegraph(’s) browser extensions
  - Sourcegraph(’s) Chrome extension
  - Sourcegraph(’s) Firefox add-on
- **Code intelligence platform**: Use when referring to our category or our entire suite of products and features.

You don't need to use the full name of the product each time you refer to it, but don't use a shortened name that could be confused with an official name.

<div class="usage">
<div class="item yes">

##### Yes

- Use the Phabricator integration to get Sourcegraph features in code review.

</div>
<div class="item no">

##### No

- Use the Sourcegraph Phabricator integration to get Sourcegraph features in code review _(sounds repetitive and stilted)_.

</div>
</div>

Always title case our name. Don’t abbreviate or add a space to our name.

<div class="usage">
<div class="item yes">

##### Yes

- Sourcegraph

</div>
<div class="item no">

##### No

- SG
- Source Graph

</div>
</div>

Only use _we_ and _our_ (as in “our GitHub integration”) in informal documents. In documentation or marketing material, depending on the context, just avoid it, or use “the” or “Sourcegraph”.

### Product names

We capitalize product names. Qualify product names with `Sourcegraph $FEATURE` on first reference. Don't capitalize product names when referencing them generically or in context of taking an action.

List of product names:

- Batch Changes
- Code Insights
- Code Search

We do not capitalize our category name (code intelligence platform) or platform positioning.

<div class="usage">
<div class="item yes">

##### Yes

- With Sourcegraph Code Search you can...
- You can search across all your repositories with Universal Code Search.
- Companies benefit from a universal code search tool because...
- Sourcegraph Batch Changes is... Batch Changes allows you to...
- To create a batch change...
- You can create batch changes for various purposes, such as upgrading dependencies across...
- Sourcegraph is a code intelligence platform that enables you to understand, fix, and automate across your entire codebase.
- You can get started with Sourcegraph Cloud today.

</div>
<div class="item no">

##### No

- Use Sourcegraph universal code search to...
- With code insights you can...
- Here’s how to use code search.
- Our Code Intelligence Platform enables you to understand, fix, and automate across your entire codebase.

</div>
</div>

### Feature names

We don't capitalize features or integrations.

<div class="usage">
<div class="item yes">

##### Yes

- Use the Phabricator integration to...
- Want to use this in your code review tool? Use Sourcegraph’s <a href="#_" aria-disabled="true">GitHub integration</a>.

</div>
<div class="item no">

##### No

- Use the Phabricator Integration to... _(the capital “I” makes it into a proper noun, which implies it’s a product.”)_
- Want to use this in your code review tool? Use <a href="#_" aria-disabled="true">Sourcegraph for GitHub</a>. _(Implies that “Sourcegraph for GitHub” is an official product name.)_

</div>
</div>

If a product name is a plural noun, treat it as a singular noun. If a feature is a plural noun, treat it as a plural noun. When referencing products generically or in context of taking an action, use the natural plural/singular form

<div class="usage">
<div class="item yes">

##### Yes

- Batch Changes is available.
- Code Insights is now available.

</div>
<div class="item no">

##### No

- Batch Changes are available.

</div>
</div>

Refer to the natural noun of the product or feature directly.

<div class="usage">
<div class="item yes">

##### Yes

- Batch Changes is available.

</div>
<div class="item no">

##### No

- The Batch Changes product is available.

</div>
</div>

### Sourcegraph Cloud

When talking about Sourcegraph Cloud, we should:

- Position Sourcegraph Cloud as something you sign up for, not something you request access to.
- Use language that highlights the absolute benefits of single-tenant Cloud: dedicated, isolated, secure, etc.
- Only mention comparative benefits, like no maintenance, scaling, or upgrading when making a direct comparison to Cloud vs Self-hosted.

<div class="usage">
<div class="item yes">

##### Yes

- Sign up for Sourcegraph Cloud today.
- Sourcegraph Cloud uses a single-tenant architecture with a dedicated, isolated instance for each organization.

</div>
<div class="item no">

##### No

- Request access to Sourcegraph Cloud today.
- Best of all, we maintain Sourcegraph Cloud for you.

</div>
</div>

Be careful to only capitalize the word "Cloud" in certain situations:

- Capitalize "Cloud" when referring directly to the product as a proper noun.
- Capitalize "Cloud" when using it as shorthand that refers directly to the product. In this case, it should still be treated as a proper noun. Using "Cloud" as shorthand should only be done to avoid the repitition of saying "Sourcegraph Cloud" repeatedly.
- Do not capitalize "cloud" when referring to it as a common noun or when referring to general cloud technology.

<div class="usage">
<div class="item yes">

##### Yes

- We recommend you use Sourcegraph Cloud. With Cloud, you can use X, Y, and Z features.
- Cloud, our newest offering, features X Y Z benefits.
- You can now run Sourcegraph on the cloud.

</div>
<div class="item no">

##### No

- Sourcegraph cloud is our newest product.
- You can run Sourcegraph on the Cloud.
- This version of Sourcegraph is Cloud-based.

</div>
</div>

## Sourcegraph App

When talking about the Sourcegraph app, we should:

- Use `Sourcegraph App` as the formal product name. Avoid referring to the product as `App`.
- Only use the formal name, `Sourcegraph App`, when trying to convey the difference between this product and other Sourcegraph products.
- When talking about or describing the product otherwise, refer to it in simple human language, such as `the Sourcegraph app` or `the app`.

Tactically, the formal name `Sourcegraph App` can be used for titles and headers in written material when we want to call out that specific product. When referencing the app elsewhere (such as in descriptive text on a web page or docs page), it is preferred to refer to it as `the Sourcegraph app`.

<div class="usage">
<div class="item yes">

##### Yes

- I suggest you try out the Sourcegraph app.
- **Sourcegraph App**: the best way for individuals to run Sourcegraph.

</div>
<div class="item no">

##### No

- Have you tried running Sourcegraph App?
- You can run App on your local machine.

</div>
</div>

## Writing about people

We design and build our platforms with a human-centered point of view. Whenever we write something for our digital platforms, we need to write in a way that’s compassionate, inclusive, and respectful.

Here are some specific guidelines for how we write about people.

### Disability

Avoid disability-related idioms like “lame” or “falling on deaf ears.”

Default to person-first language rather than identity-first language.

<div class="usage">
<div class="item yes">

##### Yes

- they have a disability
- person with disability
- people living with disabilities

</div>
<div class="item no">

##### No

- they are disabled
- disabled person

</div>
</div>

Do not use the term “edge cases” to describe users living with disabilities. This term further marginalizes people already living on the margins. Instead, use the term “stress cases.”

### Gender and sexuality

Don’t call groups of people “guys.” Don’t call women “girls.”

Avoid gendered terms.

<div class="usage">
<div class="item yes">

##### Yes

- Artisan

</div>
<div class="item no">

##### No

- Craftsman

</div>
</div>

It’s okay to use “they” as a singular pronoun. If there’s no inherent purpose to specifying a gender, default to “they.”

### Hearing

Use lower-case “deaf,” “hard of hearing,” or “hearing loss” as adjectives to describe someone with hearing loss.

### Vision

Use lower-case “blind” to describe someone who is unable to see. Use “low vision” or “vision loss” as adjectives to describe a person with limited vision.

## Avoid words with multiple meanings

Some words to watch out for:

**Once** (could mean “one time,” “after,” “in the past,” or “when”)

<div class="usage">
<div class="item yes">

##### Yes

- After you’ve entered a search query

</div>
<div class="item no">

##### No

- Once you’ve entered a search query

</div>
</div>

**Right** (could mean “correct,” “the opposite of left,” “politically conservative,” etc.)

<div class="usage">
<div class="item yes">

##### Yes

- Choose the correct search

</div>
<div class="item no">

##### No

- Choose the right search

</div>
</div>

**Since** (could refer to a point in time, or a synonym of “because”)

<div class="usage">
<div class="item yes">

##### Yes

- Because you have a code monitor enabled, you can get email notifications for new events

</div>
<div class="item no">

##### No

- Since you have a code monitor enabled, you can get email notifications for new events

</div>
</div>

## Avoid idioms

In most languages, idioms are commonly-known phrases packed with meaning. However, idioms don’t often translate into other languages. They can also create confusion for translators that have English as an additional language. It’s better to avoid using idioms at all.

<div class="usage">
<div class="item yes">

##### Yes

- Let’s get started
- This information might change

</div>
<div class="item no">

##### No

- Let’s get crackin’
- Take this with a grain of salt

</div>
</div>

## Instructions, references, and citations

Use descriptive link text, never `here`.

<div class="usage">
<div class="item yes">

##### Yes

- See [Batch Changes documentation](#) for more information.
- If you encounter a problem, [file an issue](#).

</div>
<div class="item no">

##### No

- For more information about Batch Changes, see documentation [here](#).
- If you encounter a problem, click [here](#) to file an issue.

</div>
</div>

Use bold when referring to buttons in documentation.

<div class="usage">
<div class="item yes">

##### Yes

- Click **Add user**.

</div>
</div>

In documentation, use bold and a symbol, such as a bracket (`>`), to display menu option selections or sequences of user interface clicks.

<div class="usage">
<div class="item yes">

##### Example

- **File > Print** indicates that a user selects the Print option from the File menu

</div>
</div>

Never highlight a sentence in boldface font.

Never directly reference the item (button, menu), just reference the label.

<div class="usage">
<div class="item yes">

##### Yes

- Click **Add user**.

</div>
<div class="item no">

##### No

- Click the **Add user** button.

</div>
</div>

Match the actual case of the UI text in other products even if it violates our style guide.

<div class="usage">
<div class="item yes">

##### Example

- In the **Single Sign On Url** field, ...

</div>
</div>

Refer to and cite other documents by quoting and linking their title. The quotation marks are not linked, and the period goes outside the quotes.

<div class="usage">
<div class="item yes">

##### Example

- For more information, see “<a href="#_" aria-disabled="true">Monitoring and tracing</a>”.

</div>
</div>

### Using examples

Don’t use examples to compensate for poor documentation. Avoid “cutesy” examples.

For consistency, all examples should use the following names (as appropriate).

- **People:** Logan, Morgan, Jordan, Riley, Cris, Cami, Dani, Alex, Chidi, Akira, Sam (or other [gender-neutral first names](https://en.wikipedia.org/wiki/Unisex_name), instead of the traditional Alice, Bob, Charles...)
- **Usernames:** `logan`, `morgan`, `jordan`, `riley`, `cris`, `cami`, `dani`, `alex`, `chidi`, `akira`, `sam`
- **Hostnames:** example.com and subdomains of example.com (avoid using real names such as `mycompany.com`)
- **Email addresses:** logan@example.com, morgan@example.com
- **URLs:** https://sourcegraph.example.com (assume HTTPS)
- **Organizations:** ABC Organization (`abc-org`)

### Technical writing

Treat all supported platforms equally. For example, don’t give instructions for Chrome or GitHub in a way that implies they are the default.

Wherever possible, link to a 3rd-party tool’s existing documentation over explaining it in our own documentation, because our explanation can easily become outdated.

Prefer the `https` URL scheme (`https://example.com` not `http://example.com`). The only exception is if the site actually doesn’t support HTTPS.

### Caption tracks and transcripts

Provide caption tracks and transcripts for all video and audio media. The style and mechanics in these content guidelines should be followed where possible, particularly with [product and feature names](style_and_mechanics.md#product-names), [capitalization](style_and_mechanics.md#capitalization-names), and [punctuation](style_and_mechanics.md#punctuation).

While automatic transcription tools like Otter are recommended, the generated transcript must be treated as a first draft. Review the transcript for accuracy, formatting, and style conventions.

Where a narrator describes code, search queries, or other text that also appears in a video, match the captions to the text and formatting shown in the video.

<div class="usage">
<div class="item yes">

##### Example

- Search query in video says `ReadFile`, but automatic transcript says `read file`. Transcript should be updated to `ReadFile` as shown in the video.

</div>
</div>
