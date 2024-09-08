"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[11],{4578:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=s(4848),i=s(8453);const r={author:"facsert",pubDatetime:new Date("2024-03-05T14:18:43.000Z"),title:"Redis Configuration",slug:"Redis Configuration",featured:!1,draft:!1,tags:["Redis"],description:"Redis \u57fa\u672c\u914d\u7f6e"},d=void 0,a={id:"Database/Redis/redis-0-base",title:"Redis Configuration",description:"Redis \u57fa\u672c\u914d\u7f6e",source:"@site/docs/Database/Redis/redis-0-base.md",sourceDirName:"Database/Redis",slug:"/Database/Redis/Redis Configuration",permalink:"/docs/Database/Redis/Redis Configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Database/Redis/redis-0-base.md",tags:[{inline:!0,label:"Redis",permalink:"/docs/tags/redis"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2024-03-05T14:18:43.000Z",title:"Redis Configuration",slug:"Redis Configuration",featured:!1,draft:!1,tags:["Redis"],description:"Redis \u57fa\u672c\u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"Postgresql reference",permalink:"/docs/Database/Postgres/Postgresql reference"},next:{title:"Docker config",permalink:"/docs/Docker/Docker config"}},l={},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u6570\u636e\u6301\u4e45\u5316",id:"\u6570\u636e\u6301\u4e45\u5316",level:2},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:2},{value:"String",id:"string",level:3},{value:"Hash",id:"hash",level:3},{value:"List",id:"list",level:3},{value:"Set",id:"set",level:3},{value:"Json",id:"json",level:3},{value:"Stream",id:"stream",level:3}];function c(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:"docker \u5b89\u88c5 docker-stack(\u81ea\u5e26 redisinsight), \u4fbf\u4e8e web \u754c\u9762\u4fee\u6539\u548c\u67e5\u770b\u6570\u636e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ docker pull redis/redis-stack\n \n $ docker run -d --name redis-stack -v /root/Desktop/redis/data:/data -p 6379:6379 -p 8001:8001 redis/redis-stack:latest\n\n $ docker ps\n > CONTAINER ID IMAGE                    COMMAND          CREATED      STATUS      PORTS                                                                                 NAMES\n > 0f52fb6bad6e redis/redis-stack:latest "/entrypoint.sh" 3 hours ago  Up 3 hours  0.0.0.0:6379->6379/tcp, :::6379->6379/tcp, 0.0.0.0:8001->8001/tcp, :::8001->8001/tcp  redis-stack\n\n # --name: \u5bb9\u5668\u540d\n # -v: linux \u4e0b\u8def\u5f84\u6620\u5c04\u5bb9\u5668\u5185 /data (/data \u662f\u5bb9\u5668\u5b58\u653e\u6570\u636e\u4f4d\u7f6e)\n # -p: \u7aef\u53e3\u6620\u5c04, 6379 \u662f redis \u7aef\u53e3, 8001 \u662f redisinsight web \u7aef\u53e3\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6d4f\u89c8\u5668\u6253\u5f00 ",(0,t.jsx)(n.code,{children:"http://localhost:8001"})," \u8fdb\u5165 redisinsight \u754c\u9762"]}),"\n",(0,t.jsx)(n.h2,{id:"\u6570\u636e\u6301\u4e45\u5316",children:"\u6570\u636e\u6301\u4e45\u5316"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"redis"})," \u6570\u636e\u662f\u4fdd\u5b58\u5185\u5b58\u4e2d, \u4e00\u65e6\u5173\u673a\uff0c\u5185\u5b58\u6570\u636e\u4f1a\u4e22\u5931, redis \u652f\u6301\u5c06\u6570\u636e\u4fdd\u5b58\u4e3a\u672c\u5730\u6587\u4ef6"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u624b\u52a8\u4fdd\u5b58"}),"\n",(0,t.jsx)(n.li,{children:"\u81ea\u52a8\u4fdd\u5b58\u7b56\u7565"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# redis-cli (redis-stack \u652f\u6301\u547d\u4ee4, \u4e0d\u533a\u5206\u5927\u5c0f\u5199)\n\n# \u4e3b\u52a8\u4fdd\u5b58\u6570\u636e\u5e93\u5185\u5bb9\n> bgsave\n"Background saving started"\n\n# \u4e0a\u4e00\u6b21\u4fdd\u5b58\u6570\u636e\u7684\u65f6\u95f4\u70b9\n> lastsave\n(integer) 1723623129\n\n# \u4fdd\u5b58\u7b56\u7565 (300 100: 300s \u5185\u8d85\u8fc7 100\u6b21\u4fee\u6539\u89e6\u53d1, \u6bcf\u4e24\u4e2a\u6570\u636e 1 \u4e2a\u7b56\u7565)\n> config get save\n1) "SAVE"\n2) "3600 1 300 100 60 10000"\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u8fde\u63a5",children:"\u8fde\u63a5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-py",children:'# pip install redis\nimport redis\n\npool = redis.ConnectionPool(host=\'localhost\', port=6379, decode_responses=True)\nr = redis.Redis(connection_pool=pool)\n\nprint(r.get("host"))\nprint(r.hgetall("node"))\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),"\n",(0,t.jsx)(n.p,{children:"Redis \u547d\u4ee4\u4e0d\u533a\u5206\u5927\u5c0f\u5199, \u952e\u503c\u5bf9\u662f\u5927\u5c0f\u5199\u654f\u611f"}),"\n",(0,t.jsx)(n.h3,{id:"string",children:"String"}),"\n",(0,t.jsx)(n.p,{children:"Redis \u6570\u636e\u5e93\u4e2d, \u5b57\u7b26\u4e32\u6570\u636e\u5c31\u662f\u7b80\u5355\u7684\u952e\u503c\u5bf9, key-value"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'> SET test "hello redis"\n"OK"\n\n> GET test\n"hello redis"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"hash",children:"Hash"}),"\n",(0,t.jsxs)(n.p,{children:["Hash \u662f\u591a\u4e2a\u952e\u503c\u5bf9\u7684\u96c6\u5408",(0,t.jsx)(n.code,{children:"{k1-v1, k2-v2}"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# \u521b\u5efa students \u5b57\u6bb5, \u6dfb\u52a0\u952e\u503c\u5bf9\n> HSET students "John" 18\n(integer) 1\n\n# students \u6dfb\u52a0\u952e\u503c\u5bf9\n> HSET students "Lily" 18\n(integer) 1\n\n# \u83b7\u53d6\u952e\u503c\u5bf9\u7684\u503c\n> HGET students John\n"18"\n\n# \u83b7\u53d6\u6240\u6709\u952e\u503c\u5bf9\n> HGETALL students\n1) "John"\n2) "18"\n3) "Lily"\n4) "18"\n'})}),"\n",(0,t.jsx)(n.h3,{id:"list",children:"List"}),"\n",(0,t.jsx)(n.h3,{id:"set",children:"Set"}),"\n",(0,t.jsx)(n.h3,{id:"json",children:"Json"}),"\n",(0,t.jsx)(n.h3,{id:"stream",children:"Stream"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>a});var t=s(6540);const i={},r=t.createContext(i);function d(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);