const http= require('http')
const server= http.createServer((req,res)=>{
    console.log(req.url);
    if(req.url==='/'){
        res.write(`<h1>Home</>`)
    }
    if(req.url==='/about'){
        res.write(`<h1>about</>`)
    }
  else{
    res.write(`<h1>oops</>`)
  }
   
})

server.listen(3000)