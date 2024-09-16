const jwt=require("jsonwebtoken")
const secret=require("./config")

const auth_middleware=(req,res,next)=>{
    let auth=req.headers.authorization
    if(!auth || !auth.startsWith('Bearer')){
        return res.status(403).json({})

    }

let token=auth.split(' ')[1]

try{
    const decoded=jwt.verify(token,secret)
    req.userid=decoded.userid
    next()
}catch{
res.status(403).json({})
}

}

module.exports={auth_middleware}