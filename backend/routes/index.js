const express=require("express")
const router=express.Router()
const userrouter=require("./user")
const transactionrouter=require("./transaction")
router.use("/user",userrouter)
router.use("/transaction",transactionrouter)


module.exports=router