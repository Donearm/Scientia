# Working with images

+ `docker image ls` = list all images
+ `docker image inspect $imageid` = show detailed info about `$imageid` image

# Working with containers

+ `docker container ls` = list running containers
+ `docker container ls -a` = list all containers, running and stopped ones
+ `docker container inspect $containerid` = show detailed info about `$containerid` container
+ `docker container top $containerid` = run `top` command on `$containerid` container
+ `docker container attach $containerid` = attach to a specific container
+ `docker container logs $containerid` = show logs of `$containerid` container
+ `docker container stats` = show used resources of all running containers
+ `docker container exec -it $containerid $command` = run `$command` in `$containerid` container
+ `docker container pause $containerid` = pause a container
+ `docker container unpause $containerid` = unpause a container
+ `docker container prune` = delete all stopped containers
+ `docker container port $containerid` = show all mapped ports of `$containerid` container
