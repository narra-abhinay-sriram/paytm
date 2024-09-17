const express=require("express")
const mongoose=require("mongoose")

const {transaction}=require("../db")
const {auth_middleware}=require("../middleware")

const router=express.Router()
router.get("/balance",auth_middleware,async(req,res)=>{

    const resp= await transaction.findOne({userid:req.userid})
    if(resp){
     return   res.json({
            balance:resp.balance
        })
    }else return res.json({

        message:"invalid"
    })
})
router.post("/transfer",auth_middleware,async(req,res)=>{


    const session= await mongoose.startSession()
     session.startTransaction()

     const account=await transaction.findOne({userid:req.userid}).session(session)
     if(account.balance<req.body.amount)
     {
      await   session.abortTransaction()
        return res.json({message:"insufficient balance"})
     }
     const receiver=await transaction.findOne({userid:req.body.to}).session(session)
     if(!receiver){
     await    session.abortTransaction()
       return res.json({
            message:"user not found"
        })
     }
     await transaction.updateOne({userid:req.userid},{$inc:{balance:-req.body.amount}}).session(session)
     await transaction.updateOne({userid:req.body.to},{$inc:{balance:req.body.amount}}).session(session)
     await session.commitTransaction()
     
     res.json({
        message:"transfer successfull"
     })
})

module.exports=router