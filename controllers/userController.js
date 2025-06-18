const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../model/userModel');

exports.signup=async(req,res)=>{
    try{const {name,email,password}=req.body;

     const existingUser=user.findOne({where:{email}})

     if(existingUser){
        return res.status(409).json({ success: false, msg: "User already exists" });
     }

        const hash=await bcrypt.hash(password,10)

        const user=await user.create({name,email,password:hash})
        return res.status(201).json({ success: true, user });
     }
     catch(error){
      return res.status(500).json({ success: false, msg: "Internal server error" });
    }
}
     
exports.login=async(req,res)=>{
    try{
    const { email, password } = req.body;
    const user = await user.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password)))

    return res.status(400).json({ message: 'Invalid credentials' });
    
    const token = jwt.sign({ id: user.id }, process.env.JWT_TOKEN);
    return res.json({ success: true, token});
    }
    catch(error){
    console.error(error);
    return res.status(500).json({ success: false, msg: "Internal server error" });
    }

}
