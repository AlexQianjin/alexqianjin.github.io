---
sidebar_position: 1
---

# Notes

#### local browser https
```
netsh http show sslcert
netsh http delete sslcert ipport=0.0.0.0:44300
netsh http add sslcert ipport=0.0.0.0:443 certhash=dc117a4d4960291642cb4326669151eadc5ceaf9 appid={214124cd-d05b-4309-9af9-9caa44b2b74a}
net stop http
net start http
```
#### Create react app run https
```
Windows (cmd.exe)#
set HTTPS=true&&npm start
(Note: the lack of whitespace is intentional.)

Windows (Powershell)#
($env:HTTPS = "true") -and (npm start)
($env:HTTPS = "true") -and (npm run dev)

Linux, macOS (Bash)#
HTTPS=true npm start
```
ssh key generator
```
ssh-keygen -t ed25519 -C "alex.qin@aveva.com"
ssh-keygen -t rsa -b 4096 -C "alex.qin@aveva.com"
```
#### git
```
git remote add origin https://alexvsone@dev.azure.com/alexvsone/LMSEmailNotification/_git/LMSEmailNotification
git push -u origin --all

git format-patch -M master
git format-patch [commit ID]
git apply --check
git am -3 xxx.patch
git apply --reject xxx.patch
git add .
git am --resolved
```
#### js
```
(new URL(location)).searchParams.get('tenancy');
```
#### Linux
```
netstat -p tcp -ano | findstr :10000
iptables -I INPUT -p tcp --dport 1022 -j ACCEPT'
sed -i 's/archive.ubuntu.com/mirrors.ustc.edu.cn/g' /etc/apt/sources.list
echo -e "NODE_ENV=production \nPORT=3000 " >> .env
```
#### Openssl
```
openssl x509 -text -noout -in cert.pem

openssl req -x509 -newkey rsa:4096 -keyout private.pem -out certificate.pem -days 3650
openssl pkcs12 -export -in certificate.pem -inkey private.pem -out certificate.pfx


1- Generating a Private Key:

openssl genrsa -aes256 -out private_key.pem 2048

2- Generating a Public Key:

openssl rsa -pubout -in private_key.pem -out public_key.pem

openssl pkcs12 -export -in public_key.pem -inkey private_key.pem -out certificate_qa.pfx

openssl genpkey -algorithm RSA -out rsa_private.pem -pkeyopt rsa_keygen_bits:2048

openssl x509 -inform PEM -in rsa_private.pem -outform DER -out rsa_private.cer

openssl x509 -inform PEM -in rsa_cert.pem -outform DER -out rsa_cert.cer

openssl req -x509 -nodes -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -days 3650

openssl req -x509 -sha256 -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -subj "/CN=unused" -days 3650

openssl pkcs12 -in rsa_cert.pfx -inkey rsa_private.pem -out rsa_cert.cer -nodes

openssl pkcs12 -export -inkey rsa_private.pem -out rsa_cert_no.pfx

openssl req -x509 -sha256 -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -subj "/CN=unused" -days 3650
openssl pkcs12 -export -in rsa_cert.pem -inkey rsa_private.pem -out rsa_cert.pfx

openssl req -x509 -newkey rsa:2048 -keyout rsa_private.pem -out rsa_cert.pem -subj "/CN=unused" -days 3650
openssl pkcs12 -export -in rsa_cert.pem -inkey rsa_private.pem -CSP "Microsoft Enhanced RSA and AES Cryptographic Provider" -out rsa_cert.pfx
```
#### Powershell
```
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
#### Windows CMD
```
netstat -a -o
netstat -ano|findstr "8080" 
tasklist|findstr "5812" 
```
#### WITS-Screen
```
sudo docker run --name wits-screen --volume="$PWD:/usr/src/app" -w /usr/src/app -p 80:3000 -d node:alpine3.12 /bin/sh -c "npm run release"
```

#### anaconda
The issue  **'jupyter' is not recognized as an internal or external command**  is mainly due to no path or wrong path of jupyter in windows environment variables.
In my case related files were available in  **C:\ProgramData\Anaconda3\Scripts**  and so i have added this path in Windows as shown below and then you can run from any path:
One important thing: after that while running jupter notebook from any location may give DLL Error. You have to first give command  **activate base**  and then jupyter notebook. 

 **jupyter lab** 
