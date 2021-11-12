# Dogfood Perforce server

Perforce is a version control system like Git, subversion, or mercurial. While git is based on a distributed, decentralised model, Perforce is centralised. For testing purposes, you may use our [Perforce dogfood server](https://k8s.sgdev.org/github.com/sourcegraph/infrastructure/-/tree/dogfood/kubernetes/tooling/perforce).

## Setting up

- To connect to the Perforce server, you'll need the Perforce cli installed locally. Use the command: `brew install --cask perforce`

- The following environment variables configure your shell to point at the Perforce server. Set them to your `env` with the `export` command, or add them to your `.bashrc` or `.zshrc` file. <br>

```
    # .zshrc or .bashrc

    export P4PORT=perforce.sgdev.org:1666 # This points the p4 cli at the dogfood server
    export P4USER=admin                   # sets your user
    export P4PASSWD=<session ticket>      # optional, see details below, doesn't require string quotes
    export P4EDITOR=/usr/bin/vim          # specifies the editor opened by some p4 commands

```

Perforce dogfood is a service on our Sourcegraph dogfood cluster, for more info see its GCP [service details](https://console.cloud.google.com/kubernetes/service/us-central1-f/dogfood/tooling/perforce-server/overview?authuser=1&project=sourcegraph-dogfood).

## Interacting with Perforce dogfood

To add repos to the Perforce dogfood server follow the following procedure: <br />

- [Dogfood Perforce server](#dogfood-perforce-server)
  - [Setting up](#setting-up)
  - [Interacting with Perforce dogfood](#interacting-with-perforce-dogfood)
    - [Generate a session ticket](#generate-a-session-ticket)
    - [Create new depot](#create-new-depot)
    - [Create a client](#create-a-client)
    - [Add files and submit](#add-files-and-submit)
    - [Configuring Sourcegraph to sync dogfood depots](#configuring-sourcegraph-to-sync-dogfood-depots)
- [Local Perforce server](#local-perforce-server)

### Generate a session ticket

Interaction with the dogfood server requires authentication. Once you've set up your shell environment you'll need to generate a session ticket with your users password. You can find the [admin password](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/fac6hoq3ujb3xpxtllbijzyxta), and others on our shared 1Password account.

1. Once your environment is set run `p4 ping` this will prompt you for the admin password, and is a good way to test your connection to the server.
2. With your connection confirmed generate a session ticket with the following command: `p4 -u <p4.user> login -p -a` you'll be prompted for your user password, once you've entered it a session ticket will be printed to STDOUT. You may also run `p4 -u <p4.user> login -a` to set the ticket in `~/.p4tickets`, this allows you to skip setting `P4PASSWD` in your env, and will only work if you have no `P4PASSWD` variable in your env.
3. Set the ticket generated in step 2 to your `P4PASSWD` env variable
4. p4 commands should no longer require a password. Note this ticket expires every 12 hours unless configured to do otherwise.

### Create new depot

Perforce uses depots rather than repos, the concept is functionally equivalent. To see all the repos on the perforce server run `p4 depots`, to create a new depot on the server run `p4 depot <depot name>`, this will open a file like seen below:

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

Once a depot is created on the server, we can start to add files from our local client to it.

While this new depot has been created, you still need to add it to "client/workspace" and have perforce track it.
The easiest way to do this is in the `p4v` UI. Go to **Connection > Edit Current Workspace > Right-click on the depot you just created > Include Tree**.

You may see a warning about no files. Create a basic text file then run:
`p4 add init-file.txt` then run `p4 submit -d "initial commit"`.

### Create a client (workspace)

Perforce is different than git in that it utilizes a concept called clients (or more recently, workspaces). This is a subset of files on your machine that mirrors files on the Perforce server. The `p4 client <name>` command will open a client spec file with an editor specified by the `P4EDITOR` env variable. Below is an example:

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

Once you've created a depot on dogfood, map a local directory to it by adding an entry to your client spec under `Views:`

`//<depot name>/... //<client name>/<root directory>/...`

Note that the client name is mapped to your `Root:` setting in the client spec.

### Add files and submit

Once you've created a depot on the server, and created a client spec, adding files is a lot like git. To add the files run `p4 add <relative path to files>/...` for example while in `/Users/warrengifford` I could run `p4 add ./LifeBox/...`. This will open a change spec for which you must provide a description:

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

Finally run `p4 submit` to load the files to the depo on the server.

### To edit files

You must run `p4 edit ${filename}` before modifying files otherwise they are locked by default and set to read-only.

### Configuring Sourcegraph to sync dogfood depots

Our [documentation](https://docs.sourcegraph.com/admin/repo/perforce) covers the requirements to sync to Sourcegraph, however for convienience it should be noted we have a user called `buildkite` on our dogfood instance whose session ticket will not expire. To generate the ticket for this account reference our shared [1Password](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/lajspc6a5valfbsh3whpcb5bp4).

To learn more about general p4 commands checkout this resource:
[https://www.perforce.com/perforce/doc.973/cmdguide/html/quicksta.htm](https://www.perforce.com/perforce/doc.973/cmdguide/html/quicksta.htm)

### Helpful p4 flags

You can use `-c` in commands like `p4 add` to specify the client.

# Local Perforce server

Joe has also developed an awesome Perforce server [image](https://github.com/sourcegraph/helix-docker/blob/main/helix-p4d/Dockerfile) that allows for local deployment of a Perforce server.

The following procedure runs the image:

1. Start the server `docker run --publish 1666:1666 sourcegraph/helix-p4d:2020.2`

2. Open a new terminal, configure the terminal session env:

```
export P4PORT=:1666
export P4USER=admin
```

3. Ping the server from a separate terminal with p4 ping and enter the password below:

```
pass12349ers
```

(Note the value listed is from the dockerfile arg declaration)

### GUI tools

You can download the Helix Admin Tool [here](https://www.perforce.com/downloads/administration-tool) which makes it easier to configure users, permissions etc.
