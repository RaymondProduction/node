const path = require('path');

mymodule.exports = function (arg1,arg2,callback) {
var fs = require('fs');
fs.readdir(arg1, foo(function(err, list) {
     
    if (err)   return callback(err);
    callback(null,list);
    /* 
    list.forEach(function(name, i, list) {
      if (path.extname(name)=='.'+arg2) console.log(name);
    });
   */
}));
} 
