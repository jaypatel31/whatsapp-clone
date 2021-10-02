import React,{useContext} from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

import { AccountContext } from '../../context/AccountProvider'
import { setConversation } from '../../service/api'
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
    }
})

const Coversation = ({user}) => {

    const {account} = useContext(AccountContext)

    const {person,setPerson} = useContext(UserContext)
    
    const classes  = useStyles()

    const url = user.imageUrl

    const setUser = async () =>{
        setPerson(user);
        await setConversation({senderId:account.user_id,receiverId:user.user_id})
    }

    return (
        <Box className={classes.container} onClick={()=> setUser()}>
            <Box >
                <img src={url} alt="dp-img" className={classes.displayPicture}/>
            </Box>
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Box>
    )
}

export default Coversation
