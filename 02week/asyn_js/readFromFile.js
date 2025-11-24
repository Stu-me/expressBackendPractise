const fsReadFile = require("fs");
console.log("we start here");

fsReadFile.readFile("read.txt","utf-8",(err,data)=>{                          // async
    setTimeout(()=>{
        console.log(data);
    },1000); 
});

//experiments
console.log("1st");
console.log("2nd");
console.log("34");
console.log(34);

setTimeout(()=>{                                                              // async 
    console.log(" 1 -----before timeout");// inside the function 
},500);
console.log(" 2  --------after timeout function ");
