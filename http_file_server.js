var http = require('http'); 
var fs = require('fs');
var name = process.argv[3];
var port = Number(process.argv[2]);
var str;  
console.log("name:",name);
console.log("port",port);

var server = http.createServer(function (req, res) {
    str = fs.createReadStream(name);  
    str.pipe(res);     
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
