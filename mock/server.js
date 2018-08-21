let http = require("http");
let url = require("url");
let fs  = require("fs");
let slider = require("./slider.js");

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
  fs.writeFile('../data.json',JSON.stringify(data),cb)
}

let app = http.createServer((req,res) => {
  if(req.url!=='/favicon.ico') {
    let {pathname,query} = url.parse(req.url,true);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.setHeader("X-Powered-By",' 3.2.1');
    if(req.method === "OPTIONS") return res.end();

    if(pathname === "/slider"){
      res.setHeader("200",{"Content-Type":"application/json","charset":"utf-8"});
      res.end(JSON.stringify(slider));
    }

    if(pathname === "/hotBook"){
      res.setHeader("200",{"Content-Type":"application/json","charset":"utf-8"});
      readerFile((books) => {
        res.end(JSON.stringify(books.slice(0,6).reverse()));
      });
    }

    if(pathname === "/book"){
      let id = query.id;
      console.log(req.method);
      switch (req.method){
        case "GET":
          if(id){

          }else{
            res.setHeader("200",{"Content-Type":"application/json","charset":"utf-8"});
            readerFile((books) => {
              res.end(JSON.stringify(books.reverse()));
            });
          }
          break;
        case "POST":
          break;
        case "PUT":
          break;
        case "DELETE":
          readerFile((books) => {
            let allBook = books.filter((item) => {
              console.log(typeof item.bookId +"--------------"+ typeof id)
              return item.bookId !==id;
            });
            console.log(allBook);
          });
          break;
      }
      return;
    }
  }
});

app.listen(3000,() => {
  console.log("server is running http:localhost:3000");
});
