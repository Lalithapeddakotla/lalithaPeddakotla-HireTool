const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://lalitha:7744073080@cluster0.qfgir5m.mongodb.net/test")
.then(()=>{
    console.log("connection is success")
}).catch((err)=>{
    console.log("connection not setup")
    console.log(err)
})  