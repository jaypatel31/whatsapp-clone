import Conversation from "../model/Conversation.js"

export const setConversation = async (req,res) =>{
    const {senderId,receiverId} = req.body
    try{
        
        const exist = await Conversation.findOne({members:{$all:[senderId,receiverId]}})

        if(exist){
            return res.status(201).json({message:"Conversation Already Exist"})
        }

        const newConversation = new Conversation({
            members:[senderId,receiverId]
        })

        await newConversation.save();
        return res.status(201).json({message:"new Conversation Added Successfully"})

    }catch(e){
        return res.status(500).json(e)
    }
}