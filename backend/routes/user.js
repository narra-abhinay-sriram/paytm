const express=require("express")
const router=express.Router()
const z=require("zod")
const {user}=require("../db")
const jwt=require("jsonwebtoken")
const secret=require("../config")
const signupschema=z.object({
    username:z.string().email(),
    firstname:z.string(),
    lastname:z.string(),
    password:z.string().min(8)

})
router.post("/Signup",async(req,res)=>{

    const body=req.body
    const {success}=signupschema.safeParse(body)
    if(!success){
     return   res.json({
            message:"incorrect inputs username is email"
        })
    }

    const resp=await user.findOne({username:req.body.username})
    if(resp._id){
     return   res.json({
            message:"user/email already exits"
        })

    }

    const created=await user.create(body)

    const token=jwt.sign({userid:created._id},secret)
    res.json({
        token:token,
        message:"user created successfully"
    })
})

module.exports=router