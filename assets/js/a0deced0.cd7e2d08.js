"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[426],{8580:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(4848),a=r(8453);const i={author:"facsert",pubDatetime:new Date("2023-07-10T09:29:19.000Z"),title:"Go Gorm",slug:"Go Gorm",featured:!1,draft:!1,tags:["Go","Gin"],description:"Go Gorm \u6570\u636e\u5e93 orm"},l=void 0,o={id:"Go/modules/go-gorm",title:"Go Gorm",description:"Go Gorm \u6570\u636e\u5e93 orm",source:"@site/docs/Go/modules/go-gorm.md",sourceDirName:"Go/modules",slug:"/Go/modules/Go Gorm",permalink:"/docs/Go/modules/Go Gorm",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Go/modules/go-gorm.md",tags:[{inline:!0,label:"Go",permalink:"/docs/tags/go"},{inline:!0,label:"Gin",permalink:"/docs/tags/gin"}],version:"current",frontMatter:{author:"facsert",pubDatetime:"2023-07-10T09:29:19.000Z",title:"Go Gorm",slug:"Go Gorm",featured:!1,draft:!1,tags:["Go","Gin"],description:"Go Gorm \u6570\u636e\u5e93 orm"},sidebar:"tutorialSidebar",previous:{title:"Go Gin",permalink:"/docs/Go/modules/Go Gin"},next:{title:"Go grpc",permalink:"/docs/Go/modules/Go grpc"}},s={},d=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u8fde\u63a5",id:"\u8fde\u63a5",level:2},{value:"\u6a21\u578b",id:"\u6a21\u578b",level:2},{value:"\u67e5\u8be2",id:"\u67e5\u8be2",level:2},{value:"\u521b\u5efa",id:"\u521b\u5efa",level:2},{value:"\u5220\u9664",id:"\u5220\u9664",level:2},{value:"\u66f4\u65b0",id:"\u66f4\u65b0",level:2},{value:"\u539f\u751f sql",id:"\u539f\u751f-sql",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u5b89\u88c5",children:"\u5b89\u88c5"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://gorm.io/",children:"GORM \u5b98\u7f51"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ go get -u gorm.io/gorm\n> go: added gorm.io/gorm v1.25.11\n\n$ go get -u gorm.io/driver/postgres              # postgres \u9a71\u52a8\n$ go get -u gorm.io/driver/mysql                 # mysql \u9a71\u52a8\n$ go get -u gorm.io/driver/sqlite                # sqlit \u9a71\u52a8\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u8fde\u63a5",children:"\u8fde\u63a5"}),"\n",(0,t.jsx)(n.p,{children:"\u8fde\u63a5 mysql \u6570\u636e\u5e93"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import (\n    "fmt"\n    "log"\n\n    "gorm.io/driver/mysql"\n    "gorm.io/gorm"\n)\n\nconst (\n    host     = "localhost"\n    port     = 3306\n    username = "root"\n    password = "admin"\n    dbname   = "db"\n)\n\nvar DB *gorm.DB\n\nfunc main() {\n    dsn := fmt.Sprintf(\n        "%s:%s@tcp(%s:%d)/%s?charset=utf8mb4&parseTime=True&loc=Local",\n        username, password, host, port, dbname,\n    )\n    db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})\n    if err != nil {\n        log.Fatalf("failed to connect database: %v", err)\n    }\n    DB = db\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u8fde\u63a5 postgres \u6570\u636e\u5e93"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'import (\n    "fmt"\n    "log"\n\n    "gorm.io/driver/postgres"\n    "gorm.io/gorm"\n)\n\nvar DB *gorm.DB\n\nconst (\n    host         = "localhost"\n    port         = 5432\n    username     = "postgres"\n    password     = "password"\n    databaseName = "postgres"\n)\n\nfunc Init() {\n    dsn := fmt.Sprintf(\n        "host=%s user=%s password=%s dbname=%s port=%d sslmode=disable TimeZone=Asia/Shanghai",\n        host, username, password, databaseName, port,\n    )\n\n    db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})\n    if err != nil {\n        log.Fatalf("failed to connect database: %v", err)\n    }\n    DB = db\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u6a21\u578b",children:"\u6a21\u578b"}),"\n",(0,t.jsx)(n.p,{children:"gorm \u4f7f\u7528\u7ed3\u6784\u4f53\u548c\u6570\u636e\u5e93\u8868\u505a\u6620\u5c04"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// gorm \u5185\u7f6e\u4e86 gorm.Model, \u53ef\u4ee5\u5d4c\u5165\u81ea\u5df1\u6a21\u578b\ntype Model struct {\n  ID        uint `gorm:"primary_key"`\n  CreatedAt time.Time\n  UpdatedAt time.Time\n  DeletedAt *time.Time\n}\n\n\n// \u7ed3\u6784\u5b57\u6bb5\u5fc5\u987b\u5927\u5199\u5f00\u5934(\u5916\u90e8\u8c03\u7528\u8d4b\u503c), \u4f7f\u7528 tags \u6307\u5b9a\u8868\u5bf9\u5e94\u7684\u5b57\u6bb5\n// \u7ed3\u6784\u4f53\u53ea\u9700\u5b9a\u4e49\u9700\u8981\u4f7f\u7528\u7684\u5217, GORM \u5728\u67e5\u8be2\u6570\u636e\u65f6\u4f1a\u81ea\u52a8\u6839\u636e\u7ed3\u6784\u4f53\u5b57\u6bb5\u8fdb\u884c\u53d6\u503c\ntype Article struct {\n    Id      int    `gorm:"primaryKey;autoIncrement"`\n    Title   string `gorm:"column:title"`\n    Content string `gorm:"column:content"`\n}\n\n// \u81ea\u5b9a\u4e49\u7684\u8868\u540d, gorm \u53ef\u901a\u8fc7 Article \u5b9e\u4f8b\u65b9\u6cd5\u5b9a\u4f4d\u8868\nfunc (Article) TableName() string {\n    return "article" \n}\n\n// Table \u81ea\u5b9a\u4e49\u8868\u540d\ndatabase.DB.Table("article").Find(&articles)\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u6ce8\u610f:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"GORM \u4f7f\u7528\u4e00\u4e2a\u540d\u4e3a ID \u7684\u5b57\u6bb5\u4f5c\u4e3a\u6bcf\u4e2a\u6a21\u578b\u7684\u9ed8\u8ba4\u4e3b\u952e"}),"\n",(0,t.jsx)(n.li,{children:"GORM \u9ed8\u8ba4\u5c06\u7ed3\u6784\u4f53\u8f6c\u4e3a\u86c7\u5f62\u547d\u540d\u52a0\u4e0a\u590d\u6570\u5f62\u5f0f\u4f5c\u4e3a\u8868\u540d, \u5982 Article \u9ed8\u8ba4\u5176\u5728\u6570\u636e\u5e93\u8868\u540d\u4e3a articles"}),"\n",(0,t.jsxs)(n.li,{children:["GORM \u81ea\u52a8\u5c06\u7ed3\u6784\u4f53\u5b57\u6bb5\u540d\u79f0\u8f6c\u6362\u4e3a\u86c7\u5f62\u547d\u540d\u4f5c\u4e3a\u6570\u636e\u5e93\u4e2d\u7684\u5217\u540d, \u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"column"})," \u6807\u8bb0\u81ea\u5b9a\u4e49\u5217\u540d"]}),"\n",(0,t.jsx)(n.li,{children:"GORM \u9ed8\u8ba4\u4f7f\u7528\u5b57\u6bb5 CreatedAt \u548c UpdatedAt \u6765\u81ea\u52a8\u8ddf\u8e2a\u8bb0\u5f55\u7684\u521b\u5efa\u548c\u66f4\u65b0\u65f6\u95f4"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5b9a\u4e49\u7ed3\u6784\u4f53\u7528\u4e8e\u786e\u5b9a\u8868\u4fe1\u606f\u53ca\u4f7f\u7528\u5b57\u6bb5\u6620\u5c04, \u94a9\u5b50, \u81ea\u52a8\u8fc1\u79fb\u529f\u80fd\u7b49",(0,t.jsx)(n.br,{}),"\n","\u53e6\u5916\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Table()"})," \u81ea\u5b9a\u4e49\u8868\u540d, ",(0,t.jsx)(n.code,{children:"map[string]any"})," \u63a5\u6536\u6570\u636e"]}),"\n",(0,t.jsx)(n.h2,{id:"\u67e5\u8be2",children:"\u67e5\u8be2"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// \u67e5\u8be2\u5355\u4e2a\u6570\u636e, \u4e3b\u952e\u5347\u5e8f First(\u7b2c\u4e00\u6761), Last(\u6700\u540e\u4e00\u6761), Take(\u968f\u673a\u4e00\u6761)\nvar article Article\ndatabase.DB.First(&article)\ndatabase.DB.Last(&article)\ndatabase.DB.Take(&article)\n\n// First, Last, Take \u6ca1\u6709\u6570\u636e\u4f1a\u8fd4\u56de\u9519\u8bef gorm.ErrRecordNotFound\nresult := database.DB.First(&article)\nif res.Error == gorm.ErrRecordNotFound {\n    fmt.Println("no data")\n}\n\n\n// \u67e5\u8be2\u6240\u6709\u6570\u636e Find\nvar articles []Article\ndatabase.DB.Find(&articles)\n\n// Limit \u9650\u5236\u67e5\u8be2\u6761\u6570, \u89c4\u907f ErrorRecordNotFound \u9519\u8bef\ndatabase.DB.Limit(1).Find(&articles)\n\n// \u67e5\u8be2\u6761\u6570\nresult.RowsAffected\n\n// \u6267\u884c\u62a5\u9519\u6216 nil\nresult.Error\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// Where \u67e5\u8be2\u6761\u4ef6  SELECT * FROM article WHERE id = 6 LIMIT 1;\ndatabase.DB.Where("id = ?", 6).First(&articles)\n\n// Where \u67e5\u8be2\u6761\u4ef6  SELECT * FROM article WHERE id IN (1, 2, 3);\ndatabase.DB.Where("id IN ?", []int{1, 2, 3}).Find(&articles)\n\n// Where \u67e5\u8be2\u6761\u4ef6  SELECT * FROM article WHERE id > 3 AND id < 8;\ndatabase.DB.Where("id > ? AND id < ?", 3, 8).Find(&articles)\n\n// OR \u67e5\u8be2\u6761\u4ef6 SELECT * FROM article WHERE id > 3 OR title = \'gorm\';\ndatabase.DB.Where("id = 5").Or("title = \'gorm\'").Find(&articles)\n\n// \u8bbe\u7f6e\u67e5\u8be2\u5b57\u6bb5 Select \u591a\u4e2a\u53c2\u6570\u6216\u6570\u7ec4 SELECT id, title, content FROM article;\ndatabase.DB.Select([]string{"id", "title", "content"}).Find(&articles)\n\n// Order \u6392\u5e8f SELECT * FROM article ORDER BY name DESC;\ndatabase.DB.Order("name DESC").Find(&articles)\n\n// Limit Offset \u9650\u5236\u67e5\u8be2\u6761\u6570\u548c\u504f\u79fb SELECT * FROM article OFFSET 3 LIMIT 10;\ndatabase.DB.Limit(10).Offset(3).Find(&articles)\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u65e0\u7ed3\u6784\u4f53\u67e5\u8be2, \u4f7f\u7528 Table \u786e\u5b9a\u8868, map \u63a5\u6536\u6570\u636e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// \u65e0\u4e3b\u952e\u6392\u5e8f, First Last \u65e0\u6cd5\u4f7f\u7528, \u83b7\u53d6\u6240\u6709\u5b57\u6bb5\nvar article map[string]any\ndatabase.DB.Take(&article)\n\n// Where \u6761\u4ef6\u67e5\u8be2\nvar articles map[string]any\ndatabase.DB.Table("article").Where("title = ?", "gorm").Find(&articles)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u521b\u5efa",children:"\u521b\u5efa"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// \u521b\u5efa article \u5bf9\u8c61\u5199\u5165\u8868(id \u662f\u81ea\u589e\u5b57\u6bb5\u65e0\u9700\u8d4b\u503c)\narticle := Article{Title: "go gorm", Conyent: "gorm tutorial"}\nresult := database.DB.Create(&article)\n\n// article \u5199\u5165\u8868\u540e, id \u53d6\u503c\narticle.Id\n\n// \u6267\u884c\u5417\u547d\u4ee4 error \u6216 nil\nresult.Error\n\n// \u63d2\u5165\u8bb0\u5f55\u6570\u91cf\nresult.RowsAffected\n\n\n// \u63d2\u5165\u591a\u6761\u6570\u636e\narticles := []Artilce{\n    {Title: "go gorm", Content: "gorm tutorial"},\n    {Title: "go gorm", Content: "gorm tutorial"},\n}\nresult := database.DB.Create(&articles)\n'})}),"\n",(0,t.jsx)(n.p,{children:"\u65e0\u7ed3\u6784\u4f53\u521b\u5efa, \u4f7f\u7528 Table \u786e\u5b9a\u8868, map \u8bbe\u7f6e\u6570\u636e"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// \u521b\u5efa\u5355\u6761\u6570\u636e\ndatabase.DB.Table("article").Create(&map[string]any{\n    "title": "go gorm", "content": "gorm tutorial",\n})\n\n// \u521b\u5efa\u591a\u6761\u6570\u636e\ndatabase.DB.Table("article").Create(&[]map[string]any{\n    {"title": "go gorm", "content": "gorm tutorial"},\n    {"title": "go gorm", "content": "gorm tutorial"},\n})\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u5220\u9664",children:"\u5220\u9664"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// \u5220\u9664\u5355\u6761\u8bb0\u5f55 DELETE FROM article WHERE id = 4;\ndatabase.DB.Delete(&Article{}, 4)\n\n// \u6279\u91cf\u5220\u9664\ndatabase.DB.Where("title LIKE ?", "%gorm%").Delete(&Article{})\n\n// \u65e0\u6a21\u578b\u5220\u9664\u6570\u636e\ndatabase.DB.Table("article").Where("id = ?", 5).Delete(nil)\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u66f4\u65b0",children:"\u66f4\u65b0"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// \u66f4\u65b0\u5355\u5217\ndatabase.DB.Model(&Article{}).Where("id = ?", 3).Update("title", "Golang Gorm")\n\n// \u66f4\u65b0\u591a\u5217 \u4f7f\u7528\u7ed3\u6784\u4f53\u6620\u5c04\u591a\u5217, \u96f6\u503c\u5b57\u6bb5\u4e0d\u66f4\u65b0\n// UPDATE article SET title=\'Gorm\' content=\'Golang Gorm\' WHERE title=\'gorm\';\ndatabase.DB.Model(&Article{}).Where("title = gorm").Updates(Article{Tile: "Gorm", Content: "Golang Gorm"})\n\n// \u65e0\u7ed3\u6784\u4f53\u66f4\u65b0\ndatabase.DB.Table("article").Where("id IN (?)", []int{1,2,3}).Updates(map[string]any{\n    "title": "go gorm", "content": "gorm tutorial"\n})\n'})}),"\n",(0,t.jsx)(n.h2,{id:"\u539f\u751f-sql",children:"\u539f\u751f sql"}),"\n",(0,t.jsxs)(n.p,{children:["\u67e5\u8be2\u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Raw"})," \u53ef\u4ee5\u8fd4\u56de\u67e5\u8be2\u6570\u636e, \u4f7f\u7528 ",(0,t.jsx)(n.code,{children:"Exec"})," \u4e0d\u8fd4\u56de\u6570\u636e"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'// \u4f7f\u7528\u539f\u751f sql \u8bed\u53e5 \nvar articles []map[string]any\ndatabase.DB.Raw("SELECT * FROM article WHERE id < ? AND title = ?", 4, "gorm",).Scan(&articles)\n\n// \u4f7f\u7528 map \u505a\u53d8\u91cf\u66ff\u6362 (\u8868\u540d\u548c\u5217\u540d\u65e0\u6cd5\u4f7f\u7528\u53d8\u91cf\u66ff\u6362)\ndatabase.DB.Raw("SELECT * FROM article WHERE id < @id AND title = @title",\n    map[string]any{"id": 4, "title": "gorm"},\n).Scan(&articles)\n\n// \u5220\u9664 \u63d2\u5165 \u66f4\u65b0\u4e0d\u8fd4\u56de\u6570\u636e\u4f7f\u7528 Exec\ndatabase.DB.Exec("DELETE FROM article WHERE id = ?", 5)\n\n// postgres \u652f\u6301 RETURNING \u53ef\u4ee5\u63a5\u6536\u8fd4\u56de\u503c\nvar article map[string]any\ndatabase.DB.Raw("DELETE FROM article WHERE id = ? RETURNING *", 5).Scan(&article)\n'})})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>o});var t=r(6540);const a={},i=t.createContext(a);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);