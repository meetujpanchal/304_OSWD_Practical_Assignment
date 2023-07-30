//6. Write a program to extract a zip file.

var fs = require('fs')
var unzip = require('zlib')

fs.createReadStream('./text1.txt.gz')
    .pipe(unzip.createGunzip())
    .pipe(fs.createWriteStream('./text.txt'));

console.log('File Decompressed..!!');