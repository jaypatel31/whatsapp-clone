import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true 
    },
    name:{
        type:String,
        required:true 
    }
})

const User = mongoose.model('user',userSchema)

export default User