# Oracle OpenGrok

[Oracle OpenGrok](https://github.com/oracle/opengrok) was traditionally the most popular open source code search tool. Originally developed inside Sun Microsystems around 2004, it’s now an Oracle open source project after Oracle acquired Sun.

Sourcegraph is a good replacement for OpenGrok for almost every organization.

- [Migrating from OpenGrok to Sourcegraph](https://docs.sourcegraph.com/admin/migration/opengrok) (Sourcegraph documentation)

## Pros

- Simple interface
- Support for non-Git repositories
- Easy deployment (for Java shops)

## Cons

- Slow and difficult-to-manage indexing process (leading to stale results for users)
- Poor support for searching/browsing multiple commits and branches
- Poor scalability to many repositories and for large repositories
- Inflexible and buggy API (using the new REST API)
