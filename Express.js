const express = require('express')

const app = express()

const expressSession = require('express-session')

const cors = require('cors')

const cookieParser = require('cookie-parser')

/*Morgan Middleware
const morgan = require('morgan')

app.use(morgan('combined'))
*/

/*Express session configuration

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


/*Cookie 

app.use(cookieParser())
app.get("/check" , function(req, res, next){
    console.log(req.cookies.banned)
})
app.get("/banded" , function(req, res, next){
    res.cookie("banned" , "true");
    res.send("Banned!")
})
*/

/* Dynamic Routings
app.get("/profile/:name" , function(req,res,next){
    res.send(`${(req.params.name).toLocaleUpperCase()} Profile`)
})

app.get("/profile/:name/:age" , function(req,res,next){
    res.send(` My Name is ${req.params.name} my age is ${req.params.age}.`)
})

//Static Routings
app.get("/profile/ram" , function(req,res, next){
    res.send("Ram Profile")
})

app.get("/about" , function(req, res) {
    res.send("About For Express Server")
})

app.get('*' , function(req,res){
    res.send('Page Not Found')
})

*/

// Server Side Randring Using EJS

app.set('view engine' , 'ejs');
app.get("/" , function(req, res) {
    res.render("index")
})

app.get("/profile" , function(req, res) {
    res.render("profile")
})

app.listen(3000);