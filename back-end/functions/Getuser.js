const userdash = require("./userschema")


const getuser =async(req ,res)=>{
    const _id=req.params.id
    const Getuser= await userdash.findById(_id)
    res.json(Getuser)
}

module.exports=getuser