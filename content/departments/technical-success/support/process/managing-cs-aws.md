# Managing CS-AWS Docker Compose

Our CS Docker Compose test instance is hosted on an Amazon EC2 server instance. The instance was setup following the [instructions](https://docs.sourcegraph.com/admin/install/docker-compose/aws) found on Sourcegraph.com. To manage cloud resources and networking you must have Sourcegraph AWS/EC2 IAM credentials, learn more [here](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/jgyewom5scogqn6ru53jn2hw2i). You can access the instance from the Url below:

### [https://cse-aws-test.sgdev.org/](https://cse-aws-test.sgdev.org/)

(note the URL reflects the former title on the team)

## SSH into instance to run Docker CLI commands

To access the CS-AWS server and run Docker commands you'll need to create a Secure Shell (SSH) connection. Instructions to configure this connection are found below:

1. Create a directory from which you'll run commands to access CS AWS:<br>`$ mkdir cse-aws`
2. Within `cse-aws` create a file `cse-aws.pem`:<br>`$ touch cse-aws.pem`
3. Populate `cse-aws.pem` with its RSA private key by copying the key from [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/jrsavvo7cgknvzbnefya5oba3i) into the file with your editor of choice. Copy the whole block including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.
4. Finally set its permissions such that only the root user can read it:<br>`$ chmod 400 cse-aws.pem`<br>

Now that you've set up your SSH access credentials you can use the following command from inside the directory containing the `cse-aws.pem`:

```
ssh -i "cse-aws.pem" ec2-user@ec2-3-133-49-142.us-east-2.compute.amazonaws.com
```

You may also add the pem key to a `.ssh` directory and use the following command:

```
ssh -i .ssh/cse-aws.pem ec2-user@ec2-3-133-49-142.us-east-2.compute.amazonaws.com
```

## Upgrading CS-AWS

> [!NOTE] When connecting to the EC2 server via SSH, your user does not have permissions to run many git commands. You'll need to run git commands with `sudo` or switch to the root user with `sudo su`. Note that `docker-compose` is not available to the root user, use `exit` to switch back to `ec2-user` and run compose commands.

Upgrading CS-AWS follows the [standard procedure](https://docs.sourcegraph.com/admin/install/docker-compose/operations#upgrade) for upgrading a compose instance. The EC2 instance points at a [fork of deploy-sourcegraph-docker](https://github.com/sourcegraph/deploy-sourcegraph-cse-aws). Any customizations should be applied to the [override](https://github.com/sourcegraph/deploy-sourcegraph-cse-aws/blob/release/docker-compose/docker-compose.override.yaml) file rather than the default `docker-compose.yaml` file. Learn more about [docker compose override](https://docs.sourcegraph.com/admin/deploy/docker-compose/configuration#what-is-an-override-file) files.

### Executors

`cse-aws` uses executors to process codeintel. During upgrades use the `docker-compose` command:

```
docker-compose -f docker-compose.yaml -f executors/executor.docker-compose.yaml up -d
```

Learn more in the standard [README.md](https://github.com/sourcegraph/deploy-sourcegraph-cse-aws/tree/release/docker-compose/executors), and find a note on our secrets in a [OnePassword Secure Note](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/335rrus23htduvlyikqkgpzr6u). Remember not to commit these to the remote during upgrades!

## DNS

DNS for cse-aws is handled by our GCP terraform infrastructure: [https://github.com/sourcegraph/infrastructure/blob/main/dns/sgdev.tf#L332-L338](https://github.com/sourcegraph/infrastructure/blob/main/dns/sgdev.tf#L332-L338) application of changes here requires `terraform apply` to take effect on our GCP infrastructure
