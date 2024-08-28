// ++++++++++++++++++Creating a Server Using Nodes +++++++++++++++++

// const http = require("node:http");

// let server = http.createServer(function(req,res){
//     res.end("Hello, world!");
// })

// server.listen(3000);

// ++++++++++++++++++ (npm i nodemon --save-dev) Creating a Server Using Nodemon (npx nodeman file name start Server) +++++++++++++++++

// const http = require("node:http");

// let server = http.createServer((req,res) => {
// res.end("welcome to nodemon!");
// })

// server.listen(3000);


// ++++++++++++++++++ HTTP Routings +++++++++++++++++

const http = require("node:http");

const server = http.createServer(function(req,res){
    if(req.url === "/") {
        res.end("Hello, world!");

    }else if(req.url === "/contact"){
        res.end("Contact us at: 123-456-7890");
    }
    
    else {
        res.end("Page not found!");
    }
})

server.listen(3000);