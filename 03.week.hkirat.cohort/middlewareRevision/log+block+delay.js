const express =require('express');
const app = express();

// ------  logger ----- 

function loggerMiddleware(req,res,next){
    const userName = req.query.userName;
    const password = req.query.password;
    const now = new Date();
    console.log(`
        date -- ${now}
        method -- ${req.method}
        url == ${req.url}
        `);
    if(!(userName == 'sundram' && password == 'hola') ){
        return res.send('Its a wrong answer');
    }
    res.send("<h1> Your credentials are correct <h1>")
    next();
}


// below space for middlewares
app.use(loggerMiddleware);
// main function 
app.get('/author',(req,res)=>{
    res.send('welcome home author sahab');
})

app.listen(8080,()=>{
    console.log('server started');
})
