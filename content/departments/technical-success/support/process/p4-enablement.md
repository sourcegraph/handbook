# Perforce Enablement

Perforce is a version control system like Git, Subversion, andf Mercurial.
While Git is based on a distributed, decentralised model, Perforce is centralised.

For testing purposes, you may use our [Dogfood Perforce server](#dogfood-perforce-server) or set up a [Local Perforce server](#local-perforce-server).

- [Dogfood Perforce server](#dogfood-perforce-server)
- [Integration Testing Perforce server](#integration-testing-perforce-server)
- [Local Perforce server](#local-perforce-server)
- [Client setup](#client-setup)
  - [Install](#install)
  - [Configure](#configure)
    - [P4PORT](#p4port)
    - [P4USER](#p4user)
    - [P4EDITOR](#p4editor)
    - [Sample dotfile entries](#sample-dotfile-entries)
  - [Generate a session ticket](#generate-a-session-ticket)
  - [Create new depot](#create-new-depot)
  - [Create a client workspace](#create-a-client-workspace)
    - [Add files and submit](#add-files-and-submit)
    - [To edit files](#to-edit-files)
- [Configuring Sourcegraph to sync dogfood depots](#configuring-sourcegraph-to-sync-dogfood-depots)
- [Helpful p4 flags](#helpful-p4-flags)
- [GUI tools](#gui-tools)
- [Testing sub-repo permissions](#testing-sub-repo-permissions)
- [Troubleshooting](#troubleshooting)
  - [git p4 is broken error](#git-p4-is-broken-error)

<br/>

# Dogfood Perforce server

Perforce is a service on our Sourcegraph dogfood cluster. For more info see its GCP [service details](https://console.cloud.google.com/kubernetes/service/us-central1-f/dogfood/tooling/perforce-server/overview?authuser=1&project=sourcegraph-dogfood) and the [Kubernetes configuration](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/tree/dogfood/kubernetes/tooling/perforce).

The hostname of the Dogfood Perforce server is `perforce.sgdev.org`.

# Integration Testing Perforce server

Perforce service on our sourcegraph-ci cluster soley used for integration tests. For more info see its GCP [service details](https://console.cloud.google.com/kubernetes/service/us-central1-c/default-buildkite/tooling/perforce-server/overview?authuser=0&project=sourcegraph-ci) and the [Kubernetes configuration](https://sourcegraph.sourcegraph.com/github.com/sourcegraph/infrastructure/-/tree/buildkite/kubernetes/tooling/perforce).

The hostname of the Integration Testing Perforce server is `perforce-tests.sourcegraph.com`.

# Local Perforce server

[Joe](../../../../team/index.md#joe-chen) has developed an awesome Perforce server [image](https://github.com/sourcegraph/helix-docker/blob/main/helix-p4d/Dockerfile) that allows for local deployment of a Perforce server using Docker.

To run the image, use the following command, which persists the data on disk, runs the container in the background, and removes the container when it exits. See the [helix-docker project](https://github.com/sourcegraph/helix-docker) for other options when running the container.

```
docker run \
--rm \
--publish 1666:1666 \
--name helix-docker \
--detach \
--volume ~/.helix-docker-home:/p4 \
sourcegraph/helix-p4d:2020.2
```

# Client setup

## Install

To connect to the Perforce server, you'll need the Perforce CLI installed locally.
Install with `brew install --cask perforce`

## Configure

The Perforce CLI expects some environment variables to be set in order to connect to the server.
You can set them either in the shell using `export`, or add them to your dotfile (`.bashrc`, `.zshrc`, or the appropriate one for your shell).

### P4PORT

- dogfood server: `export P4PORT=perforce.sgdev.org:1666`
- local server: `export P4PORT=1666`

### P4USER

for both servers: `export P4USER=admin`

### P4EDITOR

`p4` has some commands that open forms to collect aditional information. These forms open in `vi` by default on Linux, TextEdit on macOS, and Notepad on Windows. If you want to specify a different editor, set `P4EDITOR`. For example, if you want to use VSCode to edit `p4` forms, use `export P4EDITOR="code --wait"`. On macOS, when using TextEdit, in order to return control to the Terminal after running a `p4` command that launches the editor, you have to completely quit TextEdit, not just the window that is editing the `p4` file, so you probably want to set `P4EDITOR`.

### Sample dotfile entries

```
export P4PORT=perforce.sgdev.org:1666 # use "1666" if you're using the local perforce server
export P4USER=admin                   # sets your user
export P4EDITOR=/usr/bin/vim          # specifies the editor opened by some p4 commands
```

## Generate a session ticket

Interaction with the Perforce server requires authentication.
Once you've set up your shell environment you'll need to generate a session ticket with your user's password so that you are not prompted for the password every time you run `p4`.

For the Dogfood server, you can find the [admin password](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/fac6hoq3ujb3xpxtllbijzyxta) and others in our shared 1Password account.

For the Local Perforce server, the `admin` password defaults to `pass12349ers`.

Once your environment is set, run `p4 ping`, which will prompt you for the admin password and is a good way to test your connection to the server.

With your connection confirmed, generate a session ticket with the following command: `p4 -u ${P4USER:-admin} login -a`.
You'll be prompted for a password.
Once you've entered it, a session ticket will be written to the file `~/.p4tickets`.

`p4` commands should no longer require a password. Note, this ticket expires every 12 hours unless configured to do otherwise.

## Create new depot

Perforce uses depots rather than repos; the concept is functionally equivalent.
To see all the depots on the perforce server run `p4 depots`.
To create a new depot on the server, run `p4 depot <depot name>`.
This will open a file similar to:

```
Depot:  support-tools

Owner:  admin

Date:   2021/08/08 06:09:52

Description:
        testing testing testing

Type:   local

Address:        local

Suffix: .p4s

StreamDepth:    //support-tools/1

Map:    support-tools/...
```

Fill in the necessary fields in that file, like `Description`, save and close it.

Once a depot is created on the server, we can start to add files from our local client to it.

While this new depot has been created, you still need to add it to a local workspace to have perforce track it.
The easiest way to do this is in the `p4v` UI. Go to **Connection > Edit Current Workspace > Right-click on the depot you just created > Include Tree**.

You may see a warning about no files. Create a basic text file then run:
`p4 add init-file.txt` then run `p4 submit -d "initial commit"`.

## Create a client workspace

Perforce is different from Git in that it utilizes a concept called client workspaces, which is a subset of files on your machine that mirrors files on the Perforce server. The `p4 client <name>` command will open a client spec file with an editor specified by the `P4EDITOR` env variable. Below is an example:

```
Client: warren

Update: 2021/08/08 04:17:02

Access: 2021/08/08 04:07:51

Owner:  admin

Host:   Warrens-MacBook-Pro.local

Description:
        Created by admin.

Root:   /Users/warrengifford

Options:        noallwrite noclobber nocompress unlocked nomodtime normdir

SubmitOptions:  submitunchanged

LineEnd:        local

View:
        //test-large-depot/... //warren/test-large-depot/...
        //test-perms/... //warren/test-perms/...
        //spec/... //warren/spec/...
        //depot/... //warren/depot/...
        //Tone.js/... //warren/Tone.js/...
        //LifeBox/... //warren/LifeBox/...
```

You'll notice under `View:` a "Perforce path" or _depot path_ on the left, followed by a _client path_ on the right. The _depot path_ reflects the path to the depot on the Perforce server, while the _client path_ is the path to the directory on your local machine that you want to map to the Perforce depot.

Specifying views in your client configuration allows you to declare which files from the Perforce depot are relevant to you, or which files you want to be part of your _workspace_. You can learn more about this topic [here](https://www.perforce.com/perforce/doc.973/cmdguide/html/details.htm).

Once you've created a depot, map a local directory to it by adding an entry to your client spec under `Views:`

`//<depot name>/... //<client name>/<root directory>/...`

Note that the client name is mapped to your `Root:` setting in the client spec.

### Add files and submit

Once you've created a depot on the server and created a client spec, adding files is a lot like Git. To add files, run `p4 add <relative path to files>/...` for example while in `/Users/warrengifford` I could run `p4 add ./LifeBox/...`. This will open a change spec for which you must provide a description:

```
Change: new

Client: warren

User:   admin

Status: new

Description:
        <enter description here>

Files:
        //support-tools/.git/COMMIT_EDITMSG     # add
        //support-tools/.git/FETCH_HEAD # add
        //support-tools/.git/HEAD       # add
        //support-tools/.git/ORIG_HEAD  # add
        //support-tools/.git/config     # add
        //support-tools/.git/description        # add

        # etc etc
```

You can see the files staged for adding with `p4 opened`.

Finally run `p4 submit` to load the files to the depot on the server.

### To edit files

You must run `p4 edit ${filename}` before modifying files otherwise they are locked by default and set to read-only.

# Configuring Sourcegraph to sync dogfood depots

Our [documentation](https://docs.sourcegraph.com/admin/repo/perforce) covers the requirements to sync to Sourcegraph, however for convienience it should be noted we have a user called `buildkite` on our dogfood instance whose session ticket will not expire. To generate the ticket for this account reference our shared [1Password](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/lajspc6a5valfbsh3whpcb5bp4).

To learn more about general p4 commands checkout this resource:
[https://www.perforce.com/perforce/doc.973/cmdguide/html/quicksta.htm](https://www.perforce.com/perforce/doc.973/cmdguide/html/quicksta.htm)

# Helpful p4 flags

You can use `p4 -c <client name>` in commands like `p4 add` to specify the client.

# GUI tools

You can download the [Helix Admin Tool](https://www.perforce.com/downloads/administration-tool) which makes it easier to configure users, permissions, etc.

# Testing sub-repo permissions

Sub-repo permissions are still experimental and below are the steps required to start testing them against our dogfood perforce server.

Add this configuration to your external service configuration in dev private

```json
"PERFORCE":
  [
    {
      "p4.port": "perforce.sgdev.org:1666",
      "p4.user": "admin",
      "p4.passwd": "REDACTED",
      "depots": ["//test-perms/"],
      "repositoryPathPattern": "perforce/{depot}",
      "authorization": { "subRepoPermissions": true },
    },
  ]
```

You can get the `P4.passwd` token above from running `p4 -u admin login -p -a` using the admin password from 1password. It expires every day so you’ll need to regenerate it occasionally.

Update your local SG user to include the verified e-mail address of one of the users configured on the dogfood instance. For example, `alice@perforce.sgdev.org`. Alice is a user in the our dogfood instance with permissions set against the `//test-perms` instance.

_NOTE_: Don’t modify the permissions in Perforce since they are used for integration testing.

You'll also need Perforce and sub-repo permissions enabled in your site config under the `experimentalFeatures` section:

```json
"experimentalFeatures": {
  "perforce": "enabled",
  "subRepoPermissions": { "enabled": true }
}
```

In order to not have to wait for a permissions sync to complete, you can force one with this mutation:

```graphql
mutation {
  scheduleUserPermissionsSync(user: "YOUR_ID") {
    alwaysNil
  }
}
```

Your can find your user id with this query:

```graphql
query {
  currentUser {
    id
  }
}
```

Once the permissions sync has completed you should see something like this in your local database:

```
sourcegraph=# select repo_id, user_id, path_includes, path_excludes from sub_repo_permissions;
 repo_id | user_id |   path_includes   |       path_excludes
---------+---------+-------------------+----------------------------
     238 |       1 | {**} | {Security/**}
```

# Troubleshooting

## git p4 is broken error

You may see this error when trying to run `git p4`:

```
fatal: 'p4' appears to be a git command, but we were not
able to execute it. Maybe git-p4 is broken?`
```

This can happen when the `git p4` tool can't locate the Python interpreter.

Here are the steps required to fix on MacOS assuming you use `brew`

1. Locate git:

```
which git
/opt/homebrew/bin/git
```

2. Check the symbolic link:

```
ls -l /opt/homebrew/bin/git
lrwxr-xr-x  1 username  admin  28 Aug 16 13:20 /opt/homebrew/bin/git -> ../Cellar/git/2.37.2/bin/git
```

3. Change to the cellar directory and search for `git-p4`:

```
find . -name git-p4
./git/2.37.2/libexec/git-core/git-p4
```

4. Edit `git-p4` with your editor. Most likely the first line will be something like this:

```
#!/usr/bin/python
```

5. Change it to this:

```
#!/usr/bin/python3

```

6. `git p4` should now work:

```
git p4
usage: /opt/homebrew/Cellar/git/2.37.2/libexec/git-core/git-p4 <command> [options]

valid commands: submit, commit, sync, rebase, clone, branches, unshelve

Try /opt/homebrew/Cellar/git/2.37.2/libexec/git-core/git-p4 <command> --help for command specific help.
```
