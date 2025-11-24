const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(req.method);
  console.log(req.url);
  next();
});
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/login",(req,res)=>{
    res.send("hi welcome to the page");
});
app.get('/about',(req,res)=>{
    res.send('welcome to about section ')
})
app.get('/about1',(req,res)=>{
    res.send(' you entered a secret chamber ')
})
app.get('/about2',(req,res)=>{
    res.send(' you took us too seriously buddy have a life ')
})

app.all("/{*splat}",(req,res)=>{
    
    // res.send("are pagal developer ye url exists nahi karta ")
    res.send({
        status:404,
        message:"url not exist",
        method:req.method
    })
})

// ######################### By Dinesh ##########################

// start

// app.get('*', (req, res) => {
//   let url = req.url;
//   switch (url) {
//     case "/about":
//       res.send("welcome to about section ");
//       break;
//     case "/login":
//       res.send("welcome to login section ");
//       break;
//     case "/about1":
//       res.send("welcome to about1 section ");
//       break;

//     default:
//       res.send(`${url} is not valid 😢`);
//   }
// });

// end

// app.use((req, res, next) => {
//   // console.log(err);
//   // res.send(`${err} for ${req.url} -- enter a valid url`)
//   // by Dinesh
//   //  console.log(req);
// });

app.listen(3000, () => {
  console.log("server started");
});
