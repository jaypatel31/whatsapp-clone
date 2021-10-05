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