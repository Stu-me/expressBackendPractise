const express = require('express');
const app = express();

app.get('/login',(req,res)=>{
    const userName = req.query.name;
    const category = req.query.category;
    if((userName === 'sundram') && category === 'bca'){
        res.send(`<h1> You are logged in  <h1>`)
    }
    res.send('<h1 style = "color:blue;font-family: "Times New Roman", Times, serif> check the password <h2>')
});
app.get('/patientInfo',(req,res)=>{
    res.send('their are no patient')
});
app.get('/secrets',(req,res)=>{
    res.send('thier are no secrets to it ')
});
app.get('/tips',(req,res)=>{
    res.send('learn as fast as you can speed up the process')
});

app.listen(8080,()=>{
    // it starts the server and listen request after listen no code is run 
    console.log("server is live");
})