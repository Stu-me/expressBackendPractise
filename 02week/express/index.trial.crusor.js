// Express demo: track a user's kidneys and expose simple APIs
// Program flow:
// 1) Boot Express and enable JSON body parsing
// 2) GET "/" → compute healthy/unhealthy kidney counts and return a summary
// 3) POST "/" → append a new kidney (healthy/unhealthy) from request body
// 4) Start server on the configured port
const users = [{
    name :"sandy",
    kidneys:[{
        healthy : true      
    }]
}];

const express = require("express");
const app = express();
let port = 3000;
// in get to provide input we use query parameter

// 1) Parse JSON bodies for POST requests
app.use(express.json());
// 2) GET / → return the kidney health summary for the first user
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
        unhealthyKidney
    })
})
// 3) POST / → add a kidney for the first user: { "isHealthy": boolean }
 app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({  
        healthy: isHealthy  
    })
    res.json({
        msg:"done "
    })
 })

// 4) Start the HTTP server
app.listen(port,()=>{
    console.log("The server is live now ");
});

// app.put("/",(req,res)=>{})
// app.delete("/",(req,res)=>{})

