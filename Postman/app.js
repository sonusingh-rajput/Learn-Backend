const express = require("express");

const app = express();

// Error handlers - Always writen for try and catch 
app.get("/", function (req, res, next) {
    try{
        res.send("Welcome to Postman");

    }
    catch(err){
        next(err)
    }
});

// Top Level Error(Server Will not Started) - for get - fet

// app.fet("/top-level-error", function(req, res, next){
//     res.send("Working")
// })

// Reference Error - HI is not a function

app.get("/reference" , function(req, res, next){
    try{
        res.send(hi + "Reference Error");

    }catch(err){
        next(err);
    }
})

// Error handlers

app.use((err, req, res, next) => {
  res.status(500).send("Interal Server Error " + (err.message));
});

app.listen(3000);
