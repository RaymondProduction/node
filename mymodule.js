module.exports = function (arg1,arg2,callback) {
var fs = require('fs');
fs.readdir(arg1, function(err, list) { 
    if (err)   return callback(err);
     callback(null,list);
});
} 
