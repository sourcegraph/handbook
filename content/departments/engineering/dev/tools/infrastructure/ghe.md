# GitHub Enterprise testing instance

Our GitHub Enterprise (GHE) instance (used for testing) is available at https://ghe.sgdev.org.

## Workaround for Cloudflare, HSTS, and TLS detection problem

The TLS is provided by Cloudflare, which interacts weirdly with GHE's own HSTS headers and TLS detection (which may still be stuck in your browser). If you can't access it or all images/stylesheets are broken, add `$IP ghe.sgdev.org` (where `$IP` is the origin IP, not Cloudflare's proxy IP) to your `/etc/hosts` then access it over HTTP on http://ghe.sgdev.org (using a different browser if your browser has permanently stored its HSTS headers).

## Organizations

[ghe-repos.json](https://gist.github.com/sqs/4ba1382895928bd06db6076ce910bc3a) has a list of 1000 popular github.com repositories for each of the following languages:

- c
- clojure
- c++
- css
- elixir
- erlang
- go
- haskell
- html
- java
- javascript
- julia
- kotlin
- lua
- matlab
- ocaml
- perl
- php
- python
- r
- ruby
- rust
- scala
- shell
- swift
- typescript

For each repository in [ghe-repos.json](https://gist.github.com/sqs/4ba1382895928bd06db6076ce910bc3a), I used a script to

1. Replace the `/` character in the repository's name with `-` (e.x. `gorilla/mux` -> `gorilla-mux`)

1. Upload the repository to the ["sourcegraph" organization](https://ghe.sgdev.org/sourcegraph) (e.x.: https://ghe.sgdev.org/sourcegraph/gorilla-mux)

1. Upload the repository to a specific "sourcegraph-$LANGUAGE" organization (where $LANGUAGE is the primary language of the repository as identified by github.com), (e.x. the ["sourcegraph-go" organization](https://ghe.sgdev.org/sourcegraph-go) for https://ghe.sgdev.org/sourcegraph-go/gorilla-mux)

This means that the ["sourcegraph" organization](https://ghe.sgdev.org/sourcegraph) is the superset of all repositores that exist on the instance (~35K repos), and each language-specific organization should contain only ~1000 repos.

_Note: some repositories in [ghe-repos.json](https://gist.github.com/sqs/4ba1382895928bd06db6076ce910bc3a) might be missing from ghe.sgdev.org if my script ran into an error when trying to process them (too much load on the machine, too much load on ghe.sgdev.org, huge >100mb blobs in some repositories, etc.)_

## License management

Sourcegraph has a GitHub Enterprise license through their [GitHub Developer Program](https://docs.github.com/en/developers/overview/github-developer-program).

Going forward we should consider joining their new [Partner Program](https://partner.github.com/) for continued assistance.

Please note to manage the license you need access to the GitHub Enterprise portal: https://enterprise.github.com (_Currently only Beyang can access it and add new members as needed._)

If you need to renew the license follow the following steps:

1. Log into the GHE instance's management console (Shared vault in 1Password): https://ghe.sgdev.org:8443/
2. Click on Support in the main menu bar
3. Click on New support request
4. You will be redirected to the GitHub support portal with a support bundle attached. Complete the form asking for a license renewal.
5. Once support confirms a new license has been issued sign into the [GitHub Enterprise portal](https://enterprise.github.com) and download the new license.
6. Return to the GHE instance's management console and upload the new license file: https://ghe.sgdev.org:8443/setup/upgrade
