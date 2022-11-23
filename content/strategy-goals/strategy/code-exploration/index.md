# Code Exploration

This page contains the vision for Code Exploration in Sourcegraph (and a little beyond).

Note this is not a roadmap – we won’t realize all of these in the next year. Not all of these things will pass the prioritization and effort/value test when it comes to roadmap planning.
It's our north star, a shared vision of what we’re building towards, with every improvement we’ll build over the next year taking us closer towards it.
One that will put and keep our product offering in a unique, defendable position in the market, and won’t leave users choosing other products over us (whether it is because they’re better, or because they’re “good enough”).

## Vision

1. **Sourcegraph is the best tool to read and explore code in the world**. Better than an IDE, better than Google Code Search, better than GitHub.

2. **Everything is linked**. Sourcegraph is the user interface to the _source graph_ of your codebase. Sourcegraph has deep semantic understanding of the code. Every symbol is identifiable through a stable identifier through history, referencable and shareable by URL, and every reference in the code is linked to these URLs.

3. **This deep semantic understanding of your code is used _automatically_ to enhance _every_ interaction**. The user does not need to manually ask for a stable symbol URL, it is used automatically. Every bit of precise code intelligence information we have above plain text code, we make use of and show the user. Sourcegraph immediately impresses as not just a _reader_, but a _code intelligence platform_ that has gathered all this information about your code. Precise code intelligence is everywhere in the user interface, from the code viewer to the URL, to OpenGraph tags, to icons, to browser history entries, to tab titles.

4. **Information is statically and instantly available**. Sourcegraph _knows_ all the useful information about your codebase, _before_ you access it. You don’t need to _ask_ Sourcegraph for information, have loading spinners appear while it computes something just-in-time, just to come back with no result.

5. **The information Sourcegraph gives you goes beyond what is directly available from code**. Sourcegraph can know about your code ownership from external sources, about test coverage, runtime information, and other information, layering them on top of your code and allowing combination and correlation of different sources.

6. **Information can be used horizontally across all areas of Sourcegraph**. If test coverage is available, it can be shown in code exploration, queried for in Search, charted in Insights, and alerted on in Monitoring.

7. **Sourcegraph embraces being on the web and in the browser**. The user interface behaves in a way that navigation with a browser, going back and forth, copying links, selecting text all feel natural and you’re never left “fighting” the browser. It doesn’t add tons of history entries where they are not desired; it doesn’t produce ugly, unstable or easily outdated URLs.

8. **Sourcegraph takes advantage of being read-only and optimizes specifically for reading**, from rendering markdown-ish docblocks in non-monospace to even rendering ASCII diagrams as high-resolution SVG diagrams.

9. **Unlike local tools, Sourcegraph knows no boundaries**. Code exploration spans across repositories and even to your OSS dependencies on sourcegraph.com. Code exploration doesn’t stop at boundaries between services, different languages or IDLs.

10. **Sourcegraph allows you to build things on top of it.** Sourcegraph defaults to exposing everything it has in a rich API and data model. You can use Sourcegraph data in internal tools to increase their precision or connect workflows to code, or build entire other products on top of it.
