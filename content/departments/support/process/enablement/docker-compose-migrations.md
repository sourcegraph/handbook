## Docker/Docker-Compose Migrations
This is a crash course in docker/docker-compose migrations for onboarding Application Engineers at Sourcegraph. This course assumes that you already have a single-container, local docker deployment of Sourcegraph, and a docker-compose (no users yet) deployment using GCP. 

While this crash course focuses on migrating to a GCP instance, by the end of the course you should have a good basis for navigating to other cloud services (AWS, Azure, etc.) as well.


### Setup 

If you already have local and GCP instances of sourcegraph set up, you can move to the next step. If you do not have both of these already set up, please *visit the following pages in the Sourcegraph documentation and do so before starting this crash course*.

1. Instructions for [deploying a local docker instance](https://docs.sourcegraph.com/admin/install/docker)
2. Instructions for [deploying a docker-compose instance in GCP](https://docs.sourcegraph.com/admin/install/docker-compose/google_cloud)

Once your local instance is deployed, create an account, then add a codehost and a few small repos to your instance so there is something to migrate when the time comes. *NOTE: Once you have deployed your docker-compose instance on GCP, do not register a new user yet. That information will be added automatically when we migrate the database dumps later*.


### Prepare the Migration

1. First, find your local instance's `CONTAINER_ID` by running your local instance, then executing the command `docker ps`. You will see the following output:
    ```
    > docker ps
    CONTAINER ID        IMAGE
    ...                 sourcegraph/server
    ```
    Take the value from the `CONTAINER_ID` column and export it as a variable in your terminal:
    ```
    export CONTAINER_ID=<value from the previous command>
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
	
3. Check the contents of the files and make sure you see information you recognize by using the `less` command.
	```
	less /tmp/sourcegraph_db.out
	less /tmp/codeintel_db.out
	```
	To be sure you're migrating the right information, you can use the `grep` command to search for one of your repos.
	```
	grep <repo or organization name> sourcegraph_db.out
	```
	If it returns expected results, you're all good to move on to the next step.
	
	
### Migrating
*NOTE: you will need to have access to the `gcloud` cli to complete some of the steps in this section*

1. Navigate to the directory containing the `docker-compose` definition. To do so, SSH into the GCP instance, then `sudo -i` then cd `/deploy-sourcegraph-docker/docker-compose`.
2. Kill the existing Docker Compose containers (and associated volumes) so that we avoid conflicting transactions while modifying the database:
	```
	docker-compose down --volumes
	```
3. Start the postgres instance by itself:
	```
	docker-compose -f db-only-migrate.docker-compose.yaml up -d
	```
4. The next step is tricky, and may require a little bit of trial and error depending on your environment. The next thing we need to do is copy the local dumps into our gcp instance. We will be using the `gcloud compute scp` command to do so. It is important to note that if you're following this crash course using another cloud like AWS or Azure, this is where you might have to do your own research. I highly recommend familiarizing yourself with the gcp command we'll be using [here](https://cloud.google.com/sdk/gcloud/reference/compute/scp).
	The command is structured like this:
	```
	gcloud compute scp --project=<name of project> --zone=<project time zone> <files you want to move> <gcp instance>:<location within the gcp instance>
	```
	For our purposes, let's say our project name is "my-project", the time zone is "us-central1-a", and our gcp instance is "sourcegraph-dc-instance". If we want to move our local database dumps from the our local `/tmp` folder to the `/tmp` folder in our remote instance, the command will look like this:
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
5. Make sure the files really did copy by navigating to the `/tmp` file in your gcp instance and finding the files. If you see them, congrats! You've completed the trickiest step in this process.
6. SSH into your gcp instance. Copy the dumps from the `/tmp` folder into the `/tmp` folder in the `pgsql` and `codeintel-db` containers, respectively:
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
	End the psql session with `\q`, then exit the `pgsql` shell session by typing `exit`.
8. Create a shell session inside the `codeintel-db` container
	```
	docker exec -it codeintel-db /bin/sh
	```
	Restore the Database dump:
	```
	psql --username=sg -f /tmp/codeintel_db.out postgres
	```
	Open up a `psql` session inside the `pgsql` container:
	```
	psql --username=sg postgres

	```
	Apply the following alteration to the database:
	```
	DROP DATABASE sg;
	ALTER DATABASE "sourcegraph-codeintel" RENAME TO sg;
	ALTER DATABASE sg OWNER TO sg;
	```
	End the psql session with `\q`, then exit the `pgsql` shell session by typing `exit`.
9. Restart the rest of the containers. Make sure you're in the directory that contains the `docker-compose` definition before doing so:
	```
	docker-compose -f docker-compose.yaml up -d
	```
10. Navigate to the external url associated with your gcp instance and attempt to login using the same credentials you used with your local instance. If you've done everything correctly, it should successfully validate your credentials and all your repos should've started cloning. *NOTE: The url may not immediately be available. It can take up to 15 minutes for the url to start working.* 
