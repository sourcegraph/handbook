# Style and mechanics

We have an editorial style to help us keep our copy clear and consistent, and specific guidelines to write and structure content to make it easy for users to understand and act on.

Remember, we strive for [effectiveness over correctness](../content_guidelines.md#effectiveness-over-correctness). Use these guidelines as a reference, not an authority, and always prioritize what's most effective for our target users.

## Spelling

Use the most popular US English spelling and phrasing.

## Abbreviations, acronyms, latinisms, jargon

Avoid abbreviations, acronyms, latinisms, and jargon when possible. Use complete English words for clarity.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>for example</li>
<li>that is</li>
<li>as opposed to</li>
<li>through</li>
<li>Salesforce</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>e.g.</li>
<li>i.e.</li>
<li>v.</li>
<li>via</li>
<li>SF</li>
</ul>
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
<h5>Yes</h5>
<ul>
<li>Added repository.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Repository was added.</li>
</ul>
</div>
</div>

Use passive voice when you don’t want to assign responsibility for an action. This can reduce tension in a message.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Your access token was invalid.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Invalid access token.</li>
</ul>
</div>
</div>

The best way to determine if you’ve gone passive is to [check for zombies](https://twitter.com/johnsonr/status/259012668298506240?lang=en).

## Present tense

Use present tense to describe the result of actions.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Batch change created</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Batch change has been created</li>
</ul>
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

## Contractions

Use contractions like “we’ll” or “there’s!” They make our writing more conversational.

However, don’t rely on contractions alone for a conversational voice.

## Conversational writing

Our voice is conversational. When we’re talking, we connect words with articles like “the,” “for,” “these,” and “an.” If we remove these from our writing, it makes our copy feel stiff and complicated. We can be flexible, though. If space is a limitation, the article can be omitted.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Create a new batch change</li>
<li>Save your changes</li>
</ul>
</div>
<div class="item no">
<h5>When necessary</h5>
<ul>
<li>Create batch change</li>
<li>Save changes</li>
</ul>
</div>
</div>

Write without rigidity.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Create an account to manage extensions.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>An account is required to manage extensions.</li>
</ul>
</div>
</div>

## Avoid directional language

Avoid any instructions or language that requires the user to see the layout or design of a page or element. This assumes ability and may not reflect the actual layout of the page at a given moment in time.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Choose a repository group.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Choose a repository group at the bottom right of this page.</li>
</ul>
</div>
</div>

## Numbers

Use the numeral when numbers appear in copy. This includes ordinals (numbers that tell the position of something in a list).

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>30+ results</li>
<li>Last updated 2 days ago</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Thirty or more results</li>
<li>Last updated two days ago</li>
</ul>
</div>
</div>

Numbers over 3 digits get commas.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>144</li>
<li>1,200</li>
</ul>
</div>
</div>

### Dates

Spell out the day of the week and the month whenever possible. Abbreviate when space is a limitation. When abbreviated in interface headings and labels, do not use a period.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Thursday, April 16</li>
<li>April 16</li>
<li>Apr 16</li>
</ul>
</div>
</div>

When possible, use natural language to describe dates.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Today</li>
<li>Yesterday</li>
<li>Tomorrow</li>
<li>This week</li>
<li>Next week</li>
<li>Two weeks from now</li>
</ul>
</div>
</div>

When date is written in numerals, the standard format is `YYYY-MM-DD`.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>2020-09-08</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>08.09.2020</li>
<li>08-09-2020</li>
</ul>
</div>
</div>

### Percentages

Use the % symbol instead of spelling out “percent.”

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>2%</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Two percent</li>
</ul>
</div>
</div>

### Ranges and spans

Use an en dash (–) to indicate a range or span of numbers. Do not use spaces before and after the en dash.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Viewing results 100–150</li>
</ul>
</div>
</div>

An en dash is slightly wider than a hyphen (-) but narrower than an em dash (—).

### Money

When writing about US currency, use the dollar sign ($) before the amount. Omit the cents. Do not insert a space between the dollar sign and the number.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>$10</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>$10.00</li>
<li>$ 42</li>
</ul>
</div>
</div>

When writing about monthly pricing, follow the convention: $0/mo. Do not use spaces.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>$150/mo</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>$150 / month</li>
<li>$150/month</li>
<li>$150/pm</li>
</ul>
</div>
</div>

Use shorthand suffixes for shortening numbers in the thousands (`k`), millions (`m`), billions (`b`), and above. Prefer lower case suffixes.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>$100b</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>$100,000</li>
<li>$100B</li>
<li>$100Bn</li>
<li>$100 billion</li>
</ul>
</div>
</div>

### Telephone numbers

Use dashes without spaces between numbers. Don’t use a country code.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>123-456-7890</li>
</ul>
</div>
</div>

### Time

When writing about a time of the day, use numerals and lowercase am or pm, with a space in between. Use 12-hour time.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>5 pm</li>
<li>8:30 pm</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>5pm</li>
<li>8:30PM</li>
</ul>
</div>
</div>

Use an en dash (–) between times to indicate a time period. Don’t insert spaces before and after the en dash.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>8 am–12 pm</li>
<li>6:30 am–18:00 pm</li>
</ul>
</div>
</div>

When referring to an amount of time, use numerals and the full word, with a space in between.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Saved 20 minutes ago</li>
<li>30 seconds ago</li>
</ul>
</div>
</div>

## Punctuation

### Apostrophes

Apostrophes are usually used to make a word possessive. If the word already ends in an s and it’s singular, you also add an’s. If the word ends in an s and is plural, just add an apostrophe.

Watch out for dumb apostrophes (`'`). These are a relic of typewriters, and can be identified by how they’re straight rather than curly. Always use typographic apostrophes (`‘`).

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>This batch change’s results are now available</li>
<li>This batch change is Jen’s favourite</li>
<li>Chris’s favourite batch change</li>
</ul>
</div>
</div>

### Colons

Use a colon to offset a list.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Saved searches support three filters: diffs, commits, and repositories.</li>
</ul>

When a list begins with an interface label, capitalize the first word of the list.

<ul>
<li>
Supported filters: Diffs, commits, and repositories.</li>
</ul>
</div>
</div>

### Commas

Prefer the Oxford or serial comma when writing a list.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Saved searches support three filters: diffs, commits, and repositories.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Saved searches support three filters: diffs, commits and repositories</li>
</ul>
</div>
</div>

### Dashes and hyphens

Use a hyphen (-) without spaces before and after to link words into a single phrase.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>First-time resources</li>
</ul>
</div>
</div>

Use an en dash (–) to indicate a [range or span](#ranges-and-spans), without spaces.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>2–6 possible results</li>
</ul>
</div>
</div>

Use an em (—) dash without spaces to separate clauses in paragraph copy.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>This new feature—a first in advanced workflow tooling—will empower developers around the world.</li>
</ul>
</div>
</div>

### Ellipses

Use ellipses to indicate that a line of copy has been clipped before the end. This is typically used when only a single line of copy will fit, but the content itself is too long. Avoid this when possible.

When ellipses are used to clip a line of copy, clip after at least 2 characters.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Provides basic code intelligence for Java usi…</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Provides basic code intelligence for Java u…</li>
</ul>
</div>
</div>

### Periods

Use periods in complete sentences. Don’t use periods in headlines or labels. Periods go inside quotation marks. They go outside parentheses ( ) when the contained text is part of a larger sentence, and inside when the contained text stands alone.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Updated to only show included filters (diffs, commits).</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Updated to only show included filters (diffs, commits.)</li>
</ul>
</div>
</div>

### Quotation marks

Watch out for dumb quotation marks (`'` and `"`). These are a relic of typewriters, and can be identified by how they’re straight rather than curly. Always use typographic quotation marks (`‘` and `’`, `“` and `”`).

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>‘Example’</li>
<li>“Example Two”</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>'Example'</li>
<li>"Example two"</li>
</ul>
</div>
</div>

### Slashes

Don't use spaces between two terms separated by a slash.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>tool/editor</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>tool / editor</li>
</ul>
</div>
</div>

## Places

Spell out all city names.

When written in paragraph copy, write out country, state, and province names on the first mention. On subsequent mentions, abbreviating is fine.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Now available in Winnipeg.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Now available in WPG.</li>
</ul>
</div>
</div>

## Positive vs. negative

Use positive language rather than negative language. Positives are easier to read and process than negatives. One way to detect negative language is to look for words like “can’t,” “don’t,” etc.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Add a repo to start searching your code.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>If you don’t add a repo, you won’t be able to search your code.</li>
</ul>
</div>
</div>

## Use positive words when talking about positive things

If a sentence begins with a negative word, the sentence’s implication can be misinterpreted as negative.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Remember to add a search filter</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Don’t forget to add a search filter</li>
</ul>
</div>
</div>

## Writing questions

A common error when writing questions is not constructing the sentence as a question. Usually, this can be fixed by changing the word order.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Why are search scopes useful?</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Why search scopes are useful?</li>
</ul>
</div>
</div>

## Writing about ourselves

We describe ourselves with a few different names depending on context, and we should use the right term at the right time.

- **Sourcegraph**: Main product. Prefer using this name unless you need to be more precise.
- **Self-hosted Sourcegraph instance or Sourcegraph Server**: The self-hosted Sourcegraph instance maintained by customers. Only if clarification between Sourcegraph Cloud, managed instances, and on-premises instances is required.
- **Managed Sourcegraph instance**: A fully isolated Sourcegraph Server deployment maintained by the Sourcegraph team for a customer. Only use if clarification between the Sourcegraph Cloud instance, self-hosted instances, and managed instances is required.
- **Sourcegraph Cloud**: The public instance of Sourcegraph for open source code at [sourcegraph.com](https://sourcegraph.com).
- **Sourcegraph integrations**: The general term for our integrations. When referencing specific integrations:
    - Sourcegraph(’s) Phabricator integration
    - Sourcegraph(’s) GitHub integration
    - Sourcegraph(’s) browser extensions
    - Sourcegraph(’s) Chrome extension
    - Sourcegraph(’s) Firefox add-on
- **Sourcegraph OSS**: When referring to the build result of the open source repository.

You don't need to use the full name of the product each time you refer to it, but don't use a shortened name that could be confused with an official name.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Use the Phabricator integration to get Sourcegraph features in code review.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Use the Sourcegraph Phabricator integration to get Sourcegraph features in code review <em>(sounds repetitive and stilted)</em>.</li>
</ul>
</div>
</div>

Always title case our name. Don’t abbreviate or add a space to our name.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Sourcegraph</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>SG</li>
<li>Source Graph</li>
</ul>
</div>
</div>

Only use _we_ and _our_ (as in “our GitHub integration”) in informal documents. In documentation or marketing material, depending on the context, just avoid it, or use “the” or “Sourcegraph”.

### Product names

We capitalize product names. Qualify product names with `Sourcegraph $FEATURE` on first reference. Don't capitalize product names when referencing them generically or in context of taking an action. 

List of product names: 

- Batch Changes
- Code Insights
- Code Intelligence
- Universal Code Search

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>With Sourcegraph Universal Code Search you can...</li>
<li>You can search across all your repositories with Universal Code Search.</li>
<li>Companies benefit from a universal code search tool because...</li>
<li>Sourcegraph Batch Changes are... Batch Changes allow you to...</li>
<li>To create a batch change...</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Use Sourcegraph universal code search to...</li>
<li>With code insights you can...</li>
<li>Here’s how to use code intelligence.</li>
</ul>
</div>
</div>

### Feature names

We don't capitalize features or integrations. 

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Use the Phabricator integration to...</li>
<li>Want to use this in your code review tool? Use Sourcegraph’s <a href="#_" aria-disabled="true">GitHub integration</a>.</li>
<li>Here’s how to use code search.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Use the Phabricator Integration to... <em>(the capital “I” makes it into a proper noun, which implies it’s a product.”)</em></li>
<li>Want to use this in your code review tool? Use <a href="#_" aria-disabled="true">Sourcegraph for GitHub</a>. <em>(Implies that “Sourcegraph for GitHub” is an official product name.)</em></li>
<li>Here’s how to use Code Search.</li>
</ul>
</div>
</div>

Use the natural plural/singular form. If a product or feature name is a plural noun, treat it as a plural noun.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Batch Changes are available.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Batch Changes is available.</li>
</ul>
</div>
</div>

Refer to the natural noun of the product or feature directly.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Batch Changes are available.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>The Batch Changes product is available.</li>
</ul>
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
<h5>Yes</h5>
<ul>
<li>they have a disability</li>
<li>person with disability</li>
<li>people living with disabilities</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>they are disabled</li>
<li>disabled person</li>
</ul>
</div>
</div>

Do not use the term “edge cases” to describe users living with disabilities. This term further marginalizes people already living on the margins. Instead, use the term “stress cases.”

### Gender and sexuality

Don’t call groups of people “guys.” Don’t call women “girls.”

Avoid gendered terms.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Artisan</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Craftsman</li>
</ul>
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
<h5>Yes</h5>
<ul>
<li>After you’ve entered a search query</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Once you’ve entered a search query</li>
</ul>
</div>
</div>

**Right** (could mean “correct,” “the opposite of left,” “politically conservative,” etc.)

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Choose the correct search</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Choose the right search</li>
</ul>
</div>
</div>

**Since** (could refer to a point in time, or a synonym of “because”)

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Because you have a code monitor enabled, you can get email notifications for new events</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Since you have a code monitor enabled, you can get email notifications for new events</li>
</ul>
</div>
</div>

## Avoid idioms

In most languages, idioms are commonly-known phrases packed with meaning. However, idioms don’t often translate into other languages. They can also create confusion for translators that have English as an additional language. It’s better to avoid using idioms at all.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Let’s get started</li>
<li>This information might change</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Let’s get crackin’</li>
<li>Take this with a grain of salt</li>
</ul>
</div>
</div>

## Instructions, references, and citations

Use bold when referring to buttons in documentation.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Click <strong>Add user</strong>.</li>
</ul>
</div>
</div>

In documentation, use bold and a symbol, such as a bracket (`>`), to display menu option selections or sequences of user interface clicks.

<div class="usage">
<div class="item yes">
<h5>Example</h5>
<ul>
<li><strong>File > Print</strong> indicates that a user selects the Print option from the File menu</li>
</ul>
</div>
</div>

Never highlight a sentence in boldface font.

Never directly reference the item (button, menu), just reference the label.

<div class="usage">
<div class="item yes">
<h5>Yes</h5>
<ul>
<li>Click <strong>Add user</strong>.</li>
</ul>
</div>
<div class="item no">
<h5>No</h5>
<ul>
<li>Click the <strong>Add user</strong> button.</li>
</ul>
</div>
</div>

Match the actual case of the UI text in other products even if it violates our style guide.

<div class="usage">
<div class="item yes">
<h5>Example</h5>
<ul>
<li>In the <strong>Single Sign On Url</strong> field, ...</li>
</ul>
</div>
</div>

Refer to and cite other documents by quoting and linking their title. The quotation marks are not linked, and the period goes outside the quotes.

<div class="usage">
<div class="item yes">
<h5>Example</h5>
<ul>
<li>For more information, see “<a href="#_" aria-disabled="true">Monitoring and tracing</a>”.</li>
</ul>
</div>
</div>

### Using examples

Don’t use examples to compensate for poor documentation. Avoid “cutesy” examples.

For consistency, all examples should use the following names (as appropriate).

- **People:** Logan, Morgan, Jordan, Riley (gender-neutral first names)
- **Usernames:** `logan`, `morgan`, `jordan`, `riley`
- **Hostnames:** example.com and subdomains of example.com (avoid using real names such as `mycompany.com`)
- **Email addresses:** logan@example.com, morgan@example.com
- **URLs:** https://sourcegraph.example.com (assume HTTPS)
- **Organizations:** ABC Organization (`abc-org`)

### Technical writing

Treat all supported platforms equally. For example, don’t give instructions for Chrome or GitHub in a way that implies they are the default.

Wherever possible, link to a 3rd-party tool’s existing documentation over explaining it in our own documentation, because our explanation can easily become outdated.

Prefer the `https` URL scheme (`https://example.com` not `http://example.com`). The only exception is if the site actually doesn’t support HTTPS.
