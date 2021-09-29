import React from 'react'
import { Box, Typography, makeStyles } from '@material-ui/core'

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

    const classes  = useStyles()

    const url = user.imageUrl

    return (
        <Box className={classes.container}>
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
