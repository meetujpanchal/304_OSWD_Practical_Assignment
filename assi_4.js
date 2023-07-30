//4. Use above chatbot module in web based chatting of websocket.

const WebSocket = require('ws')

var http = require('http')

var url = require('url')

var st = require('node-static')

var fileserver = new st.Server('./public')

var httpserver = http.createServer(function(request, response){
    request.on('end',function(){
        var get = url.parse(request.url, true).query;
        fileserver.serve(request,response);
    }).resume();
}).listen(8080,function(){
    console.log((new Date()) + 
       'server listening on port 8080');
});

const wss = new WebSocket.Server({server: httpserver});

wss.on('connection', function(ws){
    ws.send('hello client')

    ws.on('message', message => {
    console.log('Received message => ${message}')
    ws.send('I received:' + message)
    })

})