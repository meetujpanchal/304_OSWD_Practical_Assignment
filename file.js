var fs = require('fs');

fs.readFile('./text1.txt','utf-8',function(err,data){
    if (err) throw err;

    console.log(data);
})

