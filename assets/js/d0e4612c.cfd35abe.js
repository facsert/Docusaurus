"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7442],{921:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var l=t(4848),i=t(8453);const s={author:"facsert",pubDatetime:new Date("2023-09-25T15:28:43.000Z"),title:"Python Type",slug:"Python Type",featured:!1,draft:!1,tags:["Python"],description:"Python \u7c7b\u578b\u6ce8\u89e3"},r=void 0,a={id:"Python/python-type",title:"Python Type",description:"Python \u7c7b\u578b\u6ce8\u89e3",source:"@site/docs/Python/python-type.md",sourceDirName:"Python",slug:"/Python/Python Type",permalink:"/docs/Python/Python Type",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Python/python-type.md",tags:[{inline:!0,label:"Python",permalink:"/docs/tags/python"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2023-09-25T15:28:43.000Z",title:"Python Type",slug:"Python Type",featured:!1,draft:!1,tags:["Python"],description:"Python \u7c7b\u578b\u6ce8\u89e3"},sidebar:"tutorialSidebar",previous:{title:"Python sqlalchemy",permalink:"/docs/Python/Python sqlalchemy"},next:{title:"Hexo",permalink:"/docs/Tool/Hexo"}},o={},c=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5f15\u7533",id:"\u5f15\u7533",level:2},{value:"\u52a8\u6001\u8bed\u8a00\u4e0e\u9759\u6001\u8bed\u8a00",id:"\u52a8\u6001\u8bed\u8a00\u4e0e\u9759\u6001\u8bed\u8a00",level:3},{value:"python \u7c7b\u578b\u6ce8\u89e3",id:"python-\u7c7b\u578b\u6ce8\u89e3",level:3},{value:"\u53d8\u91cf\u6ce8\u89e3",id:"\u53d8\u91cf\u6ce8\u89e3",level:2},{value:"\u5bb9\u5668\u7c7b\u578b",id:"\u5bb9\u5668\u7c7b\u578b",level:3},{value:"\u8054\u5408\u7c7b\u578b",id:"\u8054\u5408\u7c7b\u578b",level:3},{value:"\u62bd\u8c61\u7c7b\u578b",id:"\u62bd\u8c61\u7c7b\u578b",level:3},{value:"\u51fd\u6570\u6ce8\u89e3",id:"\u51fd\u6570\u6ce8\u89e3",level:3},{value:"Callable",id:"callable",level:3},{value:"\u6cdb\u578b",id:"\u6cdb\u578b",level:3},{value:"\u81ea\u5b9a\u4e49\u7c7b\u578b",id:"\u81ea\u5b9a\u4e49\u7c7b\u578b",level:3},{value:"\u7c7b\u578b\u522b\u540d",id:"\u7c7b\u578b\u522b\u540d",level:3},{value:"class",id:"class",level:3}];function d(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,l.jsx)(e.h2,{id:"\u5f15\u7533",children:"\u5f15\u7533"}),"\n",(0,l.jsx)(e.h3,{id:"\u52a8\u6001\u8bed\u8a00\u4e0e\u9759\u6001\u8bed\u8a00",children:"\u52a8\u6001\u8bed\u8a00\u4e0e\u9759\u6001\u8bed\u8a00"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u52a8\u6001\u8bed\u8a00(\u5f31\u7c7b\u578b\u8bed\u8a00)"}),"\n",(0,l.jsx)(e.li,{children:"\u9759\u6001\u8bed\u8a00(\u5f3a\u7c7b\u578b\u8bed\u8a00)"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u52a8\u6001\u8bed\u8a00\u7684\u53d8\u91cf\u6ca1\u6709\u7c7b\u578b, \u53d8\u91cf\u7684\u7c7b\u578b\u7531\u503c\u7684\u7c7b\u578b\u51b3\u5b9a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:' name = "John"                                   # python \u662f\u52a8\u6001\u8bed\u8a00\n name = 18                                       # \u53d8\u91cf\u65e0\u9700\u58f0\u660e\u7c7b\u578b, \u53ef\u63a5\u53d7\u4efb\u610f\u7c7b\u578b\u7684\u503c\n name = [1,2,3]                                  # \u53d8\u91cf\u53ef\u968f\u610f\u53d8\u6362\u7c7b\u578b, \u7c7b\u578b\u4ec5\u5728\u6267\u884c\u65f6\u786e\u5b9a\n'})}),"\n",(0,l.jsx)(e.p,{children:"\u9759\u6001\u8bed\u8a00\u53d8\u91cf\u6709\u7c7b\u578b, \u4e14\u53d8\u91cf\u7c7b\u578b\u548c\u503c\u7684\u7c7b\u578b\u5fc5\u987b\u4e00\u81f4"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-go",children:' var name string = "facser"                      // Go \u662f\u9759\u6001\u8bed\u8a00\n var age int = 18                                // \u53d8\u91cf\u58f0\u660e\u9700\u8981\u786e\u5b9a\u53d8\u91cf\u7c7b\u578b\n age = 20                                        // \u53d8\u91cf\u91cd\u65b0\u8d4b\u503c\u65f6, \u53d8\u91cf\u548c\u503c\u7684\u7c7b\u578b\u5fc5\u987b\u4e00\u81f4\n'})}),"\n",(0,l.jsx)(e.h3,{id:"python-\u7c7b\u578b\u6ce8\u89e3",children:"python \u7c7b\u578b\u6ce8\u89e3"}),"\n",(0,l.jsx)(e.p,{children:"python \u7c7b\u578b\u6ce8\u89e3:"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"\u4fbf\u4e8e\u5feb\u901f\u7406\u89e3\u4ee3\u7801"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u5668\u7684\u9759\u6001\u7c7b\u578b\u68c0\u67e5"}),"\n",(0,l.jsx)(e.li,{children:"\u7f16\u8f91\u5668\u7c7b\u578b\u63d0\u793a\u5feb\u901f\u5f00\u53d1"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6ce8: python \u4e0d\u4f1a\u505a\u7c7b\u578b\u68c0\u67e5, \u6240\u6709\u7c7b\u578b\u6ce8\u89e3\u88ab\u770b\u505a\u6ce8\u91ca\u7528\u4e8e\u63d0\u793a, python \u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u52a8\u6001\u8bed\u8a00\u7279\u6027"}),"\n",(0,l.jsx)(e.h2,{id:"\u53d8\u91cf\u6ce8\u89e3",children:"\u53d8\u91cf\u6ce8\u89e3"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Python",children:" var_str: str = \"string\"                        # \u5b57\u7b26\u4e32\u53d8\u91cf\n var_byte:bytes = b'byte'                       # byte \u7c7b\u578b\u53d8\u91cf\n var_int: int = 3                               # \u6574\u5f62\u53d8\u91cf\n var_float: float = 1.6                         # \u6d6e\u70b9\u578b\u53d8\u91cf\n var_bool: bool = True                          # \u5e03\u5c14\u7c7b\u578b\u53d8\u91cf\n none_var: None = None                          # \u5b9a\u4e49 None \u503c\n\n var_any: Any = 'any type'                      # \u4efb\u610f\u7c7b\u578b(\u65e0\u6cd5\u786e\u5b9a\u7c7b\u578b\u65f6\u4f7f\u7528, \u51cf\u5c11\u4f7f\u7528)\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u5bb9\u5668\u7c7b\u578b",children:"\u5bb9\u5668\u7c7b\u578b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Python",children:"  var_list: list[str] = ['a', 'b', 'c']          # \u5217\u8868\u7684\u503c\u7c7b\u578b\u53ea\u80fd\u662f\u5b57\u7b26\u4e32\n  var_set: set[int] = {1,2,3}                    # \u96c6\u5408\u7684\u503c\u7c7b\u578b\u53ea\u80fd\u662f\u6574\u578b\n  var_dict: dict[str, int] = {'key': 3}          # \u5b57\u5178\u7684 key \u4e3a\u5b57\u7b26\u4e32, \u503c\u4e3a\u5b57\u7b26\u4e32\n\n  var_tuple: tuple[int, str] = [3, 'c']          # \u5143\u7ec4\u7c7b\u578b\u58f0\u660e\u548c\u503c\u6570\u91cf\u548c\u7c7b\u578b\u5747\u9700\u8981\u4e00\u81f4\n  var_tuple2: tuple[int, str] = ['a', 3, 1]      # \u9519\u8bef, \u5e8f\u53f71 2\u503c\u4e0e\u7c7b\u578b\u4e0d\u7b26, \u7c7b\u578b\u4e0e\u503c\u6570\u91cf\u4e0d\u4e00\u81f4\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6ce8: \u4e0a\u8ff0\u9664\u5143\u7ec4\u4e0e\u5b57\u5178\u5916, \u5bb9\u5668\u5143\u7d20\u53ea\u80fd\u6307\u5b9a\u4e00\u4e2a\u7c7b\u578b. \u5143\u7ec4\u9700\u8981\u6570\u91cf\u548c\u7c7b\u578b\u4e00\u81f4, \u5b57\u5178\u53ea\u80fd\u4f7f\u7528\u4e00\u7ec4 key value \u7c7b\u578b\n(python3.9\u7248\u672c\u524d\u5bb9\u5668\u7c7b\u578b\u9700\u8981\u5bfc\u5165 typing \u6a21\u5757\u7684 List Tuple Set Dict)"}),"\n",(0,l.jsx)(e.h3,{id:"\u8054\u5408\u7c7b\u578b",children:"\u8054\u5408\u7c7b\u578b"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Union"}),"\n",(0,l.jsx)(e.li,{children:"Optional"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:" from typing import Union\n str_int: Union[str, int] = 2                    # \u53d8\u91cf\u53ef\u4e3a\u6574\u5f62\u4e5f\u53ef\u4e3a\u5b57\u7b26\u4e32\n\n lst: Union[str, int] = [2, 'a']                 # \u5217\u8868\u7684\u503c\u7c7b\u578b\u53ef\u4e3a\u5b57\u7b26\u4e32\u6216\u6574\u5f62\n\n str_int: str | int = 2                          # python3.10 \u7684\u65b0\u5199\u6cd5\u66f4\u76f4\u89c2\n"})}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:" option_str: Optional[str] = 'a'                     # \u53ef\u9009\u7c7b\u578b, \u503c\u53ef\u4e3a\u5b57\u7b26\u4e32\u6216\u8005 None\n option_int: Optional[int] = None                    # \u53ef\u9009\u7c7b\u578b, \u503c\u53ef\u4e3a\u6574\u5f62\u6216\u8005 None\n\n Optional[int] = Union[int, None]                    # Optional \u81ea\u5e26 None, \u53ea\u80fd\u518d\u6dfb\u52a0\u4e00\u79cd\u7c7b\u578b\n\n optional_int: int | None = 3                        # python3.10 \u7684\u65b0\u5199\u6cd5\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u62bd\u8c61\u7c7b\u578b",children:"\u62bd\u8c61\u7c7b\u578b"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:"Mapping"}),"\n",(0,l.jsx)(e.li,{children:"MutableMapping"}),"\n",(0,l.jsx)(e.li,{children:"Sequence"}),"\n",(0,l.jsx)(e.li,{children:"Iterable"}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u6570\u7ec4, \u5143\u7ec4, \u96c6\u5408"}),"\n",(0,l.jsx)(e.h3,{id:"\u51fd\u6570\u6ce8\u89e3",children:"\u51fd\u6570\u6ce8\u89e3"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Python",children:" def func(name: str, age: int) -> dict:          # \u53c2\u6570\u6dfb\u52a0\u7c7b\u578b, \u8fd4\u56de\u503c\u6dfb\u52a0\u7c7b\u578b\n     return {'name': name, 'age': age}\n\n  def func(name: str, age: int=18) -> str, int:  # \u8fd4\u56de\u591a\u4e2a\u503c\n      return name, age\n"})}),"\n",(0,l.jsx)(e.h3,{id:"callable",children:"Callable"}),"\n",(0,l.jsxs)(e.p,{children:["\u51fd\u6570, \u533f\u540d\u51fd\u6570, \u5305\u542b ",(0,l.jsx)(e.strong,{children:"call"})," \u65b9\u6cd5\u7684\u5bf9\u8c61"]}),"\n",(0,l.jsx)(e.p,{children:"Callable[[args_type], return_type]"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-Python",children:' from typing import Callable\n\n def func(name: str) -> None:                    # \u51fd\u6570\u7c7b\u578b\u6ce8\u89e3, \u65e0\u8fd4\u56de\u503c\u5219\u9ed8\u8ba4\u8fd4\u56de None\n     print(f"hello {name}")\n\n  foo: Callable[[str], None] = func              # \u51fd\u6570\u7c7b\u578b\u6ce8\u89e3, \u7b2c\u4e00\u4e2a\u53c2\u6570\u662f\u51fd\u6570\u53c2\u6570\u7c7b\u578b, \u7b2c\u4e8c\u4e2a\u662f\u8fd4\u56de\u503c\u7c7b\u578b\n\n  fun: Callable[[int], bool] = lambda x: x is 1  # \u533f\u540d\u51fd\u6570\u7c7b\u578b\u6ce8\u89e3\n'})}),"\n",(0,l.jsx)(e.h3,{id:"\u6cdb\u578b",children:"\u6cdb\u578b"}),"\n",(0,l.jsx)(e.p,{children:"\u5f53\u5bf9\u51fd\u6570\u4f7f\u7528\u7c7b\u578b\u6ce8\u89e3\u65f6, \u53c2\u6570\u6216\u8fd4\u56de\u503c\u6709\u591a\u79cd\u7c7b\u578b\u7684\u53ef\u80fd, \u6211\u4eec\u4f1a\u4f7f\u7528 Union \u8054\u5408\u7c7b\u578b\n\u4f46\u662f, \u8fd9\u4f9d\u7136\u4f1a\u51fa\u73b0\u95ee\u9898, \u5982\u6211\u4eec\u5e0c\u671b\u51fd\u6570\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7c7b\u578b\u5e94\u5f53\u4e00\u81f4"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:" def foo(a:str | int, b:str | int) -> str | int: # \u53c2\u6570\u53ef\u4ee5\u662f\u6574\u5f62\u4e5f\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\n  return a + b                                   # \u53ef\u80fd\u51fa\u73b0 a b \u7c7b\u578b\u4e0d\u4e00\u81f4\u60c5\u51b5\n\n from typing import TypeVar\n\n T = TypeVar('T', int, str)                      # T \u7c7b\u578b\u53ef\u4ee5\u5b57\u7b26\u4e32\u6216\u6574\u6570, \u7b2c\u4e00\u4e2a\u53c2\u6570\u548c\u53d8\u91cf\u540d\u4e00\u81f4(T 'T')\n def foo(a: T, b: T) -> T:                       # a b \u53ca\u8fd4\u56de\u503c\u7c7b\u578b\u4e00\u81f4\n     return a + b\n\n any = TypeVar('any')                            # \u4efb\u610f\u7c7b\u578b\u7684\u6cdb\u578b\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u6cdb\u578b\u53ef\u4ee5\u4f7f\u53d8\u91cf\u8868\u793a\u591a\u79cd\u7c7b\u578b\u540c\u65f6\u7ea6\u675f\u4f7f\u7528\u8be5\u7c7b\u578b\u7684\u53d8\u91cf\u4e3a\u540c\u4e00\u7c7b\u578b"}),"\n",(0,l.jsx)(e.h3,{id:"\u81ea\u5b9a\u4e49\u7c7b\u578b",children:"\u81ea\u5b9a\u4e49\u7c7b\u578b"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:" from typing import NewType\n\nmatrix = NewType('matrix', list[list[int]])      # \u81ea\u5b9a\u4e49\u7c7b\u578b\u5e76\u547d\u540d\nnumbers = NewType('numbers', list[int])\nstrings = NewType('strings', str)\n\na: matrix = matrix([[1,2], [2,3]])               # \u9700\u8981\u5b9e\u4f8b\u5316\u8d4b\u503c\nb: numbers = numbers([1,2,3])\nc: strings = strings('str')\n"})}),"\n",(0,l.jsx)(e.h3,{id:"\u7c7b\u578b\u522b\u540d",children:"\u7c7b\u578b\u522b\u540d"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:" matrix = list[list[int]]                        # \u81ea\u5b9a\u4e49\u7c7b\u578b\u5e76\u547d\u540d\n numbers = list[int]\n strings = str\n\n a: matrix = matrix([[1,2], [2,3]])              # \u65e0\u9700\u5b9e\u4f8b\u5316\u4e0e\u6b63\u5e38\u7c7b\u578b\u89e3\u4e00\u81f4\n b: numbers = numbers([1,2,3])\n c: strings = strings('str')\n"})}),"\n",(0,l.jsx)(e.h3,{id:"class",children:"class"}),"\n",(0,l.jsx)(e.p,{children:"\u901a\u8fc7\u7c7b\u6765\u5b9a\u4e49\u590d\u6742\u7684\u7ec4\u5408\u7c7b\u578b, \u7c7b\u4f3c\u63a5\u53e3"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-python",children:" from pydantic import BaseModel\n\n class Person(BaseModel):\n     id: int\n     name: str\n     age: int\n     email: str\n\n victory: Person = Person(\n     id = 3,\n     name = 'victory',\n     age = 18,\n     email = 'victory@example.com',\n )\n"})})]})}function h(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(d,{...n})}):d(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>a});var l=t(6540);const i={},s=l.createContext(i);function r(n){const e=l.useContext(s);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(s.Provider,{value:e},n.children)}}}]);