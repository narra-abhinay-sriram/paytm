const express=require("express")
const router=express.Router()
const z=require("zod")
const {user,transaction}=require("../db")
const jwt=require("jsonwebtoken")
const secret=require("../config")
const {auth_middleware}=require("../middleware")
router.use(express.json())
const signupschema=z.object({
    username:z.string().email(),
    firstname:z.string(),
    lastname:z.string(),
    password:z.string().min(8)

})
router.post("/signup",async(req,res)=>{
    const username=req.body.username
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const password=req.body.password

    const validation=signupschema.safeParse({username:username,
        firstname:firstname,
        lastname:lastname,
    password:password})
   
    if(!validation.success){
     return   res.json({
            message:"incorrect inputs"
        })
    }

    const resp=await user.findOne({username:req.body.username})
    if(resp){
     return   res.json({
            message:"user/email already exits"
        })

    }

    const created=await user.create({username:username,
        firstname:firstname,
        lastname:lastname,
    password:password})
await transaction.create({userid:created._id,
    balance:Math.floor(Math.random()*100000)

})
    const token=jwt.sign({userid:created._id},secret)
    res.json({
        token:token,
        message:"user created successfully"
    })
})
const signinschema=z.object({
    username:z.string().email(),
    password:z.string().min(8)
})

router.post("/signin",async(req,res)=>{
    const body=req.body
    const {success}=signinschema.safeParse(body)
if(!success)
{
    return req.statusCode(403).json({
        message:"invalid inputs"
    })
}

const User=await user.findOne({username:body.username,password:body.password})
if(!User){
    return res.status(403).json({message:"user doesnt exist"})
}

const token=jwt.sign({userid:User._id},secret)
res.json({token})


})

const updateschema=z.object({
    password:z.string().min(8).optional(),
    firstname:z.string().optional(),
    lastname:z.string().optional()

})

router.put("/",auth_middleware,async(req,res)=>{
    const body=req.body
    const {success}=updateschema.safeParse(body)
    if(!success)
    {
        return res.json({
            message:"invalid inputs"
        })
    }
await user.updateOne(body,{id:req.userid})
res.json({
    message:"updated successfully"
})


})

router.get("/bulk",auth_middleware,async(req,res)=>{

    const filter=req.query.filter || ""

    const users= await user.find({$or:[
        {firstname:{$regex:filter}},
        {lastname:{$regex:filter}}
    ]})


    res.json({
        users:users.map(user=>({firstname:user.firstname,
            lastname:user.lastname,
            username:user.username,
            _id:user._id
        }))
    })
})

module.exports=router