const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const nodemailer = require('nodemailer')
const twilio = require('twilio')
const jwt = require('jsonwebtoken')
const secretKey = "apjabdulkalam@545"
const cors = require('cors')
app.use(cors())
app.use(express.json())
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
require('dotenv').config()
dotenv.config()
const User = require('./models/User')
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID,process.env.TWILIO_AUTH_TOKEN)
mongoose.connect('mongodb://localhost:27017/formate',{
    useNewUrlParser: true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("mongodb Connect")
})
.catch((error)=>{
    console.log("mongodb disconnect")
})



app.post('/register',async (req,res)=>{
    const{fullname,email,phoneNumber,password}= req.body
    const existUser = await User.findOne({email})
    
    if(existUser){
        return res.send({message:"the register exist"})
    }
    const hashPassword = await bcrypt.hash(password,10)
    const otp = Math.floor(100000+Math.random()*900000).toString()

    try{
        const message = await client.messages.create({
            body:`the send otp ${otp}`,
            from:process.env.TWILIO_FROM_NUMBER,
            to:phoneNumber
        })
        console.log("the send otp",message.sid)
    }catch(error){
        console.log("the show error",error.message)
    }

    const auth = nodemailer.createTransport({
        service:"gmail",
        secure:true,
        port:465,
        auth:{
            user:"chauhanavinash36869@gmail.com",
            pass:"aymc tnsx enkk gxvi"
        }
    })
    const receiver={
        from:"chauhanavinash36869@gmail.com",
        to:email,
        subject:"the send otp",
        text:`the send otp ${otp}`
    }
    auth.sendMail(receiver,(error,errorResponse)=>{
        if(error){
            console.log("show error")
        }else{
            console.log(`the send otp ${otp}`)
        }
    })


   const newUser = new User({
    fullname,
    email,
    phoneNumber,
    otp,
    password: hashPassword
});

await newUser.save();

    res.send({message:"the registration successful"})

})

app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ message: "User not found", success: false });
    }

    if (user.otp === otp) {
      return res.json({ message: "OTP verified successfully", success: true });
    } else {
      return res.json({ message: "Invalid OTP", success: false });
    }
  } catch (error) {
    res.json({ message: "Internal server error", success: false });
  }
});


app.post('/login',async (req,res)=>{
    const{email,password}= req.body 
    const user = await User.findOne({email})
    if(!user){
        return res.json({message:"the user not found"})
    }
    const isValidPassword= await bcrypt.compare(password,user.password)
    if(!isValidPassword){
        return res.send({message:"user is creditional"})
    }
    const token = jwt.sign({fullname:user.fullname,email:user.email,phoneNumber:user.phoneNumber},secretKey,{expiresIn:"1h"})
    res.send({message:"login successful",token})
})

function verifyToken(req,res,next){
    const authHeader = req.headers.authorization 
    if(!authHeader||!authHeader.startsWith("Bearer "))
        return res.json({message:"token required"})
    const token = authHeader.split(' ')[1]
    jwt.verify(token,secretKey,(error,decode)=>{
        if(error){
            res.send({message:"invalid token"})
        }
        req.user = decode 
        next()
    })
}

app.get("/profile",verifyToken,(req,res)=>{
    res.send({message:"welcome to our profile",user:req.user})
})

app.listen(4000,()=>{
    console.log("the port run 4000")
}) 