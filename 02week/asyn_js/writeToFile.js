const fs = require("fs");
let text = "---------------We add the work to this file-------------------------";
fs.writeFile("read.txt",text,(err, data) =>{ // filename ,text ,    
    console.log("we did it ");
    console.log(fs.readFileSync("read.txt","utf8"));
    console.log("checking if it works early or later ");    
});
console.log("we are out at the end ");
