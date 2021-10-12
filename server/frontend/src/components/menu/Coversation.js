import React,{useContext, useEffect,useState} from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

import { AccountContext } from '../../context/AccountProvider'
import { getConversation, setConversation } from '../../service/api'
import { UserContext } from '../../constants/UserProvider'

const useStyles = makeStyles({
    displayPicture:{
        width:50,
        height:50,
        borderRadius:"50%",
        padding:"0px 14px",
       
    },
    container:{
        display:"flex",
        height:40,
        padding:"13px 0px",
        cursor:"pointer"
    },
    timestamp:{
        fontSize:12,
        marginLeft:"auto",
        marginRight:"20px",
        color:"#00000099"
    },
    text:{
        color:"#rgba(0,0,0,0.6)",
        fontSize:"14px"
    }
})

const Coversation = ({user}) => {

    const {account, flag} = useContext(AccountContext)

    const {person,setPerson} = useContext(UserContext)
    
    const classes  = useStyles()
    const [message, setMessage] = useState({})

    const url = user.imageUrl

    useEffect(() => {
        const getConversationMessage = async () =>{
            const data = await getConversation({senderId:account.user_id,receiverId:user.user_id})
            console.log(data)
            setMessage({text:data.message,timestamp:data.updatedAt})
        }
        getConversationMessage()
    }, [flag])

    const setUser = async () =>{
        setPerson(user);
        await setConversation({senderId:account.user_id,receiverId:user.user_id})
    }

    return (
        <Box className={classes.container} onClick={()=> setUser()}>
            <Box >
                <img src={url} alt="dp-img" className={classes.displayPicture}/>
            </Box>
            <Box style={{width:"100%"}}>
            <Box style={{display:"flex"}}>
                <Typography>{user.name}</Typography>

                {
                    message.text && 
                    <Typography className={classes.timestamp}>{new Date(message.timestamp).getHours()}:{new Date(message.timestamp).getMinutes()}</Typography>
                }
            </Box>
            <Box>
                <Typography className={classes.text}>{message.text}</Typography>
            </Box>
        </Box>
        </Box>
    )
}

export default Coversation
