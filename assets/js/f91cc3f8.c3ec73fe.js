"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6784],{1648:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=t(4848),s=t(8453);const o={author:"facsert",pubDatetime:new Date("2023-10-25T11:56:31.000Z"),title:"Python Magic Method",slug:"Python Magic Method",featured:!1,draft:!1,tags:["Python"],description:"Python \u9b54\u672f\u65b9\u6cd5"},i=void 0,c={id:"Python/python-magic_method",title:"Python Magic Method",description:"Python \u9b54\u672f\u65b9\u6cd5",source:"@site/docs/Python/python-magic_method.md",sourceDirName:"Python",slug:"/Python/Python Magic Method",permalink:"/docs/Python/Python Magic Method",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/python-magic_method.md",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2023-10-25T11:56:31.000Z",title:"Python Magic Method",slug:"Python Magic Method",featured:!1,draft:!1,tags:["Python"],description:"Python \u9b54\u672f\u65b9\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"Python loguru",permalink:"/docs/Python/Python loguru"},next:{title:"Python openpyxl",permalink:"/docs/Python/Python openpyxl"}},l={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u9b54\u672f\u65b9\u6cd5",id:"\u9b54\u672f\u65b9\u6cd5",level:2},{value:"<strong>new</strong> and <strong>init</strong>",id:"new-and-init",level:2},{value:"<strong>repr</strong> <strong>str</strong>",id:"repr-str",level:2},{value:"<strong>file</strong>  <strong>function</strong>  <strong>name</strong>",id:"file--function--name",level:2},{value:"<strong>iter</strong> <strong>next</strong>",id:"iter-next",level:2},{value:"<strong>getitem</strong> <strong>setitem</strong>",id:"getitem-setitem",level:2},{value:"<strong>enter</strong> <strong>exit</strong>",id:"enter-exit",level:2}];function d(n){const e={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsx)(e.h2,{id:"\u9b54\u672f\u65b9\u6cd5",children:"\u9b54\u672f\u65b9\u6cd5"}),"\n",(0,r.jsxs)(e.p,{children:["\u9b54\u672f\u65b9\u6cd5\u662f Python \u5bf9\u8c61\u4e2d\u7279\u6b8a\u65b9\u6cd5, \u65b9\u6cd5\u5f00\u5934\u548c\u7ed3\u5c3e, \u4f8b\u5982 ",(0,r.jsx)(e.code,{children:"__init__"}),(0,r.jsx)(e.br,{}),"\n","python \u5bf9\u8c61\u7684\u5927\u591a\u6570\u64cd\u4f5c\u90fd\u662f\u901a\u8fc7\u9b54\u672f\u65b9\u6cd5\u5b9a\u4e49\u7684",(0,r.jsx)(e.br,{}),"\n","\u9b54\u672f\u65b9\u6cd5\u5927\u90fd\u7531\u5bf9\u5e94\u7684\u6807\u51c6\u51fd\u6570\u89e6\u53d1"]}),"\n",(0,r.jsxs)(e.h2,{id:"new-and-init",children:[(0,r.jsx)(e.strong,{children:"new"})," and ",(0,r.jsx)(e.strong,{children:"init"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"__new__"})," : \u5728\u5bf9\u8c61\u5b9e\u4f8b\u5316\u524d\u65f6\u5019\u8c03\u7528, \u53ef\u81ea\u5b9a\u4e49\u8fd4\u56de\u503c",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.code,{children:"__init__"}),": \u5728\u5bf9\u8c61\u521b\u5efa\u4e4b\u540e\u8c03\u7528, \u7528\u6765\u521d\u59cb\u5316\u5bf9\u8c61\u5c5e\u6027, \u8fd4\u56de\u503c\u5fc5\u987b\u662f None"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-python",children:"class Person:\n\n    def __new__(self, *args, **kwargs):\n        print('before create object')\n        return object.__new__(self)\n\n    def __init__(self, name):\n        print(f'after create object, init object {name}')\n\nPerson('petter')\nbefore create object\nafter create object, init object petter\n\n\nclass Person:\n\n    def __new__(self, *args, **kwargs):\n        print('before create object')\n        return object.__new__(self)\n\n    def __init__(self, name):\n        print(f'after create object, init object {name}')\n\nPerson('petter')\nbefore create object\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u6ce8\u610f: \u82e5 ",(0,r.jsx)(e.code,{children:"__new__"})," \u672a\u8fd4\u56de\u4e00\u4e2a\u5b9e\u4f8b\u5316\u5bf9\u8c61\uff0c\u5219 ",(0,r.jsx)(e.code,{children:"__init__"})," \u4e0d\u6267\u884c"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:"class Person:\n\n    def __new__(cls, name, age):\n        print('class init')\n        cls.name, cls.age = name, age\n        return cls\n\np = Person(name='lily', age=16)\nprint(f'class {Person.name} {Person.age}')\nprint(f'class {p.name} {p.age}')\n\nclass init\nclass lily 16\nclass lily 16\n"})}),"\n",(0,r.jsx)(e.p,{children:"\u901a\u8fc7\u9b54\u672f\u65b9\u6cd5 new, \u4f7f\u7c7b\u521d\u59cb\u5316\u8fbe\u5230\u5bf9\u8c61\u521d\u59cb\u5316\u7684\u6548\u679c"}),"\n",(0,r.jsxs)(e.h2,{id:"repr-str",children:[(0,r.jsx)(e.strong,{children:"repr"})," ",(0,r.jsx)(e.strong,{children:"str"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"__repr__"})," : \u8fd4\u56de\u5bf9\u8c61\u7684\u53ef\u6253\u5370\u5b57\u7b26\u4e32, \u7528\u4e8e\u8c03\u8bd5",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.code,{children:"__str__"})," : \u8fd4\u56de\u5bf9\u8c61\u7684\u53ef\u6253\u5370\u5b57\u7b26\u4e32, \u7528\u4e8e\u7528\u6237"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:'class Person:\n\n    def __repr__(self):\n        return "repr content"\n\n    def __str__(self):\n        return "str content"\n\np = Person()\nprint(p)                                         # str content\nprint(repr(p))                                   # repr content\n'})}),"\n",(0,r.jsxs)(e.p,{children:["print / str / repr \u8c03\u7528\u987a\u5e8f\nrepr => Person.",(0,r.jsx)(e.strong,{children:"repr"}),"() > object.",(0,r.jsx)(e.strong,{children:"repr"}),"()\nprint / str => Person.",(0,r.jsx)(e.strong,{children:"str"}),"() > Person.",(0,r.jsx)(e.strong,{children:"repr"}),"() > object.",(0,r.jsx)(e.strong,{children:"repr"}),"()"]}),"\n",(0,r.jsxs)(e.h2,{id:"file--function--name",children:[(0,r.jsx)(e.strong,{children:"file"}),"  ",(0,r.jsx)(e.strong,{children:"function"}),"  ",(0,r.jsx)(e.strong,{children:"name"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"__file__"})," : \u8fd4\u56de\u5f53\u524d\u6a21\u5757\u6240\u5728\u7684\u6587\u4ef6\u7edd\u5bf9\u8def\u5f84",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.code,{children:"__function__"})," : \u8fd4\u56de\u5f53\u524d\u51fd\u6570\u7684\u540d\u79f0\n",(0,r.jsx)(e.code,{children:"__name__"})," : \u8fd4\u56de\u5f53\u524d\u6a21\u5757\u7684\u540d\u79f0(\u82e5\u6587\u4ef6\u4e3a python \u5165\u53e3\u6587\u4ef6, \u5219\u4e3a ",(0,r.jsx)(e.strong,{children:"main"}),")"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py",children:'# package.py \u5199\u5165\u4ee3\u7801\nprint(f"package.py {__file__} {__name__}")\nname = "John"\n\n# run.py \u5199\u5165\u4ee3\u7801\nif __name__ == \'__main__\':\n    print(f"run.py {__file__} {__name__}")\n    \n    from package import name\n    print(f"import {name = }")\n \n# python run.py \u6267\u884c run.py\nrun.py E:\\\u6587\u6863\\Python\\run.py __main__\npackage.py E:\\\u6587\u6863\\Python\\package.py package\nimport name = \'John\'\n'})}),"\n",(0,r.jsxs)(e.h2,{id:"iter-next",children:[(0,r.jsx)(e.strong,{children:"iter"})," ",(0,r.jsx)(e.strong,{children:"next"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"__iter__"})," : \u8fd4\u56de\u4e00\u4e2a\u8fed\u4ee3\u5668\u5bf9\u8c61, \u7528\u4e8e\u8fed\u4ee3\u5bf9\u8c61",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.code,{children:"__next__"})," : \u8fd4\u56de\u8fed\u4ee3\u5668\u5bf9\u8c61\u7684\u4e0b\u4e00\u4e2a\u503c, \u7528\u4e8e\u8fed\u4ee3\u5bf9\u8c61"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py"})}),"\n",(0,r.jsxs)(e.h2,{id:"getitem-setitem",children:[(0,r.jsx)(e.strong,{children:"getitem"})," ",(0,r.jsx)(e.strong,{children:"setitem"})]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"__getitem__"})," : \u8fd4\u56de\u5bf9\u8c61\u7684\u67d0\u4e2a\u5143\u7d20",(0,r.jsx)(e.br,{}),"\n",(0,r.jsx)(e.code,{children:"__setitem__"})," : \u8bbe\u7f6e\u5bf9\u8c61\u7684\u67d0\u4e2a\u5143\u7d20"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-py"})}),"\n",(0,r.jsxs)(e.h2,{id:"enter-exit",children:[(0,r.jsx)(e.strong,{children:"enter"})," ",(0,r.jsx)(e.strong,{children:"exit"})]})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>i,x:()=>c});var r=t(6540);const s={},o=r.createContext(s);function i(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);