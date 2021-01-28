# Terminology guidelines

We use certain words in a special way. This word list defines our terminology to make sure we all use the same words for the same things.

## Writing about ourselves

We describe ourselves with a few different names depending on context, and we should use the right term at the right time.

- **Sourcegraph**: Main product. Prefer using this name unless you need to be more precise.
- **Self-hosted Sourcegraph instance**: Only if clarification between Sourcegraph Cloud, managed instances, and on-premises instances is required.
- **Managed Sourcegraph instance**: Only if clarification between the Sourcegraph Cloud instance, self-hosted instances, and managed instances is required.
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
<li>Use the Sourcegraph Phabricator integration to get Sourcegraph features in code review. <em>(sounds repetitive and stilted)</em></li>
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

## Term usage

| Use this       | Not this  | Why?        |
|-----------------|------------------|--------------|
|**A**   |   |   |
|admin or site admin | "administrator" or "site administrator"| More conversational, per Quinn|
|alerts   |   |Sourcegraph sends an alert to a notifier that sends a notification to the user. If we're talking about what the product does, it's alerting. If we're talking about what the user experiences, it's notifier/notifying.    |
|**B**   |   |   |
|Big code   |   | both capitalized  |
|**C**  |   |   |
|call site  | callsite  |Per Quinn   |
|codebase   | code base  |Most commonly spelled as a single word. |
|code host   | codehost  |Per Quinn   |
|code host connection   | external service  |Aligning terminology for clarity. Internally, we differentiate different ownership through the terms "user code host connections, "organization code host connections," and "instance code host connections."   |
|configuration   | config       | "config" is OK in paths and navigation links|
|custom search pages|   |Custom search pages allow users to quickly search within a set of curated repositories, with data and interesting searches shared on that page. For example, “use this custom search page for Python 2-to-3 migration code”. When possible, use the more specific names **Search scope page**, a more specific name for a custom search page that describes search pages at /search/scope/SCOPENAME, or **project search page**, a more specific name for a custom search page that describes pages for projects. For example, the Kubernetes project search page to search across all Kubernetes code.|
|**D**   |   |   |
|docs  |documentation  |Our voice is conversational and plainspoken. "Documentation" is overly formal, while "docs" is the common term today.|
|email address   |email   |The two are both nouns, meaning different things.   |
|**F**   |   |   |
|field    |   |Refers to the first part in the key:value pair   |
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
|organization   |"company" or "team" or "org"   |   |
|open source   |"open-source", "Open Source"   |[Favoring common usage](https://github.com/sourcegraph/about/issues/508#issuecomment-588600005)   |
|**P**   |   |   |
|parameter|   |Parameter describes a key:value pair to filter behavior or change search behavior.   |
|PostgreSQL   |Postgres, postgres, PgSQL, Postgresql, PostGres,   |Proper name   |
|**R**   |   |   |
|regex   |"regexp" or "regular expressions"   |This is to avoid confusion with RegExp in Javascript, and to avoid conflation with "exp" in Warcraft and other MMORPGs. This is relevant as we onboard younger users whose gaming experience is significant. If they're used to "exp" being experience, they will have to pause for a moment to context-swtich, thus creating confusion, even temporarily, which isn't a good look.|
|repository   |repo   | We try to [avoid abbreviations when possible](../content_guidelines/style_and_mechanics.md#abbreviations-acronyms-latinisms-jargon). We habitually shorten words for concepts we work with every day until they become obvious to us, like repo, org, j2d, find-refs, PR, revs... but they aren't obvious to outsiders, which can be confusing and result in a steeper learning curve for new users. In this spirit, we prefer "repository" and "repositories". |
|**S**   |   |   |
|saved searches |   |Saved searches describe complete searches that are used without needing to add more filters or expressions.   |
|search expression   |   |Search expression describes a valid piece of a search that can be suggested and combined with other expressions to drill down on results.|
|search scope  | version context  |Used to describe drilling down in a pre-configured scope of repositories across the entire Sourcegraph instance (this persists for navigation and usage outside of the query bar search).  |
|set up (v)/setup (n)   |   |Setup is a noun, set up is a verb ([see notaverb.com/setup](http://notaverb.com/setup), although see [note on descriptivism](#effectiveness-over-correctness))   |
|sign in   |log in   |[Because it's a better UX choice](https://ux.stackexchange.com/questions/1080/using-sign-in-vs-using-log-in). |
|Sourcegraph   |"sourcegraph", "SourceGraph", or "sg"   |   |
|**T**   |   |   |
|tooltips   |tool-tips  |   |
|**U**   |   |   |
|URL   |url   |   |
