const fs = require('fs')

var sum=0;



fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }


var a=data

  while(a.indexOf("\n")!=-1){
    
    a=a.slice(a.indexOf("\n")+1)

sum++
if(sum>50){ break}


 }
console.log(sum)

});





