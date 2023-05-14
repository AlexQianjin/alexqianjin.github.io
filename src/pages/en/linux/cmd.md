---
title: Commands
description: linux commands
layout: ../../../layouts/MainLayout.astro
---

# Basic Commands

### Commands
- ls
- ls ‐ahl
- ll
- cd
- ln
- mkdir
- rm / rm -r -f Github/
- rmdir
- mv
- cp
- touch
- cat
- nl
- more
- less
- tail
- grep
- find
- du

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
- systemctl list-unit-files | grep enabled
- systemctl | grep running
- systemctl show [unit]
- systemctl restart [unit]
- sudo rm -r
- sudo ufw allow 1520
- adduser myuser          # [myuser为用户名，可自定义指定]将提示你输入登录密码，请输入并牢记
- sudo passwd myuser
- cat /etc/passwd 
- cat /etc/group
- usermod -aG sudo myuser # 将创建的用户添加到sudo分组中，以便使用管理员的命令
- exit                    # 结束终端会话
- sudo passwd 
- su - root
- curl -O https://raw.githubusercontent.com/AlexQianjin/Weapon/master/README.md
- wget https://raw.githubusercontent.com/AlexQianjin/Weapon/master/README.md
- sudo bash install.sh
- lsof -i :8000
- sudo dmidecode -q
- lshw | less
- free 
- free -m
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
- find . -regex '.\/txt.+' | xargs -i mv {} ./test1
- find . -regex '.\/txt.+' | xargs -I {} mv {} ./test1
- find . -regex '.\/txt.+' -exec mv {} ./test1 \;
- envsubst envsubst < test.txt > output.file
- echo "export NODEJS_SERVICE_PORT=1233" >> .bashrc && source .bashrc
- uname －a
- cat /proc/version
- lsb_release -a
- apt-cache search php7.4-curl
- ps -ax | grep apache
- ps -e / ps -A
- ps -aux
- kill {pid}
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

### vim
- :wq 保存并退出
- :q
- :x
- ZZ 保存并退出
- :q! 强制退出并忽略所有更改
- :e! 放弃所有修改，并打开原来文件
- 0 : 将光标移动到当前行首
- $ : s将光标移动到当前行尾
- G : s移动到这个文件的最后一行
- nG : n 为数字，移动到这个文件的第n行
- gg: s移动到这个文件的第一行 相当于 1G
- /word :  从光标开始，向下查询一个名为word的字符串。
- :n1、n2s/word1/word2/g : n1 与n2 为数字.在第n1与n2行之间寻找word1这个字符串, 并将该字符串替换为word2。
- :1、$s/word1/word2/g : 从第一行到最后一行寻找word1字符串，并将该字符串替换为word2
- :1、$s/word1/word2/gc: 从第一行到最后一行寻找word1字符串，并将该字符串替换为word2。 并且在替换之前显示提示符给用户确认（conform）是否需要替换。
- x,X  : 在一行中，x为向后删除一个字符（相当于del键），X为向前删除一个字符（相当于backspace键）。
- dd   : 删除光标所在的那一整行。
- ndd  : n 为数字。从光标开始，删除向下n列。
- yy   : 复制光标所在的那一行。   
- nyy  : n为数字。复制光标所在的向下n行。
- p,P  : p 为将已复制的数据粘贴到光标的下一行，P则为贴在光标的上一行。
- u    : 复原前一个操作
- CTRL + r : 重做上一个操作。
- 小数点'.': 重复前一个动作。
- :set number

### VI Editing commands
- i – Insert at cursor (goes into insert mode)
- a – Write after cursor (goes into insert mode)
- A – Write at the end of line (goes into insert mode)
- ESC – Terminate insert mode
- u – Undo last change
- U – Undo all changes to the entire line
- o – Open a new line (goes into insert mode)
- dd – Delete line
- 3dd – Delete 3 lines.
- D – Delete contents of line after the cursor
- C – Delete contents of a line after the cursor and insert new text. Press ESC key to end insertion.
- dw – Delete word
- 4dw – Delete 4 words
- cw – Change word
- x – Delete character at the cursor
- r – Replace character
- R – Overwrite characters from cursor onward
- s – Substitute one character under cursor continue to insert
- S – Substitute entire line and begin to insert at the beginning of the line
- ~ – Change case of individual character

#### Moving within a file
- k – Move cursor up
- j – Move cursor down
- h – Move cursor left
- l – Move cursor right

#### Saving and Closing the file
- Shift+zz – Save the file and quit
- :w – Save the file but keep it open
- :q – Quit without saving
- :wq – Save the file and quit

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