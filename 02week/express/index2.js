const users = [{
    name :"sandy",
    kidneys:[{
         
    }]
}];


import expr from "express";
// const app1 =  require("./tem.cjs");
import ap1 from "./tem.js";
const app = expr();
let port = 3000;

ap1()
// app2()
// app3()


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

    res.json({ 
        sandyKidney,
        numOfKidney,
        healthyKidney,
        unhealthyKidney
    })
})
app.listen(port,()=>{
    console.log("The server is live now ");
});


 app.post("/",(req,res)=>{
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({  
        healthy: isHealthy
    })
    console.log(users);
    res.json({
        msg:"done "
    })
 })

app.put("/",(req,res)=>{
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({});
})
// this is meant to delete the record 
app.delete("/",(req,res)=>{
    if(users[0].kidneys.length === 0){
        res.sendStatus(411);
    }
    const newKidneys = [];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){// if true then push else that record  will be deleted 
            newKidneys.push({
                healthy:true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg:"its done boy"})
})