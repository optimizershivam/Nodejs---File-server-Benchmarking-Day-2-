const http = require("http")
const fs  = require("fs")

let list = fs.readdirSync(`${__dirname}`, "utf-8")

let server = http.createServer((req,res) => {
    res.setHeader("content-type", "text/html")



switch(req.url) {
 case "/" : {
    
    list.map((e)=>{
        res.write(`
        <ul>
       <li> <a href =/${e}>${e}</a></li>
        </ul>
        `)
    })
     break;
 }
 case "/public" : 
 {
  let data = fs.readdirSync(`${__dirname+req.url}`, "utf-8")
  data.forEach((e)=> {
    res.write(`<ul>
    <li>
    <a href = /${e}>${e}</a>
    </li>
    
    </ul>`)
  })
 break;
 }
 case "/public/other" : 
 {
  let data = fs.readdirSync(`${__dirname+req.url}`, "utf-8")
  data.forEach((e)=> {
    res.write(`<ul>
    <li>
    <a href = /${e}>${e}</a>
    </li>
    
    </ul>`)
  })
 break;
 }
  
}
 
  

res.end()
})
server.listen(8080,()=> {
    console.log("Server started")
})

// 

