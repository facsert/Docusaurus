"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2327],{1015:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>g,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var r=o(4848),t=o(8453);const l={author:"facsert",pubDatetime:new Date("2024-04-06T19:15:19.000Z"),title:"Go grpc",slug:"Go grpc",featured:!1,draft:!1,tags:["Go","grpc"],description:"Go Web \u6846\u67b6 grpc"},s=void 0,c={id:"Go/modules/go-grpc",title:"Go grpc",description:"Go Web \u6846\u67b6 grpc",source:"@site/docs/Go/modules/go-grpc.md",sourceDirName:"Go/modules",slug:"/Go/modules/Go grpc",permalink:"/docs/Go/modules/Go grpc",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Go/modules/go-grpc.md",tags:[{inline:!0,label:"Go",permalink:"/docs/tags/go"},{inline:!0,label:"grpc",permalink:"/docs/tags/grpc"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2024-04-06T19:15:19.000Z",title:"Go grpc",slug:"Go grpc",featured:!1,draft:!1,tags:["Go","grpc"],description:"Go Web \u6846\u67b6 grpc"},sidebar:"tutorialSidebar",previous:{title:"Go Gorm",permalink:"/docs/Go/modules/Go Gorm"},next:{title:"Go SSH",permalink:"/docs/Go/modules/Go SSH"}},g={},a=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u4ecb\u7ecd",id:"\u4ecb\u7ecd",level:2}];function i(e){const n={br:"br",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:" $ go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.28\n $ go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.2\n \n # \u6dfb\u52a0\u73af\u5883\u53d8\u91cf GOPATH \n $ export PATH=\"$PATH:$(go env GOPATH)/bin\"\n $ echo $PATH | xargs -d ':' -n1 |grep go\n > /usr/local/go/bin\n \n # \u786e\u8ba4\u5df2\u5b89\u88c5\n $ protoc --version\n > libprotoc 3.20.3\n\n $ protoc-gen-go --version\n > protoc-gen-go v1.28.1\n\n $ protoc-gen-go-grpc --version\n > protoc-gen-go-grpc 1.2.0\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u4ecb\u7ecd",children:"\u4ecb\u7ecd"}),"\n",(0,r.jsx)(n.p,{children:"grpc \u662f\u4e00\u4e2a\u9ad8\u6027\u80fd\u3001\u5f00\u6e90\u548c\u901a\u7528\u7684 RPC \u6846\u67b6\uff0c\u7531 Google \u56e2\u961f\u5f00\u53d1\uff0c\u7528\u4e8e\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u8fdb\u884c RPC \u8c03\u7528\n\u4f7f\u7528 hello.proto \u751f\u6210\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u4ee3\u7801"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'syntax = "proto3";\n\n// \u5ba2\u6237\u7aef\u6307\u5b9a client/pb \u4f5c\u4e3a\u5305\u540d\noption go_package = "server/pb";\n\npackage pb;\n\nmessage HelloRequest {\n    string name = 1;\n}\n\nmessage HelloResponse {\n    string message = 1;\n}\n\nservice Hello {\n    rpc SayHello(HelloRequest) returns (HelloResponse) {}\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"server\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 main.go\n\u2514\u2500\u2500 pb\n    \u251c\u2500\u2500 hello.pb.go\n    \u251c\u2500\u2500 hello.proto\n    \u2514\u2500\u2500 hello_grpc.pb.go\n\nclient\n\u251c\u2500\u2500 go.mod\n\u251c\u2500\u2500 go.sum\n\u251c\u2500\u2500 main.go\n\u2514\u2500\u2500 pb\n    \u251c\u2500\u2500 hello.pb.go\n    \u251c\u2500\u2500 hello.proto\n    \u2514\u2500\u2500 hello_grpc.pb.go\n\n# \u5728\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c\u547d\u4ee4, \u6309 protoc \u751f\u6210\u6e90\u7801\nprotoc --go_out=. --go_opt=paths=source_relative \\\n    --go-grpc_out=. --go-grpc_opt=paths=source_relative \\\n    pb/hello.proto\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u670d\u52a1\u7aef\u4ee3\u7801 ",(0,r.jsx)(n.code,{children:"server/main.go"}),(0,r.jsx)(n.br,{}),"\n","\u670d\u52a1\u7aef\u5b89\u88c5 grpc \u5e93 ",(0,r.jsx)(n.code,{children:"go get google.golang.org/grpc@latest"}),(0,r.jsx)(n.br,{}),"\n","\u521d\u59cb\u5316\u670d\u52a1\u7aef\u4ee3\u7801 ",(0,r.jsx)(n.code,{children:"go mod init server"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "fmt"\n    "context"\n    "net"\n    "google.golang.org/grpc"\n    \n    // \u5f15\u5165 pb(protoc \u751f\u6210\u7684\u6e90\u7801)\n    "server/pb"\n)\n\n// pb \u7684\u65b9\u6cd5\u540d\u79f0\u4e0e proto \u6587\u4ef6\u4e2d\u5b9a\u4e49\u7684 rpc \u76f8\u5173\ntype server struct {\n    pb.UnimplementedHelloServer\n}\n\nfunc (s *server) SayHello(ctx context.Context, in *pb.HelloRequest) (*pb.HelloResponse, error) {\n    fmt.Println("Received: ", in.GetName())\n    return &pb.HelloResponse{Message: "Hello " + in.GetName()}, nil\n}\n\nfunc main() {\n    lis, err := net.Listen("tcp", ":50051")\n    if err != nil {\n        fmt.Println("failed to listen: ", err)\n    }\n    s := grpc.NewServer()\n    pb.RegisterHelloServer(s, &server{})\n    fmt.Println("server listening at ", lis.Addr())\n    if err := s.Serve(lis); err != nil {\n        fmt.Println("failed to serve: ", err)\n    }\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-go",children:'package main\n\nimport (\n    "context"\n    "flag"\n    "log"\n    "time"\n\n    "grpc_client/pb"\n\n    "google.golang.org/grpc"\n    "google.golang.org/grpc/credentials/insecure"\n)\n\nconst (\n    defaultName = "world"\n)\n\nvar (\n    // 50051 \u662f\u670d\u52a1\u7aef\u76d1\u542c\u7684\u7aef\u53e3\n    addr = flag.String("addr", "127.0.0.1:50051", "the address to connect to")\n    name = flag.String("name", defaultName, "Name to greet")\n)\n\nfunc main() {\n    flag.Parse()\n    // \u8fde\u63a5\u5230server\u7aef\uff0c\u6b64\u5904\u7981\u7528\u5b89\u5168\u4f20\u8f93\n    conn, err := grpc.NewClient(*addr, grpc.WithTransportCredentials(insecure.NewCredentials()))\n    if err != nil {\n        log.Fatalf("did not connect: %v", err)\n    }\n    defer conn.Close()\n    c := pb.NewHelloClient(conn)\n\n    // \u6267\u884cRPC\u8c03\u7528\u5e76\u6253\u5370\u6536\u5230\u7684\u54cd\u5e94\u6570\u636e\n    ctx, cancel := context.WithTimeout(context.Background(), time.Second)\n    defer cancel()\n    r, err := c.SayHello(ctx, &pb.HelloRequest{Name: *name})\n    if err != nil {\n        log.Fatalf("could not greet: %v", err)\n    }\n    log.Printf("Greeting: %s", r.GetMessage())\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# \u7f16\u8bd1\u670d\u52a1\u7aef\u548c\u5ba2\u6237\u7aef\u4ee3\u7801\ngo build \n\n./server\n\n./client\n> 2024/04/06 19:12:17 Greeting: Hello world\n"})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var r=o(6540);const t={},l=r.createContext(t);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);