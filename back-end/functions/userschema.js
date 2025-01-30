const mongoose=require('mongoose')


const userschema=mongoose.Schema({
    username:{type:String},
    email:{type:String},
    password:{type:String}
})


const userdash=mongoose.model("userdash",userschema)


module.exports=userdash