const userdash = require("./userschema")
const bcrypt = require('bcrypt')  
const jwt = require('jsonwebtoken')



const createuser=async(req,res)=>{
    const {username,email,password}=req.body

    const exisitinguser=await userdash.findOne({email})
    if(exisitinguser){
        res.json('User exisist')
    }
    else{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);
        const newuser=await userdash.create({ 
            username,email,password:hashedPassword
        })
        res.json({
            id:newuser._id,
            username:newuser.username,
            email:newuser.email,
            password:newuser.password,
            Token:generatetocken(newuser._id) 
        })
    }
   
} 
const generatetocken=(id)=>{
    return jwt.sign({id},process.env.key,{expiresIn:"1d"})
}  

module.exports=createuser 