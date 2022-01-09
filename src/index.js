// INITIAL CONFIG
const express = require('express')
const app = express()
//Middleware
app.use(
    express.urlencoded({
        extended:true,
    }),
)
app.use(express.json())
//Routes
require('./routes/router')(app)
//Connections
app.listen(3000, ()=> console.log('API ON'))