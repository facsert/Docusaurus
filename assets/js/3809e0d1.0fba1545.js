"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[9249],{4170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>u});var o=t(4848),d=t(8453);const s={author:"facsert",pubDatetime:new Date("2024-03-11T16:36:43.000Z"),title:"NodeJS function",slug:"NodeJS function",featured:!1,draft:!1,tags:["NodeJS"],description:"NodeJS \u51fd\u6570"},c=void 0,r={id:"Node/node-function",title:"NodeJS function",description:"NodeJS \u51fd\u6570",source:"@site/docs/Node/node-function.md",sourceDirName:"Node",slug:"/Node/NodeJS function",permalink:"/docs/Node/NodeJS function",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Node/node-function.md",tags:[{inline:!0,label:"NodeJS",permalink:"/docs/tags/node-js"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2024-03-11T16:36:43.000Z",title:"NodeJS function",slug:"NodeJS function",featured:!1,draft:!1,tags:["NodeJS"],description:"NodeJS \u51fd\u6570"},sidebar:"tutorialSidebar",previous:{title:"NodeJS config",permalink:"/docs/Node/NodeJS config"},next:{title:"NodeJS export",permalink:"/docs/Node/NodeJS export"}},a={},u=[{value:"\u57fa\u672c\u51fd\u6570",id:"\u57fa\u672c\u51fd\u6570",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}];function i(e){const n={code:"code",h2:"h2",pre:"pre",...(0,d.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u51fd\u6570",children:"\u57fa\u672c\u51fd\u6570"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// \u6807\u51c6\u51fd\u6570\u58f0\u660e\nfunction add(num) {\n    return num + 1;\n}\n\n// \u7bad\u5934\u51fd\u6570\nconst add = (num) => num + 1;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// \u51fd\u6570\u8bbe\u7f6e\u9ed8\u8ba4\u503c\nfunction add(num, step=1) {\n    return num + step;\n}\n\nadd(3)                                           // 4, \u4f7f\u7528\u9ed8\u8ba4\u503c\nadd(3, 2)                                        // 5, \u91cd\u5199\u9ed8\u8ba4\u503c\nadd(step=2)                                      // 3, \u7b49\u540c\u4e8e add(2) \u4e0d\u652f\u6301\u53c2\u6570\u540d\u6307\u5b9a\u53c2\u6570\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:"// rest \u53c2\u6570\nfunction sum(...nums) {\n    let m = 0;\n    nums.forEach(n => m += n);\n    return m;\n}\n\nconsole.log(sum(1,2,3,4))                        // 10, \u904d\u5386\u53c2\u6570\u6c42\u548c\nconsole.log(sum(...[1,2,3,4]))                   // 10, \u7b49\u540c\u4e8e\u4e0a, \u5c06\u6570\u7ec4\u89e3\u5305\n"})})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var o=t(6540);const d={},s=o.createContext(d);function c(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);