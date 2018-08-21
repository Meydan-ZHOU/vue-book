let http = require("http");
let url = require("url");
let fs  = require("fs");
let slider = require("./slider.js");
let pageSize = 5;
function readerFile(cb) {
  fs.readFile("./book.json",'utf-8',(error,data) => {
    if(error||data.length === 0){
      cb([]);
    }else{
      cb(JSON.parse(data))
    }
  });
}

function writeFile(data,cb){
  fs.writeFile('./book.json',JSON.stringify(data),cb)
}

let app = http.createServer((req,res) => {
  if(req.url!=='/favicon.ico') {
    let {pathname,query} = url.parse(req.url,true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    if(req.method === "OPTIONS") return res.end();
    // 获取轮播图
    if(pathname === "/slider"){
      res.setHeader("200",{"Content-Type":"application/json;charset:'utf8'"});
      res.end(JSON.stringify(slider));
    }
    // 获取热门图书
    if(pathname === "/hotBook"){
      res.setHeader("200",{"Content-Type":"application/json;charset:'utf8'"});
      readerFile((books) => {
        setTimeout(() => {
          res.end(JSON.stringify(books.slice(0,6).reverse()));
        },1500);
      });
    }
    // 图书分页
    if(pathname === "/page"){
      let offset = parseInt(query.offset)||0;
      let hasMore = true;
      readerFile((books) => {
        let allBook = books.reverse().slice(offset,offset+pageSize);
        if(offset+pageSize>books.length){
          hasMore = false;
        }
        res.setHeader("200",{"Content-Type":"application/json;charset:'utf8'"});
        res.end(JSON.stringify({ hasMore,data:allBook }));
      });
    }
    // 图书相关操作
    if(pathname === "/book"){
      let id = parseInt(query.id);
      switch (req.method){
        case "GET":
          if(typeof id !== "undefined" && id>=0){
            res.setHeader("200",{"Content-Type":"application/json;charset:'utf8'"});
            readerFile((books) => {
              let oneBook = books.find((item,index) => {
                 return item.bookId === id;
              });
              if(oneBook){
                res.end(JSON.stringify(oneBook));
              }else{
                res.end(JSON.stringify({}));
              }
            });
          }else{
            res.setHeader("200",{"Content-Type":"application/json;charset:'utf8'"});
            readerFile((books) => {
              res.end(JSON.stringify(books.reverse()));
            });
          }
          break;
        case "POST":
          let dataStr = "";
          req.on("data",(chunk) => {
            dataStr+=chunk;
          });
          req.on("end",() => {
            readerFile((books) => {
              let id = books[books.length-1].bookId +1 || 0;
              let book = JSON.parse(dataStr);
              book.bookId = id;
              books.push(book);
              writeFile(books,() => {
                res.setHeader("200",{"Content-Type":"application/json;charset:'utf8'"});
                console.log("添加成功");
                res.end(JSON.stringify(books));
              });
            });
          });
          break;
        case "PUT":
          let str ="";
          req.on("data",(chunk) => {
              str+=chunk;
          });
          req.on("end",() => {
            readerFile((books) => {
              let allBook = books.map((book) => {
                if(book.bookId === id){
                  return JSON.parse(str);
                }
                return book;
              });
              writeFile(allBook,() => {
                  res.setHeader("200",{"Content-Type":"application/json;charset:'utf8'"});
                  res.end(JSON.stringify(allBook));
              });
            });
          });
          break;
        case "DELETE":
          readerFile((books) => {
            let allBook = books.filter((item) => {
              return item.bookId !==id;
            });
            writeFile(allBook,() => {
              res.setHeader("200",{"Content-Type":"application/json;charset:'utf8'"});
              res.end(JSON.stringify(allBook));
            });
          });
          break;
      }
      return ;
    }
  }
});

app.listen(3000,() => {
  console.log("server is running http:localhost:3000");
});
