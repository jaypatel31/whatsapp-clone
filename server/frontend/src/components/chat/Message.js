import React,{useContext} from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

import { AccountContext } from '../../context/AccountProvider'

const useStyles  = makeStyles({
    wrapper:{
        background:"#ffffff",
        padding:5,
        maxWidth:"60%",
        display:"flex",
        borderRadius:"10px",
        width:"fit-content",
        wordBreak:"break-word"
    },
    text:{
        fontSize:14,
        padding:"0px 25px 0 5px"
    },
    time:{
        fontSize:10,
        marginTop:"auto",
        marginTop:6,
        color:"#919191",
        wordBreak:"keep-all",
    },
    own:{
        background:"#dcf8c6",
        padding:"5px",
        maxWidth:"60%",
        display:"flex",
        borderRadius:"10px",
        width:"fit-content",
        wordBreak:"break-word",
        marginLeft:"auto"
    }
})

const Message = ({message}) => {

    const {account} = useContext(AccountContext)

    const classes = useStyles()

    const formateDate = (date) => {
        return date <10?'0'+date:date
    }

    return (
        <Box className={account.user_id===message.sender?classes.own:classes.wrapper}>
            <Typography className={classes.text}>{message.text}</Typography>
            <Typography className={classes.time}>
                {formateDate(new Date(message.createdAt).getHours())}:{formateDate(new Date(message.createdAt).getMinutes())}
            </Typography>
        </Box>
    )
}

export default Message
