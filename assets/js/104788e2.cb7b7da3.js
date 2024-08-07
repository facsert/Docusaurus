"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[4842],{1776:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var t=s(4848),r=s(8453);const o={author:"facsert",pubDatetime:new Date("2023-12-13T20:57:56.000Z"),title:"Python requests",slug:"Python requests",featured:!1,draft:!1,tags:["Python","requests"],description:"Python HTTP \u6a21\u5757 requests"},l=void 0,i={id:"Python/python-requests",title:"Python requests",description:"Python HTTP \u6a21\u5757 requests",source:"@site/docs/Python/python-requests.md",sourceDirName:"Python",slug:"/Python/Python requests",permalink:"/docs/Python/Python requests",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/python-requests.md",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"},{inline:!0,label:"requests",permalink:"/docs/tags/requests"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2023-12-13T20:57:56.000Z",title:"Python requests",slug:"Python requests",featured:!1,draft:!1,tags:["Python","requests"],description:"Python HTTP \u6a21\u5757 requests"},sidebar:"tutorialSidebar",previous:{title:"Python mongo",permalink:"/docs/Python/Python mongo"},next:{title:"Python sqlalchemy",permalink:"/docs/Python/Python sqlalchemy"}},c={},h=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"HTTP",id:"http",level:2},{value:"\u53d1\u9001\u8bf7\u6c42",id:"\u53d1\u9001\u8bf7\u6c42",level:2},{value:"GET",id:"get",level:3},{value:"POST",id:"post",level:3},{value:"Response",id:"response",level:2},{value:"Response.text",id:"responsetext",level:3},{value:"Response.json",id:"responsejson",level:3},{value:"Response.status_code",id:"responsestatus_code",level:3},{value:"Response.headers",id:"responseheaders",level:3},{value:"Response.url",id:"responseurl",level:3},{value:"Response.cookies",id:"responsecookies",level:3},{value:"Response.encoding",id:"responseencoding",level:3},{value:"Response.raise_for_status",id:"responseraise_for_status",level:3},{value:"Response.content",id:"responsecontent",level:3},{value:"Response.iter_lines",id:"responseiter_lines",level:3},{value:"Response.iter_content",id:"responseiter_content",level:3},{value:"Response.close",id:"responseclose",level:3},{value:"Response.raw",id:"responseraw",level:3},{value:"\u6587\u4ef6",id:"\u6587\u4ef6",level:2},{value:"\u4e0a\u4f20\u6587\u4ef6",id:"\u4e0a\u4f20\u6587\u4ef6",level:3},{value:"\u4e0b\u8f7d\u6587\u4ef6",id:"\u4e0b\u8f7d\u6587\u4ef6",level:3}];function d(e){const n={br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"requests \u662f\u4e00\u4e2a\u7b80\u5355\u5f3a\u5927\u7684 http\u8bf7\u6c42\u5e93\uff0c\u652f\u6301\u540c\u6b65\u548c\u5f02\u6b65"}),"\n",(0,t.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,t.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:' $ python -m pip install requests\n $ python -c "import requests" && echo $?\n > 0\n'})}),"\n",(0,t.jsx)(n.h2,{id:"http",children:"HTTP"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"requests"})," \u662f\u4e00\u4e2a python \u7684 http \u5e93, \u5b83\u53ef\u4ee5\u7528\u6765\u53d1\u9001 http \u8bf7\u6c42, \u5e76\u63a5\u6536 http \u54cd\u5e94",(0,t.jsx)(n.br,{}),"\n","HTTP \u7684\u5168\u79f0\u662f HyperText Transfer Protocol (\u8d85\u6587\u672c\u4f20\u8f93\u534f\u8bae)\u7684\u7f29\u5199\uff0c\u662f\u4e00\u79cd\u5efa\u7acb\u5728 TCP \u4e0a\u7684\u65e0\u72b6\u6001\u8fde\u63a5",(0,t.jsx)(n.br,{}),"\n","HTTP \u662f\u4e92\u8054\u7f51\u7684\u57fa\u7840\u534f\u8bae\uff0c\u7528\u4e8e\u5ba2\u6237\u7aef\u4e0e\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\uff0c\u5b83\u89c4\u5b9a\u4e86\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u5668\u4e4b\u95f4\u7684\u901a\u4fe1\u683c\u5f0f\uff0c\u5305\u62ec\u8bf7\u6c42\u4e0e\u54cd\u5e94\u7684\u683c\u5f0f"]}),"\n",(0,t.jsx)(n.p,{children:"\u5ba2\u6237\u7aef\u901a\u8fc7\u5730\u5740\u94fe\u63a5\u751f\u6210 HTTP \u62a5\u6587, \u5e76\u53d1\u9001\u7ed9\u670d\u52a1\u5668, \u670d\u52a1\u5668\u6839\u636e\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5411\u5ba2\u6237\u7aef\u8fd4\u56de\u54cd\u5e94"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# \u8bf7\u6c42 URL\nhttp://localhost:8001/node/get?id=1              \n\n# HTTP \u62a5\u6587\u4e3b\u8981\u4fe1\u606f\nRequest URL: http://localhost:8001/node/get?id=1 # \u8bf7\u6c42 URL\nRequest Method: GET                              # \u8bf7\u6c42\u65b9\u6cd5\nStatus Code: 200 OK                              # \u54cd\u5e94\u72b6\u6001\u7801\nRemote Address: 127.0.0.1:8001\nReferrer Policy: strict-origin-when-cross-origin\n\n# chrome General \u8bf7\u6c42\u62a5\u6587\u6240\u6709\u4fe1\u606f\naccept: application/json                         # \u5ba2\u6237\u7aef\u63a5\u6536\u7684\u6570\u636e\u683c\u5f0f\nAccept-Encoding: gzip, deflate, br               # \u5ba2\u6237\u7aef\u63a5\u6536\u7684\u6570\u636e\u538b\u7f29\u683c\u5f0f\nAccept-Language: zh-CN,zh;q=0.9                  # \u5ba2\u6237\u7aef\u63a5\u6536\u7684\u8bed\u8a00                         \nCache-Control: no-cache  \nConnection: keep-alive                           # \u8fde\u63a5\u7c7b\u578b\nHost: localhost:8001                             # \u670d\u52a1\u5668\u5730\u5740\nPragma: no-cache\nReferer: http://localhost:8001/\nsec-ch-ua: "Chromium";v="110", "Not A(Brand";v="24", "Google Chrome";v="110"\nsec-ch-ua-mobile: ?0\nsec-ch-ua-platform: "Windows"\nSec-Fetch-Dest: empty\nSec-Fetch-Mode: cors\nSec-Fetch-Site: same-origin\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36\n\n# HTTP \u54cd\u5e94\ncontent-length: 39                               # \u54cd\u5e94\u6570\u636e\u957f\u5ea6\ncontent-type: application/json                   # \u54cd\u5e94\u6570\u636e\u683c\u5f0f\ndate: Wed, 03 Jan 2024 13:48:14 GMT              # \u54cd\u5e94\u65f6\u95f4\nserver: uvicorn\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u53d1\u9001\u8bf7\u6c42",children:"\u53d1\u9001\u8bf7\u6c42"}),"\n",(0,t.jsx)(n.p,{children:"request \u652f\u6301 4 \u79cd\u57fa\u672c\u8bf7\u6c42\u65b9\u6cd5: GET, POST, PUT, DELETE"}),"\n",(0,t.jsx)(n.h3,{id:"get",children:"GET"}),"\n",(0,t.jsxs)(n.p,{children:["GET \u8bf7\u6c42\u53ef\u5728 url \u4e2d\u643a\u5e26\u53c2\u6570, \u4ee5 ",(0,t.jsx)(n.code,{children:"?"})," \u5206\u754c, ",(0,t.jsx)(n.code,{children:"&"})," \u5206\u5272\u591a\u4e2a\u53c2\u6570",(0,t.jsx)(n.br,{}),"\n","\u5982: ",(0,t.jsx)(n.code,{children:"http://localhost:8001/node/get?name=lily&age=18"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nr = requests.get('http://localhost:8001/node/get', params={'name': 'lily'})\n\nprint(r.status_code)\nprint(r.text)\n"})}),"\n",(0,t.jsx)(n.p,{children:"requests.get \u53c2\u6570\u8bf4\u660e:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"url: \u8bf7\u6c42\u7684 URL"}),"\n",(0,t.jsx)(n.li,{children:"params: \u8bf7\u6c42\u7684 URL \u4e2d\u7684\u53c2\u6570"}),"\n",(0,t.jsx)(n.li,{children:"data: \u8bf7\u6c42\u7684 body \u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"headers: \u8bf7\u6c42\u7684 header \u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"cookies: \u8bf7\u6c42\u7684 cookie \u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"files: \u8bf7\u6c42\u7684\u4e0a\u4f20\u6587\u4ef6\u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"auth: \u8ba4\u8bc1\u4fe1\u606f"}),"\n",(0,t.jsx)(n.li,{children:"timeout: \u8d85\u65f6\u65f6\u95f4"}),"\n",(0,t.jsx)(n.li,{children:"allow_redirects: \u662f\u5426\u5141\u8bb8\u91cd\u5b9a\u5411"}),"\n",(0,t.jsx)(n.li,{children:"proxies: \u4ee3\u7406\u670d\u52a1\u5668"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"post",children:"POST"}),"\n",(0,t.jsxs)(n.p,{children:["POST \u8bf7\u6c42\u4e00\u822c\u7528\u4e8e\u5411\u670d\u52a1\u5668\u53d1\u9001\u6570\u636e, \u5982: \u8868\u5355\u63d0\u4ea4, \u6587\u4ef6\u4e0a\u4f20\u7b49",(0,t.jsx)(n.br,{}),"\n","POST \u8bf7\u6c42\u5728\u8bf7\u6c42\u4f53\u4e2d\u53d1\u9001\u6570\u636e, \u5982: ",(0,t.jsx)(n.code,{children:"http://localhost:8001/node/post"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.post('http://localhost:8001/node/post', data={'name': 'lily'})\n"})}),"\n",(0,t.jsx)(n.p,{children:"requests.post \u53c2\u6570\u8bf4\u660e:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"url: \u8bf7\u6c42\u7684 URL"}),"\n",(0,t.jsx)(n.li,{children:"data: \u8bf7\u6c42\u7684 body \u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"json: \u8bf7\u6c42\u7684 JSON \u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"headers: \u8bf7\u6c42\u7684 header \u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"cookies: \u8bf7\u6c42\u7684 cookie \u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"files: \u8bf7\u6c42\u7684\u4e0a\u4f20\u6587\u4ef6\u6570\u636e"}),"\n",(0,t.jsx)(n.li,{children:"auth: \u8ba4\u8bc1\u4fe1\u606f"}),"\n",(0,t.jsx)(n.li,{children:"timeout: \u8d85\u65f6\u65f6\u95f4"}),"\n",(0,t.jsx)(n.li,{children:"allow_redirects: \u662f\u5426\u5141\u8bb8\u91cd\u5b9a\u5411"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"response",children:"Response"}),"\n",(0,t.jsx)(n.h3,{id:"responsetext",children:"Response.text"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u54cd\u5e94\u4f53\u7684\u6587\u672c\u5185\u5bb9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.text)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responsejson",children:"Response.json"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u54cd\u5e94\u4f53\u7684 JSON \u6570\u636e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.json())\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responsestatus_code",children:"Response.status_code"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u54cd\u5e94\u72b6\u6001\u7801"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.status_code)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responseheaders",children:"Response.headers"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u54cd\u5e94\u5934"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.headers)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responseurl",children:"Response.url"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u8bf7\u6c42\u7684 URL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.url)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responsecookies",children:"Response.cookies"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u54cd\u5e94\u7684 cookies"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.cookies)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responseencoding",children:"Response.encoding"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u54cd\u5e94\u7684\u7f16\u7801\u683c\u5f0f"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.encoding)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responseraise_for_status",children:"Response.raise_for_status"}),"\n",(0,t.jsx)(n.p,{children:"\u5982\u679c\u54cd\u5e94\u72b6\u6001\u7801\u4e0d\u662f 200, \u5219\u629b\u51fa\u5f02\u5e38"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nr.raise_for_status()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responsecontent",children:"Response.content"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u54cd\u5e94\u4f53\u7684\u4e8c\u8fdb\u5236\u5185\u5bb9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.content)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responseiter_lines",children:"Response.iter_lines"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u54cd\u5e94\u4f53\u7684\u8fed\u4ee3\u5668, \u8fed\u4ee3\u5668\u6bcf\u8fed\u4ee3\u4e00\u6b21, \u5c31\u8fd4\u56de\u4e00\u884c\u5185\u5bb9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nfor line in r.iter_lines():\n    print(line)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responseiter_content",children:"Response.iter_content"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u54cd\u5e94\u4f53\u7684\u8fed\u4ee3\u5668, \u8fed\u4ee3\u5668\u6bcf\u8fed\u4ee3\u4e00\u6b21, \u5c31\u8fd4\u56de\u4e00\u90e8\u5206\u5185\u5bb9"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nfor chunk in r.iter_content(chunk_size=1024):\n    print(chunk)\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responseclose",children:"Response.close"}),"\n",(0,t.jsx)(n.p,{children:"\u5173\u95ed\u54cd\u5e94\u4f53"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nr.close()\n"})}),"\n",(0,t.jsx)(n.h3,{id:"responseraw",children:"Response.raw"}),"\n",(0,t.jsx)(n.p,{children:"\u8fd4\u56de\u539f\u59cb\u7684\u54cd\u5e94\u5bf9\u8c61"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nr = requests.get('http://localhost:8001/node/get?name=lily')\nprint(r.raw)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6587\u4ef6",children:"\u6587\u4ef6"}),"\n",(0,t.jsx)(n.p,{children:"requests \u652f\u6301\u6587\u4ef6\u4e0a\u4f20\u548c\u4e0b\u8f7d"}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0a\u4f20\u6587\u4ef6",children:"\u4e0a\u4f20\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\nfiles = {'file': open('test.txt', 'rb')}\nr = requests.post('http://localhost:8001/node/upload', files=files)\n\n# \u4e0a\u4f20\u6587\u4ef6, \u5e76\u6307\u5b9a\u6587\u4ef6\u540d\nfiles = {'file': ('test.txt', open('test.txt', 'rb'))}\nr = requests.post('http://localhost:8001/node/upload', files=files)\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u4e0b\u8f7d\u6587\u4ef6",children:"\u4e0b\u8f7d\u6587\u4ef6"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"import requests\n\n# \u5c0f\u6587\u4ef6\u4e0b\u8f7d\nr = requests.get('http://localhost:8001/node/download')\nwith open('test.txt', 'wb') as f:\n    f.write(r.content)\n\n# \u6d41\u5f0f\u4e0b\u8f7d, \u8fb9\u4e0b\u8fb9\u5b58, \u9002\u5408\u5927\u6587\u4ef6\nr = requests.get('http://localhost:8001/node/download')\nwith open('test.txt', 'wb') as f:\n    for chunk in r.iter_content(1024):\n        f.write(chunk)\n"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>i});var t=s(6540);const r={},o=t.createContext(r);function l(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);