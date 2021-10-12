import axios from "axios"

const URL = `https://whatsappclone31.herokuapp.com/`;

export const addUser = async ({user_id,imageUrl,email,name}) =>{
    try{
        return await axios.post(`${URL}/addUser`,{
            user_id,
            imageUrl,
            email,
            name
        },{
            headers:{
                'Content-Type':"application/json"
            }
        })
    }catch(e){
        console.log('Error While calling Add User',e)
    }
    
}

export const getUsers = async () =>{
    try{
        let response = await axios.get(`${URL}/getUsers`)
        return response.data
    }catch(e){
        console.log('Error While calling Get User',e)
    }
    
}

export const setConversation = async (data) => {
    try{
        await axios.post(`${URL}/conversation`,data,{
            headers:{
                'Content-Type':"application/json"
            }
        })
    }catch(e){
        console.log('Error While calling Set User',e)
    }
}


export const getConversation = async (data) =>{
    try{
        let response = await axios.post(`${URL}/conversation/get`,data,{
            headers:{
                'Content-Type':"application/json"
            }
        })
        return response.data
    }catch(e){
        console.log('Error While calling Get Conversation',e)
    }
}

export const newMessage = async (data) =>{
    try{
        return axios.post(`${URL}/message/add`,data,{
            headers:{
                'Content-Type':"application/json"
            }
        })
    }catch(e){
        console.log('Error While calling New Message',e)
    }
}

export const getMessages = async (data) =>{
    try{
        return axios.get(`${URL}/message/get/${data}`)
    }catch(e){
        console.log('Error While calling get Message',e)
    }
}

export const changeName = async (data) => {
    try{
        return axios.post(`${URL}/user/nameChange`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    }catch(e){
        console.log('Error While change Name',e)
    }
}

export const updateProfilePic = async (data) =>{
    try{
        return axios.post(`${URL}/user/updatePic`,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
    }catch(e){
        console.log('Error While Updating Pic',e)
    }
}