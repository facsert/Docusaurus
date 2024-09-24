"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1391],{1032:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var n=a(4848),s=a(8453);const r={author:"facsert",pubDatetime:new Date("2023-10-08T21:52:12.000Z"),modDatetime:null,title:"06.Bash List",slug:"06.Bash List",featured:!1,draft:!1,tags:["bash"],description:"Bash \u5217\u8868"},i=void 0,l={id:"Bash/Bash-6-list",title:"06.Bash List",description:"Bash \u5217\u8868",source:"@site/docs/Bash/Bash-6-list.md",sourceDirName:"Bash",slug:"/Bash/06.Bash List",permalink:"/docs/Bash/06.Bash List",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Bash/Bash-6-list.md",tags:[{inline:!0,label:"bash",permalink:"/docs/tags/bash"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2023-10-08T21:52:12.000Z",modDatetime:null,title:"06.Bash List",slug:"06.Bash List",featured:!1,draft:!1,tags:["bash"],description:"Bash \u5217\u8868"},sidebar:"tutorialSidebar",previous:{title:"05.Bash String",permalink:"/docs/Bash/05.Bash String"},next:{title:"C Basic",permalink:"/docs/C/C Basic"}},c={},o=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u6570\u7ec4",id:"\u6570\u7ec4",level:2},{value:"\u5173\u8054\u6570\u7ec4",id:"\u5173\u8054\u6570\u7ec4",level:2}];function h(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,n.jsx)(t.h2,{id:"\u6570\u7ec4",children:"\u6570\u7ec4"}),"\n",(0,n.jsxs)(t.p,{children:["\u4f7f\u7528 ",(0,n.jsx)(t.code,{children:"declare"})," \u5173\u952e\u5b57\u6216\u8005 ",(0,n.jsx)(t.code,{children:"="})," \u521b\u5efa\u6570\u7ec4"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:' $ declare -a array=("array" "array" "array")    # \u4f7f\u7528 declare \u5173\u952e\u5b57\u521b\u5efa\u6570\u7ec4\n $ list=("list" "list" )                         # \u7b49\u53f7\u521b\u5efa\u6570\u7ec4\n\n $ echo "list:${list[@]}  array:${array[@]}"     # \u6253\u5370\u6570\u7ec4\u5168\u90e8\u6570\u636e\n > list:list list  array:array array array\n\n $ lst=()                                        # \u521b\u5efa\u7a7a\u6570\u7ec4\n $ lst[1]="1st"; lst[2]="2nd"; lst[4]="4th"      # \u5411\u6570\u7ec4\u4e2d\u6dfb\u52a0\u6570\u636e, \u4ece 0 \u5f00\u53d1, \u53ef\u4ee5\u8df3\u8fc7\n $ echo ${lst[@]}\n > 1st 2nd 4th                                   # \u53ea\u6253\u5370\u8d4b\u503c\u6570\u636e\n'})}),"\n",(0,n.jsx)(t.p,{children:"\u6570\u7ec4\u5c5e\u6027: \u6570\u7ec4\u957f\u5ea6, \u6570\u7ec4\u4e0b\u6807, \u5b50\u6570\u7ec4"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:" $ array=([1]=1st [2]=2nd [4]=4th)               # \u521b\u5efa\u6570\u7ec4, \u5e76\u8d4b\u503c\n $ echo ${array[@]}\n > 1st 2nd 4th\n\n $ echo ${#array[@]}                             # \u6570\u7ec4\u7684\u957f\u5ea6\n > 3\n\n $ echo ${!array[@]}                             # \u6253\u5370\u6570\u7ec4\u4e0b\u6807\n > 1 2 4\n\n $ echo ${array[@]:0:3}                          # \u83b7\u53d6\u6570\u7ec4\u5b50\u6570\u7ec4, \u4ece\u5e8f\u53f7 0 \u5f00\u59cb, \u53d6 3 \u4e2a\n > 1st 2nd                                       # \u6570\u7ec4\u503c n 1st 2nd n 4th; 0 ,3\u672a\u8d4b\u503c, \u4ece 0 \u540e\u5f00\u59cb\u53d6 3 \u4e2a\u6709\u6548\u5143\u7d20\n\n $ list=(5 6)\n $ array+=${list[@]}                             # \u6570\u7ec4\u8ffd\u52a0\n $ echo ${array[@]}\n > 5 6 1st 2nd 4th\n\n $ unset array[2]                                # \u5220\u9664\u6570\u7ec4\u5143\u7d20\n $ echo ${array[@]}\n > 1st 4th\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u5173\u8054\u6570\u7ec4",children:"\u5173\u8054\u6570\u7ec4"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:' $ declare -A map                                # \u521b\u5efa\u5173\u8054\u6570\u7ec4\n $ map["name"]="petter"                          # \u8d4b\u503c\n $ map["age"]="18"                               # \u8d4b\u503c\n $ echo "map:${map[@]} name:${map[name]}"        # \u6253\u5370\u5173\u8054\u6570\u7ec4\n > map:18 petter name:petter\n'})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var n=a(6540);const s={},r=n.createContext(s);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);