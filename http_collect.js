var http = require('http');
var url = process.argv[2];
var i=0;
var buf="";
http.get(url, function(res) {
  res.setEncoding("utf8");
  res.on("data",function(data){
    buf+=data;
    i++;
  });
  res.on("end",function(){
    console.log(buf.length);
    console.log(buf);
  });
}).on("error", function(e) {
  console.log("Got error: " + e.message);
});

/* other solution

 var http = require('http')
    var bl = require('bl')
    
    http.get(process.argv[2], function (response) {
      response.pipe(bl(function (err, data) {
        if (err) {
          return console.error(err)
        }
        data = data.toString()
        console.log(data.length)
        console.log(data)
      }))
    })
*/
