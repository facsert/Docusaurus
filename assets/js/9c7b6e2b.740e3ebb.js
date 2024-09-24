"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6147],{9507:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=n(4848),o=n(8453);const r={author:"facsert",pubDatetime:new Date("2023-12-06T22:05:18.000Z"),title:"Postgresql configuration",slug:"Postgresql configuration",featured:!1,draft:!1,tags:["Postgresql"],description:"Postgresql \u914d\u7f6e"},a=void 0,l={id:"Database/Postgres/postgres-0-base",title:"Postgresql configuration",description:"Postgresql \u914d\u7f6e",source:"@site/docs/Database/Postgres/postgres-0-base.md",sourceDirName:"Database/Postgres",slug:"/Database/Postgres/Postgresql configuration",permalink:"/docs/Database/Postgres/Postgresql configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Database/Postgres/postgres-0-base.md",tags:[{inline:!0,label:"Postgresql",permalink:"/docs/tags/postgresql"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2023-12-06T22:05:18.000Z",title:"Postgresql configuration",slug:"Postgresql configuration",featured:!1,draft:!1,tags:["Postgresql"],description:"Postgresql \u914d\u7f6e"},sidebar:"tutorialSidebar",previous:{title:"Mysql Configuration",permalink:"/docs/Database/Mysql/Mysql Configuration"},next:{title:"Postgresql database",permalink:"/docs/Database/Postgres/Postgresql database"}},i={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4fee\u6539\u5bb9\u5668\u65f6\u533a",id:"\u4fee\u6539\u5bb9\u5668\u65f6\u533a",level:2}];function g(e){const s={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsx)(s.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:" # \u4e0b\u8f7d postgres \u955c\u50cf\n $ docker pull postgres\n $ docker images\n > REPOSITORY   TAG       IMAGE ID       CREATED       SIZE\n > postgres     latest    75b7bff7c3ad   6 weeks ago   425MB\n \n # \u4f7f\u7528\u955c\u50cf\u521b\u5efa\u5bb9\u5668, \u7aef\u53e3\u6620\u5c04, \u5bb9\u5668\u540d\u79f0, \u73af\u5883\u53d8\u91cf(\u5bc6\u7801), \u5bb9\u5668\u65f6\u533a, \u8def\u5f84\u6620\u5c04\n # postgres \u9ed8\u8ba4\u65f6\u533a\u662f UTC, \u9700\u8981\u8bbe\u7f6e\u5bb9\u5668\u65f6\u533a\u4e3a UTC+8:00\n $ docker run \\\n     -p 5432:5432 \\\n     --name postgres \\\n     -e POSTGRES_PASSWORD=password \\\n     -e TZ=Asia/Shanghai \\\n     -v /root/Desktop/Postgres:/var/lib/postgresql/data \\\n     -d postgres\n \n # \u8fdb\u5165\u5bb9\u5668\n $ docker exec -it postgres bash\n \n # \u4f7f\u7528 postgres \u7528\u6237\u8fde\u63a5\u6570\u636e\u5e93\n $ psql -U postgres\n \n # \u67e5\u770b\u6570\u636e\u5e93\u5217\u8868\n \\l\n                                                      List of databases\n   Name    |  Owner   | Encoding | Locale Provider |  Collate   |   Ctype    | ICU Locale | ICU Rules |   Access privileges\n-----------+----------+----------+-----------------+------------+------------+------------+-----------+-----------------------\n postgres  | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           |\n template0 | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/postgres          +\n           |          |          |                 |            |            |            |           | postgres=CTc/postgres\n template1 | postgres | UTF8     | libc            | en_US.utf8 | en_US.utf8 |            |           | =c/postgres          +\n           |          |          |                 |            |            |            |           | postgres=CTc/postgres\n(3 rows)\n"})}),"\n",(0,t.jsxs)(s.p,{children:["PostgreSQL \u547d\u4ee4\u884c\u5728\u5904\u7406 SQL \u8bed\u53e5\u65f6, \u4e0d\u533a\u5206\u5927\u5c0f\u5199, \u7ed3\u5c3e\u4ee5\u5206\u53f7(;)\u7ed3\u5c3e",(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.code,{children:"psql -h host -p port -U username -d databasename -W password"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"\\?                                               /* \u6240\u6709\u547d\u4ee4\u5e2e\u52a9 */\n\\l                                               /* \u5217\u51fa\u6240\u6709\u6570\u636e\u5e93 */\n\\d                                               /* \u5217\u51fa\u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868 */\n\\dt                                              /* \u5217\u51fa\u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868 */\n\\d [table_name]                                  /* \u663e\u793a\u6307\u5b9a\u8868\u7684\u7ed3\u6784 */\n\\di                                              /* \u5217\u51fa\u6570\u636e\u5e93\u4e2d\u6240\u6709 index */\n\\dv                                              /* \u5217\u51fa\u6570\u636e\u5e93\u4e2d\u6240\u6709 view */\n\\h                                               /* sql\u547d\u4ee4\u5e2e\u52a9 */\n\\q                                               /* \u9000\u51fa\u8fde\u63a5 */\n\\c [database_name]                               /* \u5207\u6362\u5230\u6307\u5b9a\u7684\u6570\u636e\u5e93 */\n\\c                                               /* \u663e\u793a\u5f53\u524d\u6570\u636e\u5e93\u540d\u79f0\u548c\u7528\u6237 */\n\\conninfo                                        /* \u663e\u793a\u5ba2\u6237\u7aef\u7684\u8fde\u63a5\u4fe1\u606f */\n\\du                                              /* \u663e\u793a\u6240\u6709\u7528\u6237 */\n\\dn                                              /* \u663e\u793a\u6570\u636e\u5e93\u4e2d\u7684schema */\n\\encoding                                        /* \u663e\u793a\u5b57\u7b26\u96c6 */\nselect version();                                /* \u663e\u793a\u7248\u672c\u4fe1\u606f */\n\\i testdb.sql                                    /* \u6267\u884csql\u6587\u4ef6 */\n\\x                                               /* \u6269\u5c55\u5c55\u793a\u7ed3\u679c\u4fe1\u606f\uff0c\u76f8\u5f53\u4e8eMySQL\u7684\\G */\n\\o /tmp/test.txt                                 /* \u5c06\u4e0b\u4e00\u6761sql\u6267\u884c\u7ed3\u679c\u5bfc\u5165\u6587\u4ef6\u4e2d */\n"})}),"\n",(0,t.jsx)(s.h2,{id:"\u4fee\u6539\u5bb9\u5668\u65f6\u533a",children:"\u4fee\u6539\u5bb9\u5668\u65f6\u533a"}),"\n",(0,t.jsx)(s.p,{children:"\u67e5\u770b postgres \u5bb9\u5668\u548c\u6570\u636e\u5e93\u65f6\u533a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:" # \u67e5\u770b\u5bb9\u5668\u5185\u65f6\u533a\n $ date -R\n > Thu, 18 Apr 2024 21:13:38 +0800\n \n # \u67e5\u770b postgres \u6570\u636e\u5e93\u65f6\u533a\n postgres=# SHOW TIMEZONE;\n    TimeZone    \n ---------------\n  Asia/Shanghai\n \n # \u67e5\u770b postgres \u6570\u636e\u5e93\u5f53\u524d\u65f6\u95f4\n postgres=# SELECT current_timestamp;\n  current_timestamp       \n -------------------------------\n  2024-04-18 21:17:02.490132+08\n"})}),"\n",(0,t.jsx)(s.p,{children:"\u4fee\u6539 postgres \u5bb9\u5668\u548c\u6570\u636e\u5e93\u65f6\u533a"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:" # \u8fdb\u5165\u5bb9\u5668\u5185, \u521b\u5efa\u5907\u4efd, \u4fee\u6539\u65f6\u533a\n $ cp /etc/localtime /etc/localtime.bak\n $ ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime\n\n $ psql -U postgres\n postgres=# SHOW config_file;\n               config_file                \n------------------------------------------\n /var/lib/postgresql/data/postgresql.conf\n\n # \u4fee\u6539 postgresql.conf \u6587\u4ef6\u4e2d log_timezone, timezone \u503c\n log_timezone = 'Asia/Shanghai'\n timezone = 'Asia/Shanghai'\n\n # \u9000\u51fa\u5bb9\u5668\u540e, \u91cd\u542f postgres \u5bb9\u5668\n $ docker restart postgres\n"})})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(g,{...e})}):g(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var t=n(6540);const o={},r=t.createContext(o);function a(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);