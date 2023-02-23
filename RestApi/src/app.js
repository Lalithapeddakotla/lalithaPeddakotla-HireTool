const express = require('express');
const app = express()
const cors = require ("cors")
const corsOptions ={
    origin:'*', 
    credentials:true,           
    optionSuccessStatus:200,
 }
 
 app.use(cors(corsOptions))
const port = process.env.PORT || 5000
require("./DBconnection/conn")
const employeeRoute = require("./Routers/contactsRoute")
app.use(express.json())
app.use(employeeRoute)
//app.use(cors())

app.listen(port, ()=>{
    console.log('connection is setup at Port ${port}')
})