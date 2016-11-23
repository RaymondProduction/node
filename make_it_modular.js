var mymodule = require('./mymodule.js') ;

const path = require('path');
/*
var fs = require('fs');
fs.readdir(process.argv[2], function(err, list) {
    list.forEach(function(name, i, list) {
      if (path.extname(name)=='.'+process.argv[3]) console.log(name);
    });
});
*/

mymodule.exports(process.argv[2],process.argv[3],function(err, list) {
    list.forEach(function(name, i, list) {
      if (path.extname(name)=='.'+process.argv[3]) console.log(name);
   });
 });
