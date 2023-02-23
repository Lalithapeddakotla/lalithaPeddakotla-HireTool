const express = require("express")
const employee = require("../models/contacts")

const router = express.Router();
//here we create our Route


router.post("/contacts", async (req,res)=>{
    console.log(req.body)
    const data = new employee(req.body)
    const result = await data.save()

    if(!result){
        res.json({
            status:"FAILED",
            message:"employee not register succesfully"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message:"employee register successfully",
            data:result
        })
    }
})
//get records
router.get("/contacts", async (req,res)=>{
    try{
        const result = await employee.find()
        if(!result){
        res.json({
            status:"FAILED",
            message:"not found record"
        })
    }
    else{
        res.json({
            status:"SUCCESS",
            message:"records found",
            data:result
        })
    }

    }
    catch{
        console.log(e)
    }

})
//get single record
router.get("/contacts/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const result = await employee.findById(_id);
        if(!result){
            res.json({
            status:"FAILED",
            message:"records not found on this ID"
        })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"records found",
                data:result
            })
        }
    }
    catch(e){
        res.send(e)
    }
    
})
//update records
router.put("/contacts/:id", async (req,res)=>{
    
        try{
            const _id = req.params.id;
            const result = await employee.findByIdAndUpdate(_id,req.body,{new:true});
            if(!result){
                res.json({
                status:"FAILED",
                message:"records is updated successfully"
            })
            }
            else{
                res.json({
                    status:"SUCCESS",
                    message:"records not updated successfully",
                    data:result
                })
            }
        }
        catch(e){
            res.send(e)
        }
        
 
    
})
//Delete records
router.delete("/contacts/:id", async (req,res)=>{
    try{
        const _id = req.params.id;
        const result = await employee.findByIdAndDelete(_id);
        if(!result){
            res.json({
            status:"FAILED",
            message:"records is Delete successfully"
        })
        }
        else{
            res.json({
                status:"SUCCESS",
                message:"records not Delete successfully",
                data:result
            })
        }
    }
    catch(e){
        res.send(e)
    }

    
     
    })
    
    
    

module.exports = router