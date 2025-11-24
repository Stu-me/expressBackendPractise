 // local array database
const users = [{
    name :"sandy",
    kidneys:[{
        healthy : true 
    }]
}];

// we brought express 
const express = require("express");
const app = express();
// require("dotenv").config();
let port = 3000;
// in get to provide input we use query parameter

app.use(express.json());

app.get("/",(req,res)=>{
    const sandyKidney = users[0].kidneys;
    const numOfKidney = sandyKidney.length;
    let healthyKidney = 0;
     
    for(let i=0;i<sandyKidney.length;i++){
        if(sandyKidney[i].healthy === true){
            healthyKidney++; 
        }
    }
    const unhealthyKidney = numOfKidney - healthyKidney;
    // we get what we wanted now its time for result
    res.json({ // we will send the result in json file 
        sandyKidney,
        numOfKidney,
        healthyKidney,
        unhealthyKidney,
        'lets see if this works':'hahaha',
        whatnow:'lets see',
        isitstilalid: 'letssee'
    })
})
app.listen(port,()=>{
    console.log("The server is live now");
});

// post provide another way of input which is much popular to query parameter
 app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({  
        healthy: isHealthy
    })
    res.json({
        msg:"done "
    })
 })

// app.put("/",(req,res)=>{})
// app.delete("/",(req,res)=>{})