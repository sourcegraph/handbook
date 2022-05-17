# MI 1.1 creation process

> most steps are identical to MI 1.0 creation process

1. Ensure the target version of docker-compose file is in the golden directory, it should be named `docker-compose.x.y.z.yaml`

1. `./util/create-managed-instance-new.sh $COMPANY`

> Replace `x.y.z` with the target version

1. `cd $COMPANY/red/docker-compose && rm docker-compose.yaml && ln -s ../../../golden/docker-compose.x.y.z.yaml docker-compose.yaml && cd ../../`

1. Commit the result

The rest are the same as the 1.0 process.
