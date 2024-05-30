---
title: Ubuntu
description: Ubuntu
layout: ../../../layouts/MainLayout.astro
---

# Ubuntu Notes

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

### Setup a SD card to the exFAT format
``` shell
sudo apt update
sudo apt upgrade
sudo apt install exfat-fuse

sudo mount -t exfat /dev/sdb1 /media/exfat

sudo fdisk -l
sudo blkid

/etc/fstab
UUID=CA1C-06BC /media/exfat exfat defaults,auto,umask=000,users,rw 0 0
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

# show blk
sudo lsblk

# get UUID
sudo blkid

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

### Mount an NTFS drive
``` shell
sudo apt update
sudo apt install ntfs-3g fuse

sudo parted -l
sudo mkdir -p /mnt/ntfs
sudo mount -t ntfs /dev/sdb /mnt/ntfs

mount | grep ntfs
sudo umount /mnt/ntfs

sudo mount -o ro -t ntfs /dev/sdb /mnt/ntfs
sudo mount -o rw -t ntfs /dev/sdb /mnt/ntfs

sudo nano /etc/fstab

/dev/sdb        /mnt/ntfs       ntfs    defaults        0       0

sudo mount -a
```

### dpkg was interrupted
``` shell
sudo rm /var/lib/apt/lists/lock

sudo rm /var/cache/apt/archives/lock

cd /var/lib/dpkg/updates

sudo rm *

sudo apt-get update
```

### fsck ext4
```
sudo umount /dev/sda1
sudo fsck.ext4 -y -p /dev/sda1
```

### Clean the /boot/firmware
``` shell 
apt list --installed | grep linux-image
uname -r
sudo apt-get remove linux-image-2.6.32-{21,37,38,39}-server
sudo apt-get autoclean && sudo apt-get autoremove
sudo apt autoremove --purge
sudo apt purge linux-image-5.15.0-1-generic

sudo rm /boot/firmware/*.bak /boot/firmware/overlays/*.bak

df -Th /boot
sudo du -sh /boot/*
sudo ls -lhS /boot/*
apt list linux-*$kversion* --installed
dpkg --list | egrep 'linux-image|linux-headers'

sudo rm /boot/vmlinuz-5.4.0-7634-generic
sudo rm /boot/*-5.4.0-{7634}-*
sudo rm /boot/*-5.4.0-{7634,7624}-*
```

### Samba
``` shell
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install samba samba-common-bin

sudo chmod 1775 entertainment

# Create a demoUser account on the local system:
sudo useradd -M -s /sbin/nologin demoUser
# Omit the -M parameter if the user requires a home directory
# on this host.
# For Samba access, the account does not require a valid shell.
# To enable the demoUser account on the local system:
sudo passwd demoUser
# Enter new UNIX password: Passw0rd
# Retype new UNIX password: Passw0rd
# passwd: password updated successfully

# Setting a local password is required to enable the account.
# Samba denies access if the account is disabled locally.
# Local log ins using this password are not possible
# if the account was created without a valid shell.
# Add the demoUser account to the Samba database:
sudo smbpasswd -a demoUser
# New SMB password: Passw0rd
# Retype new SMB password: Passw0rd
# Added user demoUser.

sudo vi/etc/samba/smb.conf
# sudo adduser pi
# sudo smbpasswd -a pi

testparm -s
sudo systemctl restart smbd

[share]
Comment = Pi shared folder
Path = /share
Browseable = yes
Writeable = Yes
only guest = no
create mask = 0775
directory mask = 0775
Public = yes
Guest ok = yes

[sharee]
path = /mnt/entertainment
browseable = yes
read only = no
create mask = 0775
directory mask = 0775
vfs objects = fruit streams_xattr
public = no

[hdd2t]
   comment = WD HDD 2T
   path = /mnt/hdd2t/share
   browseable = yes
   writeable = yes
   guest ok = no
   read only = no
   create mask = 0775
   directory mask = 0775
   read list = pia
   write list = pia
   valid users = pia
   admin users = pia
```

### apt proxy
```
# create proxy file in the /etc/apt/apt.conf.d
Acquire::http::Proxy "http://127.0.0.1:10809/";
Acquire::https::Proxy "http://127.0.0.1:10809/";
```

### Certbot
- sudo certbot certonly --manual (also for renew)

### add-apt-repository
- sudo apt install software-properties-common

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

- ping
  - apt-get install -yqq inetutils-ping

### Openssl
``` shell
openssl genrsa -aes256 -out private_key.pem 2048
openssl rsa -pubout -in private_key.pem -out public_key.pem
openssl req -x509 -nodes -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -days 3650
openssl req -x509 -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -subj "/CN=unused" -days 3650
openssl pkcs12 -export -in rsa_cert.pem -inkey rsa_private.pem -CSP "Microsoft Enhanced RSA and AES Cryptographic Provider" -out rsa_cert.pfx
openssl x509 -text -noout -in cert.pem
openssl x509 -noout -text -in /etc/letsencrypt/live/el.alexqin.cn/fullchain.pem
openssl rsa -noout -text -in /etc/letsencrypt/live/el.alexqin.cn/privkey.pem

openssl s_client -connect s.alexqin.top:443
```


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
``` shell
sudo apt install openssh-server
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.original
sudo chmod a-w /etc/ssh/sshd_config.original
sudo systemctl restart sshd.service
sudo service ssh status
sudo nano /etc/ssh/sshd_config
sudo service ssh restart
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
ssh-keygen -t ed25519 -C "your_email@example.com"
ssh-copy-id alex@172.96.19.251 -p 122 (client side)
```


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
``` shell
sudo mount -t vboxsf share /mnt/share

# vmware player
sudo apt install open-vm-tools
# /etc/fstab
vmhgfs-fuse /mnt/hgfs fuse defaults,allow_other 0 0
```

### Virtual Box
``` shell
sudo su
apt install gcc make bzip2
# mkdir --parents /media/cdrom
mount /dev/cdrom /media/cdrom
/media/cdrom/VBoxLinuxAdditions.run
reboot

modinfo vboxguest
sudo usermod --append --groups vboxsf -- "$USER"
cat /etc/group | grep "$USER"

# /etc/fstab
share /mnt/share vboxsf defaults 0 0
```