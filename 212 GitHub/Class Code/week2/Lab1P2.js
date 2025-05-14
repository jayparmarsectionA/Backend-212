/*
Create -> post
Read -> get
Update -> put
Delete -> delete */

import http from "http";
import fs from "fs"; // this lets us use CRUD on files/folders and others

const server = http.createServer((req, res)=> {
    //do something
    if (req.url === "/"){
        res.end("Hello World");
    }
    else if (req.url === "/about"){
        res.end("Hello to the about page");
    }
    else if (req.url === "/contact"){
        const data = fs.readFileSync("./html/contact.html")
        res.end(data);
    }
    else if (req.url === "/methods"){
        if(req.method === "POST"){
            res.end("Post method running");
        }
        
    }
    else {
        res.end("404 page not found")
    }
});

server.listen(8000, ()=> {
    console.log(`http://localhost:8000`)
})