var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res){
    console.log("recived url" + req.url);

    if(req.url=="/")
    {
        res.write("hello");
        res.write("hello1");
        res.end();
    }
    else if(req.url=="/list")
    {
        res.write("List");        
        res.end();
    }
    else if(req.url=="/process" && req.method == 'POST')
    {
        let body = '';
        req.on('data', chunk => {
            body+= chunk.toString();
        });
        req.on('end', () => {
            console.log(body);
            res.end("ok => "+body);
        });
    }
    else if(req.url=="/index1.html" && req.method== 'GET')
    {
        var filename = "index1.html";
        fs.readFile(filename,function(err,data){
            if (err) {
                res.writeHead(404,{'Content-type' : 'text/html'});
                return res.end("404 not found");
            }

            res.writeHead(200,{'Content-type' : 'text/html'});
            res.write(data);
            return res.end();
        });   
    }
    else {
        res.write("other pages");
        res.end();
    }
    
});

server.listen(8080);
console.log("server listing on 8080:");