const http = require('http')
const url = require('url')
const static = require('node-static');


const fileserver = new static.Server('./Server-Programs');


var server = http.createServer(function(req,res){
    req.addListener('end',function(){
        fileserver.serve(req,res);
    }).resume();
}).listen(8001);
console.log("Listing on port number 8001");
