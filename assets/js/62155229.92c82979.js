"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6611],{8120:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(4848),i=t(8453);const o={author:"facsert",pubDatetime:new Date("2022-07-19T19:21:13.000Z"),title:"01.Go Variable",slug:"01.Go Variable",featured:!1,draft:!1,tags:["Go"],description:"Go \u53d8\u91cf"},r=void 0,l={id:"Go/tutorial/go-1-variable",title:"01.Go Variable",description:"Go \u53d8\u91cf",source:"@site/docs/Go/tutorial/go-1-variable.md",sourceDirName:"Go/tutorial",slug:"/Go/tutorial/01.Go Variable",permalink:"/docs/Go/tutorial/01.Go Variable",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Go/tutorial/go-1-variable.md",tags:[{inline:!0,label:"Go",permalink:"/docs/tags/go"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2022-07-19T19:21:13.000Z",title:"01.Go Variable",slug:"01.Go Variable",featured:!1,draft:!1,tags:["Go"],description:"Go \u53d8\u91cf"},sidebar:"tutorialSidebar",previous:{title:"00.Go Environment",permalink:"/docs/Go/tutorial/00.Go Environment"},next:{title:"02.Go Base Data Type",permalink:"/docs/Go/tutorial/02.Go Base Data Type"}},s={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u53d8\u91cf\u58f0\u660e",id:"\u53d8\u91cf\u58f0\u660e",level:3},{value:"\u533f\u540d\u53d8\u91cf",id:"\u533f\u540d\u53d8\u91cf",level:3},{value:"\u5e38\u91cf",id:"\u5e38\u91cf",level:2},{value:"iota",id:"iota",level:3},{value:"\u6253\u5370",id:"\u6253\u5370",level:2},{value:"\u9644\u5f55",id:"\u9644\u5f55",level:2},{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",level:3},{value:"\u4fdd\u7559\u5b57",id:"\u4fdd\u7559\u5b57",level:3}];function d(n){const e={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,a.jsx)(e.h2,{id:"\u53d8\u91cf",children:"\u53d8\u91cf"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"Go \u53d8\u91cf\u547d\u540d\u8981\u6c42\u4ee5\u5b57\u6bcd\u6216\u4e0b\u5212\u7ebf\u5f00\u5934"}),"\n",(0,a.jsxs)(e.li,{children:["\u4e0d\u53ef\u4ee5\u4f7f\u7528 Go \u4e2d\u7684 25 ",(0,a.jsx)(e.a,{href:"#%E5%85%B3%E9%94%AE%E5%AD%97",children:"\u5173\u952e\u5b57"}),"\u53ca 37 \u4e2a",(0,a.jsx)(e.a,{href:"#%E4%BF%9D%E7%95%99%E5%AD%97",children:"\u4fdd\u7559\u5b57"})]}),"\n",(0,a.jsx)(e.li,{children:"\u53d8\u91cf\u8981\u6c42\u58f0\u660e\u7c7b\u578b\u6216\u4f7f\u7528\u7c7b\u578b\u63a8\u5bfc"}),"\n"]}),"\n",(0,a.jsx)(e.h3,{id:"\u53d8\u91cf\u58f0\u660e",children:"\u53d8\u91cf\u58f0\u660e"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'var <variable name> <type> = <value>             // \u4f7f\u7528 var \u8fdb\u884c\u53d8\u91cf\u5b9a\u4e49, \u6700\u5b8c\u6574\u7684\u53d8\u91cf\u5b9a\u4e49\nvar age int = 18                                 // \u58f0\u660e\u53d8\u91cf\u7c7b\u578b\u5e76\u8d4b\u503c\n\nvar <variable name> <type>                       // \u53d8\u91cf\u5b9a\u4e49, \u53ea\u5b9a\u4e49\u53d8\u91cf\u540d\u548c\u7c7b\u578b, \u53d8\u91cf\u9ed8\u8ba4\u4e3a\u5bf9\u5e94\u7c7b\u578b\u7684\u521d\u59cb\u503c\nvar str string                                   // \u58f0\u660e\u53d8\u91cf\u548c\u7c7b\u578b, \u672a\u8d4b\u503c\u4f7f\u7528\u9ed8\u8ba4\u503c(string \u9ed8\u8ba4\u503c "")\n\nvar <type> = <value>                             // \u53d8\u91cf\u5b9a\u4e49, \u901a\u8fc7\u503c\u81ea\u52a8\u63a8\u5bfc\u53d8\u91cf\u7c7b\u578b\nvar age = 18                                     // \u58f0\u660e\u53d8\u91cf, \u8d4b\u503c, \u5e76\u4f7f\u7528\u7c7b\u578b\u63a8\u5bfc\n\n<variable name> := <value>                       // \u53d8\u91cf\u5b9a\u4e49, \u901a\u8fc7\u503c\u81ea\u52a8\u63a8\u5bfc\u7c7b\u578b, \u4ec5\u80fd\u5728\u51fd\u6570\u5185\u90e8\u4f7f\u7528\nname := "str"                                    // \u58f0\u660e\u53d8\u91cf, \u8d4b\u503c, \u5e76\u4f7f\u7528\u7c7b\u578b\u63a8\u5bfc(\u4ec5\u9650\u4e8e\u51fd\u6570\u5185\u4f7f\u7528)\n\nvar (\n   str    string                                 // ""    \u58f0\u660e\u53d8\u91cf\u672a\u8d4b\u503c, \u4f7f\u7528 string \u7c7b\u578b\u9ed8\u8ba4\u503c ""\n   num    int                                    // 0     \u58f0\u660e\u53d8\u91cf\u672a\u8d4b\u503c, \u4f7f\u7528 int \u7c7b\u578b\u9ed8\u8ba4\u503c 0\n   boolean bool                                  // false \u58f0\u660e\u53d8\u91cf\u672a\u8d4b\u503c, \u4f7f\u7528 bool \u7c7b\u578b\u9ed8\u8ba4\u503c false\n)\n\nvar (\n   str string = "hello"                          // \u6279\u91cf\u58f0\u660e\u5e76\u8d4b\u503c\n   num int    = 4\n   boolean     = true\n)\n\nstr, num := "hello", 3                           // \u591a\u4e2a\u53d8\u91cf\u58f0\u660e\u5e76\u8d4b\u503c\n'})}),"\n",(0,a.jsx)(e.h3,{id:"\u533f\u540d\u53d8\u91cf",children:"\u533f\u540d\u53d8\u91cf"}),"\n",(0,a.jsxs)(e.p,{children:["Go \u4e2d\u5b58\u5728",(0,a.jsx)(e.strong,{children:"\u672a\u88ab\u4f7f\u7528"}),"\u7684\u53d8\u91cf\u4f1a\u62a5\u9519",(0,a.jsx)(e.br,{}),"\n","\u4f7f\u7528\u533f\u540d\u53d8\u91cf ",(0,a.jsx)(e.code,{children:"_"})," \u5904\u7406\u65e0\u9700\u4f7f\u7528\u7684\u53d8\u91cf"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'var name string = "John"\nfmt.Println("hello world")\n> ./main.go:10:6: name declared but not used     // \u53d8\u91cf name \u672a\u4f7f\u7528, \u62a5\u9519\n\nname, _ := "John", "variable"                    // \u4f7f\u7528\u533f\u540d\u53d8\u91cf, \u5ffd\u7565\u540e\u4e00\u4e2a\u503c\nfmt.Println("hello ", name)\n> hello  John\n\nimport {\n   . "fmt"                                       // \u4f7f\u7528\u6a21\u5757\u65f6\u65e0\u9700\u6dfb\u52a0\u6a21\u5757\u540d\u79f0\n   _ "os"                                        // \u5f15\u5165\u4f46\u672a\u4f7f\u7528\u7684\u6a21\u5757, _ \u5904\u7406\u540e\u4e0d\u4f1a\u62a5\u9519\n}\n\nPrintln("hello world")                           // \u5f15\u5165\u65f6\u4f7f\u7528 . \u4f7f\u8c03\u7528 fmt \u65b9\u6cd5\u65e0\u9700\u6dfb\u52a0\u6a21\u5757\u540d\u79f0\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u5e38\u91cf",children:"\u5e38\u91cf"}),"\n",(0,a.jsxs)(e.p,{children:["\u5e38\u91cf\u58f0\u660e\u65f6\u5019\u5fc5\u987b\u8d4b\u503c",(0,a.jsx)(e.br,{}),"\n","\u5e38\u91cf\u4e00\u65e6\u58f0\u660e\u5c31\u4e0d\u53ef\u53d8\u5316"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"const e = 2.7182                                 // \u5e38\u91cf\u58f0\u660e\u5fc5\u987b\u8981\u8d4b\u503c, \u4e14\u4e0d\u53ef\u66f4\u6539\n\nconst (                                          // \u5feb\u901f\u58f0\u660e\u5e38\u91cf, a b \u8d4b\u503c 10\n   a = 10                                        // a = 10\n   b                                             // a = 10 \u7ee7\u627f\u4e0a\u4e00\u4e2a\u53d8\u91cf\u7684\u503c\n   c = 5                                         // c = 5\n   d                                             // d = 5\n)\n"})}),"\n",(0,a.jsx)(e.h3,{id:"iota",children:"iota"}),"\n",(0,a.jsxs)(e.p,{children:["iota \u662f\u5b9a\u4e49\u5e38\u91cf\u65f6\u4f7f\u7528\u7684\u81ea\u589e\u5173\u952e\u5b57",(0,a.jsx)(e.br,{}),"\n","\u540c const \u5b9a\u4e49\u5757\u4e92\u4e0d\u5e72\u6270, \u6240\u6709\u6ce8\u91ca\u884c\u548c\u7a7a\u884c\u5168\u90e8\u5ffd\u7565",(0,a.jsx)(e.br,{}),"\n","\u4ece\u7b2c 1 \u884c\u5f00\u59cb\uff0ciota \u4ece 0 \u9010\u884c\u52a0 1"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"const (\n   a = iota                                      // iota = 0  a = 0\n   b                                             // iota = 1  b = 1\n   c                                             // iota = 2  c = 2\n)\n\nconst (                                          // \u53d8\u66f4\u521d\u59cb\u503c\n   a = iota + 3                                  // iota = 0  a = 3\n   b                                             // iota = 1  b = 4\n   c = iota + 2                                  // iota = 2  c = 4\n   d                                             // iota = 3  d = 5\n)\n\nconst (                                          // iota \u63d2\u503c\n   a = iota                                      // iota = 0  a = 0\n   b = 5                                         // iota = 1  b = 5\n   c = iota                                      // iota = 2  c = 2\n   d                                             // iota = 3  d = 3\n)\n"})}),"\n",(0,a.jsx)(e.h2,{id:"\u6253\u5370",children:"\u6253\u5370"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsx)(e.li,{children:"\u901a\u8fc7\u5360\u4f4d\u7b26\u66ff\u6362\u503c\u6253\u5370"}),"\n",(0,a.jsx)(e.li,{children:"\u901a\u8fc7\u4e0d\u540c\u5360\u4f4d\u7b26\u53ef\u4ee5\u6253\u5370\u53d8\u91cf\u4e0d\u540c\u5c5e\u6027\u503c"}),"\n",(0,a.jsxs)(e.li,{children:["\u4e07\u80fd\u5360\u7528\u7b26 ",(0,a.jsx)(e.code,{children:"%v"})," (",(0,a.jsx)(e.code,{children:"%#v %+v"})," \u8868\u793a\u4e0d\u540c\u6253\u5370\u5f62\u5f0f)"]}),"\n"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'fmt.Printf(<str>, <string>, <int>, <bool> ...)   // \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u5b57\u7b26\u4e32,\u540e\u63a5\u4efb\u610f\u7c7b\u578b\u503c, \u5360\u4f4d\u7b26\u9700\u4e0e\u503c\u6570\u91cf\u5bf9\u5e94\n\nfmt.Printf("common: %v \\n", "common")            // \u4e07\u80fd\u5360\u7528\u7b26, \u81ea\u52a8\u5224\u65ad\u7c7b\u578b\nfmt.Printf("string: %s \\n", "string")            // \u5b57\u7b26\u4e32\u53d8\u91cf\u5360\u4f4d\u7b26\nfmt.Printf("char  : %c \\n", \'c\')                 // \u5355\u4e2a\u5b57\u7b26\u53d8\u91cf\u5360\u4f4d\u7b26, \u5355\u4e2a\u5b57\u7b26\u7528\u5355\u5f15\u53f7\nfmt.Printf("number: %d \\n", 4)                   // \u6574\u5f62\u53d8\u91cf\u5360\u4f4d\u7b26\nfmt.Printf("float : %f \\n", 2.33)                // \u6d6e\u70b9\u578b\u53d8\u91cf\u5360\u4f4d\u7b26\nfmt.Printf("bool  : %t \\n", true)                // \u5e03\u5c14\u503c\u53d8\u91cf\u5360\u4f4d\u7b26\nfmt.Printf("point : %p \\n", *variable)           // \u6307\u9488\u53d8\u91cf\u5360\u4f4d\u7b26\n\nfmt.Printf("variable type: %T \\n", variable)     // \u53d8\u91cf\u7c7b\u578b\u5360\u4f4d\u7b26\n'})}),"\n",(0,a.jsx)(e.h2,{id:"\u9644\u5f55",children:"\u9644\u5f55"}),"\n",(0,a.jsx)(e.p,{children:"Golang \u4e2d\u5b58\u5728\u4e00\u4e9b\u5173\u952e\u5b57\u548c\u4fdd\u7559\u5b57\uff0c \u4e0d\u80fd\u4f5c\u4e3a\u53d8\u91cf\u540d\u79f0"}),"\n",(0,a.jsx)(e.h3,{id:"\u5173\u952e\u5b57",children:"\u5173\u952e\u5b57"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"   break        default      func         interface    select\n   case         defer        go           map          struct\n   chan         else         goto         package      switch\n   const        fallthrough  if           range        type\n   continue     for          import       return       var\n"})}),"\n",(0,a.jsx)(e.h3,{id:"\u4fdd\u7559\u5b57",children:"\u4fdd\u7559\u5b57"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"    Constants:    true  false  iota  nil\n\n        Types:    int  int8  int16  int32  int64\n                  uint  uint8  uint16  uint32  uint64  uintptr\n                  float32  float64  complex128  complex64\n                  bool  byte  rune  string  error\n\n    Functions:   make  len  cap  new  append  copy  close  delete\n                 complex  real  imag\n                 panic  recover\n"})})]})}function u(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>l});var a=t(6540);const i={},o=a.createContext(i);function r(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);