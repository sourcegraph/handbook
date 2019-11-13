# Sourcegraph style guide

Text in our product, marketing material, documentation, and handbook should be:

- Precise
- Clear
- Consistent

The goal of this style guide is to help us all achieve these goals when writing.

## General

- Use "Sentence case" not "Title Case" everywhere (in UI text, button labels, headings, titles, etc.).
- Render proper nouns as their creators prefer ("GitHub" not "Github").
- Remove unnecessary words.
- Punctuation goes outside of quotation marks, except in marketing when displaying a quote.
- Use the most popular US English spelling and phrasing.
- Prefer the serial comma in lists, except where ambiguity would be introduced by including it.
- No spaces between two terms separated by a slash ("a/b", not "a / b").

### Clarity

Assume the reader is a busy non-native English speaker.

- Assume copy will be read through a screen-reader, poor translation, and on a device/screen that is different than your own.
- Remove unnecessary words.
- Use simple sentence syntax.
  - Prefer commands ("Publish xyz to...") to 2nd-person phrasing ("Let's publish xyz to..." or "We can now publish xyz to...").
- Avoid ambiguous verbs. For example, avoid using verbs like "cluster", "document", "label", "group", "admin", etc., because we commonly use those as nouns.
- Write robust sentences that can be understood even if the reader doesn't recognize all of the words.

### Referring to the product and features

- Sourcegraph: main product, prefer using this name unless you need to be more precise
  - Sourcegraph.com: the public instance of Sourcegraph for open-source code at https://sourcegraph.com
  - Sourcegraph integrations: the general term for our integrations
    - Sourcegraph['s] Phabricator integration
    - Sourcegraph['s] GitHub integration
    - Sourcegraph['s] browser extensions
      - Sourcegraph['s] Chrome extension
      - Sourcegraph['s] Firefox add-on

When referring to the build result of the open-source repository, use the name Sourcegraph OSS.

You don't need to use the full name of the product each time you refer to it, but don't use a shortened name that could be confused with an official name. For example:

- Good: "Use the Phabricator integration to get Sourcegraph features in code review"
- Bad: "Use the Sourcegraph Phabricator integration to get Sourcegraph features in code review" (sounds repetitive and stilted)
- Bad: "Use the Phabricator Integration to..." (the capital "I" makes it into a proper noun, which implies it's a separate product from "Sourcegraph Phabricator integration")
- Bad: "Want to use this in your code review tool? Use [Sourcegraph for Phabricator](#_) or [Sourcegraph for GitHub](#_)." (This implies that "Sourcegraph for Phabricator" and "Sourcegraph for GitHub" are official product names.

Only use "our" (as in "our GitHub integration") in discussion threads or informal documents; in documentation or marketing material, depending on the context, use "the" or "Sourcegraph".

## Conventions

### UX

- Prefer labels over placeholders to describe input fields.
- Use placeholders sparingly. Don't use them for examples or descriptions.

### Links

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

Render references to UI text in bold. Match the actual case of the UI text in other products even if it violates our style guide.

> Click **Add user**.

> In the \*_Single Sign On Url_ field, ...

Refer to and cite other documents by quoting and linking their title. The quotation marks are not linked, and the period goes outside the quotes.

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

- Treat all supported platforms equally. For example, don't give instructions for Chrome or GitHub in a way that implies they are the "default".
- Prefer linking to a 3rd-party tool's existing documentation over explaining it in our own documentation (because our explanation can easily become outdated).

### Specific terms in prose

- Repository (not "repo")
- Organization (not "org")
- When referring to a user's assumed corporate entity or employer, prefer calling it an "[organization](../sales/index.md#organization)" (not "company" or "team")
- Email address (not "email")
- Admin or Site admin (not "administrator" or "site administrator")
- Documentation not docs ("docs" is OK in paths and navigation links)
- Configuration not config ("config" is OK in paths and navigation links)
- Setup is a noun, "set up" is a verb ([see notaverb.com/setup](http://notaverb.com/setup), although see [note on descriptivism](#effectiveness-over-correctness))
- Prefer "sign in" to "log in" (also: "login" is a noun, "log in" is a verb)
- Sourcegraph (not "sourcegraph", "SourceGraph", or "sg")
- URL (not "url")
- OpenID Connect (not "OIDC")
- PostgreSQL (not any of: Postgres, postgres, PgSQL, Postgresql, PostGres, etc.)
- Go (not "Golang")
- macOS (not any of: OS X, OSX, MacOS, MacOSX, etc.)
- Capitalize as shown (in prose): Docker, Bitbucket, GitLab, GitHub, React, Git, JavaScript, TypeScript (all according to the intent of the creator)
- Prefer "go to definition" (not "jump to definition", "jump-to-def", or "j2d")
- Prefer regexp ("not regex" or "regular expressions")
- Prefer "code host" (not "codehost")
- Prefer "call site" (not "callsite")
- Prefer "tooltips" (not "tool-tips")

## Effectiveness over correctness

This style guide isn't about "correct" and "incorrect" writing. It is about effective writing (for our target users). Of course, effectiveness involves correctness to some degree, but only correctness as judged by the audience, not as judged by an appeal to authority.

Consider the common case of using "setup" as a verb, as in "To setup the cluster, ...". Many of our target users consider that usage incorrect and would think (slightly) less of us for using it. It doesn't matter if we think that usage is acceptable; the effect it has on our audience is negative, so we should not use it.

To dispute a guideline in this style guide, argue based on effectiveness, not correctness.

For further reading, see [linguistic prescription on Wikipedia](https://en.wikipedia.org/wiki/Linguistic_prescription).
