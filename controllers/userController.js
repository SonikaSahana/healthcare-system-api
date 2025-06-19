const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

exports.register=async(req,res)=>{
    try{const {name,email,password}=req.body;

     const existingUser=await User.findOne({where:{email}})
      console.log(existingUser)
     if(existingUser){
        return res.status(409).json({ success: false, msg: "User already exists" });
        
     }
        
        const hash=await bcrypt.hash(password,10)

        const user=await User.create({name,email,password:hash})
         console.log("Print3",user)
        return res.status(201).json({ success: true, user });
        
     }
     catch(error){
      return res.status(500).json({ success: false, msg: "Internal server error" });
      
    }
}
     
exports.login=async(req,res)=>{
    try{
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(400).json({ success: false, msg: 'Invalid credentials' });

    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN);
    console.log(token,"this is token")
    return res.json({ success: true, token});
    }
    catch(error){
    console.error(error);
    return res.status(500).json({ success: false, msg: "Internal server error" });
    }

}
