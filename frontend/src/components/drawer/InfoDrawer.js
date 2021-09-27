import { Drawer,makeStyles, Box, Typography } from '@material-ui/core'
import React from 'react'
import { ArrowBack } from '@material-ui/icons'
import Profile from './Profile'

const useStyles = makeStyles({
    header:{
        backgroundColor:"#00bfa5",
        height:"97px",
        color:"white",
        display:"flex",
        '& > *':{
            marginTop:"auto",
            padding:"15px",
            fontWeight:600
        }
    },
    component:{
        backgroundColor:"#ededed",
        height:'85%',
    }
})

const InfoDrawer = ({open, setOpen}) => {

    const classes = useStyles()

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Drawer open={open} onClose={handleClose}> 
            <Box className={classes.header}>
                <ArrowBack style={{cursor:"pointer"}} onClick={handleClose}/>
                <Typography>Profile</Typography>
            </Box>
            <Box className={classes.component}>
                <Profile/>
            </Box>
        </Drawer>
    )
}

export default InfoDrawer
