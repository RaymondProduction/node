var http = require('http'); 
var fs = require('fs');
var port = Number(process.argv[2]);
var map = require('through2-map')
var str;  
console.log("port",port);

var server = http.createServer(function (req, res) {
     res.writeHead(200, { 'content-type': 'text/plain' });
     req.pipe(map(function (chunk) {  
       return chunk.toString().split('').reverse().join('')  
     })).pipe(res) 
}); 
server.listen(port) 


/*

variant of learnyounode

var http = require('http')
    var fs = require('fs')
    
    var server = http.createServer(function (req, res) {
      res.writeHead(200, { 'content-type': 'text/plain' })
    
      fs.createReadStream(process.argv[3]).pipe(res)
    })
    
    server.listen(Number(process.argv[2]))
*/
