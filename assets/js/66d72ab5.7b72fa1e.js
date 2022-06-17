"use strict";(self.webpackChunkalexqianjin_github_io=self.webpackChunkalexqianjin_github_io||[]).push([[270],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return s}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},k=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),k=l(t),s=o,m=k["".concat(i,".").concat(s)]||k[s]||p[s]||a;return t?n.createElement(m,c(c({ref:r},d),{},{components:t})):n.createElement(m,c({ref:r},d))}));function s(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=k;var u={};for(var i in r)hasOwnProperty.call(r,i)&&(u[i]=r[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,c[1]=u;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},1853:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),c=["components"],u={id:"docker",title:"Docker",sidebar_position:3},i="Docker Introduction",l={unversionedId:"linux/docker",id:"linux/docker",title:"Docker",description:"Repository",source:"@site/docs/linux/docker.md",sourceDirName:"linux",slug:"/linux/docker",permalink:"/docs/linux/docker",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/linux/docker.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"docker",title:"Docker",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Git",permalink:"/docs/linux/git"},next:{title:"Notes",permalink:"/docs/category/notes"}},d={},p=[{value:"Repository",id:"repository",level:2},{value:"Image",id:"image",level:2},{value:"Create Image",id:"create-image",level:4},{value:"Container",id:"container",level:2},{value:"Network",id:"network",level:2},{value:"Data Management",id:"data-management",level:2},{value:"Data Volume",id:"data-volume",level:4},{value:"Data Volume Container",id:"data-volume-container",level:4},{value:"Backup",id:"backup",level:4},{value:"Restore",id:"restore",level:4},{value:"Copy File",id:"copy-file",level:4},{value:"Dockerfile",id:"dockerfile",level:2},{value:"Jekyll",id:"jekyll",level:2},{value:"Node",id:"node",level:2},{value:"Nginx",id:"nginx",level:2},{value:"Swagger api",id:"swagger-api",level:2}],k={toc:p};function s(e){var r=e.components,t=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},k,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-introduction"},"Docker Introduction"),(0,a.kt)("h2",{id:"repository"},"Repository"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker pull NAME:[TAG] \ndocker pull ubuntu:14.04\n\nregistry.hub.docker.com\ndocker pull hub.c.163.com/public/ubuntu:14.04\n\ndocker push\n  docker tag test:latest user/test:latest\n  docker push user/test:latest\ndocker search\n  docker search ubuntu\n")),(0,a.kt)("h2",{id:"image"},"Image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker images\ndocker image ls\ndocker tag ubuntu:latest myubuntu:latest\ndocker inspect ubuntu:14.04\n  docker inspect ubuntu:14.04 \\{\\{.Architecture\\}\\}\ndocker history ubuntu:14.04\ndocker search\n  docker search --automated -s 3 nginx\ndocker rmi [IMAGE]\n  docker rmi myubuntu:latest\n  docker rmi a21c0840213e\n")),(0,a.kt)("h4",{id:"create-image"},"Create Image"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]\n  dokcer commit -m "add a new file" -a "Docker Newbee" a925cb40b3f0 test:0.1\ndocker import [OPTIONS] file|URL| - [REPOSITORY[:TAG]]\n  cat ubuntu-14.04-x86_64-minimal.tar.gz | docker import - ubuntu:14:04\ndocker save / docker load\n  docker save -o ubuntu_14.04.tar ubuntu:14.04\n  docker load -- input ubuntu_14.04.tar\n  docker load < ubuntu_14.04.tar\n')),(0,a.kt)("h2",{id:"container"},"Container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker create\n  docker create -it ubuntu:latest\ndocker start\n  docker start af\ndocker ps / docker ps -a\ndocker run\n  docker run ubuntu /bin/echo 'Hello world'\n  docker run -it ubuntu:14.04 /bin/bash\n  docker run -d ubuntu /bin/sh -c \"while true; do echo hello world; sleep 1;\"\ndocker logs\n  docker logs ce5\ndocker stop\n  docker stop ce5\ndocker attach\n  docker run -itd ubuntu\n  docker attach [CONTAINER]\ndocker exec\n  docker exec -it 243c32535da7 /bin/bash\n  To have ctrl+c stop the container you must use -it\n  To detach from the container you should use ctrl+pq\ndocker rm\n  docker rm 2ae\n  docker rm $(docker ps -aq)\ndocker export\n  docker export -o test_for_run.tar ce5\ndocker import\n  docker import test_for_run.tar = test/ubuntu:v1.0\n")),(0,a.kt)("h2",{id:"network"},"Network"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker network create my-net\ndocker network rm my-net\ndocker create --name my-nginx \\\n  --network my-net \\\n  --publish 8080:80 \\\n  nginx:latest\ndocker network disconnect my-net my-nginx\n")),(0,a.kt)("h2",{id:"data-management"},"Data Management"),(0,a.kt)("h4",{id:"data-volume"},"Data Volume"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run -d -P web -v /webapp training/webapp python app.py\ndocker run -d -P web -v /src/webapp:/opt/webapp training/webapp python app.py\ndocker run -it --rm --name my-running-script -v "$PWD":/usr/src/app -w /usr/src/app node node test.js\n')),(0,a.kt)("h4",{id:"data-volume-container"},"Data Volume Container"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -it -v /dbdata --name dbdata ubuntu\ndocker run -it --volumes-from dbdata --name db1 ubuntu\ndocker run -it --volumes-from dbdata --name db2 ubuntu\n")),(0,a.kt)("h4",{id:"backup"},"Backup"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --volumes-from dbdata -v $(pwd):/backup --name worker ubuntu tar cvf /backup/backup.tar /dbdata\n")),(0,a.kt)("h4",{id:"restore"},"Restore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -v /dbdata --name dbdata2 ubuntu /bin/bash\ndocker run --volumes-from dbdta2 -v $(pwd):/backup busybox tar xvf /backup/backup.tar\n")),(0,a.kt)("h4",{id:"copy-file"},"Copy File"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker cp <containerId>:/usr/local/etc/php/conf.d/php.ini ~/moodle-docker/php/\ndocker cp my-postgres.conf <containerId>:/usr/local\n")),(0,a.kt)("h2",{id:"dockerfile"},"Dockerfile"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker build -t build/ubuntu-nodejs ./\n")),(0,a.kt)("h2",{id:"jekyll"},"Jekyll"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run --rm --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:3.8 jekyll build\n')),(0,a.kt)("h2",{id:"node"},"Node"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'docker run --rm --volume="$PWD:/usr/src/app" -w /usr/src/app -it node:11.14.0-alpine /bin/sh -c "npm install && npm run build && cp -r build ../server"\n')),(0,a.kt)("h2",{id:"nginx"},"Nginx"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo docker run --name jekyll-nginx -v $PWD:/usr/share/nginx/html:ro -d -p 80:80 nginx\n")),(0,a.kt)("h2",{id:"swagger-api"},"Swagger api"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \\\n    -i http://petstore.swagger.io/v2/swagger.json \\\n    -l javascript \\\n    -o /local/api-client\n    \ndocker run --rm -v ${PWD}:/local swaggerapi/swagger-codegen-cli generate \\\n    -i /local/api.json \\\n    -l javascript \\\n    -o /local/out/javascript \\\n    -c /local/javascript.config \n")))}s.isMDXComponent=!0}}]);