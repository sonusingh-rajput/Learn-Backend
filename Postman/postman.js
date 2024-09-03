const express = require('express');

const app = express();

let data = [1, 2, 3, 4, 5];
app.get("/" , (req,res,next) =>{
    try{
        res.send("Welcome to the Postman")
    }catch(err){
        next(err)
    }
})

app.get("/data" , function(req,res,next){
    try{
        res.send(data)
    }catch(err){
        next(err)
    }
})

app.post("/data/:number" , function(req,res,next){
    try{
        // res.send("Route is Working....");
        data.push(parseInt(req.params.number));
        res.send(data)
    }catch(err){
        next(err)
    }
})



// Error handling

app.use((err, req, res, next) => {
    res.status(500).send("Internal Server Error " + err.message)
})

app.listen(3000);