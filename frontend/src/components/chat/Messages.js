import React,{useState,useContext, useEffect} from 'react'
import { Box, makeStyles } from '@material-ui/core'
import Footer from "./Footer"

import { AccountContext } from '../../context/AccountProvider'
import { newMessage } from '../../service/api'
import { getMessages } from '../../service/api'
import Message from './Message'

const useStyles = makeStyles({
    wrapper:{
        backgroundImage:`url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'})`,
        backgroundSize:'50%'
    },
    component:{
        height:'78vh'
    },
    container:{
        padding:"1px 80px"
    }
}) 

const Messages = ({conversation}) => {

    const [value, setValue] = useState("")
    const {account} = useContext(AccountContext)
    const classes = useStyles()
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const getMessageDeatils = async () =>{
            let response  = await getMessages(conversation._id)
            setMessages(response.data)
        }
        getMessageDeatils()
    }, [conversation?._id])

    const sendText = async (e) =>{
        let code = e.keyCode || e.which
        if(!value){
            return     
        }
        if (code===13){
            let message = {
                sender:account.user_id,
                conversationId:conversation._id,
                text:value
            }

            await newMessage(message)
            setValue('')
        }
    }

    return (
        <Box className={classes.wrapper}>
            <Box className={classes.component}>
                {
                    messages && messages.map((message,index)=>{
                        return (
                            <Box key={index} className={classes.container}>
                                <Message message={message}/>
                            </Box>
                        )
                    })
                }
            </Box>
            <Footer sendText={sendText} setValue={setValue} value={value}/>
        </Box>
    )
}

export default Messages
