import express from "express";

const app = express();

const logger =(req, res, next)=>{
    console.log(req.url)
    console.log(req.method)
    console.log(Date())
    next(); 
}

const newMiddleware =(req, res, next)=>{
    console.log("Hello")
    next();
}

app.use(logger); //through out the app

app.get("/" , newMiddleware, logger(req),  (req,res)=>{ //logger for specific routing
   
    res.send("Welcome to server")
});

app.get("/about" , (req,res)=>{
   
    res.send("Welcome to server")
});

app.get("/data" , (req,res)=>{
   
    res.send("Welcome to server")
});

app.listen(3000)