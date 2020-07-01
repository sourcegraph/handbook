
# Sourcegraph style guide


## Style, tone, and voice

Text in our product, marketing material, documentation, and handbook should be:

- Precise
- Concise
- Clear
- Consistent
- Conversational

The goal of this style guide is to help us all achieve these goals when writing.

### Effectiveness over correctness

This style guide isn't about "correct" and "incorrect" writing. It is about effective writing for our target users. Of course, effectiveness involves correctness to some degree, but only correctness as judged by the audience, not as judged by an appeal to authority.

Consider the common case of using "setup" as a verb, as in "To setup the cluster, ...". Many of our target users consider that usage incorrect and would think (slightly) less of us for using it. It doesn't matter if we think that usage is acceptable; the effect it has on our audience is negative, so we should not use it.

To dispute a guideline in this style guide, argue based on effectiveness, not correctness.

For further reading, see [linguistic prescription on Wikipedia](https://en.wikipedia.org/wiki/Linguistic_prescription).

### Clarity

- Assume the reader is a busy non-native English speaker.

- Assume copy will be read through a screen-reader, poor translation, and on a device/screen that is different than your own.
- Use simple sentence syntax.
- Use the imperative wherever possible ("Publish xyz to...") rather than 2nd-person phrasing ("Let's publish xyz to..." or "We can now publish xyz to...").
- Avoid ambiguous verbs. For example, avoid using verbs like "cluster", "document", "label", "group", "admin", etc., because we commonly use those as nouns.
- Write robust sentences that can be understood even if the reader doesn't recognize all of the words.
- Remove unnecessary words. The [Hemingway App](http://www.hemingwayapp.com/) is a great tool to help you identify ways to simplify prose.
- Avoid passive language. The best way to determine if you've gone passive is to [check for zombies](https://twitter.com/johnsonr/status/259012668298506240?lang=en).

### Jargon and acronyms

- Prefer plain English terms over jargon and acronyms (especially Sourcegraph-specific ones).
  - Example: "sales", "marketing", or "sales and marketing" instead of "GTM" ("go-to-market")

- If you use an acronym, please make sure it's spelled out at first use and therefore searchable. Example: Point of View (POV)
  - Exception: acronyms that have a single obvious meaning when you search them (such as "HTML" or "LSP")
  > See "[Acronyms Seriously Suck](https://gist.github.com/klaaspieter/12cd68f54bb71a3940eae5cdd4ea1764)" from Elon Musk.




## General

### Sentence case

- Use _Sentence case_ not _Title Case_ everywhere (in UI text, button labels, headings, titles).

### Capitalization
- Render proper nouns as their creators/trademarks prefer: Docker, Bitbucket, GitLab, GitHub, React, Git, JavaScript, TypeScript.



### Latinisms

Latinisms (_e.g., i.e., v., etc., via_) are not used in simplified English. Say what you mean in English (for example, that is, as opposed to, and so on, through). Also, _etc._ is a sign of sloppy thinking: make your lists complete, and eliminate the use of this term entirely.

### Punctuation
- As per American usage rules,
  -   commas and periods go inside quotations.
  -   Parentheses go outside if it's a complete sentence inside the parentheses (see [Grammar Girl's explanation](https://www.quickanddirtytips.com/education/grammar/periods-and-parentheses).)
  -   Footnotes go outside, because they're not part of the sentence.

    _Note Bene_: if Sourcegraph ever chooses to localize outside of American English, these rules all change.
- Punctuation goes outside of links ("Hello, [world](#dummy)." not "Hello, [world.](#dummy)").
- Use the most popular US English spelling and phrasing.
- Prefer the serial comma in lists, except where ambiguity would be introduced by including it.

- No spaces between two terms separated by a slash ("a/b", not "a / b").


## Referring to the product and features

- Sourcegraph: main product, prefer using this name unless you need to be more precise.

- Self-hosted Sourcegraph instance: only if clarification between the Sourcegraph.com instance, managed instances, and on-premises instances is required
- Managed Sourcegraph instance: only if clarification between the Sourcegraph.com instance, self-hosted instances, and managed instances is required
- Sourcegraph.com (note the capital `S`): the public instance of Sourcegraph for open source code at https://sourcegraph.com
- Sourcegraph integrations: the general term for our integrations
  - Sourcegraph['s] Phabricator integration
  - Sourcegraph['s] GitHub integration
  - Sourcegraph['s] browser extensions
    - Sourcegraph['s] Chrome extension
    - Sourcegraph['s] Firefox add-on

When referring to the build result of the open source repository, use the name Sourcegraph OSS.

You don't need to use the full name of the product each time you refer to it, but don't use a shortened name that could be confused with an official name. For example:

- Good: "Use the Phabricator integration to get Sourcegraph features in code review"

- Bad: "Use the Sourcegraph Phabricator integration to get Sourcegraph features in code review" (sounds repetitive and stilted)
- Bad: "Use the Phabricator Integration to..." (the capital "I" makes it into a proper noun, which implies it's a separate product from "Sourcegraph Phabricator integration")
- Bad: "Want to use this in your code review tool? Use [Sourcegraph for Phabricator](#_) or [Sourcegraph for GitHub](#_)." (This implies that "Sourcegraph for Phabricator" and "Sourcegraph for GitHub" are official product names.

Only use _we_ and _our_ (as in "our GitHub integration") in informal documents. In documentation or marketing material, depending on the context, just avoid it, or use "the" or "Sourcegraph". {#our}

#### Features

Refer to product features as normal, generic nouns.

- Don't capitalize the first letter of each word. Features are not proper nouns.
  - Good: Here's how to use campaigns.
  - Bad: Here's how to use Campaigns.
- Use the natural plural/singular form. If a feature name (such as "campaigns") is a plural noun, treat it as a plural noun.
  - Good: Campaigns are available.
  - Bad: Campaigns is available.
- Refer to the natural noun of the product feature directly. Avoid `the ___ feature`.
  - Good: Campaigns are available.
  - Bad: The campaigns feature is available.
- Qualify feature names with `Sourcegraph $FEATURE` (and capitalize the feature name) only on marketing pages and only when needed (never in product documentation, in-product text, etc.).

## Conventions

### UX

- Prefer labels over placeholders to describe input fields.
- Use placeholders sparingly. Don't use them for examples or descriptions.

### Links

#### Use descriptive link labels

The text of a link should be a short and specific description of what you'll see/do when you click.

For example:

- Good: See [how to add repositories](#_).
- Bad: See [documentation](#_) for adding repositories.
- Bad: See [this page](#_) for how to add repositories.
- Bad: [Click here](#_) for documentation on adding repositories.

Another example:

- Good: [Edit site configuration](#_) to add a repository.
- Bad: Edit [site configuration](#_) to add a repository.
- Bad: [Go to the site configuration editor](#_) to add a repository.
- Bad: [Click here](#_) to add a repository.

Never use any of the following as link text:

- here
- click here
- this
- this page
- page
- instructions
- these instructions


### Instructions, references, and citations

- Use bold when referring to buttons
> Click **Add user**.
- In documentation, use bold and a symbol, such as a bracket (> ), to display menu option selections or sequences of user interface clicks. For example, **File > Print** indicates that a user selects the Print option from the File menu.
- Never highlight a sentence in boldface text.
- Never directly reference the item (button, menu), just reference the label.
- Match the actual case of the UI text in other products even if it violates our style guide.
 > In the _Single Sign On Url_ field, ...

- Refer to and cite other documents by quoting and linking their title. The quotation marks are not linked, and the period goes outside the quotes.

 > For more information, see "[Monitoring and tracing](#_)".

### Examples

- Don't use examples to compensate for poor documentation.
- Don't use "cutesy" examples.

For consistency, all examples should use the following names (as appropriate).

- People: Alice, Bob, Carol, David, Elizabeth, etc. (alphabetical first names)
- Usernames: `alice`, `bob`, etc.
- Hostnames: example.com and subdomains of example.com (avoid using real names such as `mycompany.com`)
- Email addresses: alice@example.com, bob@example.com, etc.
- URLs: https://sourcegraph.example.com (assume HTTPS)
- Organizations: ABC Organization (`abc-org`)

### Technical

- Treat all supported platforms equally. For example, don't give instructions for Chrome or GitHub in a way that implies they are the default.
- Wherever possible, link to a 3rd-party tool's existing documentation over explaining it in our own documentation, because our explanation can easily become outdated.
- Prefer the `https` (not `http`) URL scheme (`https://example.com` not `http://example.com`). The only exception is if the site actually doesn't support HTTPS.

### Currency

Use shorthand suffixes for shortening numbers in the thousands ("k"), millions ("m"), billions ("b"), and above. Prefer lower case suffixes.

- Good: "$100b"
- Bad: "$100,000"
- Bad: "$100B"
- Bad: "$100Bn"
- Bad: "$100 billion"



## Other good style guides and references

- [Monzo's Tone of Voice](https://monzo.com/tone-of-voice/)
- [Bishop Fox Cybersecurity Style Guide](https://www.bishopfox.com/cybersecurity-style-guide/)
- [Merriam-Webster Dictionary](https://www.merriam-webster.com/)
- [ASD-STE100 Simplified Technical English Specification](http://asd-ste100.org/)


## Specific term usage guidelines

| Use this       | Not this  | Why?        |
|-----------------|------------------|--------------|
|**A**   |   |   |
|admin or site admin | "administrator" or "site administrator"| more conversational, per Quinn|
|alerts   |   |Sourcegraph sends an alert to a notifier that sends a notification to the user. If we're talking about what the product does, it's alerting. If we're talking about what the user experiences, it's notifier/notifying.    |
|**C**  |   |   |
|call site  | callsite  |per Quinn   |
|code host   | codehost  |per Quinn   |
|configuration   | config       | "config" is OK in paths and navigation links|
|custom search pages|   |custom search pages allow users to quickly search within a set of curated repositories, with data and interesting searches shared on that page. For example, “use this custom search page for Python 2-to-3 migration code”. When possible, use the more specific names **Search scope page**  a more specific name for a custom search page that describes search pages at /search/scope/SCOPENAME, or **project search page**, a more specific name for a custom search page that describes pages for projects. For example, the Kubernetes project search page to search across all Kubernetes code.|
|**D**   |   |   |
|documentation  |docs  |"docs" is OK in paths and navigation links. Also, be clear on whether you mean code documentation, or product documentation. |
|email address   |email   |the two are both nouns, meaning different things.   |
|**F**   |   |   |
|field    |   |refers to the first part in the key:value pair   |
|filter|   |Filter describes a parameter that can be added to a query to narrow down search results. A filter is always a parameter, but a parameter may not be a filter.   |
|**G**   |   |   |
|Go   |Golang   |   |
|go to definition   |jump to definition", "jump-to-def", or "j2d"   |   |
|**M**   |   |   |
|macOS   |OS X, OSX, MacOS, MacOSX   |   |
|**N**   |   |   |
|notifier   |   |Sourcegraph sends an alert to a notifier that sends a notification to the user. If we're talking about what the product does, it's alerting. If we're talking about what the user experiences, it's notifier/notifying.    |
|**O**   |   |   |
|OpenID Connect   |OIDC   |   |
|[organization](../sales/index.md#organization)   |"company" or "team" or "org"   |   |
|open source   |"open-source", "Open Source"   |[favoring common usage](https://github.com/sourcegraph/about/issues/508#issuecomment-588600005)   |
|**P**   |   |   |
|Parameter|   |Parameter describes a key:value pair to filter behavior or change search behavior.   |
|PostgreSQL   |Postgres, postgres, PgSQL, Postgresql, PostGres,   |proper name   |
|**R**   |   |   |
|regex   |"regexp" or "regular expressions"   |this is to avoid confusion with RegExp in Javascript, and to avoid conflation with "exp" in Warcraft and other MMORPGs (this is relevant as we onboard younger users whose gaming experience is significant. If they're used to "exp" being experience, they will have to pause for a moment to context-swtich, thus creating confusion, even temporarily, which isn't a good look.|
|Repository   |repo   |   |
|**S**   |   |   |
|Saved searches |   |Saved searches describe complete searches that are used without needing to add more filters or expressions.   |
|Search expression   |   |Search expression describes a valid piece of a search that can be suggested and combined with other expressions to drill down on results.|
|Search scope  | version context  |Used to describe drilling down in a pre-configured scope of repositories across the entire Sourcegraph instance (this persists for navigation and usage outside of the query bar search).  |
|set up (v)/setup (n)   |   |Setup is a noun, set up is a verb ([see notaverb.com/setup](http://notaverb.com/setup), although see [note on descriptivism](#effectiveness-over-correctness))   |
|sign in   |log in   |[Because it's a better UX choice](https://ux.stackexchange.com/questions/1080/using-sign-in-vs-using-log-in). Also remember that "login" is a noun, "log in" is a verb   |
|Sourcegraph   |"sourcegraph", "SourceGraph", or "sg"   |   |
|**T**   |   |   |
|tooltips   |tool-tips  |   |
|**U**   |   |   |
|URL   |url   |   |
