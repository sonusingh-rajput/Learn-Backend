const express = require('express')

const app = express()

app.get("/" , function(req, res) {
    res.send("Welcome to Express Server")
})

app.listen(3000);