
var fs = require('fs');
var path = require('path');


module.exports = function (dir,filterStr,callback) {
fs.readdir(dir, function(err, list) { 
    if (err)  { 
       return callback(err);
    } else  { 
      var listFinal = [];
      var j=0;
      list.forEach(function(file,i,list){
         if (path.extname(file)=='.'+filterStr) {
               listFinal[j++]=file;
         } 
      });
      callback(null,listFinal);
    }
});
}

 
/* other solution 

 module.exports = function (dir, filterStr, callback) {
      fs.readdir(dir, function (err, list) {
        if (err) {
          return callback(err)
        }
    
        list = list.filter(function (file) {
          return path.extname(file) === '.' + filterStr
        })
    
        callback(null, list)
      })
    }
*/
