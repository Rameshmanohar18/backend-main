const mongoose = require('mongoose');

const Userschema=new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
   


})

module.exports=Usermodel=mongoose.model('User',Userschema)












