var http = require('http');
var async = require('async');
var urls = [process.argv[2],process.argv[3],process.argv[4]];
var i=0;
var buf="";
//var urls = ['http://zosh8.pp.ua/','http://zosh8.pp.ua/','http://zosh8.pp.ua/'];

async.map(urls, function(url, callback) {
  http.get(url, function(res) {
     res.setEncoding("utf8");
     res.on("data",function(data){
    buf+=data;
    i++;
    });
    res.on("end",function(){
      //console.log(buf.length);
      console.log(buf);
      buf="";
    });
  });
}, function(err, results) {
  
});

/*
   
    ---variant of learnyounode---

    
    var http = require('http')
    var bl = require('bl')
    var results = []
    var count = 0
    
    function printResults () {
      for (var i = 0; i < 3; i++) {
        console.log(results[i])
      }
    }
    
    function httpGet (index) {
      http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
          if (err) {
            return console.error(err)
          }
    
          results[index] = data.toString()
          count++
    
          if (count === 3) {
            printResults()
          }
        }))
      })
    }
    
    for (var i = 0; i < 3; i++) {
      httpGet(i)
    }
*/
