const path = require('path');

module.exports = function (arg1,arg2) {
var fs = require('fs');
fs.readdir(arg1, function(err, list) {
    list.forEach(function(name, i, list) {
      if (path.extname(name)=='.'+arg2) console.log(name);
    });
});
} 
