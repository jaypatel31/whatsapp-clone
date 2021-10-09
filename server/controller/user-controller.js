import User from "../model/User.js"
import mongoose from 'mongoose';

export const addUser = async (req,res)=>{
    const {user_id,imageUrl,email,name} = req.body

    if(!user_id || !imageUrl || !email || !name){
        return res.status(422).json({error:"Please Add the field"})
    }
    try{
        let exist = await User.findOne({user_id})

        if(exist){
            return res.status(200).json({message:"User Already Exist",exist})
        }
        const newUser = new User({user_id,imageUrl,email,name})
        await newUser.save();
        return res.status(201).json({message:"User Saved Successfully"})
    }catch(e){
        return res.status(500).json({error:e})
    }
}

export const getUsers = async (req,res) =>{
    try{
        const users = await User.find({});
        return res.status(201).json(users)
    }catch(e){
        return res.status(500).json({error:e})
    }
}

export const nameChange = async (req,res) => {
    try{
        await User.findOneAndUpdate({user_id:req.body.userId},{name:req.body.name})
        return res.status(201).json({message:"Name Changed Successfully"})

    }catch(e){
        return res.status(500).json({error:e})
    }
}

export const updatePic = async (req,res) =>{
    try{
        await User.findOneAndUpdate({user_id:req.body.userId},{imageUrl:req.body.pic})
        return res.status(201).json({message:"Pic Updated Successfully"})
    }catch(e){
        return res.status(500).json({error:e})
    }
}