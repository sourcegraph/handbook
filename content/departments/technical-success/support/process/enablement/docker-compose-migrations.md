## Docker/Docker-Compose Migrations

This is a crash course for migrating an existing Sourcegraph instance from docker to docker-compose for onboarding Support Engineers. This course assumes that you have already installed a [local docker deployment](https://docs.sourcegraph.com/admin/install/docker), and a docker-compose deployment [using the Google Cloud Platform](https://docs.sourcegraph.com/admin/install/docker-compose/google_cloud).

While this crash course focuses on migrating to a GCP instance, by the end of the course you should have a good basis for migrating using other cloud services (AWS, Azure, etc.) as well.

### Setup

To set yourself up for success in this crash course, make sure you've set up the following:.

1. [Single-container docker instance of Sourcegraph](https://docs.sourcegraph.com/admin/install/docker)
2. [Docker-compose instance of Sourcegraph on GCP](https://docs.sourcegraph.com/admin/install/docker-compose/google_cloud)

Once your local instance is deployed, create an account, then add a codehost and a few small repos to your instance so there is something to migrate when the time comes.

**_NOTE: For your docker-compose instance on GCP, do not register a new user yet. User information from your single-container instance will be added automatically when we migrate the database later_**.

### Prepare the Migration

1. First, find your local instance's `CONTAINER_ID` by running your local instance, then executing the command `docker ps`. You will see the following output:

   ```
   > docker ps
   CONTAINER ID        IMAGE
   ...                 sourcegraph/server
   ```

   Take the value from the `CONTAINER_ID` column and export it as a variable in your terminal:

   ```
   export CONTAINER_ID=<"CONTAINER ID" value from previous command>
   ```

2. Generate database dumps from `codeintel-db` and `psql` and save them to the /tmp folder. For `codeintel-db`:
   ```
   docker exec -it "$CONTAINER_ID" sh -c 'pg_dump -C --username=postgres sourcegraph-codeintel' > /tmp/codeintel_db.out
   ```
   and for the postgres database:
   ```
   docker exec -it "$CONTAINER_ID" sh -c 'pg_dump -C --username=postgres sourcegraph' > /tmp/sourcegraph_db.out
   ```
   There should now be two files in the `/tmp` folder on your system: `sourcegraph_db.out` and `codeintel_db.out`. Navigate to your `/tmp` folder and make sure this is the case.
   ```
   cd /tmp
   ```
3. Check the contents of the files and make sure you see information you recognize by using the `less` command.
   ```
   less /tmp/sourcegraph_db.out
   less /tmp/codeintel_db.out
   ```
   Use the `grep` command and search for a repo you are certain was indexed in your single-container instance to be sure:
   ```
   grep <repo or organization name> sourcegraph_db.out
   ```
   If it returns expected results, you're all good to move on to the next step.

### Migrating

**_NOTE: you will need to have access to the_** `gcloud` **_SDK to complete some of the steps in this section. Install instructions [here](https://cloud.google.com/sdk/docs/install)._**

1. First, we need to navigate to the directory containing the `docker-compose` definition. To do so, SSH into the GCP instance, then `sudo -i` then cd `/deploy-sourcegraph-docker/docker-compose`.
2. Kill the existing Docker Compose containers (and associated volumes) so that we avoid conflicting transactions while modifying the database:
   ```
   docker-compose down --volumes
   ```
3. Start the postgres instance by itself:
   ```
   docker-compose -f db-only-migrate.docker-compose.yaml up -d
   ```
4. The next thing we need to do is copy the local dumps into our gcp instance. This step is tricky, and may require some trial and error depending on your environment. We will be using the `gcloud compute scp` command to do so. Think of `scp` as the `cp` command in your terminal. The `s` just stands for `secure`. `scp` is a command that allows you to securely copy files on a local volume to a remote volume and vise versa. It is important to note that if you're following this crash course using another cloud service like AWS or Azure, this is where you might have to do your own research or use the standard `scp` command. You can read about it [here](https://linuxize.com/post/how-to-use-scp-command-to-securely-transfer-files/). I highly recommend familiarizing yourself with the gcp command we'll be using [here](https://cloud.google.com/sdk/gcloud/reference/compute/scp).
   The command is structured like this:
   ```
   gcloud compute scp --project=<name of project> --zone=<project time zone> <files you want to move> <gcp instance>:<location within the gcp instance>
   ```
   For our purposes, let's say our project name is "my-project", the time zone is "us-central1-a", and our gcp instance is "sourcegraph-dc-instance". If we want to move our local database dumps from the local `/tmp` folder to the `/tmp` folder in our remote instance, the command will look like this\*:
   ```
   gcloud compute scp --project="my-project" --zone="us-central1-a" /tmp/*_db.out sourcegraph-dc-instance:/tmp/
   ```
   Execute the command with the correct information from your instances. If the command succeeds, you'll be greeted with output that looks something like this:
   ```
   Updating project ssh metadata...done.
   Waiting for SSH key to propagate.
   Warning: Permanently added 'compute.<some long number>' (ECDSA) to the list of known hosts.
   codeintel_db.out                                          100%  101KB 752.5KB/s   00:00
   sourcegraph_db.out                                        100%  313KB   2.9MB/s   00:00
   ```
   **_\_NOTE: the `__db.out` marker will indicate that all files ending in_** `_db.out` **_should be moved._**
5. Make sure the files really did copy by navigating to the `/tmp` file in your gcp instance and finding the files. You can also use `grep` to search familiar repos to be sure. If you see them, congrats! You've completed the trickiest step in this process.
6. SSH into your gcp instance. Copy the dumps from the `/tmp` folder into the `/tmp` folder in the `pgsql` and `codeintel-db` containers using the docker specific `docker cp` command, respectively:
   ```
   > docker cp /tmp/sourcegraph_db.out pgsql:/tmp/
   > docker cp /tmp/codeintel_db.out codeintel-db:/tmp/
   ```
7. Create a shell session inside the `pgsql` container in your gcp instance

   ```
   docker exec -it pgsql /bin/sh
   ```

   Restore the Database dump:

   ```
   psql --username=sg -f /tmp/sourcegraph_db.out postgres
   ```

   Open up a `psql` session inside the `pgsql` container:

   ```
   psql --username=sg postgres

   ```

   Apply the following alteration to the database:

   ```
   DROP DATABASE sg;
   ALTER DATABASE sourcegraph RENAME TO sg;
   ALTER DATABASE sg OWNER TO sg;
   ```

   End the psql session with `\q`, then exit the `pgsql` shell session by executing the `exit` command.

8. Create a shell session inside the `codeintel-db` container

   ```
   docker exec -it codeintel-db /bin/sh
   ```

   Restore the Database dump:

   ```
   psql --username=sg -f /tmp/codeintel_db.out postgres
   ```

   Open up a `psql` session inside the `codeintel-db` container:

   ```
   psql --username=sg postgres

   ```

   Apply the following alteration to the database:

   ```
   DROP DATABASE sg;
   ALTER DATABASE "sourcegraph-codeintel" RENAME TO sg;
   ALTER DATABASE sg OWNER TO sg;
   ```

   End the `psql` session with `\q`, then exit the `codeintel-db` shell session by executing the `exit` command.

9. Restart the rest of the containers. Make sure you're in the directory that contains the `docker-compose` definition before doing so:
   ```
   docker-compose -f docker-compose.yaml up -d
   ```
10. Navigate to the external url associated with your gcp instance and attempt to login using the same credentials you used with your local instance. If you've done everything correctly, it should successfully validate your credentials and all your repos should've started cloning. **_NOTE: The url may not immediately be available. It can take up to 15 minutes for the url to start working._**

### Getting Help

If you run into any issues during this crash course, please reach out to Jason Harris.
