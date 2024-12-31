---
title: Windows Commands
description: Windows commands
---

### Windows CMD
``` cmd
netstat -a -o
netstat -ano|findstr "8080" 
tasklist|findstr "5812" 

taskkill /IM msedge.exe /F
taskkill /IM Zoom.exe /F
taskkill /IM v2ray.exe /F
taskkill /IM firefox.exe /F
taskkill /IM WeChat.exe /F
```

### Powershell
``` powershell
$PSVersionTable.PSVersion
Set-ExecutionPolicy unrestricted
Get-Module -All

Get-Module -ListAvailable |Where-Object {$_.Name -like 'AzureRM*'}
Get-Module -ListAvailable

Install-Module -Name Az -AllowClobber
Install-Module -Name AzureRmStorageTable
Import-Module AzureRmStorageTable
Install-Module AzureRM 
Import-Module AzureRM

Get-InstalledModule -Name Az -AllVersions
Get-InstalledModule -Name AzureRM -AllVersions

Set-AzureStorageBlobContent
Set-AzStorageBlobContent
Get-AzureStorageContainer
```

### Git Bash
- ssh-keygen -C "qianjin.qin@qq.com"
- ssh-keygen -t rsa -b 4096 -C "qianjin.qin@qq.com"
- ssh-keygen -t ed25519 -C "qianjin.qin@qq.com"
- clip < ~/.ssh/id_rsa.pub

### Apps

- WinDirStat
- gopeed
- SyncBackFree
- Syncthing
- 硬盘检测
    - CrystalDiskInfo / HDTune
    - Victoria HDD [https://www.youtube.com/watch?v=EMTu1jJFXZU&ab_channel=钱韦德](https://www.youtube.com/watch?v=EMTu1jJFXZU&ab_channel=%E9%92%B1%E9%9F%A6%E5%BE%B7)
- SSD Enclosure<Shell Thunder >
- OBS 视频录制软件 / losslesscut
- WindTerm / Tabby / Electerm / MobaXterm
- PIXEA
- LocalSend
- SyncFolder
- PixPin / Sinpaste / [轻松便捷爱截图 (qq.com)](https://jietu.qq.com/)
- Wiz Tree / Tree Size Free / Disk Analyzer Pro **/** Space Sniffer /
- Bulk Crap Uninstaller
- Zen Flip Clock (App Store)
- fastcopy
