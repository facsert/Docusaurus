"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6271],{1915:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var t=s(4848),l=s(8453);const c={author:"facsert",pubDatetime:new Date("2022-07-24T12:08:37.000Z"),title:"Python Class",slug:"Python Class",featured:!1,draft:!1,tags:["Python"],description:"Python \u7c7b\u65b9\u6cd5"},i=void 0,r={id:"Python/python-class-method",title:"Python Class",description:"Python \u7c7b\u65b9\u6cd5",source:"@site/docs/Python/python-class-method.md",sourceDirName:"Python",slug:"/Python/Python Class",permalink:"/docs/Python/Python Class",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/python-class-method.md",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2022-07-24T12:08:37.000Z",title:"Python Class",slug:"Python Class",featured:!1,draft:!1,tags:["Python"],description:"Python \u7c7b\u65b9\u6cd5"},sidebar:"tutorialSidebar",previous:{title:"Python APScheduler",permalink:"/docs/Python/Python APScheduler"},next:{title:"Python Anaconda",permalink:"/docs/Python/Python Anaconda"}},o={},d=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5f15\u7533",id:"\u5f15\u7533",level:2},{value:"\u533a\u522b",id:"\u533a\u522b",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:2},{value:"\u5b9e\u4f8b\u65b9\u6cd5",id:"\u5b9e\u4f8b\u65b9\u6cd5",level:2},{value:"\u7c7b\u65b9\u6cd5",id:"\u7c7b\u65b9\u6cd5",level:2},{value:"\u9759\u6001\u65b9\u6cd5",id:"\u9759\u6001\u65b9\u6cd5",level:2},{value:"\u603b\u7ed3\u548c\u5b9e\u8df5",id:"\u603b\u7ed3\u548c\u5b9e\u8df5",level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:3},{value:"logging \u5b9e\u8df5",id:"logging-\u5b9e\u8df5",level:3}];function a(n){const e={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsx)(e.h2,{id:"\u5f15\u7533",children:"\u5f15\u7533"}),"\n",(0,t.jsx)(e.p,{children:"\u5f00\u53d1\u7684\u65f6\u5019\u7528\u5230 logging \u6a21\u5757, \u91cd\u65b0\u5c01\u88c5\u540e\u53d1\u73b0\u4f7f\u7528\u6709\u70b9\u9ebb\u70e6"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsx)(e.li,{children:"\u591a\u4e2a\u6a21\u5757\u90fd\u4f1a\u7528\u5230\u8be5\u6a21\u5757, logging \u591a\u6b21\u5b9e\u4f8b\u5316\u4f1a\u5bfc\u81f4\u91cd\u590d\u6253\u5370"}),"\n",(0,t.jsx)(e.li,{children:"\u4f7f\u7528\u524d\u9700\u8981\u5148\u83b7\u53d6\u5bf9\u8c61, \u65e0\u6cd5\u76f4\u63a5\u4f7f\u7528\u5176\u65b9\u6cd5"}),"\n",(0,t.jsx)(e.li,{children:"\u53ea\u80fd\u5b9e\u4f8b\u5316\u4e00\u6b21, \u5bfc\u81f4\u6a21\u5757\u95f4\u4f7f\u7528\u9700\u8981\u9891\u7e41\u4f20\u9012\u8be5\u5bf9\u8c61"}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["\u7efc\u4e0a\u6211\u5728\u601d\u8003\u80fd\u5426 import \u540e\u76f4\u63a5\u4f7f\u7528, \u4e14\u4e0d\u4f1a\u591a\u6b21\u5b9e\u4f8b\u5316",(0,t.jsx)(e.br,{}),"\n","\u901a\u8fc7\u67e5\u8be2\u8d44\u6599\u4e86\u89e3\u5230",(0,t.jsx)(e.strong,{children:"\u7c7b\u65b9\u6cd5"}),"\u548c",(0,t.jsx)(e.strong,{children:"\u9759\u6001\u65b9\u6cd5"})]}),"\n",(0,t.jsx)(e.p,{children:"\u6ce8: logging \u6a21\u5757\u53ef\u4ee5\u7edf\u4e00\u8f93\u51fa\u683c\u5f0f, \u6253\u5370\u5728\u7a97\u53e3\u5e76\u5199\u5165\u6307\u5b9a\u6587\u4ef6"}),"\n",(0,t.jsx)(e.h2,{id:"\u533a\u522b",children:"\u533a\u522b"}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"\u65b9\u6cd5\u7c7b\u578b"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"\u53c2\u6570"}),(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"\u88c5\u9970\u5668"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u5b9e\u4f8b\u65b9\u6cd5"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:(0,t.jsx)(e.code,{children:"self"})}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u65e0"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u7c7b\u65b9\u6cd5"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:(0,t.jsx)(e.code,{children:"cls"})}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:(0,t.jsx)(e.code,{children:"@classmethod"})})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u9759\u6001\u65b9\u6cd5"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u65e0"}),(0,t.jsx)(e.td,{style:{textAlign:"center"},children:(0,t.jsx)(e.code,{children:"@staticmehtod"})})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class People:\n\n    def obj_func(self):                          # \u5b9e\u4f8b\u65b9\u6cd5\n        print(f'obj function: {self} \\n')\n\n    @classmethod                                 # \u7c7b\u65b9\u6cd5\n    def class_func(cls):\n        print(f'class function: {cls} \\n')\n\n    @staticmethod                                # \u9759\u6001\u65b9\u6cd5\n    def static_func():\n        print('static function')\n\nif __name__ == '__main':\n    facser = People()\n    facser.obj_func()\n    facser.class_func()\n    facser.static_func()\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:" > obj function: <__main__.People object at 0x000002673D477CA0>\n >\n > class function: <class '__main__.People'>\n >\n > static function\n"})}),"\n",(0,t.jsx)(e.h2,{id:"\u5b9e\u4f8b\u65b9\u6cd5",children:"\u5b9e\u4f8b\u65b9\u6cd5"}),"\n",(0,t.jsxs)(e.p,{children:["\u6700\u5e38\u89c1\u7684\u65b9\u6cd5, \u65b9\u6cd5\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a ",(0,t.jsx)(e.code,{children:"self"}),", \u8868\u793a\u5b9e\u4f8b\u5bf9\u8c61",(0,t.jsx)(e.br,{}),"\n","\u901a\u8fc7 ",(0,t.jsx)(e.code,{children:"self"})," \u5373\u53ef\u8c03\u7528\u5b9e\u4f8b\u5bf9\u8c61\u5c5e\u6027\u548c\u65b9\u6cd5"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"class People:\n\n    name = 'kertory'                             # \u5b9a\u4e49\u7c7b\u5c5e\u6027 name\n\n    def obj_func(self):\n        print(f'obj func: {self.name}')          # \u6253\u5370\u5bf9\u8c61\u5c5e\u6027 name\n\n    @classmethod\n    def class_func(cls):\n        print(f'class func: {cls.name}')         # \u6253\u5370\u7c7b\u5c5e\u6027 name\n\n    @staticmethod\n    def static_func():                           # \u9759\u6001\u65b9\u6cd5\n        print('static function')\n\nif __name__ == '__main':\n    facser = People()                            # \u7c7b\u5b9e\u4f8b\u5316\u6210\u5bf9\u8c61 facser\n    facser.obj_func()                            # facser \u5bf9\u8c61\u8c03\u7528\u5b9e\u4f8b\u5316\u65b9\u6cd5\n    facser.class_func()                          # facser \u5bf9\u8c61\u8c03\u7528\u7c7b\u65b9\u6cd5\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:" > obj func: kertory                             # \u5b9e\u4f8b\u65b9\u6cd5\u6253\u5370\n > class func: kertory                           # \u7c7b\u65b9\u6cd5\u6253\u5370\n > static function                               # \u9759\u6001\u65b9\u6cd5\u6253\u5370\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u5b9e\u4f8b\u5316\u5bf9\u8c61\u7ee7\u627f\u4e86\u7c7b\u7684\u5c5e\u6027",(0,t.jsx)(e.br,{}),"\n","\u5b9e\u4f8b\u5316\u5bf9\u8c61\u662f\u53ef\u4ee5\u8c03\u7528",(0,t.jsx)(e.strong,{children:"\u7c7b\u65b9\u6cd5"}),"\u548c",(0,t.jsx)(e.strong,{children:"\u9759\u6001\u65b9\u6cd5"}),"\u7684"]}),"\n",(0,t.jsx)(e.h2,{id:"\u7c7b\u65b9\u6cd5",children:"\u7c7b\u65b9\u6cd5"}),"\n",(0,t.jsxs)(e.p,{children:["\u7c7b\u65b9\u6cd5\u5728\u5f00\u5934\u6dfb\u52a0 ",(0,t.jsx)(e.code,{children:"@classmethod"})," \u88c5\u9970\u5668",(0,t.jsx)(e.br,{}),"\n","\u7b2c\u4e00\u4e2a\u53c2\u6570 ",(0,t.jsx)(e.code,{children:"cls"})," \u8868\u793a\u7c7b\u672c\u8eab"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"\nclass People:\n\n    name = 'kertory'                             # \u5b9a\u4e49\u7c7b\u5c5e\u6027 name\n\n    def obj_func(self):\n        print(f'obj func: {self.name}')          # \u6253\u5370\u5bf9\u8c61\u5c5e\u6027 name\n\n    @classmethod\n    def class_func(cls):\n        print(f'class func: {cls.name}')         # \u6253\u5370\u7c7b\u5c5e\u6027 name\n\n    @staticmethod\n    def static_func():                           # \u9759\u6001\u65b9\u6cd5\n        print('static function')\n\nif __name__ == '__main':\n    People.class_func()                          # \u7c7b\u8c03\u7528\u7c7b\u65b9\u6cd5\n    People.static_func()                         # \u7c7b\u8c03\u7528\u9759\u6001\u65b9\u6cd5\n    People.obj_func()                            # \u7c7b\u8c03\u7528\u5b9e\u4f8b\u65b9\u6cd5\n"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:" > class func: kertory                           # \u6210\u529f\u6267\u884c\u7c7b\u65b9\u6cd5\n >\n > static function                               # \u6210\u529f\u6267\u884c\u9759\u6001\u65b9\u6cd5\n > Traceback (most recent call last):\n >  File \"E:\\\u6587\u6863\\Python\\python_class.py\", line 36, in <module>\n >    People.obj_func()\n > TypeError: obj_func() missing 1 required positional argument: 'self'\n"})}),"\n",(0,t.jsxs)(e.p,{children:["\u7c7b\u53ef\u4ee5\u4f7f\u7528\u7c7b\u65b9\u6cd5, \u7c7b\u5c5e\u6027\u548c\u9759\u6001\u65b9\u6cd5",(0,t.jsx)(e.br,{}),"\n","\u7c7b\u65e0\u6cd5\u4f7f\u7528\u5b9e\u4f8b\u5c5e\u6027\u548c\u5b9e\u4f8b\u65b9\u6cd5, \u540e\u4e24\u8005\u987b\u5b9e\u4f8b\u5316\u540e\u624d\u80fd\u4f7f\u7528"]}),"\n",(0,t.jsx)(e.h2,{id:"\u9759\u6001\u65b9\u6cd5",children:"\u9759\u6001\u65b9\u6cd5"}),"\n",(0,t.jsxs)(e.p,{children:["\u9759\u6001\u65b9\u6cd5\u9700\u8981\u5728\u5b9a\u4e49\u65f6\u6dfb\u52a0 ",(0,t.jsx)(e.code,{children:"@staticmethod"})," \u88c5\u9970\u5668",(0,t.jsx)(e.br,{}),"\n","\u9759\u6001\u65b9\u6cd5\u65e0\u6cd5\u8c03\u7528\u7c7b\u6216\u8005\u5b9e\u4f8b\u5316\u5bf9\u8c61\u7684\u5c5e\u6027\u548c\u65b9\u6cd5, \u4ec5\u662f\u4e00\u4e2a\u666e\u901a\u51fd\u6570"]}),"\n",(0,t.jsx)(e.h2,{id:"\u603b\u7ed3\u548c\u5b9e\u8df5",children:"\u603b\u7ed3\u548c\u5b9e\u8df5"}),"\n",(0,t.jsx)(e.h3,{id:"\u603b\u7ed3",children:"\u603b\u7ed3"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9759\u6001\u65b9\u6cd5\u5c5e\u4e8e\u7c7b, \u5374\u65e0\u6cd5\u4f7f\u7528\u7c7b\u7684\u5c5e\u6027\u548c\u65b9\u6cd5, \u53ef\u4ee5\u88ab\u7c7b\u4e0e\u5bf9\u8c61\u4f7f\u7528"}),"\n",(0,t.jsx)(e.li,{children:"\u7c7b\u65b9\u6cd5\u53ef\u8c03\u7528\u7c7b\u5c5e\u6027, \u7c7b\u65b9\u6cd5\u548c\u9759\u6001\u65b9\u6cd5, \u53ef\u4ee5\u88ab\u7c7b\u4e0e\u5bf9\u8c61\u4f7f\u7528"}),"\n",(0,t.jsx)(e.li,{children:"\u5b9e\u4f8b\u5316\u65b9\u6cd5\u53ef\u8c03\u7528\u7c7b\u5185\u6240\u6709\u5c5e\u6027\u65b9\u6cd5, \u4f46\u53ea\u53ef\u4ee5\u88ab\u5b9e\u4f8b\u5316\u5bf9\u8c61\u4f7f\u7528"}),"\n"]}),"\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{style:{textAlign:"center"},children:"\u7c7b\u578b"}),(0,t.jsx)(e.th,{style:{textAlign:"left"},children:"\u53ef\u7528\u8303\u56f4"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u7c7b"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u7c7b\u65b9\u6cd5, \u7c7b\u5c5e\u6027; \u9759\u6001\u65b9\u6cd5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{style:{textAlign:"center"},children:"\u5bf9\u8c61"}),(0,t.jsx)(e.td,{style:{textAlign:"left"},children:"\u5b9e\u4f8b\u65b9\u6cd5, \u5b9e\u4f8b\u5c5e\u6027; \u7c7b\u65b9\u6cd5, \u7c7b\u5c5e\u6027; \u9759\u6001\u65b9\u6cd5"})]})]})]}),"\n",(0,t.jsx)(e.h3,{id:"logging-\u5b9e\u8df5",children:"logging \u5b9e\u8df5"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-python",children:"\nclass logger:\n\n    obj_log = None\n\n    def info(cls, msg):                          # \u5b9a\u4e49\u7c7b\u65b9\u6cd5, \u7c7b\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\n        try:\n            cls.obj_log.info(msg)                # \u6b63\u5e38\u6267\u884c, \u8868\u793a logger \u7c7b\u5df2\u521b\u5efa\n        except Exception as _:\n            cls.create_logger()                  # \u6267\u884c\u5931\u8d25\u5219\u521b\u5efa logger \u7c7b\u540e\u6267\u884c\n            cls.obj_log.info(msg)\n        return msg\n\n    def terminal_handle(cls):                    # \u8bbe\u7f6e\u7a97\u53e3\u6253\u5370\u683c\u5f0f\n        pass\n\n    def file_handle(cls):                        # \u8bbe\u7f6e\u6587\u672c\u5199\u5165\u6253\u5370\u683c\u5f0f\n        pass\n\n    def create_logger(cls):                      # \u81ea\u5b9a\u4e49 logger \u5bf9\u8c61, \u8d4b\u503c\u7ed9\u7c7b\u5c5e\u6027 obj_log\n        cls.obj_log = logging.getLogger()\n        cls.terminal_handle()\n        cls.file_handle()\n"})}),"\n",(0,t.jsx)(e.p,{children:"\u901a\u8fc7\u7c7b\u65b9\u6cd5\u89e3\u51b3\u5f00\u5934\u7684\u96be\u70b9"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\u4ec5 ",(0,t.jsx)(e.code,{children:"create"})," \u4e00\u6b21\u5373\u53ef, \u5b9e\u4f8b\u5316\u5bf9\u8c61\u4fdd\u5b58\u5728\u7c7b\u5c5e\u6027 ",(0,t.jsx)(e.code,{children:"obj_log"})," \u4e2d"]}),"\n",(0,t.jsxs)(e.li,{children:["\u65e0\u9700\u5b9e\u4f8b\u5316\u5c01\u88c5\u5bf9\u8c61, ",(0,t.jsx)(e.code,{children:"import"})," \u540e\u4f7f\u7528\u7c7b\u65b9\u6cd5\u5373\u53ef"]}),"\n",(0,t.jsxs)(e.li,{children:["\u65e0\u9700\u4f20\u9012\u5bf9\u8c61, \u4ec5 ",(0,t.jsx)(e.code,{children:"import"})," \u5373\u53ef\u4f7f\u7528"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>r});var t=s(6540);const l={},c=t.createContext(l);function i(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);