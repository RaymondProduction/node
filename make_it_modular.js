var getFileList = require('./mymodule.js') ;
var dir = process.argv[2];
var filterStr = process.argv[3];

getFileList(dir,filterStr,function(err, list) {
   list.forEach(function(name, i, list) {
      console.log(name);
   });
 });

/* other solution

   var filterFn = require('./solution_filter.js')
    var dir = process.argv[2]
    var filterStr = process.argv[3]
    
    filterFn(dir, filterStr, function (err, list) {
      if (err) {
        return console.error('There was an error:', err)
      }
    
      list.forEach(function (file) {
        console.log(file)
      })
    })
*/
