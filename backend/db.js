let mongoose =require("mongoose")
mongoose.connect("mongodb+srv://121sriramreddy:Rohith%404k@cluster0.cdne5.mongodb.net/paytm")
const UserSchema=new mongoose.Schema({
    firstname:{
        required:true,
        type:String,
        
        minLength:3,
       
    },
    lastname:{
        type:String,
        required:true,
        minLength:4
    },
    username:{
        type:String,
        unique:true,
        minLength:3,
        maxLength:30,
        
    },
    passsword:{
        type:String,
        minLength:8
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