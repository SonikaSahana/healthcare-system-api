const express=require('express')
const router=express.Router();
const auth=require('../middleware/auth')
const userController=require('../controllers/userController')
const user=require('../model/userModel')

router.post('/createUser' ,auth,userController.signup)


router.post('/login' ,auth,userController.login)

module.exports=router;