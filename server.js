var http = require("http");
var host = "localhost";
var port = 8080;
const fs= require('fs');
const path= require('path');



const requestListener=function(req,res){
    res.setHeader("Content","text/html");
    
    fs.readFile(path.join(__dirname,'server.html'),(err,data)=>{
        if(err){
            res.writeHead(500);
            return res.end('Error loading html  page');
        }
        res.writeHead(200);
        res.end(data);
    });
}

const server=http.createServer(requestListener);
server.listen(port,host,function(){
    console.log(`Server is running on host http://${host}:${port}`);
})