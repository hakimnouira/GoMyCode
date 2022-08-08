const fs = require('fs')

var sum=0;

var a= fs.readFileSync(process.argv[2]);
 while(a.indexOf("\n")!=-1){
    a[a.indexOf("\n")]="0"
sum++



 }
console.log(sum)

