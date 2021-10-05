import React,{useContext,useEffect, useState} from 'react'
import {Box} from "@material-ui/core"

import ChatHeader from "./ChatHeader"
import Messages from "./Messages"
import {UserContext} from '../../constants/UserProvider'
import { getConversation } from '../../service/api'
import {AccountContext} from "../../context/AccountProvider"

const Chat = () => {
    const {account} = useContext(AccountContext)
    const {person} = useContext(UserContext)

    const [conversation, setConversation] = useState({})

    useEffect(() => {
        
        const getConversationDetails = async () =>{
            let data = await getConversation({senderId:account.user_id,receiverId:person.user_id})
            setConversation(data)
        }
        getConversationDetails()
    }, [person.user_id])

    return (
        <Box>
            <ChatHeader/>
            <Messages conversation={conversation}/>
        </Box>
    )
}

export default Chat
