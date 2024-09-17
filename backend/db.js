let mongoose =require("mongoose")
mongoose.connect("mongodb+srv://121sriramreddy:Rohith%404k@cluster0.cdne5.mongodb.net/paytm")
const UserSchema=new mongoose.Schema({
    firstname:{
        required:true,
        type:String,
        
       
    },
    lastname:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        unique:true,
        
        
    },
    password:{
        type:String,
        minLength:8,
        required:true
    }
})

const user=mongoose.model('User',UserSchema)
const transschema=new mongoose.Schema({
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:user,
        required:true

    },
   balance:{
    type:Number,
    required:true
   }
})
const transaction=mongoose.model('transaction',transschema)

module.exports={
    user,transaction
}