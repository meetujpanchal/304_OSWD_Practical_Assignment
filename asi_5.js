//5.Write a program to create a compressed zip file for a folder.

var fs = require('fs')
var zlib = require('zlib')

fs.createReadStream('./text1.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('./text1.txt.gz'));

console.log('File compressed..!!');