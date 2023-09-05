---
title: Commands
description: linux commands
layout: ../../../layouts/MainLayout.astro
---

# Basic Commands

### Commands
- ls
- ls ‐ahl
- ls -1 | wc -i # count files number
- ll
- cd
- ln
- mkdir
- rm / rm -r -f Github/
- rmdir
- mv
- cp
- rsync -ah --progress --stats $source $destination
- touch
- cat
- nl
- more
- less
- tail
- grep
- find
- locate file_name
- du option file_or_directory # check the size
- top
- history
- tar -czvf archive_name.tar.gz file_or_directory
- tar -xvzf archive_name.tar.gz
- whoami
- date
- cal
- uptime
- file file_name
- wc file_name
- sed options file_name
- awk 'pattern { action }' file_name

### System
- __to set address manually__  
  ifconfig eth0 inet x.x.x.x 
- __Upload files by Filezilla encountered permission denied__  
  sudo chown -R alex /var/www/html
- Open Terminal Ctrl + Alt + T 
- sudo poweroff
- sudo reboot
- sudo netstat -tulpn | grep LISTEN
- sudo netstat -anp | grep LISTEN
- sudo netstat -anvp tcp | grep 4200
- iptables option
- systemctl list-unit-files | grep enabled
- systemctl | grep running
- systemctl show [unit]
- systemctl restart [unit]
- sudo rm -r
- sudo ufw allow 1520
- adduser myuser          # [myuser为用户名，可自定义指定]将提示你输入登录密码，请输入并牢记
- deluser --remove-home username
- groups username
- sudo passwd myuser
- cat /etc/passwd 
- cat /etc/group
- compgen -u # display all the users
- compgen -g # display all the groups
- useradd username
- usermod -aG sudo myuser # 将创建的用户添加到sudo分组中，以便使用管理员的命令
- userdel username
- su - root
- exit                    # 结束终端会话
- sudo passwd 
- curl -O https://raw.githubusercontent.com/AlexQianjin/Weapon/master/README.md
- wget https://raw.githubusercontent.com/AlexQianjin/Weapon/master/README.md
- sudo bash install.sh
- lsof -i :8000
- sudo dmidecode -q
- lshw | less
- free 
- free -m
- free -h
- df -h
- fdisk -l
- echo -e "NODE_ENV=production \nPORT=3000 \nMONGOLAB_URI=mongodb://db/weapondb" >> .env
- sed -i 'a xxx' txt
- sed -i '4d' txt
- sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
- sed -i 's/l.alexqin.cn/localhost/g' reverse.conf
- dpkg -l
- dpkg -i foo.deb && apt-get install -f
- find / -name 'let*' -type d
- find / -iname 'let*' -type d # case insensitive
- find . -regex '.\/txt.+' | xargs -i mv {} ./test1
- find . -regex '.\/txt.+' | xargs -I {} mv {} ./test1
- find . -regex '.\/txt.+' -exec mv {} ./test1 \;
- envsubst envsubst < test.txt > output.file
- echo "export NODEJS_SERVICE_PORT=1233" >> .bashrc && source .bashrc
- uname－a
- cat /proc/version
- lsb_release -a
- apt-cache search php7.4-curl
- ps -ax | grep apache
- ps -e / ps -A
- ps -aux
- kill {pid}
- killall process_name
- sudo systemctl list-unit-files
- sudo systemctl list-unit-files | grep enabled
- sudo systemctl status openresty.service
- sudo systemctl disable nginx.service
- sudo chown -R $USER moodle/
- du -sh data/
- du -sm data/
- ls ‐lh
- grep -r font-size . | wc -l // "count number"
- grep -r h[1-6] ./*.css | wc -l
- scp root@[source-ip]:/root/cert ./

```
sudo passwd root
sudo passwd -u root
sudo passwd -l root
sudo -i
```
```
#!/bin/bash  
echo "This is a shell script"  
ls -lah  
echo "I am done running ls"  
SOMEVAR='text stuff'  
echo "$SOMEVAR"

The file must be made executable:

chmod u+x install.sh

Then from a terminal prompt:

sudo ./install.sh
```

### Git Bash (Windows)
- ssh-keygen -C "qianjin.qin@qq.com"
- ssh-keygen -t rsa -b 4096 -C "qianjin.qin@qq.com"
- ssh-keygen -t ed25519 -C "qianjin.qin@qq.com"
- clip < ~/.ssh/id_rsa.pub

### PHP
-  .\php-cgi.exe -b 127.0.0.1:9000 -c .\php.ini (Windows)
- php -i | grep extension_dir
- php -i | grep ini
- php --ini | grep Loaded
- php -m

### Red Hat
```
sudo yum list installed
```