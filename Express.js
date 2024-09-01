const express = require('express')

const app = express()

const expressSession = require('express-session')

const cors = require('cors')

/*

Express session configuration

app.use(expressSession({
    secret : "random stuff",
    resave: false,
    saveUninitialized: false
}))

app.get("/create" , function(req, res , next){
    req.session.polo = true;
    res.send("Done")
})

app.get("/checks" , function(req, res, next){
    console.log(req.session.polo)
})

*/

/*CROS Enabled

app.get("/shareddata" , cors() , function(req, res, next){
    res.send("CROS Enabled")
})

*/


// Use Middleware always use for app.use(middleware)

// app.use(function(req,res,next){
//     console.log("Hello world!")
//     next();
// })



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