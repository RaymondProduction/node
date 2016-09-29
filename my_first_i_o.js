var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString();
var arrstr = str.split('\n');
console.log(arrstr.length-1);
