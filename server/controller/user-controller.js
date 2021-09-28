import User from "../model/User.js"

export const addUser = async (req,res)=>{
    const {user_id,imageUrl,email,name} = req.body

    if(!user_id || !imageUrl || !email || !name){
        return res.status(422).json({error:"Please Add the field"})
    }
    try{
        let exist = await User.findOne({user_id})

        if(exist){
            return res.status(200).json({message:"User Already Exist"})
        }
        const newUser = new User({user_id,imageUrl,email,name})
        await newUser.save();
        return res.status(201).json({message:"User Saved Successfully"})
    }catch(e){
        return res.status(500).json({error:e})
    }
    

}