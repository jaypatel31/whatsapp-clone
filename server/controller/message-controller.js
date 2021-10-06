import Message from "../model/Message.js"

export const newMessage = async (req,res)=>{
   
    const message = new Message(req.body)
    try{
        await message.save()
        return res.status(201).json("Message Saved Successfully")
    }catch(e){
        return res.status(500).json(e)
    }
}

export const getMessages = async (req,res)=>{
    try{
        let messages = await Message.find({conversationId:req.params.id})
        return res.status(200).json(messages)
    }catch(e){
        return res.status(500).json(e)
    }
}