import mongoose from "mongoose";

const Connection = async (MONGO_URI) =>{
    const URL = MONGO_URI
    try{
        await mongoose.connect(URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log("Database Connected Successfully")
    }catch(e){
        console.log("Error While connecting mongodb",e)
    }
    
}

export default Connection