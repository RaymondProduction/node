var net = require('net')
var date = new Date()  
var st=''; 

// This is my code
var server = net.createServer(function (socket) {  
     st+=date.getFullYear()+'-'  
     st+=(date.getMonth()+1)+'-'     // starts at 0  
     st+=date.getDate()+' '      // returns the day of month  
     st+=date.getHours()+':'  
     st+=date.getMinutes()+'\n';      
     socket.end(st);
 })  
 server.listen(process.argv[2]) 


/*

  This is code of learnyounode

 var net = require('net')
    
    function zeroFill (i) {
      return (i < 10 ? '0' : '') + i
    }
    
    function now () {
      var d = new Date()
      return d.getFullYear() + '-' +
        zeroFill(d.getMonth() + 1) + '-' +
        zeroFill(d.getDate()) + ' ' +
        zeroFill(d.getHours()) + ':' +
        zeroFill(d.getMinutes())
    }
    
    var server = net.createServer(function (socket) {
      socket.end(now() + '\n')
    })
    
    server.listen(Number(process.argv[2]))

*/
