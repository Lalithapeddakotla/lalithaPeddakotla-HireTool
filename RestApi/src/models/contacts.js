const mongoose = require('mongoose')
const validator = require('validator')
const contactsSchema = new mongoose.Schema({
    name : {
        type:String,
        required: true
    },
    email : {
        type:String,
        required: true,
        unique:[true, "this email is already exist"],
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("this email is not valid")
            }
        }
    },
    primaryskills : {
        type:String,
        required: true
    },
    experience : {
        type:String,
        required: true
    },
    image:{
        type: String
    }
    

})
//const employee = new mongoose.model('employee, employeeSchema');
module.exports = mongoose.model('contacts', contactsSchema);