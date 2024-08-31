const express = require('express')

const app = express()

// Use Middleware always use for app.use(middleware)

app.use(function(req,res,next){
    console.log("Hello world!")
    next();
})



app.get("/" , function(req, res) {
    res.send("Welcome to Express Server")
})
app.get("/about" , function(req, res) {
    res.send("About For Express Server")
})

app.get('*' , function(req,res){
    res.send('Page Not Found')
})
app.listen(3000);