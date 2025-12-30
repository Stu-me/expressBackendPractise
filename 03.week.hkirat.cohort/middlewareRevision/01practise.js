// We’re doing Q1 – Logger + Blocker + Delay middleware.

const express = require('express');
const app = express();

function auth(req,res,next){
    const name = req.query.userName;
    const password = req.query.password;
    if(name != 'doctor')return res.send("ENTER A VALID USERNAME");
    else if(password != 'secret') return res.send('ENTER THE CORRECT PASSWORD');
    next();
}
function costValidator(req,res,next){
    const leave = req.params.leave;
    if(leave>50)return res.send('CHEIF YOUR HOLIDAYS ARE OVER - GET YOU ASS BACK TO WORK ');
    next();
}

// left for middlewares 
app.get('/test',auth,(req,res)=>{
    res.send('WELCOME DOCTOR SAHAB -- KA HAAL CHAAL');
})
app.get('/test/:leave',costValidator,(req,res)=>{
    res.send(`you have been granted the leave -- left leave = ${50-req.params.leave}`)
})
app.listen(8080,()=>{
    console.log('server started ');
})