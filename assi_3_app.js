var Chatbot = require('./assi_3_chatbot');
var readline = require('readline');


var r1 = readline.createInterface(process.stdin, process.stdout);
console.log('Welcome user !!!');


r1.setPrompt("You=>");


r1.prompt();


r1.on('line', function (message) {
    console.log('Bot ==> ' + Chatbot.Chatbotreply(message));
}).on('close', function () {
    process.exit(0);
});
