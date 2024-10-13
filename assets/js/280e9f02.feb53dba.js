"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3375],{3960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>m,default:()=>c,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var i=n(4848),a=n(8453);const d={author:"facsert",pubDatetime:new Date("2024-03-12T17:32:16.000Z"),title:"Python datetime",slug:"Python datetime",featured:!1,draft:!1,tags:["Python"],description:"Python \u7248\u672c\u63a7\u5236\u5de5\u5177 datetime"},m=void 0,o={id:"Python/python-datetime",title:"Python datetime",description:"Python \u7248\u672c\u63a7\u5236\u5de5\u5177 datetime",source:"@site/docs/Python/python-datetime.md",sourceDirName:"Python",slug:"/Python/Python datetime",permalink:"/docs/Python/Python datetime",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/python-datetime.md",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2024-03-12T17:32:16.000Z",title:"Python datetime",slug:"Python datetime",featured:!1,draft:!1,tags:["Python"],description:"Python \u7248\u672c\u63a7\u5236\u5de5\u5177 datetime"},sidebar:"tutorialSidebar",previous:{title:"Python Anaconda",permalink:"/docs/Python/Python Anaconda"},next:{title:"Python fastapi",permalink:"/docs/Python/Python fastapi"}},r={},s=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2},{value:"datetime",id:"datetime",level:2},{value:"fromisoformat",id:"fromisoformat",level:2},{value:"timedelta",id:"timedelta",level:2}];function l(e){const t={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,i.jsx)(t.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,i.jsx)(t.p,{children:"datetime \u662f python \u64cd\u4f5c\u65e5\u671f\u548c\u65f6\u95f4\u7684\u6807\u51c6\u5e93"}),"\n",(0,i.jsx)(t.h2,{id:"datetime",children:"datetime"}),"\n",(0,i.jsxs)(t.p,{children:["datetime \u5305\u542b date time \u5bf9\u8c61\u6240\u6709\u4fe1\u606f\u7684\u65f6\u95f4\u5bf9\u8c61",(0,i.jsx)(t.br,{}),"\n","datetime \u8868\u793a\u4e00\u4e2a\u65f6\u95f4\u70b9, \u53ef\u4ee5\u4e0e\u5176\u5b83 datetime \u65f6\u95f4\u70b9\u52a0\u51cf\u8fd0\u7b97"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:"import time\nfrom datetime import datetime\n\n# \u81ea\u5b9a\u4e49\u65f6\u95f4\u70b9\ndatetime(2024, 3, 18, hour=15, minute=44, second=10)\n> datetime.datetime(2024, 3, 18, 15, 44, 10)\n\n# \u83b7\u53d6\u5f53\u524d\u65f6\u95f4\u70b9\ndatetime.now()\n> datetime.datetime(2024, 3, 18, 15, 22, 27, 706625)\n\n# POSIX \u65f6\u95f4\u6233\u8f6c datetime \u65f6\u95f4\u5bf9\u8c61, \u4e0e now() \u7b49\u4ef7\ndatetime.fromtimestamp(time.time())\n> datetime.datetime(2024, 3, 18, 15, 47, 11, 976426)\n\n# datetime \u5bf9\u8c61\u6309\u6307\u5b9a\u683c\u5f0f\u8f6c\u6362\u6210\u5b57\u7b26\u4e32\ndatetime.now().strftime(\"%Y-%m-%d %H:%M:%S\")\n> '2024-03-18 15:23:38'\n\n# \u65e5\u671f\u5b57\u7b26\u4e32\u6309\u6307\u5b9a\u683c\u5f0f\u8f6c\u6362\u6210 datetime \u5bf9\u8c61\ndatetime.strptime('2024-03-18 15:23:38', \"%Y-%m-%d %H:%M:%S\")\n> datetime.datetime(2024, 3, 18, 15, 23, 38)\n\n# \u5feb\u901f\u6253\u5370\u5f53\u524d\u65f6\u95f4\u70b9\ndatetime.now().isoformat()\n> '2024-03-18T16:07:10.323165'\n"})}),"\n",(0,i.jsx)(t.h2,{id:"fromisoformat",children:"fromisoformat"}),"\n",(0,i.jsx)(t.p,{children:"\u89e3\u6790\u4efb\u4f55\u6709\u6548\u7684 ISO 8601 \u683c\u5f0f\u7684\u65e5\u671f\u5b57\u7b26\u4e32"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:"from datetime import datetime\n\ndatetime.fromisoformat('2011-11-04')\n> datetime.datetime(2011, 11, 4, 0, 0)\n\ndatetime.fromisoformat('20111104')\n> datetime.datetime(2011, 11, 4, 0, 0)\n\ndatetime.fromisoformat('2011-11-04T00:05:23')\n> datetime.datetime(2011, 11, 4, 0, 5, 23)\n\ndatetime.fromisoformat('2011-11-04T00:05:23Z')\n> datetime.datetime(2011, 11, 4, 0, 5, 23, tzinfo=datetime.timezone.utc)\n\ndatetime.fromisoformat('20111104T000523')\n> datetime.datetime(2011, 11, 4, 0, 5, 23)\n\ndatetime.fromisoformat('2011-W01-2T00:05:23.283')\n> datetime.datetime(2011, 1, 4, 0, 5, 23, 283000)\n\ndatetime.fromisoformat('2011-11-04 00:05:23.283')\n> datetime.datetime(2011, 11, 4, 0, 5, 23, 283000)\n\ndatetime.fromisoformat('2011-11-04 00:05:23.283+00:00')\n> datetime.datetime(2011, 11, 4, 0, 5, 23, 283000, tzinfo=datetime.timezone.utc)\n\ndatetime.fromisoformat('2011-11-04T00:05:23+04:00')   \n> datetime.datetime(2011, 11, 4, 0, 5, 23, tzinfo=datetime.timezone(datetime.timedelta(seconds=14400)))\n"})}),"\n",(0,i.jsx)(t.h2,{id:"timedelta",children:"timedelta"}),"\n",(0,i.jsxs)(t.p,{children:["timedelta \u8868\u793a\u4e00\u6bb5\u6301\u7eed\u7684\u65f6\u95f4, \u53ef\u7528\u4e8e\u521b\u5efa\u65f6\u95f4\u7247\u6bb5\u548c\u65e5\u671f\u505a\u52a0\u51cf\u8fd0\u7b97",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.code,{children:"class timedelta(days=0, seconds=0, microseconds=0, milliseconds=0, minutes=0, hours=0, weeks=0)"})]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:"from datetime import timedelta\n\none_hour = timedelta(hours=1)\none_monute = timedelta(minutes=1)\n\none_hour - one_minute\n> datetime.timedelta(seconds=3540)\n"})}),"\n",(0,i.jsx)(t.p,{children:"\u65f6\u95f4\u70b9\u548c\u65f6\u95f4\u7247\u6bb5\u652f\u6301\u591a\u79cd\u8fd0\u7b97"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-py",children:"timedelta1 * 2\ntimedelta1 / 2\ntimedelta1 - timedelta2\ntimedelta1 + timedelta2\n\ndatetime2 = datetime1 + timedelta\ndatetime2 = datetime1 - timedelta\ntimedelta = datetime1 - datetime2\n\ndatetime1 == datetime2\ntimedelta1 == timedelta2\ndatetime1 != datetime2\ntimedelta1 != timedelta2\n\ntimedelta1 < timedelta2\ndatetime1 <= datetime2\ntimedelta1 > timedelta2\ndatetime1 >= datetime2\n"})})]})}function c(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>m,x:()=>o});var i=n(6540);const a={},d=i.createContext(a);function m(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:m(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);