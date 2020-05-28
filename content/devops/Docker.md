---
title: Docker
weight: 202
bookCollapseSection: true
---

# Working with images

+ `docker image ls` = list all images
+ `docker image inspect $imageid` = show detailed info about `$imageid` image
+ `docker image build -t $imagename:$imagetag .` = build an image from a Dockerfile in the current directory, with `$imagename` as name and `$imagetag` as tag
+ `docker image build -t $imagename:$imagetag $githuburl:$branchname` = build an image from a Dockerfile residing on a Github repository at `$githuburl`, under branch `$branchname`
+ `docker image build -t $imagename:$imagetag - < $tarball` = build an image from a tarball containing all the sources and the Dockerfile for the image
+ `docker image push $hubname/$imagename:$imagetag` = push a local image to Docker Hub
+ `docker image save $imagename -o $tarfile.tar` = save an image to a tar file
+ `docker image load --input $tarfile.tar` = load an image from a tar file
+ `docker image tag $imageid $imagename:$imagetag` = name and tag an already built image of `$imageid`
+ `docker run -it $imageid /bin/bash` = get a shell access (or any other command that should be present in it) to an image

# Working with containers

+ `docker container ls` = list running containers
+ `docker container ls -a` = list all containers, running and stopped ones
+ `docker container inspect $containerid` = show detailed info about `$containerid` container
+ `docker container top $containerid` = run `top` command on `$containerid` container
+ `docker container attach $containerid` = attach to a specific container
+ `docker container logs $containerid` = show logs of `$containerid` container
+ `docker container stats` = show used resources of all running containers. With an optional `$containerid` given, it shows a live stream of the used resources of that specific container
+ `docker container exec -it $containerid $command` = run `$command` in `$containerid` container
+ `docker container exec -u 0 -it $containerid $command` = as above, run `$command` in `$containerid` but be sure to be logged as root (user 0)
+ `docker container pause $containerid` = pause a container
+ `docker container unpause $containerid` = unpause a container
+ `docker container prune` = delete all stopped containers
+ `docker container port $containerid` = show all mapped ports of `$containerid` container
+ `docker container ls -a -f status=exited` = show all local containers that have status as "exited"
+ `docker container run -d --name $containername --cpus="1" --memory=512M --memory-swap=1G $imagename` = start a container but limiting its resources to 1 CPU, 512Mb of memory and 1Gb of swap
+ `docker commit $containerid $image/$tag` = after making changes to a running container, save them to a new (or existing) image with the `$image/$tag` name

# Working with networks

+ `docker network ls` = list all networks
+ `docker network inspect $networkname` = show detailed info about `$networkname`
+ `docker network create $networkname` = create a new network
+ `docker network rm $networkname` = delete a network
+ `docker network prune` = remove all unused networks
+ `docker network connect $networkname $containername` = connect a specific container to a specific network
+ `docker network disconnect $networkname $containername` = disconnect a container from a network

# Working with volumes

+ `docker container run -it -v /some/local/directory/:/some/directory/within/the/container/ --name $containername $containerimage` = run a new container from `$containerimage`, creating a volume that will bind a local directory to a directory within the container. If either directories don't exist, it will be created. Files can be used instead of directories. Paths must be absolute
+ `docker container run -d --name $containername --mount type=bind,source=/some/local/directory/,target=/container/target/directory/ $imagename` = run a new container from `$imagename`, binding a local directory to a directory within the container

# General commands

+ `docker system events --since '2h'` = show all events related to the local Docker daemon, that happened in the last 2 hours
+ `docker system events --filter type=volume --since '2h'` = as above but filters for events related to volumes only

# Docker-compose

+ `docker-compose up -d` = start docker-compose daemon and run all containers, according to the docker-compose.yml. The file can be specified, if not in the current directory, with the `-f` flag
+ `docker-compose ps` = list containers created by docker-compose
+ `docker-compose stop` = stop docker-compose daemon, along with all its running containers
+ `docker-compose down` = as above but also deletes the containers

# Docker Swarm

+ `docker swarm init --advertise-addr $ip` = initialize a new swarm manager (with `$ip` being the address of the node to act as manager)
+ `docker swarm join --token $token $managerip:$managerport` = join a node as a worker to the relative manager
+ `docker node ls` = show nodes in the swarm (only to be run from a manager)
+ `docker node inspect $hostname` = show detailed info about a node of the swarm. Also the IP address can be used instead of the hostname
+ `docker node promote $hostname` = promote a node worker to manager
+ `docker node demote $hostname` = demote a node manager to worker
+ `docker node rm $hostname` = remove a worker. A manager has to be demoted first before being able to remove it
+ `docker swarm leave` = remove a local worker from the swarm
+ `docker swarm join-token $role` = print the token to join the swarm, from a manager, for a specific role (worker or manager)
+ `docker service create -d --name $servicename --replicas 2 $imagename` = create a service with 2 replicas from the image `$imagename`
+ `docker service scale $servicename=3` = scale the `$servicename` to 3 replicas
+ `docker service update --network-add $networkname $servicename` = add service `$servicename` to network `$networkname`
+ `docker service update --network-rm $networkname $servicename` = remove service `$servicename` from the network `$networkname`
+ `docker stack deploy --compose-file docker-compose.yml $stackname` = deploy a stack with `$stackname` from the given docker-compose.yml file
+ `docker stack ls` = show stacks
+ `docker stack ps $stackname` = show detailed info about the stack `$stackname`
