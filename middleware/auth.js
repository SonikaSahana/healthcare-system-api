const jwt=require('jsonwebtoken')
require ('dotenv').config();

const auth=async(req,res,next)=>{
    try{
      const token=req.headers['auth-token']
      console.log(token)

      const data=jwt.verify(token,process.env.JWT_TOKEN)
      console.log(data)

      const user=await user.findByPk(data.id)
      req.user=user;
      next()
    }
   catch(error){
     return res.status(500).json({success : false , msg : "Internal server error"})
   }
}

module.exports=auth;