# Managing CS-AWS Docker Compose

Our CS Docker Compose test instance is hosted on an Amazon EC2 server instance. The instance was setup following the [instructions](https://docs.sourcegraph.com/admin/install/docker-compose/aws) found on Sourcegraph.com. To manage cloud resources and networking you must have Sourcegraph AWS/EC2 IAM credentials, learn more [here](https://team-sourcegraph.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/jgyewom5scogqn6ru53jn2hw2i). You can access the instance from the Url below:

## [https://cse-aws-test.sgdev.org/](https://cse-aws-test.sgdev.org/)
(note the URL reflects the former title on the team)
<br>
<br>

## SSH into instance to run Docker CLI commands

To access the CS-AWS server and run Docker commands you'll need to create a Secure Shell (SSH) connection. Instructions to configure this connection are found below:

1. Create a directory from which you'll run commands to access CS AWS:<br>`$ mkdir cse-aws`
2. Within `cse-aws` create a file `cse-aws.pem`:<br>`$ touch cse-aws.pem`
3. Populate `cse-aws.pem` with its RSA private key by copying the key from [1Password](https://my.1password.com/vaults/dnrhbauihkhjs5ag6vszsme45a/allitems/jrsavvo7cgknvzbnefya5oba3i) into the file with your editor of choice. Copy the whole block including `-----BEGIN RSA PRIVATE KEY-----` and `-----END RSA PRIVATE KEY-----`.
4. Finally set its permissions such that only the root user can read it:<br>`$ chmod 400 cse-aws.pem`<br>

Now that you've set up your SSH access credentials you can use the following command from inside the directory containing the `cse-aws.pem`:

```
ssh -i "cse-aws.pem" ec2-user@ec2-18-219-230-121.us-east-2.compute.amazonaws.com
```

You may also add the pem key to a `.ssh` directory and use the following command:

```
ssh -i .ssh/cse-aws.pem ec2-user@ec2-18-219-230-121.us-east-2.compute.amazonaws.com
```

## Upgrading CS-AWS

Upgrading CS-AWS follows the [standard procedure](https://docs.sourcegraph.com/admin/install/docker-compose/operations#upgrade) for upgrading a compose instance. The EC2 instance points at a [fork of deploy-sourcegraph-docker](https://github.com/DaedalusG/deploy-sourcegraph-docker).

**Note: When connection to the EC2 server via SSH your user does not have permissions to run many git commands, you'll need to run git commands with `sudo` or switch to the root user with `sudo su`**

CS-AWS is a standard Sourcegraph Docker Compose deployment. Its only divergence from the standard repo can be found in its Caddy configuration. In Docker Compose deployments Caddy is used to manage HTTPS certificate generation. The below code block is a snippet of the `docker-compose.yaml` found in `deploy-sourcegraph-docker/docker-compose`. **You'll need to make sure the caddy container specification in `docker-compose.yaml` matchs the code below after checking out the most recent release tag.**

```yaml
caddy:
  container_name: caddy
  image: 'index.docker.io/caddy/caddy:alpine@sha256:83d9aa7a5f1bbcc0fc1b4720c183a5ec53dae7dc5d9fa555daf3db345010e7f9'
  cpus: 4
  mem_limit: '4g'
  environment:
    - 'XDG_DATA_HOME=/caddy-storage/data'
    - 'XDG_CONFIG_HOME=/caddy-storage/config'
    - 'SRC_FRONTEND_ADDRESSES=sourcegraph-frontend-0:3080'
    # Uncomment & update this line when using Let's Encrypt or custom HTTPS certificates:
    - 'SRC_SITE_ADDRESS=cse-aws-test.sgdev.org'
    #
    # Uncomment & update the following line when using HTTPS with Let's Encrypt
    - 'SRC_ACME_EMAIL=warren@sourcegraph.com'
  volumes:
    - 'caddy:/caddy-storage'
    #
    # Comment out the following line when using HTTPS with either Let's Encrypt or custom certficates
    # - '../caddy/builtins/http.Caddyfile:/etc/caddy/Caddyfile'
    #
    # Uncomment the following line when using HTTPS with Let's Encrypt's staging environment
    # - '../caddy/builtins/https.lets-encrypt-staging.Caddyfile:/etc/caddy/Caddyfile'
    #
    # Uncomment the following line when using HTTPS with Let's Encrypt's production environment
    # IMPORTANT: Strongly recommended to test with the staging configuration above first, see that file for details.
    - '../caddy/builtins/https.lets-encrypt-prod.Caddyfile:/etc/caddy/Caddyfile'
    #
    # Uncomment the following line when using HTTPS with custom certificates
    # - '../caddy/builtins/https.custom-cert.Caddyfile:/etc/caddy/Caddyfile'
    #
    # Uncomment / update the following line when using HTTPS with custom certficates
    # - '/LOCAL/CERT/PATH.pem:/sourcegraph.pem'
    #
    # Uncomment / update the following line when using HTTPS with custom certficates
    # - '/LOCAL/KEY/PATH.key:/sourcegraph.key'
  ports:
    - '0.0.0.0:80:80'
    - '0.0.0.0:443:443'
  networks:
    - sourcegraph
  restart: always
```
