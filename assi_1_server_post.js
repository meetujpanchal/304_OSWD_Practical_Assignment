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
    else {
        res.write("other pages");
        res.end();
    }
    
});


server.listen(8080);
console.log("server listing on 8080:");
