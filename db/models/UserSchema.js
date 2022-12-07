import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    typeofuser:{
        type:String,
        required:true
    },
    logo:{
        type:String,
    },
});

module.exports = mongoose.model('User', userSchema);


