const userdash = require("./userschema")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const login =async (req,res)=>{
    const{email,password}=req.body

    const Newlogin = await userdash.findOne({email})

    if(Newlogin&&(await bcrypt.compare(password,Newlogin.password)))
    {
        res.json({
            message:'success',
            userId:Newlogin._id,
            token:tokengenarate(Newlogin._id)
        })
    }
    else{
        res.json("failed")
    }

}

const tokengenarate=(id)=>{
    return jwt.sign({id},process.env.key,{expiresIn:'1d'})
}



module.exports=login