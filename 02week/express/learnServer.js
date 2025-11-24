    // first we will recreate all the function for server but with other ideas

    // first we make in memory storage
    // first we created an array of objects as named user 
    // now inside that we have land that we want to have multiple properties than array of object is best 
    const user = [{
        name:"sundram",
        land: [
            {place:"Ramgarh"},
            {place:"Ghato"},
            {place:"hazaribagh"},
            {place:"hazaribagh"},
            {place:"kolkata"},
            {place:"kolkata"},
            {place:"bengaluru"},
            {place:"bengaluru"},
            {place:"Ghato"},
        ],
        farmHouse:[
            {location:"jinghariya"},
            {location:"rawalpindi"},
            {location:"west delhi"},
            {location:"rohini sector32"},
            {location:"jinghariya"},
        ],
        hobby: ["shooting (terrorist)","standup","MMA"] 
    },
    { // user two 
        name:"Rakesh",
        land:"bokaro",
        farmhouse:0
    }];
    // at this point we load express in the file 
    const express = require("express");
    const app = express(); // booted express
    let port = 3005;
    app.use(express.json()); // json parsing done 
  
    // now we are taking response and giving result to the user or say on the webpage 
    app.get("/",(req,res)=>{ // req means what user gives and response is what we will give
        const user1 = user[0].land  // now we have user1 = sundram and his lands
        // now user1 is an object with all the values of sundram
        const size = user1.length;  
        let fullOwnership = 0;
        for(let i=0;i<size;i++){
            if(user1[i].place === "Ramgarh") fullOwnership++;
        }
        res.json({ // the response we will send to the browser in the format of json 
            fullOwnership,
            size
        })
    });
    // now we will add stuffs
    app.post("/",(req,res)=>{
        const newLocation = req.body.newLocation; // here newLocation is local variable but
                        // to make more readable we just name the same as the newlocation (the variable we will store in )
        user[0].land.push({
            place: newLocation
        })
        res.json({ // out put as json after dong the response storage
            msg:"new place added in the loaction"
        })
    });

    app.delete("/",(req,res)=>{
        const removeLocation = req.body.removeLocation; 
        user[0].land = user[0].land.filter((landObj)=>landObj.place !== removeLocation) // new values added to land 
        res.json({
            msg:`${removeLocation} delted if there where any values `,
            updateLands:user[0].land
        })
    })

    // opening the port
    app.listen(port,()=>{
        console.log("The server is live"); 
        
    })