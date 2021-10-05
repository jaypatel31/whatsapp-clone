import  mongoose  from "mongoose"

const MessageSchema = new mongoose.Schema({
    conversationId:{
        type:String,
        required:true
    },
    sender:{
        type:String,
        required:true
    },
    text:{
        type:String,
        required:true
    }
},{
    timestamp:true
})

const Message = mongoose.model('Message',MessageSchema)

export default Message