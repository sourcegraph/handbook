# Tips and tricks

- [Tips and tricks](#tips-and-tricks)
  - [Git](#git)
    - [Debugging](#debugging)
  - [Postgres](#postgres)
    - [Client configuration](#client-configuration)

## Git

### Debugging

Git supports a number of environment variables, several of which are [particularly helpful for debugging](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables#_debugging). Try setting `GIT_TRACE_PACKET=1` to see what's happening at the networking level, or `GIT_TRACE_PERFORMANCE=1` to get timing information about discrete steps Git is taking.

## Postgres

### Client configuration

Below is a [.psqlrc configuration](https://wiki.postgresql.org/wiki/Psqlrc) that improves on the default `psql` configuration with a more useful prompt, a per-database command history, timing output and various table rendering directives.

```
\set QUIET 1

\set PROMPT1 '%[%033[1m%]%M %n@%/%R%[%033[0m%]%x%# '
\set PROMPT2 '[more] %R > '
\set VERBOSITY verbose
\set HISTFILE ~/.psql_history- :DBNAME
\set HISTCONTROL ignoredups
\set COMP_KEYWORD_CASE upper
\set ON_ERROR_STOP on
\set ON_ERROR_ROLLBACK interactive
\set intervalstyle to 'postgres_verbose'

\pset null '*'
\pset linestyle 'unicode'
\pset unicode_border_linestyle single
\pset unicode_column_linestyle single
\pset unicode_header_linestyle double
\pset border 2

\setenv PAGER 'pspg -bX'

\x auto
\timing

\unset QUIET
```

For a detailed walkthrough of several of these options, see [this thoughtbot blog post](https://thoughtbot.com/blog/an-explained-psqlrc).
