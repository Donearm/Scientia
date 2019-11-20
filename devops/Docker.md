# Working with images

+ `docker image ls` = list all images
+ `docker image inspect $imageid` = show detailed info about `$imageid` image
+ `docker image build -t $imagename:$imagetag .` = build an image from a Dockerfile in the current directory, with `$imagename` as name and `$imagetag` as tag
+ `docker image build -t $imagename:$imagetag $githuburl:$branchname` = build an image from a Dockerfile residing on a Github repository at `$githuburl`, under branch `$branchname`
+ `docker image build -t $imagename:$imagetag - < $tarball` = build an image from a tarball containing all the sources and the Dockerfile for the image
+ `docker image push $hubname/$imagename:$imagetag` = push a local image to Docker Hub

# Working with containers

+ `docker container ls` = list running containers
+ `docker container ls -a` = list all containers, running and stopped ones
+ `docker container inspect $containerid` = show detailed info about `$containerid` container
+ `docker container top $containerid` = run `top` command on `$containerid` container
+ `docker container attach $containerid` = attach to a specific container
+ `docker container logs $containerid` = show logs of `$containerid` container
+ `docker container stats` = show used resources of all running containers
+ `docker container exec -it $containerid $command` = run `$command` in `$containerid` container
+ `docker container exec -u 0 -it $containerid $command` = as above, run `$command` in `$containerid` but be sure to be logged as root (user 0)
+ `docker container pause $containerid` = pause a container
+ `docker container unpause $containerid` = unpause a container
+ `docker container prune` = delete all stopped containers
+ `docker container port $containerid` = show all mapped ports of `$containerid` container

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
