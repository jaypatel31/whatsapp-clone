import React,{useContext} from 'react'
import {Box,Typography, makeStyles} from "@material-ui/core"

import { UserContext } from '../../constants/UserProvider'
import { MoreVert, Search } from '@material-ui/icons'
import { AccountContext } from '../../context/AccountProvider'

const useStyles = makeStyles({
    header:{
        display:"flex",
        height:35,
        background:"#ededed",
        padding:"10px 16px",
        alignItems:"center"
    },
    dp:{
        width:37,
        height:37,
        borderRadius:"50%",
        padding:"0 2px",
    },
    name:{
        marginLeft:"10px"
    },
    status:{
        fontSize:12,
        marginLeft:10,
        color:"rgb(0,0,0,0.6)"
    },
    rightComponent:{
        marginLeft:"auto",
        '& > *':{
            padding:"8px",
            fontSize:22,
            color:"#919191"
        }
    }
})

const ChatHeader = () => {
    const {person} = useContext(UserContext)
    const {activeUsers} = useContext(AccountContext)
    const classes = useStyles()

    return (
        <Box className={classes.header}>
            <img src={person.imageUrl} alt="person-img" className={classes.dp}/>
            <Box>
                <Typography className={classes.name}>{person.name}</Typography>
                <Typography className={classes.status}>{activeUsers?.find(user=>user.userId===person.user_id)?"Online":"Offline"}</Typography>
            </Box>
            <Box className={classes.rightComponent}>
                <Search/>
                <MoreVert/>
            </Box>
        </Box>
    )
}

export default ChatHeader
