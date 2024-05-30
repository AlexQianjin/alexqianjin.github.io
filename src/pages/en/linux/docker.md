---
title: Docker
description: Docker
layout: ../../../layouts/MainLayout.astro
---

# Docker Introduction

## Repository
```
docker pull NAME:[TAG] 
docker pull ubuntu:14.04

registry.hub.docker.com
docker pull hub.c.163.com/public/ubuntu:14.04

docker push
  docker tag test:latest user/test:latest
  docker push user/test:latest
docker search
  docker search ubuntu
```
## Image
```
docker images
docker image ls
docker tag ubuntu:latest myubuntu:latest
docker inspect ubuntu:14.04
  docker inspect ubuntu:14.04 \{\{.Architecture\}\}
docker history ubuntu:14.04
docker search
  docker search --automated -s 3 nginx
docker rmi [IMAGE]
  docker rmi myubuntu:latest
  docker rmi a21c0840213e
```
#### Create Image
```
docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]
  dokcer commit -m "add a new file" -a "Docker Newbee" a925cb40b3f0 test:0.1
docker import [OPTIONS] file|URL| - [REPOSITORY[:TAG]]
  cat ubuntu-14.04-x86_64-minimal.tar.gz | docker import - ubuntu:14:04
docker save / docker load
  docker save -o ubuntu_14.04.tar ubuntu:14.04
  docker load -- input ubuntu_14.04.tar
  docker load < ubuntu_14.04.tar
```

## Container
```
docker create
  docker create -it ubuntu:latest
docker start
  docker start af
docker ps / docker ps -a
docker run
  docker run ubuntu /bin/echo 'Hello world'
  docker run -it ubuntu:14.04 /bin/bash
  docker run -d ubuntu /bin/sh -c "while true; do echo hello world; sleep 1;"
docker logs
  docker logs ce5
docker stop
  docker stop ce5
docker attach
  docker run -itd ubuntu
  docker attach [CONTAINER]
docker exec
  docker exec -it 243c32535da7 /bin/bash
  To have ctrl+c stop the container you must use -it
  To detach from the container you should use ctrl+pq
docker rm
  docker rm 2ae
  docker rm $(docker ps -aq)
docker export
  docker export -o test_for_run.tar ce5
docker import
  docker import test_for_run.tar = test/ubuntu:v1.0
docker update
  docker update --restart=no container-name
```

## Network
```
docker network create my-net
docker network rm my-net
docker create --name my-nginx \
  --network my-net \
  --publish 8080:80 \
  nginx:latest
docker network disconnect my-net my-nginx
```

## Data Management
#### Data Volume
```
docker run -d -P web -v /webapp training/webapp python app.py
docker run -d -P web -v /src/webapp:/opt/webapp training/webapp python app.py
docker run -it --rm --name my-running-script -v "$PWD":/usr/src/app -w /usr/src/app node node test.js
```
#### Data Volume Container
```
docker run -it -v /dbdata --name dbdata ubuntu
docker run -it --volumes-from dbdata --name db1 ubuntu
docker run -it --volumes-from dbdata --name db2 ubuntu
```
#### Backup
```
docker run --volumes-from dbdata -v $(pwd):/backup --name worker ubuntu tar cvf /backup/backup.tar /dbdata
```
#### Restore
```
docker run -v /dbdata --name dbdata2 ubuntu /bin/bash
docker run --volumes-from dbdta2 -v $(pwd):/backup busybox tar xvf /backup/backup.tar
```

#### Copy File
```
docker cp <containerId>:/usr/local/etc/php/conf.d/php.ini ~/moodle-docker/php/
docker cp my-postgres.conf <containerId>:/usr/local
```


## Dockerfile
```
docker build -t build/ubuntu-nodejs ./
```

## Jekyll
```
docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:3.8 jekyll build
```

## Node
```
docker run --rm --volume="$PWD:/usr/src/app" -w /usr/src/app -it node:11.14.0-alpine /bin/sh -c "npm install && npm run build && cp -r build ../server"
```

## Nginx
```
sudo docker run --name jekyll-nginx -v $PWD:/usr/share/nginx/html:ro -d -p 80:80 nginx
```

## Swagger api
```
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \
    -i http://petstore.swagger.io/v2/swagger.json \
    -l javascript \
    -o /local/api-client
	
docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \
    -i /local/api.json \
    -l javascript \
    -o /local/out/javascript \
    -c /local/javascript.config	
```    

## Install docker
```
curl -fsSL https://get.docker.com -o get-docker.sh
# DRY_RUN=1 sh ./get-docker.sh
sudo sh get-docker.sh
```

## Install docker on Ubuntu Server
```
# Add Docker's official GPG key:
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

sudo docker run hello-world

```

### Docker User
- sudo groupadd docker
- sudo usermod -aG docker ${USER} / sudo gpasswd -a $USER docker
- su root / su ${USER} / newgrp docker
- sudo systemctl restart docker

## Setup docker image mirror
```
sudo mkdir -p /etc/docker
sudo tee /etc/docker/daemon.json <<-'EOF'
{
  "registry-mirrors": ["https://{xxxxxxx}i.mirror.aliyuncs.com"]
}
EOF
sudo systemctl daemon-reload
sudo systemctl restart docker
```

## mongo in docker
- sudo docker run -d --name db -p 27017:27017 -v $(pwd)/mongo:/docker-entrypoint-initdb.d -e MONGO_INITDB_DATABASE=weapondb mongo mongod
- sudo docker run -d --name db -v $(pwd)/scripts/mongo:/docker-entrypoint-initdb.d -e MONGO_INITDB_DATABASE=weapondb mongo mongod

## cannot access the network in ubuntu or ubuntu docker container
- echo "nameserver 8.8.8.8" >> /etc/resolv.conf
- echo "search lan" >> /etc/resolv.conf

## Next Cloud with Postgres in the docker
```
docker network create --driver bridge nextcloud-net
docker run --name postgres -v /home/{{user}}/nextcloud-db:/var/lib/postgresql/data -e POSTGRES_PASSWORD={{password}} --network nextcloud-net -d postgres

docker run --name nextcloud -d -p 8080:80 -v /home/{{user}}/nextcloud:/var/www/html --network nextcloud-net nextcloud

sudo chown -R www-data:www-data /media/usbdrive

docker run --name nextcloud -d -p 8080:80 -v /media/usbdrive:/data --network nextcloud-net -v /home/pi/nextcloud:/var/www/html nextcloud
```