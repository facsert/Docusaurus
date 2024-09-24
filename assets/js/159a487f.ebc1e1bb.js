"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9652],{8173:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var s=n(4848),r=n(8453);const o={author:"facsert",pubDatetime:new Date("2024-08-01T20:03:38.000Z"),title:"Postgresql reference",slug:"Postgresql reference",featured:!1,draft:!1,tags:["Postgresql"],description:"Postgresql \u53c2\u8003"},a=void 0,c={id:"Database/Postgres/postgres-4-reference",title:"Postgresql reference",description:"Postgresql \u53c2\u8003",source:"@site/docs/Database/Postgres/postgres-4-reference.md",sourceDirName:"Database/Postgres",slug:"/Database/Postgres/Postgresql reference",permalink:"/docs/Database/Postgres/Postgresql reference",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Database/Postgres/postgres-4-reference.md",tags:[{inline:!0,label:"Postgresql",permalink:"/docs/tags/postgresql"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2024-08-01T20:03:38.000Z",title:"Postgresql reference",slug:"Postgresql reference",featured:!1,draft:!1,tags:["Postgresql"],description:"Postgresql \u53c2\u8003"},sidebar:"tutorialSidebar",previous:{title:"Postgresql data",permalink:"/docs/Database/Postgres/Postgresql data"},next:{title:"Redis Configuration",permalink:"/docs/Database/Redis/Redis Configuration"}},l={},i=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"function",id:"function",level:2}];function u(e){const t={code:"code",h2:"h2",li:"li",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,s.jsx)(t.h2,{id:"function",children:"function"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"postgres \u5b57\u7b26\u4e32\u51fd\u6570"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"\n-- length \u83b7\u53d6\u5b57\u7b26\u4e32\u957f\u5ea6 length(s text)\n\n-- repeat \u91cd\u590d\u5b57\u7b26\u4e32 repeat(s text, n int)\n-- replace \u66ff\u6362\u5b57\u7b26\u4e32 replace(s text, sub text, new text)\n-- reverse \u53cd\u8f6c\u5b57\u7b26\u4e32 reverse(s text)\n\n-- trim \u53bb\u9664\u5b57\u7b26\u4e32\u524d\u540e\u7684\u7a7a\u683c trim(s text) \n-- trim(BOTH '*' FROM s) \u53bb\u9664\u5b57\u7b26\u4e32 s \u5de6\u53f3\u4e24\u8fb9\u7684 * \u7b26\u53f7\n\n-- lower \u5b57\u7b26\u4e32\u8f6c\u5c0f\u5199 lower(s text)\n-- upper \u5b57\u7b26\u4e32\u8f6c\u5927\u5199 upper(s text)\n\n-- concat \u5b57\u7b26\u4e32\u62fc\u63a5 concat(s1 text, s2 text)\n-- position \u83b7\u53d6\u5b57\u7b26\u4e32\u7684\u4f4d\u7f6e position(sub text in s text)\n\npostgres=# SELECT length('abc') AS \"LENGTH\";\n LENGTH \n--------\n      3\n(1 row)\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"postgres \u6570\u503c\u51fd\u6570"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"-- abs \u83b7\u53d6\u7edd\u5bf9\u503c abs(n numeric) -> numeric\n-- random \u83b7\u53d6\u968f\u673a\u6570 random() -> numeric[0,1) m n \u4e4b\u95f4\u53d6\u503c random() * (n - m) + m\n-- round \u6d6e\u70b9\u4fdd\u7559\u5c0f\u6570\u4f4d, \u56db\u820d\u4e94\u5165 round(n numeric, d int) -> numeric  round(2.35, 1) -> 2.4\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"postgres \u65f6\u95f4\u51fd\u6570"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:'-- now \u83b7\u53d6\u5f53\u524d\u65f6\u95f4 now() -> timestamp  "2024-08-01 20:03:38.000000"\n-- current_date \u83b7\u53d6\u5f53\u524d\u65e5\u671f current_date -> date  "2024-08-01"\n-- current_time \u83b7\u53d6\u5f53\u524d\u65f6\u95f4 current_time -> time  "20:03:38.000000"\n-- current_timestamp \u83b7\u53d6\u5f53\u524d\u65f6\u95f4 current_timestamp -> timestamp  "2024-08-01 20:03:38.000000"\n-- DATE \u83b7\u53d6\u65e5\u671f\u51fd\u6570 DATE(timestamp) -> date  DATE(\'2024-08-01 20:03:38.000000\') -> "2024-08-01"\n\n-- pg_sleep \u7b49\u5f85 n \u79d2 pg_sleep(seconds numeric)\n'})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"postgres \u805a\u5408\u51fd\u6570"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"-- count \u7edf\u8ba1\u884c\u7684\u6570\u91cf count(column) \n-- sum \u5217\u6c42\u548c sum(column)\n-- avg \u5217\u5e73\u5747\u503c avg(column)\n-- max \u5217\u6700\u5927\u503c max(column)\n-- min \u5217\u6700\u5c0f\u503c min(column)\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);