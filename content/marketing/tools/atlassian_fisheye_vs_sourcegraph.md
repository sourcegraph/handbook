# Atlassian Fisheye vs. Sourcegraph

[Atlassian Fisheye](https://www.atlassian.com/software/fisheye) was released around 2007, initially as a source browser for companies who (before the advent of GitHub/Bitbucket) mostly lacked web-based source code browsers. It later added code search capabilities.

You can try it out on [JBoss’ public Fisheye instance](https://source.jboss.org/browse) (see [example quick search results page](https://source.jboss.org/qsearch?q=open&t=3&s=2&bucket=ANY_DATE&userFilter=) and [example advanced search results page](https://source.jboss.org/search/Aesh/?head=true&comment=&contents=open&addedText=&deletedText=&filename=&branch=&tag=&fromdate=&todate=&datesortorder=DESCENDING&groupby=file&col=path&col=revision&col=author&col=date&col=csid&refresh=y)).

Sourcegraph is a good replacement for Fisheye as a code search tool when the primary usage is developers searching for code.

## Pros

- Tight integration with the Atlassian suite of products, especially with builds from Atlassian Bamboo
- Perforce support (as well as Git, Subversion, Mercurial, and CVS)

## Cons

- Common developer sentiment: "It feels like Fisheye’s code search is for managers to report on changes, not for developers in their daily workflow"
- Poor integration with GitHub and GitLab
- Deprioritized by Atlassian, with [only infrequent and minor feature releases](https://confluence.atlassian.com/fisheye/fisheye-releases-960155725.html)
