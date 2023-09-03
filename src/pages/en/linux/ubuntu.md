---
title: Ubuntu
description: Ubuntu
layout: ../../../layouts/MainLayout.astro
---

# Ubuntu

### Setup Ubuntu
#### Update sources.list
```
lsb_release -a | grep Codename | awk '{print $2}' # 输出结果为下文中的Codename

vi sources.list

deb http://mirrors.aliyun.com/ubuntu/ $Codename main multiverse restricted universe
deb http://mirrors.aliyun.com/ubuntu/ $Codename-backports main multiverse restricted universe
deb http://mirrors.aliyun.com/ubuntu/ $Codename-proposed main multiverse restricted universe
deb http://mirrors.aliyun.com/ubuntu/ $Codename-security main multiverse restricted universe
deb http://mirrors.aliyun.com/ubuntu/ $Codename-updates main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename-backports main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename-proposed main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename-security main multiverse restricted universe
deb-src http://mirrors.aliyun.com/ubuntu/ $Codename-updates main multiverse restricted universe

apt-get update
apt upgrade
```

### Format a disk with Ubuntu Server
``` shell
# show the disks
sudo fdisk -l

# using this one to create new partition
# it also can delete the partition
gdisk /dev/sda
d # delete partition
n # create a new partition
w # save the changes

# format
sudo mkfs.ext4 /dev/sda1

# mount
sudo mount /mnt/usb /dev/sda1

# fstab
sudo vi /etc/fstab
UUID={{uuid}} /mnt/usb defaults 0 0

sudo mount -a

# this one is used to combine different disks into one mount dir
mhddfs

# the others
# delete partitions
ls /dev/sdb*
sfdisk --delete /dev/sdb
sfdisk --list /dev/sdb

fdisk /dev/sda
g create a new empty GPT partition table
n create a new partition
```

### Install git
``` shell
git --version
sudo apt install git
```

### apt proxy
```
# create proxy file in the /etc/apt/apt.conf.d
Acquire::http::Proxy "http://127.0.0.1:10809/";
Acquire::https::Proxy "http://127.0.0.1:10809/";
```

### Certbot
- sudo certbot certonly --manual (also for renew)

### ping
- apt-get install -yqq inetutils-ping

### add-apt-repository
- apt-get install software-properties-common

### curl
- apt install -y curl

### Install ibus-pinyin
- Settings => Region & Language => Manage Installed Languages => Install/Remove Languages... => Chinese(simplified) => Apply
```
sudo apt install ibus ibus-clutter ibus-gtk ibus-gtk3
im-config -s ibus
sudo apt install ibus-pinyin
sudo ibus-setup
reboot
```
- Settings => Region & Language => Input Sources => +

### Openssl
- openssl genrsa -aes256 -out private_key.pem 2048
- openssl rsa -pubout -in private_key.pem -out public_key.pem
- openssl req -x509 -nodes -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -days 3650
- openssl req -x509 -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -subj "/CN=unused" -days 3650
- openssl pkcs12 -export -in rsa_cert.pem -inkey rsa_private.pem -CSP "Microsoft Enhanced RSA and AES Cryptographic Provider" -out rsa_cert.pfx
- openssl x509 -text -noout -in cert.pem
- openssl x509 -noout -text -in /etc/letsencrypt/live/el.alexqin.cn/fullchain.pem
- openssl rsa -noout -text -in /etc/letsencrypt/live/el.alexqin.cn/privkey.pem
- openssl s_client -connect s.alexqin.top:443

``` bash
# convert ca.cer to ca.crt
openssl x509 -inform PEM -in ca.cer -out ca.crt

cp *.crt /usr/share/ca-certificates
ls -l /usr/share/ca-certificates

sudo dpkg-reconfigure ca-certificates
ls -l /etc/ssl/certs | grep -i ca

# another way
sudo cp *crt  /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

### Openssh
- sudo apt install openssh-server
- sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.original
- sudo chmod a-w /etc/ssh/sshd_config.original
- sudo systemctl restart sshd.service
- sudo service ssh status
- sudo nano /etc/ssh/sshd_config
- sudo service ssh restart
- ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
- ssh-keygen -t ed25519 -C "your_email@example.com"
- ssh-copy-id alex@172.96.19.251 -p 122 (client side)

### Moodle
```
git clone --depth=1 https://github.com/moodle/moodle.git
git remote set-branches origin 'MOODLE_39_STABLE'
git fetch --depth 1 origin MOODLE_39_STABLE
git checkout MOODLE_39_STABLE

git clone -b MOODLE_39_STABLE --depth 1  git://git.moodle.org/moodle.git
docker network create moodle-net
docker run --network moodle-net -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.8.0
docker run --network moodle-net --name moodle-mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:8.0.20
docker run --network moodle-net --name moodle-mariadb -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mariadb:10.5.4
docker run --network moodle-net --name myadmin -d -p 8080:80 -e PMA_HOST=moodle-mysql phpmyadmin/phpmyadmin
docker run --network moodle-net --name myadmin-maria -d -p 8080:80 -e PMA_HOST=moodle-mariadb phpmyadmin/phpmyadmin

mysql>
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';  // 'newuser'@'%'
GRANT ALL PRIVILEGES ON * . * TO 'newuser'@'localhost';
FLUSH PRIVILEGES;

GRANT type_of_permission ON database_name.table_name TO ‘username’@'localhost’;
REVOKE type_of_permission ON database_name.table_name FROM ‘username’@‘localhost’;
SHOW GRANTS username;
DROP USER ‘username’@‘localhost’;
```

### VMWare Player
```
sudo mount -t vboxsf share /mnt/share

# vmware player
sudo apt install open-vm-tools
# /etc/fstab
vmhgfs-fuse /mnt/hgfs fuse defaults,allow_other 0 0
```

### CMD
```
netstat -anvp tcp | grep 4200
openssl s_client -connect s.alexqin.top:443

cat /etc/os-release
uname -r
```