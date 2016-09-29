//console.log(Number(process.argv[2])+Number(process.argv[3])+Number(process.argv[4]));
//console.log(process.argv.length);
var s;
s=0;
for (var i=2;i<process.argv.length;i++)  s+=Number(process.argv[i]);
console.log(s);
