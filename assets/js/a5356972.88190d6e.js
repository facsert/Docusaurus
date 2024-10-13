"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2097],{5664:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var o=t(4848),r=t(8453);const a={author:"facsert",pubDatetime:new Date("2024-04-29T22:39:27.000Z"),title:"React form",slug:"React form",featured:!1,draft:!1,tags:["React"],description:"React \u8868\u683c\u7ec4\u4ef6"},s=void 0,c={id:"Frontend/React/react-form",title:"React form",description:"React \u8868\u683c\u7ec4\u4ef6",source:"@site/docs/Frontend/React/react-form.md",sourceDirName:"Frontend/React",slug:"/Frontend/React/React form",permalink:"/docs/Frontend/React/React form",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Frontend/React/react-form.md",tags:[{inline:!0,label:"React",permalink:"/docs/tags/react"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2024-04-29T22:39:27.000Z",title:"React form",slug:"React form",featured:!1,draft:!1,tags:["React"],description:"React \u8868\u683c\u7ec4\u4ef6"},sidebar:"tutorialSidebar",previous:{title:"React Configuration",permalink:"/docs/Frontend/React/React Configuration"},next:{title:"React hook",permalink:"/docs/Frontend/React/React hook"}},l={},i=[{value:"Table of Contents",id:"table-of-contents",level:2}];function m(n){const e={code:"code",h2:"h2",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h2,{id:"table-of-contents",children:"Table of Contents"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'"use client"\n\nimport { Input } from "@/components/ui/input";\nimport { Label } from "@/components/ui/label";\nimport { Button } from "@/components/ui/button";\nimport { FormEvent, useState, ChangeEvent } from "react";\n\ninterface Client {\n    host: string\n    port: number\n    username: string\n    password: string\n}\n\nexport default function FormPage() {\n    const [client, setClient] = useState<Client>({\n        host: "",\n        port: 0,\n        username: "",\n        password: ""\n    })\n    async function handleSubmit(event: FormEvent<HTMLFormElement>) {\n        event.preventDefault();\n        console.log(client)\n    }\n    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {\n        const {id, value} = event.target as HTMLInputElement;\n        // \u6839\u636e id \u503c\u53d8\u66f4 client \u5c5e\u6027\n        setClient({...client, [id]: value})\n        console.log(client)\n    }\n\n    function testAction() {\n        console.log("TEST ACTION");\n        console.log(client.host);\n        console.log(client.username);\n    }\n    return (\n        <form onSubmit={handleSubmit}>\n            <Label htmlFor="host">host</Label>\n            <Input type="text" id="host" value={client.host} onChange={handleChange}/>\n\n            <Label htmlFor="port">port</Label>\n            <Input type="number" id="port" value={client.port} onChange={handleChange} />\n\n            <Label htmlFor="username">username</Label>\n            <Input type="text" id="username" value={client.username} onChange={handleChange} />\n\n            <Label htmlFor="password">password</Label>\n            <Input type="text" id="password" value={client.password} onChange={handleChange} />\n\n            <Button type="submit">Submit</Button>\n            <Button type="button" onClick={testAction}>Button</Button>\n        </form>\n    );\n}\n'})}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-js",children:'import { useForm } from "react-hook-form";\nimport { z } from "zod";\nimport { zodResolver } from "@hookform/resolvers/zod";\n\n// \u8f93\u5165\u8868\u5355\u7684\u7ea6\u675f\u89c4\u5219\nconst formSchema = z.object({\n  title: z.string().min(2, {\n    message: "todo title must be at least 2 characters.",\n  }),\n  content: z.string().min(2, {\n    message: "todo content must be at least 2 characters.",\n  }),\n});\n\nfunction Form() {\n  // \u8bbe\u7f6e\u8868\u5355\u7684\u521d\u59cb\u503c\n  const form = useForm <z.infer <typeof formSchema>>({\n    resolver: zodResolver(formSchema),\n    defaultValues: { title: "", content: "" },\n  });\n\n  // \u63d0\u4ea4\u8868\u5355\u64cd\u4f5c\n  const onSubmit = (data: z.infer<typeof formSchema>) => {\n    console.log(data.title);\n    console.log(data.content);\n  };\n\n  return (\n    <Form {...form}>\n      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">\n        <FormField\n          control={form.control}\n          name="title"\n          render={({ field }) => (\n            <FormItem>\n              <FormLabel>Title</FormLabel>\n              <FormControl>\n                <Input placeholder="Write todo here" {...field} />\n              </FormControl>\n              <FormDescription>This is your Todo title</FormDescription>\n            </FormItem>\n          )}\n        />\n        <FormField\n          control={form.control}\n          name="content"\n          render={({ field }) => (\n            <FormItem>\n              <FormLabel>Content</FormLabel>\n              <FormControl>\n                <Textarea placeholder="Write todo here" {...field} />\n              </FormControl>\n              <FormDescription>This is your Todo content</FormDescription>\n            </FormItem>\n          )}\n        />\n        <DialogClose type="submit">ADD</DialogClose>\n      </form>\n    </Form>\n  );\n}\n'})})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(m,{...n})}):m(n)}},8453:(n,e,t)=>{t.d(e,{R:()=>s,x:()=>c});var o=t(6540);const r={},a=o.createContext(r);function s(n){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:s(n.components),o.createElement(a.Provider,{value:e},n.children)}}}]);