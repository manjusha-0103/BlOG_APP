const User = require("../models/user")
const Data = require("../models/blog")
const asyncHandler = require('express-async-handler');

const jwt = require('jsonwebtoken')
var bcrypt = require('bcryptjs');

const JWT_SECRET ="hhakhkgvbf5768xmnbshgsig"

const registerUser = asyncHandler(async(req,res)=>{
    try{
        const {email,username, password} = req.body
        if(!email || !username ||!password){
            res.status(400).send({
                success : false,
                msg : "required all fields"
            })
        }
        else{
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password,salt)
            const isuser = await User.findOne({username:username,email:email,password:password})
            if(isuser){
                send.status(200).send({
                    success: true,
                    msg : "User already exists"
                })
            }
            else{
                const user = await User.create({
                    username:username,
                    email : email,
                    password : hashedPassword
                })
                if(user) {
                    res.status(201).send({
                        success : true,
                        msg : "You have registred succesfully",
                        data : {
                            _id : user._id,
                            username: user.username,
                            email : user.email,
                            token : generateToken(user._id)
                        }
                    })
                }
                else{
                    res.status(400);
                    throw new Error('Invalid user data');
                }
            }
        }
    }
    catch(error){
        console.log(error)
    }
})

const generateToken =(id)=>{
    try{
        return jwt.sign({id},JWT_SECRET,{
            expiresIn : '30d',
        })
    }
    catch(error){
        console.log(error)
    }
}

const loginUser = asyncHandler(async(req,res)=>{
    try{
        console.log(req.body)
        const {email,password} = req.body;
        if(!email||!password){
            res.status(400).status({
                success : false,
                msg : "required all fields"
            })
        }
        else{
            const isuser = await User.findOne({email:email})
            if(isuser && (await bcrypt.compare(password,isuser.password))){
                res.status(201).send({
                    success : true,
                    msg :"You have loggedin successfully",
                    _id : isuser._id,
                    username : isuser.username,
                    email : isuser.email,
                    token : generateToken(isuser._id)
                    
                })
            }
            else{
                res.status(200).send({
                    success : false,
                    msg : `You haven't created the account with this ${email} mail ID`
                })
            }
        }

    }catch(error){
        console.log(error)
    }
});

const resetPassword = asyncHandler(async(req,res)=>{
    try{

    }
    catch(error){
        console.log(error)
    }
});



module.exports={
    registerUser,
    loginUser,
    resetPassword,
    
}
