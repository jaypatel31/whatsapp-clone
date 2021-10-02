import React,{useContext} from 'react'
import {Box} from "@material-ui/core"

import ChatHeader from "./ChatHeader"
import Messages from "./Messages"
import Footer from "./Footer"

const Chat = () => {
    return (
        <Box>
            <ChatHeader/>
            <Messages/>
            <Footer/>
        </Box>
    )
}

export default Chat
