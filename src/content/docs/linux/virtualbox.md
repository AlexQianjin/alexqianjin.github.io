---
title: Virtual Box Notes
description: Virtual Box Notes
---

### Virtual Box

#### To install VirtualBox Guest Additions on a GUI-less Ubuntu Server
1. Install prerequisites
Open a terminal in your Ubuntu Server guest and run these commands to install the required packages:
``` shell
sudo apt update
sudo apt install dkms build-essential linux-headers-$(uname -r) 
```
2. Insert and mount the Guest Additions CD image
From the VirtualBox menu on your host machine, go to Devices and select Insert Guest Additions CD image....
The CD image should appear in your server's file system, often under /media/cdrom or a similar path.
Mount the CD image if it's not automatically mounted:
``` shell
sudo mkdir /media/cdrom
sudo mount /dev/cdrom /media/cdrom 
```
3. Run the installation script
Navigate to the mounted directory: Run the installer script. You may need to switch to the root user first for a GUI-less server: 
``` shell
cd /media/cdrom
sudo ./VBoxLinuxAdditions.run 
```
4. Restart the virtual machine
Restart the guest machine for the changes to take effect:
``` shell
sudo reboot
```

#### To setup the share folder from the Host to the vm
``` shell
modinfo vboxguest
sudo usermod --append --groups vboxsf -- "$USER"
cat /etc/group | grep "$USER"

sudo usermod -aG vboxsf $USER

# /etc/fstab
share /mnt/share vboxsf defaults 0 0
```

### VMWare Player
``` shell
sudo mount -t vboxsf share /mnt/share

# vmware player
sudo apt install open-vm-tools
# /etc/fstab
vmhgfs-fuse /mnt/hgfs fuse defaults,allow_other 0 0
```