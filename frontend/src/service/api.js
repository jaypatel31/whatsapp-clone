import axios from "axios"

const URL = 'http://localhost:5000';

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
        }).then(response=>{
            console.log(response)
        }).catch(e=>{
            console.log(e)
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