const express = require('express');

const app = express();

app.get("/", function(req,res,next){
    res.send("Welcome to Postman")
})
app.post("/", function(req,res,next){
    res.send("Welcome to Postman")
})
app.patch("/", function(req,res,next){
    res.send("Welcome to Postman")
})
app.delete("/", function(req,res,next){
    res.send("Welcome to Postman")
})

app.listen(3000);