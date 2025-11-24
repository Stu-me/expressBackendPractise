// making an array to make in memory database
const arr = [{ // made an array of objects with only one obj
    Name:"Sundram",
    class:"Third class",
    Rank:[
        {sem :"eight"},
        {sem :"third"},
        {sem :"first"},
        {sem :"first"},
        {sem :"first"},
    
    ]
}]
// now loading express in the file then s
const express = require("express"); // this line need attention 
const op = express(); // express loaded and its power locally transfered to the op
let port = 3000;
op.use(express.json());

op.get("/asd",(req,res)=>{ // req is what we will take and res is the response we will show on the screen
    let stuName = arr[0].Name;
    let classs = arr[0].class;
    let numberOfsems = arr[0].Rank.length;
    let numberOftimes_first = 0;
    for(let i=0;i<numberOfsems;i++){
        if(arr[0].Rank[i].sem === "first") numberOftimes_first++;// doubt
    }
    //res.send(`The name of the student is ${stuName} and he is in ${classs} and he has completed ${numberOfsems} semesters`) // not a standard method
    res.json({ // this is for response which is in the get operation, so whatever values we make in the get can be used in the json
        stuName,
        classs,
        numberOfsems,
        numberOftimes_first      
    })
})

op.post("/asd",(req,res)=>{ // in this we will update or give the value so req is here dominant
    const newSemRank = req.body.newSem // so it says that req(we take input) and in the body (will be seen on the postman) and store into a local variable
    arr[0].Rank.push({sem : newSemRank})
    res.json({
        chetawani : "hola amigo rank push hogyi hoo" // so its a message that the work is done 
    })
});
op.delete("/asd",(req,res)=>{
    const deleteSem = req.body.deleteSem;
    arr[0].Rank = arr[0].Rank.filter((ranks)=>ranks.sem !== deleteSem);
    res.json({
        msg : `bhai kaam hogya hai ${res} ab counts mein nah hai`
    })
});

op.listen(3000,()=>{// opening the port
    console.log("The server is live and go to we page to see the result");
})