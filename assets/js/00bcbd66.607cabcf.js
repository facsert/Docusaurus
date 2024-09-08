"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[6256],{649:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>d});var r=a(4848),s=a(8453);const t={author:"facsert",pubDatetime:new Date("2024-01-30T21:12:43.000Z"),title:"Grafana",slug:"Grafana",featured:!1,draft:!1,tags:["Prometheus"],description:"Grafana \u662f\u4e00\u4e2a\u6570\u636e\u53ef\u89c6\u5316\u5de5\u5177"},l=void 0,i={id:"Prometheus/grafana",title:"Grafana",description:"Grafana \u662f\u4e00\u4e2a\u6570\u636e\u53ef\u89c6\u5316\u5de5\u5177",source:"@site/docs/Prometheus/grafana.md",sourceDirName:"Prometheus",slug:"/Prometheus/Grafana",permalink:"/docs/Prometheus/Grafana",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Prometheus/grafana.md",tags:[{inline:!0,label:"Prometheus",permalink:"/docs/tags/prometheus"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2024-01-30T21:12:43.000Z",title:"Grafana",slug:"Grafana",featured:!1,draft:!1,tags:["Prometheus"],description:"Grafana \u662f\u4e00\u4e2a\u6570\u636e\u53ef\u89c6\u5316\u5de5\u5177"},sidebar:"tutorialSidebar",previous:{title:"Alertmanager",permalink:"/docs/Prometheus/Alertmanager"},next:{title:"PromQl",permalink:"/docs/Prometheus/PromQl"}},o={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u754c\u9762",id:"\u754c\u9762",level:2},{value:"\u6570\u636e\u6e90",id:"\u6570\u636e\u6e90",level:2},{value:"\u4eea\u8868\u76d8",id:"\u4eea\u8868\u76d8",level:2},{value:"json \u5bfc\u5165",id:"json-\u5bfc\u5165",level:3},{value:"\u81ea\u5b9a\u4e49",id:"\u81ea\u5b9a\u4e49",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u5168\u5c40\u53d8\u91cf",id:"\u5168\u5c40\u53d8\u91cf",level:3}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsxs)(n.p,{children:["Grafana \u7528\u4e8e\u5c55\u793a Prometheus \u91c7\u96c6\u7684\u76d1\u63a7\u6570\u636e, \u901a\u8fc7 promQL \u8bed\u53e5\u7ed8\u5236\u56fe\u8868\u6216\u4f7f\u7528\u7b2c\u4e09\u65b9\u6a21\u677f\u8fdb\u884c\u6570\u636e\u53ef\u89c6\u5316",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/download?pg=graf&plcmt=deploy-box-1",children:"Grafana Download"}),"\n",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/",children:"Grafana Template"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:' $ tar -zxvf grafana-enterprise-9.5.9.linux-arm64.tar.gz\n $ cd grafana-9.5.9 && ./bin/grafana-server\n > ...\n > logger=licensing t=2023-12-07T15:06:25.331289546+08:00 level=info msg="Validated license token" appURL=http://localhost:3000/ source=disk status=NotFound\n > ...\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u914d\u7f6e\u6587\u4ef6 ",(0,r.jsx)(n.code,{children:"conf/default.ini"}),", \u793a\u4f8b ",(0,r.jsx)(n.code,{children:"conf/sample.ini"}),(0,r.jsx)(n.br,{}),"\n","\u4fee\u6539 ",(0,r.jsx)(n.code,{children:"default_language"})," \u9009\u9879\u4e3a ",(0,r.jsx)(n.code,{children:"detect"}),"(\u4f7f\u7528\u6d4f\u89c8\u5668\u8bed\u8a00)"]}),"\n",(0,r.jsxs)(n.p,{children:["\u9ed8\u8ba4\u7aef\u53e3\u662f 3000",(0,r.jsx)(n.br,{}),"\n","\u521d\u59cb\u7528\u6237 admin",(0,r.jsx)(n.br,{}),"\n","\u521d\u59cb\u5bc6\u7801 admin"]}),"\n",(0,r.jsx)(n.h2,{id:"\u754c\u9762",children:"\u754c\u9762"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u4eea\u8868\u76d8: \u76d1\u63a7\u9762\u677f\u5217\u8868"}),"\n",(0,r.jsx)(n.li,{children:"\u8fde\u63a5: \u8fde\u63a5\u7b2c\u4e09\u65b9\u6570\u636e\u6e90\u6cc9(prometheus \u6216 \u6570\u636e\u5e93)"}),"\n",(0,r.jsx)(n.li,{children:"\u7ba1\u7406: grafana \u8bbe\u7f6e\u548c\u7528\u6237\u7ba1\u7406"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u6570\u636e\u6e90",children:"\u6570\u636e\u6e90"}),"\n",(0,r.jsxs)(n.p,{children:["Grafana \u672c\u8eab\u53ea\u7528\u4e8e\u663e\u793a\u6570\u636e\u65e0\u6cd5\u91c7\u96c6\u6570\u636e, \u9700\u8981\u5176\u5b83\u5de5\u5177\u63d0\u4f9b\u6570\u636e",(0,r.jsx)(n.br,{}),"\n","Grafana \u4f7f\u7528 promql, sql \u4ece\u6570\u636e\u6e90\u4e2d\u83b7\u53d6\u6570\u636e, \u5728 web \u4e0a\u4f7f\u7528\u56fe\u8868, \u8868\u683c\u7b49\u65b9\u5f0f\u663e\u793a"]}),"\n",(0,r.jsx)(n.p,{children:"\u5e38\u7528\u7684\u6570\u636e\u6e90(Grafana \u81ea\u5e26):"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"prometheus"}),"\n",(0,r.jsx)(n.li,{children:"alertmanager"}),"\n",(0,r.jsx)(n.li,{children:"mysql"}),"\n",(0,r.jsx)(n.li,{children:"postgres"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"\u90e8\u5206\u6570\u636e\u6e90 grafana \u5982 mongo \u6709\u652f\u6301, \u4f46\u9700\u8981\u4e0b\u8f7d\u989d\u5916\u63d2\u4ef6"}),"\n",(0,r.jsx)(n.h2,{id:"\u4eea\u8868\u76d8",children:"\u4eea\u8868\u76d8"}),"\n",(0,r.jsx)(n.p,{children:"\u6709\u4e24\u79cd\u65b9\u5f0f\u521b\u5efa\u9762\u677f"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"json \u6587\u4ef6\u5bfc\u5165"}),"\n",(0,r.jsx)(n.li,{children:"\u81ea\u5b9a\u4e49"}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"json-\u5bfc\u5165",children:"json \u5bfc\u5165"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8fdb\u5165\u9762\u677f\u9875\u9762, \u70b9\u51fb\u53f3\u4e0a\u89d2 ",(0,r.jsx)(n.strong,{children:"\u5206\u4eab"}),", \u9009\u62e9 ",(0,r.jsx)(n.strong,{children:"\u5bfc\u51fa"}),", ",(0,r.jsx)(n.strong,{children:"\u4fdd\u5b58\u81f3\u6587\u4ef6"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u5b98\u65b9\u63d0\u4f9b\u7684\u6a21\u677f ",(0,r.jsx)(n.a,{href:"https://grafana.com/grafana/dashboards/",children:"Grafana Template"})," \u4e0b\u8f7d(\u90e8\u5206\u4f7f\u7528\u65e7\u7248\u672c\u751f\u6210, \u53ef\u80fd\u4e0d\u517c\u5bb9\u6216\u8005\u9700\u8981\u4fee\u6539)"]}),"\n",(0,r.jsxs)(n.li,{children:["\u8fdb\u5165\u4eea\u8868\u76d8\u9875\u9762, \u70b9\u51fb ",(0,r.jsx)(n.strong,{children:"\u65b0\u5efa"}),", \u9009\u62e9 ",(0,r.jsx)(n.strong,{children:"\u5bfc\u5165"}),", \u9009\u62e9\u9762\u677f json \u6587\u4ef6\u5bfc\u5165"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u81ea\u5b9a\u4e49",children:"\u81ea\u5b9a\u4e49"}),"\n",(0,r.jsxs)(n.p,{children:["\u521b\u5efa\u4e00\u4e2a\u9762\u677f, \u5728\u9762\u677f\u4e0a\u81ea\u5b9a\u4e49\u591a\u4e2a\u56fe\u8868, \u6bcf\u4e2a\u56fe\u8868\u81ea\u5b9a\u4e49\u6570\u636e\u6e90, \u56fe\u8868\u7c7b\u578b, \u663e\u793a\u6837\u5f0f",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/dashboards/",children:"\u5b98\u65b9\u521b\u5efa\u9762\u677f\u6559\u7a0b"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"https://grafana.com/docs/grafana/latest/panels-visualizations/",children:"\u5b98\u65b9\u521b\u5efa\u56fe\u8868\u6559\u7a0b"})]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8fdb\u5165\u4eea\u8868\u76d8\u9875\u9762, \u70b9\u51fb ",(0,r.jsx)(n.strong,{children:"\u65b0\u5efa"}),", \u9009\u62e9 ",(0,r.jsx)(n.strong,{children:"\u65b0\u5efa\u4eea\u8868\u677f"}),", \u9009\u62e9\u9762\u677f ",(0,r.jsx)(n.strong,{children:"\u6dfb\u52a0\u53ef\u89c6\u5316"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u9009\u62e9\u6570\u636e\u6e90, \u914d\u7f6e\u4eea\u8868\u76d8, \u53f3\u4e0a\u89d2 ",(0,r.jsx)(n.strong,{children:"apply"})," \u5b8c\u6210\u5355\u4e2a\u56fe\u8868"]}),"\n",(0,r.jsxs)(n.li,{children:["\u53f3\u4e0a\u89d2 ",(0,r.jsx)(n.strong,{children:"\u4fdd\u5b58\u56fe\u6807"}),", \u586b\u5199 commit \u4fdd\u5b58\u9762\u677f"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u9762\u677f\u914d\u7f6e: \u9762\u677f\u540d\u79f0, \u65f6\u95f4\u7b49\u57fa\u672c\u8bbe\u7f6e, \u9762\u677f\u5168\u5c40\u53d8\u91cf, JSON \u914d\u7f6e"}),"\n",(0,r.jsx)(n.p,{children:"\u56fe\u8868\u914d\u7f6e: \u56fe\u8868\u7c7b\u578b, \u6570\u636e\u5185\u5bb9, \u663e\u793a\u6837\u5f0f"}),"\n",(0,r.jsx)(n.h3,{id:"\u5168\u5c40\u53d8\u91cf",children:"\u5168\u5c40\u53d8\u91cf"}),"\n",(0,r.jsx)(n.p,{children:"\u9762\u677f\u5168\u5c40\u53d8\u91cf\u4f7f\u7528"}),"\n",(0,r.jsx)(n.p,{children:"\u8bbe\u7f6e\u5168\u5c40\u53d8\u91cf"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# promql \u4e2d\u4f7f\u7528\u5168\u5c40\u53d8\u91cf\nnode_time_seconds{host="$host",tag="$tag"} - node_boot_time_seconds{host="$host",tag="$tag"}\n\n# \u7279\u6b8a\u53d8\u91cf\n$__timeFrom Grafana \u9009\u62e9\u7684\u65f6\u95f4\u8d77\u59cb\u503c  $__timeFrom -> timestamp  \n$__timeTo Grafana \u9009\u62e9\u7684\u65f6\u95f4\u7ed3\u675f\u503c  $__timeTo -> timestamp  \n$__timeFilter \u5224\u65ad\u65f6\u95f4\u70b9\u662f\u5426\u5728 Grafana \u65f6\u95f4\u6bb5\u5185\u5bb9 $__timeFilter(timestamp) -> bool  \n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>l,x:()=>i});var r=a(6540);const s={},t=r.createContext(s);function l(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);